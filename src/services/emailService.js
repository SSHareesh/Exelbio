import emailjs from "@emailjs/browser";

/**
 * Service to handle email delivery via EmailJS
 */
export async function sendContactEmail(formData, country) {
  // Dynamically resolve environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Validate presence of credentials
  if (!serviceId || !templateId || !publicKey) {
    console.error(
      "EmailJS credentials missing from Vite environment.",
      { serviceId, templateId, publicKey: publicKey ? "***" : undefined }
    );
    throw new Error(
      "Vite environment variables not detected. Please restart your development server (stop and run 'npm run dev') to load the newly added .env file."
    );
  }

  const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
  const fullPhone = `${country.dialCode} ${formData.phone.trim()}`;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // Comprehensive template parameters matching EmailJS conventions & aliases
  const templateParams = {
    // Sender Information
    from_name: fullName,
    first_name: formData.firstName.trim(),
    last_name: formData.lastName.trim(),
    name: fullName,
    user_name: fullName,

    // Email & Reply-To
    from_email: formData.email.trim(),
    reply_to: formData.email.trim(),
    email: formData.email.trim(),
    user_email: formData.email.trim(),

    // Phone & Country
    phone_number: fullPhone,
    phone: fullPhone,
    mobile: fullPhone,
    country: `${country.name} (${country.dialCode})`,
    country_name: country.name,
    country_code: country.dialCode,

    // Inquiry Details
    company: formData.company.trim(),
    organization: formData.company.trim(),
    service_needed: formData.serviceNeeded ? formData.serviceNeeded.trim() : "Not specified",
    service: formData.serviceNeeded ? formData.serviceNeeded.trim() : "Not specified",
    message: formData.message.trim(),

    // Metadata
    submitted_at: timestamp,
    submission_date: timestamp,
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return {
      success: true,
      status: response.status,
      text: response.text,
    };
  } catch (err) {
    console.error("EmailJS API error:", err);
    const errorMessage =
      err?.text ||
      err?.message ||
      (typeof err === "string" ? err : "Failed to send your message. Please try again.");
    throw new Error(errorMessage);
  }
}
