export const serviceDetails = {
  biostatistics: {
    title: "Biostatistics",
    eyebrow: "Design & Analysis",
    tagline: "The math has to survive contact with a reviewer.",
    overview:
      "We embed a lead biostatistician on your study from concept to close-out — writing the statistical analysis plan, sizing the trial, and standing behind every p-value when regulators ask why. Our team has carried programs across oncology, rare disease, cardiometabolic, and CNS indications through Phase I to Phase IV, and we design analyses that hold up because we've already asked the hard questions ourselves.",
    features: [
      { title: "Protocol & SAP authorship", detail: "Statistical sections written in-house, not bolted on after the protocol is final." },
      { title: "Sample size & power", detail: "Simulation-based sizing for adaptive, group-sequential, and Bayesian designs, not just textbook formulas." },
      { title: "Randomization design", detail: "Stratified, blocked, and response-adaptive schemes built with your IRT/IWRS vendor in mind." },
      { title: "Interim & DSMB analysis", detail: "Independent statistical support for data safety monitoring boards, firewalled from the sponsor team." },
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
      { title: "SDTM & ADaM mapping", detail: "CDISC-compliant datasets with full traceability back to raw CRF collection points." },
      { title: "TLF production", detail: "Tables, listings, and figures programmed to mock-shell spec in SAS or R, pixel-checked against the SAP." },
      { title: "define.xml & aCRF", detail: "Submission-ready metadata packages that match what Pinnacle 21 expects, not just what compiles." },
      { title: "Independent QC", detail: "A second programmer reproduces every output from scratch — no QC by eyeballing the first programmer's code." },
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

  "statistical-consulting": {
    title: "Statistical Consulting",
    eyebrow: "Advisory",
    tagline: "A second opinion before the decision is expensive to reverse.",
    overview:
      "Sometimes you don't need a full analysis team — you need one senior statistician for two hours, before an FDA meeting, a protocol amendment, or an investor question about statistical power. We offer consulting by the engagement, from a single design review to ongoing advisory retainers, staffed by statisticians who've sat on both the sponsor and CRO side of the table.",
    features: [
      { title: "Pre-IND / Type B meeting prep", detail: "We rehearse the statistical questions the agency is likely to ask, and how to answer them." },
      { title: "Protocol & SAP review", detail: "An independent read of an existing document, flagging what a reviewer would flag." },
      { title: "Endpoint & estimand strategy", detail: "Working through ICH E9(R1) estimand framework decisions before they're locked into the protocol." },
      { title: "Ongoing advisory retainer", detail: "A named statistician on call for design questions as your program evolves." },
    ],
    benefits: [
      "Sponsor-side and CRO-side experience, so advice accounts for both perspectives",
      "Engagements sized to the question — an hour, a day, or a standing retainer",
      "Direct statistician access, no account manager in between",
      "Independent review that catches what an internal team, close to the protocol, might miss",
    ],
    workflow: [
      { title: "Scope the question", detail: "A short intake call to define exactly what decision the consulting is meant to support." },
      { title: "Independent review", detail: "Document review or design analysis, conducted without assuming prior conclusions are correct." },
      { title: "Working session", detail: "A live discussion to pressure-test findings with your team, not just a written report." },
      { title: "Follow-up", detail: "A short memo capturing recommendations and open questions for the record." },
    ],
    faqs: [
      { q: "Do you take single-meeting engagements?", a: "Yes — a large share of our consulting work is a single design review or FDA meeting prep session, not a long-term contract." },
      { q: "Can you review work done by another CRO?", a: "Regularly. An outside read is often most valuable exactly when it's checking someone else's analysis." },
      { q: "Is this covered under a separate contract from your other services?", a: "Consulting is scoped and billed independently, so you can use it without committing to a larger engagement." },
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
