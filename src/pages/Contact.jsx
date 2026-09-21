import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Reveal from "../components/Reveal";
import PhoneInput from "../components/PhoneInput";
import { DEFAULT_COUNTRY } from "../data/countries";
import { services } from "../data/nav";
import { sendContactEmail } from "../services/emailService";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceNeeded: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation helper
  function validate(fieldValues = formData, country = selectedCountry) {
    const newErrors = {};

    // First Name (Compulsory)
    if (!fieldValues.firstName || !fieldValues.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    // Last Name (Compulsory)
    if (!fieldValues.lastName || !fieldValues.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    // Email (Compulsory + Valid Format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!fieldValues.email || !fieldValues.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!emailRegex.test(fieldValues.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@company.com).";
    }

    // Mobile Number (Compulsory + Country Specific Format)
    const rawDigits = fieldValues.phone ? fieldValues.phone.replace(/\D/g, "") : "";
    if (!rawDigits) {
      newErrors.phone = "Mobile number is required.";
    } else if (country.code === "IN") {
      // India mobile validation: 10 digits, typically starting with 6, 7, 8, or 9
      if (rawDigits.length !== 10) {
        newErrors.phone = "Indian mobile numbers must be exactly 10 digits.";
      } else if (!/^[6-9]\d{9}$/.test(rawDigits)) {
        newErrors.phone = "Please enter a valid 10-digit mobile number (starts with 6, 7, 8, or 9).";
      }
    } else {
      // General international phone validation: 6 to 15 digits (ITU-T E.164)
      if (rawDigits.length < 6 || rawDigits.length > 15) {
        newErrors.phone = "Please enter a valid phone number (6–15 digits).";
      }
    }

    // Company (Compulsory)
    if (!fieldValues.company || !fieldValues.company.trim()) {
      newErrors.company = "Company or sponsor name is required.";
    }

    // Note: serviceNeeded is OPTIONAL (no compulsory check)

    // Message (Compulsory)
    if (!fieldValues.message || !fieldValues.message.trim()) {
      newErrors.message = "Please describe the study or how we can help.";
    }

    return newErrors;
  }

  function handleChange(field, value) {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    // Re-validate field if already touched
    if (touched[field]) {
      const fieldErrors = validate(updated, selectedCountry);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors[field] || undefined,
      }));
    }
  }

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(formData, selectedCountry);
    setErrors((prev) => ({
      ...prev,
      [field]: currentErrors[field] || undefined,
    }));
  }

  function handleCountryChange(newCountry) {
    setSelectedCountry(newCountry);
    // Re-check phone validation with the new country
    if (formData.phone || touched.phone) {
      const fieldErrors = validate(formData, newCountry);
      setErrors((prev) => ({
        ...prev,
        phone: fieldErrors.phone || undefined,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot spam check: if filled, quietly succeed without sending email
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // Mark all compulsory fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      company: true,
      message: true,
    });

    const validationErrors = validate(formData, selectedCountry);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await sendContactEmail(formData, selectedCountry);
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS sending error:", err);
      setSubmitError(
        err?.message ||
          "Unable to send your message right now. Please try again or email us directly at hello@Exelbiobiostat.example."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError("");
    setHoneypot("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      serviceNeeded: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setSelectedCountry(DEFAULT_COUNTRY);
  }

  return (
    <>
      <section className="relative hero-radial-bg text-ink pt-40 pb-24 grain border-b border-border">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal flex items-center gap-2 font-bold">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-primary">
              Tell us about the study. We'll tell you what it needs.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft">
              Most first conversations run thirty minutes and cost nothing — a walk
              through the protocol with a senior statistician before anything is scoped.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Contact info column */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl border border-border bg-paper p-8 h-full shadow-sm">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-primary">Reach us directly</h2>
                  <ul className="mt-8 space-y-6 text-sm">
                    <li className="flex items-start gap-3.5">
                      <MapPin size={18} className="text-teal mt-0.5 shrink-0" />
                      <span className="text-ink-soft">401 Laurel Street, Suite 220<br />Cambridge, MA 02141</span>
                    </li>
                    <li className="flex items-center gap-3.5">
                      <Phone size={18} className="text-teal shrink-0" />
                      <span className="text-ink-soft">+1 (617) 555-0148</span>
                    </li>
                    <li className="flex items-center gap-3.5">
                      <Mail size={18} className="text-teal shrink-0" />
                      <span className="text-ink-soft">hello@Exelbiobiostat.example</span>
                    </li>
                  </ul>
                  <div className="mt-10 pt-8 border-t border-border">
                    <p className="font-mono text-xs uppercase tracking-widest text-teal font-bold mb-2">Response time</p>
                    <p className="text-ink-soft text-sm leading-relaxed">
                      We reply to every inquiry within one business day, usually with a
                      scheduling link for a call with the statistician best suited to
                      your indication.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <div className="h-16 w-16 rounded-full bg-green/15 text-green flex items-center justify-center">
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-primary">Message sent</h3>
                      <p className="mt-2 text-ink-soft max-w-md">
                        Thank you, <strong className="text-ink">{formData.firstName} {formData.lastName}</strong>! Your inquiry for{" "}
                        <strong className="text-ink">{formData.company}</strong>
                        {formData.serviceNeeded ? ` regarding ${formData.serviceNeeded}` : ""} has been dispatched to our statistical leadership team. We will review your protocol specifications and respond to{" "}
                        <span className="text-ink font-medium">{formData.email}</span> within one business day.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-paper hover:bg-white px-6 py-2.5 text-xs font-semibold text-ink transition-colors shadow-2xs focus-ring"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Honeypot Bot Trap (Invisible to real users) */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="website_url">Leave this empty</label>
                        <input
                          id="website_url"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </div>

                      {/* Error Alert Banner */}
                      {submitError && (
                        <div className="sm:col-span-2 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                          <AlertCircle size={18} className="shrink-0 text-rose-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-semibold">Message failed to send</p>
                            <p className="text-xs text-rose-700 mt-0.5">{submitError}</p>
                            <p className="text-xs text-rose-600 mt-2">
                              You can also email us directly at{" "}
                              <a
                                href={`mailto:contact@exelbio.com?subject=Inquiry%20from%20${encodeURIComponent(
                                  formData.company || formData.firstName || "Sponsor"
                                )}`}
                                className="underline font-semibold hover:text-rose-900"
                              >
                                contact@exelbio.com
                              </a>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* First Name (Compulsory) */}
                      <div className="sm:col-span-1">
                        <label htmlFor="firstName" className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5 font-semibold">
                          First name <span className="text-rose-500 font-bold">*</span>
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          disabled={isSubmitting}
                          required
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          onBlur={() => handleBlur("firstName")}
                          className={`w-full rounded-xl border ${
                            errors.firstName ? "border-rose-500 bg-rose-50/20" : "border-border bg-paper"
                          } focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors disabled:opacity-60`}
                          placeholder="Jordan"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      {/* Last Name (Compulsory) */}
                      <div className="sm:col-span-1">
                        <label htmlFor="lastName" className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5 font-semibold">
                          Last name <span className="text-rose-500 font-bold">*</span>
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          disabled={isSubmitting}
                          required
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          onBlur={() => handleBlur("lastName")}
                          className={`w-full rounded-xl border ${
                            errors.lastName ? "border-rose-500 bg-rose-50/20" : "border-border bg-paper"
                          } focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors disabled:opacity-60`}
                          placeholder="Ellis"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>

                      {/* Work Email (Compulsory + Valid Format) */}
                      <div className="sm:col-span-1">
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5 font-semibold">
                          Work email <span className="text-rose-500 font-bold">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          disabled={isSubmitting}
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={`w-full rounded-xl border ${
                            errors.email ? "border-rose-500 bg-rose-50/20" : "border-border bg-paper"
                          } focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors disabled:opacity-60`}
                          placeholder="jordan@sponsor.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Mobile Number with Country Flags Dropdown (Compulsory + Validated) */}
                      <div className="sm:col-span-1">
                        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5 font-semibold">
                          Mobile number <span className="text-rose-500 font-bold">*</span>
                        </label>
                        <PhoneInput
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          selectedCountry={selectedCountry}
                          onCountryChange={handleCountryChange}
                          error={errors.phone}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Company (Compulsory) */}
                      <div className="sm:col-span-1">
                        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5 font-semibold">
                          Company / Sponsor <span className="text-rose-500 font-bold">*</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          disabled={isSubmitting}
                          required
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          onBlur={() => handleBlur("company")}
                          className={`w-full rounded-xl border ${
                            errors.company ? "border-rose-500 bg-rose-50/20" : "border-border bg-paper"
                          } focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors disabled:opacity-60`}
                          placeholder="Acme Therapeutics"
                        />
                        {errors.company && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" />
                            {errors.company}
                          </p>
                        )}
                      </div>

                      {/* Service Needed Dropdown (OPTIONAL) */}
                      <div className="sm:col-span-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase tracking-wide text-ink-soft font-semibold">
                            Service needed
                          </label>
                          <span className="text-[11px] font-mono text-ink-soft/70 uppercase tracking-wider">
                            Optional
                          </span>
                        </div>
                        <select
                          id="serviceNeeded"
                          disabled={isSubmitting}
                          value={formData.serviceNeeded}
                          onChange={(e) => handleChange("serviceNeeded", e.target.value)}
                          className="w-full rounded-xl border border-border bg-paper focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors disabled:opacity-60"
                        >
                          <option value="">Select a service (optional)...</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title} — {s.short}
                            </option>
                          ))}
                          <option value="Integrated Biometrics (End-to-End)">
                            Integrated Biometrics (End-to-End Suite)
                          </option>
                          <option value="Other / Multiple Services">
                            Other / Multiple Services
                          </option>
                        </select>
                      </div>

                      {/* What can we help with? (Compulsory) */}
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5 font-semibold">
                          What can we help with? <span className="text-rose-500 font-bold">*</span>
                        </label>
                        <textarea
                          id="message"
                          disabled={isSubmitting}
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          onBlur={() => handleBlur("message")}
                          className={`w-full rounded-xl border ${
                            errors.message ? "border-rose-500 bg-rose-50/20" : "border-border bg-paper"
                          } focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors disabled:opacity-60`}
                          placeholder="A short description of the study, therapeutic area, and where you're looking for support."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                            <AlertCircle size={12} className="shrink-0" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit CTA */}
                      <div className="sm:col-span-2 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group inline-flex items-center gap-2.5 rounded-full bg-teal px-8 py-3.5 text-sm font-bold text-white transition-all shadow-[0_8px_22px_rgba(18,167,165,0.22)] hover:bg-teal-hover focus-ring hover:-translate-y-0.5 disabled:opacity-65 disabled:pointer-events-none cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              <span>Sending message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send message</span>
                              <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                            </>
                          )}
                        </button>
                        <p className="mt-3 text-xs text-ink-soft/70">
                          Fields marked with <span className="text-rose-500 font-bold">*</span> are required.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
