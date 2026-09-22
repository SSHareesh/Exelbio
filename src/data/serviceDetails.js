export const serviceDetails = {
  biostatistics: {
    title: "Biostatistics",
    eyebrow: "Design & Analysis",
    tagline: "The math has to survive contact with a reviewer.",
    overview:
      "We embed a lead biostatistician on your study from concept to close-out — writing the statistical analysis plan, sizing the trial, and standing behind every p-value when regulators ask why. Our team has carried programs across oncology, rare disease, cardiometabolic, and CNS indications through Phase I to Phase IV, and we design analyses that hold up because we've already asked the hard questions ourselves.",
    features: [
      { title: "Statistical consultancy", detail: "Senior biostatistician support for design decisions, protocol strategy, and regulatory interactions from first-in-human through submission." },
      { title: "Study design & sample size", detail: "Simulation-based sizing for adaptive, group-sequential, and Bayesian designs — not just textbook formulas." },
      { title: "Statistical analysis plans", detail: "Version-controlled SAPs with mock table shells, written in-house and reviewed jointly with medical and regulatory teams." },
      { title: "Statistical analysis", detail: "Analysis executed against the locked SAP, with deviations logged and justified, not quietly absorbed." },
      { title: "TFL development", detail: "Tables, figures, and listings programmed to mock-shell spec, pixel-checked against the SAP before delivery." },
      { title: "Interim and final analyses", detail: "Independent statistical support for DMC/DSMB reviews and final analyses, firewalled from the unblinded sponsor team." },
      { title: "Clinical study reports", detail: "Statistical sections of the CSR authored directly from validated output, consistent with ICH E3 structure." },
      { title: "Regulatory support", detail: "Direct statistician participation in FDA, EMA, and PMDA interactions — Type B meetings, written responses, and briefing documents." },
    ],
    benefits: [
      "One statistician who knows your protocol cold, from FPI through the CSR",
      "Fewer FDA information requests because the SAP anticipated them",
      "Simulation reports that make adaptive designs easy to defend",
      "Direct access to a senior statistician, not a rotating account team",
    ],
    workflow: [
      { title: "Design workshop", detail: "We stress-test the endpoint, comparator, and estimand with your clinical team before anything is written down." },
      { title: "SAP drafting", detail: "A version-controlled SAP with mock table shells, reviewed jointly with medical and regulatory." },
      { title: "Execution", detail: "Analysis conducted against the locked SAP, with deviations logged and justified, not quietly absorbed." },
      { title: "Reporting", detail: "Results delivered with interpretation, not just output — what the numbers mean for the next decision." },
    ],
    faqs: [
      { q: "Do you work from our protocol or write it with us?", a: "Both happen. Most sponsors bring a draft protocol; we usually revise the statistical sections before it's finalized, since design decisions made early are the ones that are hardest to undo later." },
      { q: "Can you support an ongoing trial mid-study?", a: "Yes, though we'll ask for a short data and documentation review first so any handover doesn't introduce gaps in the audit trail." },
      { q: "How do you handle Bayesian or adaptive designs?", a: "We run full operating-characteristic simulations before recommending a design, and we're comfortable defending them in front of FDA's Office of Biostatistics." },
    ],
  },

  "statistical-programming": {
    title: "Statistical Programming",
    eyebrow: "SDTM · ADaM · TLFs",
    tagline: "Datasets that pass define.xml validation the first time.",
    overview:
      "Our programming team builds and validates SDTM and ADaM datasets, table-figure-listing (TLF) packages, and define.xml/reviewer's guides under a double-programming model. Every deliverable is independently reproduced by a second programmer before it reaches you, so QC isn't a final step bolted onto the end — it's built into how we work.",
    features: [
      { title: "SAS programming", detail: "SAS-based primary and QC programming for SDTM, ADaM, and TLFs — following your internal macros and standards, not ours." },
      { title: "R programming", detail: "R-based programming for exploratory analysis, adaptive-design simulation, and cross-validation alongside SAS deliverables." },
      { title: "CDISC SDTM & ADaM", detail: "CDISC-compliant domain mapping with full traceability back to raw CRF collection points, built before the eCRF is finalized." },
      { title: "Dataset development", detail: "End-to-end build of analysis-ready datasets under a version-controlled specification aligned to the SAP." },
      { title: "Tables, Listings & Figures", detail: "TLFs programmed to mock-shell spec in SAS or R, pixel-checked against the SAP before delivery." },
      { title: "Define-XML", detail: "Submission-ready metadata packages that match what Pinnacle 21 expects, cross-referenced against the aCRF and reviewer's guide." },
      { title: "Pinnacle 21 validation", detail: "Full Pinnacle 21 conformance checking run before datasets leave our hands — not as an afterthought before filing." },
      { title: "Submission programming", detail: "Complete programming packages for eCTD Module 5 submission, assembled and validated to current technical conformance guides." },
      { title: "Regulatory submission support", detail: "Programming support during active agency review, including fast-turn analyses for information requests." },
    ],
    benefits: [
      "Double-programmed outputs, so errors are caught before you ever see them",
      "Pinnacle 21 conformance checked before datasets leave our hands",
      "SAS and R capability, so you're not locked to one toolchain",
      "Version-controlled code with a full audit trail for inspection readiness",
    ],
    workflow: [
      { title: "Spec review", detail: "We map every SDTM/ADaM variable against the SAP and CRF before writing a line of code." },
      { title: "Parallel programming", detail: "Primary and QC programmers work independently from the same specification." },
      { title: "Reconciliation", detail: "Discrepancies are resolved and documented, not silently overwritten." },
      { title: "Delivery", detail: "Datasets, TLFs, define.xml, and reviewer's guide handed off with a full traceability matrix." },
    ],
    faqs: [
      { q: "SAS or R?", a: "Either, or both in parallel if you want cross-validation. Most of our regulatory deliverables are still produced in SAS, with R used heavily for exploratory and adaptive-design simulation work." },
      { q: "Do you follow our internal macros and standards?", a: "Yes — we'll onboard to your macro library and naming conventions rather than asking you to adapt to ours." },
      { q: "What's your typical QC turnaround?", a: "Depends on dataset complexity, but double programming runs concurrently with primary programming, so QC rarely adds serial time to the timeline." },
    ],
  },

  "biometrics-consulting": {
    title: "Biometrics Consulting",
    eyebrow: "Advisory",
    tagline: "Strategic biometrics leadership without the overhead of building it in-house.",
    overview:
      "Whether you need a biometrics leader embedded in your team, functional outsourcing for a single study, or inspection-readiness support before an audit, we provide the expertise without the overhead. Our consultants have operated across sponsor, CRO, and regulatory environments — so advice accounts for every seat at the table.",
    features: [
      { title: "Biometrics leadership", detail: "A senior biometrician embedded in your team to lead statistical strategy, stakeholder communication, and regulatory interactions." },
      { title: "FSP support", detail: "Functional service provider staffing — a named biostatistician or programmer integrated into your in-house team for as long as you need." },
      { title: "Functional outsourcing", detail: "Outsource a specific biometrics function — statistical analysis, programming, or data management — without committing to a full-service CRO engagement." },
      { title: "Study-level programming", detail: "Targeted programming support for individual studies, delivered to your standards and integrated into your submission pipeline." },
      { title: "Biometrics project management", detail: "Experienced biometrics PMs who understand the technical and regulatory context, not just the milestone tracker." },
      { title: "Inspection/readiness support", detail: "Pre-inspection review of statistical deliverables, documentation, and audit trails — so nothing is discovered for the first time by an inspector." },
    ],
    benefits: [
      "Flexible engagement models sized to what you actually need — a week, a study, or an ongoing retainer",
      "Biometrics-native project management that speaks the same language as your statisticians and programmers",
      "Inspection readiness built in, not bolted on before an audit",
      "Direct access to senior consultants — no account manager in between",
    ],
    workflow: [
      { title: "Scope the engagement", detail: "A short intake conversation to define exactly what function, level of support, and timeline the engagement needs to cover." },
      { title: "Team integration", detail: "We onboard to your systems, standards, and stakeholder map — rather than asking your team to adapt to ours." },
      { title: "Delivery", detail: "Work produced to your standards, with full version control and documentation ready for inspection at any point." },
      { title: "Transition or continuity", detail: "A clean handover at the end of the engagement, or a seamless transition into ongoing support if the scope expands." },
    ],
    faqs: [
      { q: "Do you take short-term engagements?", a: "Yes — a large share of our consulting work is a single study, a defined phase of a program, or a standing FSP arrangement that scales with your pipeline." },
      { q: "Can you integrate with our in-house biometrics team?", a: "That's exactly the FSP and functional outsourcing model — we work within your team structure, not alongside it as a separate vendor." },
      { q: "How do you support inspection readiness?", a: "We conduct a structured review of statistical deliverables, audit trails, and documentation against current regulatory expectations — identifying gaps before an inspector does." },
    ],
  },

  "regulatory-submission-support": {
    title: "Regulatory Submission Support",
    eyebrow: "eCTD · FDA · EMA · PMDA",
    tagline: "Built for the reviewer's screen, not just the sponsor's file share.",
    overview:
      "We assemble the statistical components of your submission — Module 5 datasets, the statistical section of the CSR, integrated summaries of safety and efficacy, and responses to information requests — in eCTD-ready form. Our team has supported submissions to FDA, EMA, and PMDA, and we build the reviewer's guide the way we'd want to receive one: traceable, indexed, and free of unexplained discrepancies.",
    features: [
      { title: "ISS/ISE construction", detail: "Integrated summaries pooled across studies with consistent definitions and pre-agreed pooling rules." },
      { title: "eCTD Module 5 packaging", detail: "Datasets, define.xml, and reviewer's guide organized to the current CDISC and agency technical conformance guides." },
      { title: "Information request response", detail: "Fast-turn statistical analysis to answer agency questions during active review." },
      { title: "Advisory committee support", detail: "Briefing document tables and figures built to withstand public scrutiny, not just internal review." },
    ],
    benefits: [
      "Submission packages that pass Pinnacle 21 and technical conformance checks pre-filing",
      "A reviewer's guide written for someone seeing your data for the first time",
      "Fast information-request turnaround during the review clock",
      "Experience across FDA, EMA, and PMDA submission conventions",
    ],
    workflow: [
      { title: "Gap assessment", detail: "We review existing datasets and documentation against current technical conformance guides." },
      { title: "Assembly", detail: "ISS/ISE, datasets, and define.xml built or remediated to submission standard." },
      { title: "Validation", detail: "Pinnacle 21 and internal QC checks run before anything is marked submission-ready." },
      { title: "Post-filing support", detail: "Standing statistical support through the review cycle for information requests and advisory committee prep." },
    ],
    faqs: [
      { q: "Can you remediate datasets built by another vendor?", a: "Yes, this is a common engagement — we run a gap assessment first so you know the scope before committing to a full remediation." },
      { q: "Do you support submissions outside the US?", a: "Yes, including EMA and PMDA conventions, which differ from FDA in some formatting and content expectations we account for early." },
      { q: "How quickly can you turn around an information request?", a: "Most single-issue requests are turned around within days, since the underlying datasets and programs are already validated and in hand." },
    ],
  },

};
