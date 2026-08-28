const BASE_WORLD = { width: 4300, height: 2300 };
const CANVAS_PADDING = 900;
let WORLD = { ...BASE_WORLD };

const colors = {
  title: "#235b4f",
  start: "#2f7b68",
  risk: "#b6493c",
  external: "#326b92",
  iitd: "#6f5589",
  travel: "#b27521",
  claim: "#235b4f",
  docs: "#4d6862"
};

const nodes = [
  {
    id: "canvas-title",
    kind: "title",
    phase: "title",
    x: 1650,
    y: 20,
    w: 960,
    title: "IITD international travel grant guide",
    body: "What I learned while using RSTA for a 2026 trip to Newcastle University"
  },
  {
    id: "start",
    phase: "start",
    x: 160,
    y: 420,
    w: 430,
    eyebrow: "Before you start",
    title: "Start with the acceptance letter",
    body:
      "Before starting the applications, make sure the organizer's letter or email includes your name, the event dates and venue, your abstract title, the author list, and whether you are giving a talk or presenting a poster.",
    bullets: [
      "Keep the original email or PDF. A screenshot alone may not be enough.",
      "If the letter is generic, ask for a specific one before you enter grant portals.",
      "Do not pay non-refundable registration fees before IITD approval if reimbursement depends on it.",
      "If an invitation or certificate is not in English, attach a self-attested English translation."
    ],
    callout:
      "A poster or oral presentation of your research is valid for RSTA. If the event itself is a school or workshop, ask the Academic Section whether it is eligible before spending any money.",
    links: [{ label: "IITD downloads", href: "https://academics.iitd.ac.in/downloads/" }]
  },
  {
    id: "eligibility",
    phase: "risk",
    x: 720,
    y: 390,
    w: 470,
    eyebrow: "First check",
    title: "Check whether your trip fits RSTA",
    body:
      "As of 18 Nov 2025, full-time PhD scholars may receive up to ₹2,00,000. The guidelines also set conditions on academic standing, completion of the comprehensive exam, time since registration, and presentation at a reputed conference.",
    bullets: [
      "Attach proof that you applied to two external travel-grant agencies. If a decision or rejection has already arrived, attach that too.",
      "Keep any reply you receive from an external sponsor. Accounts may ask for it during reimbursement.",
      "The RSTA guidelines focus on conference travel. Check with the Academic Section before relying on a poster at a school or workshop."
    ],
    callout:
      "If you are unsure whether your trip qualifies, take the organizer's letter to the Academic Section and ask before spending money.",
    links: [
      { label: "RSTA guidelines PDF", href: "assets/pdfs/rsta-guidelines-18nov25.pdf", target: "_blank" },
      { label: "HSS peer guide PDF", href: "assets/pdfs/how-to-apply-iitd-international-travel-grant.pdf", target: "_blank" }
    ]
  },
  {
    id: "external",
    phase: "external",
    x: 1280,
    y: 390,
    w: 480,
    eyebrow: "External funding",
    title: "Apply to two external travel grants",
    bodyHtml:
      'I worked on the external applications while my IITD paperwork was moving. RSTA asks for proof of two applications, or the decisions if they have already arrived. I applied to ANRF ITS and the CSIR Travel Grant. You can find other options in this <a href="https://docs.google.com/spreadsheets/d/19BSz7_LxOOZt9heQeNKxG1ubPoZTs3FokLg4w8LZjRY/edit?gid=0#gid=0" target="_blank" rel="noopener">external funding options sheet</a>.',
    bullets: [
      "Save portal acknowledgement, reference number, submitted PDF, and email receipts.",
      "For physical/postal submissions, keep a stamped receiving copy or Speed Post receipt.",
      "If an agency funds you, check IITD rules before claiming RSTA for overlapping expenses."
    ],
    callout:
      "Keep a copy of the complete packet you submitted to each agency. Accounts may ask to see it during reimbursement.",
    links: [
      { label: "ANRF ITS", href: "https://anrfonline.in/ANRF/its" },
      { label: "CSIR HRDG travel grant", href: "https://csirhrdg.res.in/Home/Index/1/InPage/51/14" }
    ]
  },
  {
    id: "anrf",
    phase: "external",
    x: 1900,
    y: 120,
    w: 450,
    eyebrow: "External grant A",
    title: "ANRF ITS online packet",
    body:
      "ANRF ITS is submitted through an online portal. Most of the work is collecting the documents in the wording and format the portal expects.",
    bullets: [
      "Make sure the acceptance letter shows your name, abstract title, and mode of presentation.",
      {
        html:
          'Prepare <a href="assets/pdfs/anrf-event-benefits-example-redacted.pdf" target="_blank" rel="noopener">event benefits</a>, event details, abstract, <a href="assets/pdfs/anrf-applicant-certificate-blank.pdf" target="_blank" rel="noopener">certificate by applicant</a>, DOB proof, and <a href="assets/pdfs/anrf-other-support-declaration-blank.pdf" target="_blank" rel="noopener">other-support declaration</a>.'
      },
      {
        html:
          'The head-of-institution endorsement may require a specific IITD Academic Unit certificate. On <a href="https://academics.iitd.ac.in/downloads/" target="_blank" rel="noopener">IITD downloads</a>, look for the editable DOCX named "Template for Endorsment Certificate". I have linked a blank printable version below so you can see the layout. Use the current IITD file when you apply.'
      }
    ],
    callout:
      "If the organizer letter is missing abstract title or presentation mode, request a corrected letter before uploading.",
    links: [
      { label: "ANRF portal", href: "https://anrfonline.in/ANRF/its" },
      { label: "Event benefits example", href: "assets/pdfs/anrf-event-benefits-example-redacted.pdf", target: "_blank" },
      { label: "Other-support declaration blank", href: "assets/pdfs/anrf-other-support-declaration-blank.pdf", target: "_blank" },
      { label: "Applicant certificate blank", href: "assets/pdfs/anrf-applicant-certificate-blank.pdf", target: "_blank" },
      { label: "IITD endorsement blank", href: "assets/pdfs/iitd-academic-unit-endorsement-example-redacted.pdf", target: "_blank" }
    ]
  },
  {
    id: "csir",
    phase: "external",
    x: 1900,
    y: 690,
    w: 500,
    eyebrow: "External grant B",
    title: "Prepare the CSIR Travel Grant packet",
    body:
      "For CSIR TG/19, prepare the summary sheet, main application, and supporting documents as one packet.",
    bullets: [
      {
        html:
          'Core forms: <a href="assets/pdfs/csir-tg-19-summary-annexure1.pdf" target="_blank" rel="noopener">Form-CSIR/TG/19/SUM</a> and <a href="assets/pdfs/csir-tg-19-main-annexure2.pdf" target="_blank" rel="noopener">Form-CSIR/TG/19/MAIN</a>.'
      },
      {
        html:
          'The usual attachments include the event announcement, acceptance letter, accepted abstract, your two best papers from indexed journals in the last five years, an airfare estimate from a government-approved travel agent, a short CV, the <a href="assets/pdfs/csir-iitd-noc-endorsement-template.pdf" target="_blank" rel="noopener">NOC or endorsement certificate for CSIR</a>, and the other-support declarations. I used the IITD endorsement format prepared for ANRF and changed the agency name to CSIR.'
      },
      "The airfare estimate must be economy/excursion class by the shortest route."
    ],
    callout:
      "Page-number the final packet only after all PDFs/prints are assembled.",
    links: [
      { label: "CSIR summary + main PDF", href: "assets/pdfs/csir-tg-19-summary-main-blank.pdf", target: "_blank" },
      { label: "CSIR NOC template", href: "assets/pdfs/csir-iitd-noc-endorsement-template.pdf", target: "_blank" },
      { label: "CSIR HRDG page", href: "https://csirhrdg.res.in/Home/Index/1/InPage/51/14" }
    ]
  },
  {
    id: "iitd",
    phase: "iitd",
    x: 2520,
    y: 390,
    w: 520,
    eyebrow: "IITD paperwork",
    title: "Assemble the RSTA + Ex-India leave packet",
    body:
      "IITD uses this file for approval and later reimbursement. Keep a scan of the complete signed packet before you hand it over.",
    bullets: [
      "RSTA form with budget and two external-application proofs.",
      "Ex-India leave form with exact travel dates and place of visit.",
      "Ask your department whether it also needs a PG leave or research scholar leave form.",
      "Acceptance/invitation, abstract, event website/brochure, airfare estimate, and supervisor recommendation."
    ],
    callout:
      "RSTA guidelines say expenditure related to travel must be made only after final approval and notification from the Academic Section.",
    links: [
      { label: "RSTA form PDF", href: "assets/pdfs/rsta-form-18nov25.pdf", target: "_blank" },
      { label: "IITD downloads", href: "https://academics.iitd.ac.in/downloads/" }
    ]
  },
  {
    id: "routing",
    phase: "iitd",
    x: 3130,
    y: 390,
    w: 500,
    eyebrow: "Where it goes",
    title: "Supervisor, Academic Unit, Academic Section",
    body:
      "The route varies by department. In general, the file goes through your supervisor, the Head of your Academic Unit, and then the Academic Section.",
    bullets: [
      "Ask the department office which desk should receive your file.",
      "Ask when the next DRC meeting is because your file may have to wait for it.",
      "Record the dispatch/dak/serial tracking number assigned to the file.",
      "Keep a scan/photocopy of the signed packet before it leaves your hands.",
      "If there is no update after the expected window, go in person to the relevant office with the tracking number."
    ],
    callout: {
      html:
        'Some certificates for external grant portals can be signed directly by the Academic Section. Ask them before sending the document through your department. The <a href="https://akhilabburu.github.io/iitd/rsta.html" target="_blank" rel="noopener">unofficial RSTA process notes</a> also explain the usual routing.'
    }
  },
  {
    id: "approval",
    phase: "risk",
    x: 3700,
    y: 390,
    w: 400,
    eyebrow: "Before spending",
    title: "Wait for notification before spending",
    body:
      "Avoid paying before you have IITD approval. If a visa or registration deadline forces you to pay earlier, keep a record of why you had to do it and check with the Academic Section.",
    bullets: [
      "Keep the Ex-India leave approval or notification.",
      "Keep the travel grant approval or notification.",
      "After approval, obtain the Academic Section certificates needed for the visa file and decide whether to request a TA advance.",
      "Then proceed to visa, registration payment, flight booking, and forex."
    ],
    callout:
      "After I received the required approval and visa clearance, I went to the Balmer Lawrie travel desk on the first floor of the Admin Building, near the Seminar Hall. The agent prepared the quotation and booked my ticket. I was not charged for either service. You may also be able to book through your own Balmer Lawrie account, so ask the travel desk if you prefer that option."
  },
  {
    id: "visa",
    phase: "travel",
    x: 3650,
    y: 880,
    w: 500,
    eyebrow: "Visa paperwork",
    title: "Get NOC + bonafide from Academic Section",
    body:
      "For my 2026 UK trip, I needed two extra signed certificates from IITD. I uploaded both with the visa application and carried them to the biometrics appointment.",
    bullets: [
      {
        html:
          '<a href="assets/pdfs/iitd-visa-noc-blank-template.pdf" target="_blank" rel="noopener">IITD visa NOC</a>: blank Academic Section-style template covering full-time PhD status, sanctioned Ex-India leave dates, event dates/location, and no objection to visa issuance.'
      },
      {
        html:
          '<a href="assets/pdfs/iitd-visa-bonafide-blank-template.pdf" target="_blank" rel="noopener">IITD bonafide certificate</a>: blank Academic Section-style template confirming current full-time PhD registration and recording that the certificate is issued for the visa to attend the named event.'
      },
      "Use the exact travel window on the NOC. It can be wider than the event dates because it covers the full approved stay abroad.",
      "Check spelling, entry number, department, event title, city/country, and every date before leaving the counter."
    ],
    callout:
      "The Ex-India leave notification does not replace these two certificates. Request them early enough to meet your visa document deadline.",
    links: [
      { label: "Visa NOC blank", href: "assets/pdfs/iitd-visa-noc-blank-template.pdf", target: "_blank" },
      { label: "Bonafide blank", href: "assets/pdfs/iitd-visa-bonafide-blank-template.pdf", target: "_blank" }
    ]
  },
  {
    id: "advance",
    phase: "iitd",
    x: 3070,
    y: 880,
    w: 500,
    eyebrow: "After approval",
    title: "Apply for TA advance up to ₹90,000",
    body:
      "Once you have the RSTA or PMRF travel sanction and Ex-India leave approval, you can submit the TA Advance form to Accounts. The advance is deducted when Accounts settles your final claim.",
    bullets: [
      "Attach the travel sanction or notification and a copy of the Ex-India leave approval. The form asks for both.",
      "Budget heads include fare, hotel, daily allowance, registration, medical insurance, visa, conveyance, and other approved costs.",
      "I received a ₹90,000 advance. Ask Accounts about the current limit and where to submit the form.",
      "Settle the advance within 15 days after completing the return journey. Return any unspent balance, or the full amount if the trip is cancelled or not undertaken.",
      "A delayed settlement or refund can attract penal interest. Keep the e-ticket and boarding passes for the final claim."
    ],
    callout:
      "The advance is adjusted in the final claim. Keep proof for every expense and return any amount you do not use.",
    links: [
      { label: "TA Advance form", href: "assets/pdfs/rsta-ta-advance-form-public.pdf", target: "_blank" }
    ]
  },
  {
    id: "travel",
    phase: "travel",
    x: 3650,
    y: 1480,
    w: 520,
    eyebrow: "During travel",
    title: "Carry money safely and keep the receipts",
    body:
      "A forex card can be a convenient way to carry most of your travel money. Keep a small amount of cash for emergencies and save the receipt or transaction record each time you pay for something.",
    bullets: [
      "The SBI branch on the IIT Delhi campus may issue and load forex cards. Ask early about availability, supported currencies, exchange rate, fees, overseas cash-withdrawal charges, reloading, and what to do if the card is lost or blocked.",
      "Keep at least one backup payment method. Carry a small amount of emergency cash separately from the forex card.",
      "Save the forex purchase/loading receipt, exchange-rate evidence, and forex-card statement or transaction record.",
      "Original boarding passes for all onward, return, and connecting flights.",
      "Registration, visa, insurance, flight, accommodation, food, local travel, and other receipts.",
      "Keep bank or card statements for electronic payments and highlight the relevant lines.",
      "Proof of presentation or participation certificate from the organizer."
    ],
    callout:
      "I got my forex card from the SBI branch on campus in July 2026 and loaded £200 before leaving for the UK. I also kept some cash and another card as backup."
  },
  {
    id: "claim",
    phase: "claim",
    x: 3070,
    y: 1900,
    w: 540,
    eyebrow: "After you return",
    title: "Submit the reimbursement claim within 15 days",
    body:
      "The IITD T.A. Reimbursement/Settlement Form says you must submit the completed claim within 15 days of finishing the journey. Do not wait for a reminder. In my case, Accounts followed up only around day 12 or 13, which left very little time to fix anything missing.",
    bullets: [
      "Fill in the T.A. reimbursement form. Mention the advance you received, group the expenses by category, and count the enclosures.",
      "Attach the Ex-India leave and travel grant approval notifications.",
      "Attach the two external-funding decisions or rejections, along with anything else Accounts asks for from those applications.",
      "Attach payment proof for accommodation, visa, flights, registration, and other electronic payments. This normally means the relevant lines from your bank or card statement.",
      "Attach the original bills for registration, accommodation, poster printing, visa fees, food, and local travel. Local travel can include the trip to Delhi airport and the transfer from the airport after you arrive abroad.",
      "Attach the original boarding passes, especially the return boarding pass. Keep them with the e-ticket or PNR and the flight payment proof.",
      "Here, ‘original’ means the bill or receipt as issued to you. If the issuer supplied only a digital document, print that file. Do not substitute a photocopy of a paper original.",
      "Arrange bills on A4 sheets where required and add a tabulated attachment index with page numbers.",
      "Check the reimbursement dates carefully. They may differ from the conference dates, duty leave, personal leave, and the full Ex-India travel period."
    ],
    callout:
      "I received ₹90,000 as an advance. After the claim was processed, Accounts reimbursed the remaining ₹1,10,000. That brought the total to ₹2,00,000.",
    links: [
      { label: "Fillable T.A. reimbursement form", href: "assets/pdfs/iitd-travel-reimbursement-form.pdf", target: "_blank" }
    ]
  },
  {
    id: "documents",
    phase: "docs",
    x: 690,
    y: 1180,
    w: 700,
    eyebrow: "Forms and examples",
    title: "Documents used in this guide",
    body:
      "I have included the official forms, blank templates, and redacted examples I used while making this guide. Check the IITD, ANRF, and CSIR websites for newer versions before submitting.",
    docs: [
      {
        image: "assets/doc-previews/iitd-howto-page1.png",
        href: "assets/pdfs/how-to-apply-iitd-international-travel-grant.pdf",
        caption: "Unofficial HSS peer guide, 8 pages. Useful for process and reimbursement tips."
      },
      {
        image: "assets/doc-previews/rsta-guidelines-page1.png",
        href: "assets/pdfs/rsta-guidelines-18nov25.pdf",
        caption: "IITD RSTA/RETA guidelines, 18 Nov 2025. Use these guidelines when older peer notes differ."
      },
      {
        image: "assets/doc-previews/rsta-form-page1.png",
        href: "assets/pdfs/rsta-form-18nov25.pdf",
        caption: "RSTA/RETA application form. Requires external-grant application proof."
      },
      {
        image: "assets/doc-previews/csir-summary-main-page1.png",
        href: "assets/pdfs/csir-tg-19-summary-main-blank.pdf",
        caption: "CSIR TG/19 blank packet: summary sheet followed by main application."
      },
      {
        image: "assets/doc-previews/anrf-applicant-certificate-blank-page1.png",
        href: "assets/pdfs/anrf-applicant-certificate-blank.pdf",
        caption: "ANRF certificate by applicant: blank printable form."
      },
      {
        image: "assets/doc-previews/anrf-other-support-declaration-blank-page1.png",
        href: "assets/pdfs/anrf-other-support-declaration-blank.pdf",
        caption: "ANRF other-support declaration: blank printable template."
      },
      {
        image: "assets/doc-previews/iitd-endorsement-example-page1.png",
        href: "assets/pdfs/iitd-academic-unit-endorsement-example-redacted.pdf",
        caption: "IITD endorsement certificate blank template. Use the current editable DOCX from IITD downloads."
      },
      {
        image: "assets/doc-previews/csir-noc-endorsement-template-page1.png",
        href: "assets/pdfs/csir-iitd-noc-endorsement-template.pdf",
        caption: "CSIR NOC/endorsement template adapted from the IITD endorsement wording."
      },
      {
        image: "assets/doc-previews/iitd-visa-noc-blank-template-page1.png",
        href: "assets/pdfs/iitd-visa-noc-blank-template.pdf",
        caption: "Blank IITD Academic Section-style visa NOC template, with no applicant or event details."
      },
      {
        image: "assets/doc-previews/iitd-visa-bonafide-blank-template-page1.png",
        href: "assets/pdfs/iitd-visa-bonafide-blank-template.pdf",
        caption: "Blank IITD Academic Section-style bonafide certificate template for visa support."
      },
      {
        image: "assets/doc-previews/rsta-ta-advance-form-page1.png",
        href: "assets/pdfs/rsta-ta-advance-form-public.pdf",
        caption: "Two-page IITD TA Advance form. The signature in the source scan is redacted."
      },
      {
        image: "assets/doc-previews/iitd-travel-reimbursement-form-page1.png",
        href: "assets/pdfs/iitd-travel-reimbursement-form.pdf",
        caption: "Fillable IITD T.A. Reimbursement/Settlement Form, preserved as downloaded from IITD. Its instructions require submission within 15 days of completing the journey."
      }
    ],
    links: [
      { label: "IITD official downloads", href: "https://academics.iitd.ac.in/downloads/" }
    ]
  },
  {
    id: "pitfalls",
    phase: "risk",
    x: 1900,
    y: 1260,
    w: 620,
    eyebrow: "Common problems",
    title: "Things that delayed the paperwork",
    body:
      "Before submitting the file, check that these details match across your forms and supporting documents.",
    bullets: [
      "The acceptance letter does not mention the abstract title or mode of presentation.",
      "You saved a draft of an external grant application instead of proof that it was submitted.",
      "The airfare estimate came from a regular travel website instead of an approved agent or portal.",
      "Registration or tickets paid before IITD approval or visa clearance.",
      "It is difficult to match the receipts with the payment statements.",
      "Dates are copied mechanically across all forms even though RSTA, duty leave, personal leave, reimbursement, and Ex-India leave may need different ranges."
    ],
    callout:
      "Keep the files for one trip in the same folder. Use clear names such as ANRF-acknowledgement.pdf or hotel-receipt.pdf so you can find them quickly."
  }
];

const edges = [
  ["start", "eligibility"],
  ["eligibility", "external"],
  ["external", "anrf"],
  ["external", "csir"],
  ["external", "iitd"],
  ["anrf", "iitd"],
  ["csir", "iitd"],
  ["iitd", "routing"],
  ["routing", "approval"],
  ["approval", "visa"],
  ["approval", "advance"],
  ["visa", "travel"],
  ["advance", "travel"],
  ["travel", "claim"],
  ["documents", "external"],
  ["documents", "iitd"],
  ["pitfalls", "external"]
];

const edgeLabels = {
  "eligibility->external": "parallel",
  "external->anrf": "portal",
  "external->csir": "packet",
  "approval->visa": "after notification",
  "approval->advance": "optional",
  "travel->claim": "return"
};

const checklist = [
  {
    title: "Acceptance evidence",
    items: [
      "Organizer letter or email names you, the event, dates, venue, and presentation mode.",
      "Abstract title and author list are visible in the letter or attached accepted abstract.",
      "Event website, brochure, timetable, or announcement saved as PDF."
    ]
  },
  {
    title: "RSTA / IITD",
    items: [
      "RSTA form filled with budget and two external-agency proofs.",
      "Ex-India leave form filled with precise travel dates.",
      "PG leave/research scholar leave form prepared if department requires it.",
      "Supervisor recommendation and Academic Unit approval route confirmed.",
      "Visa NOC and bonafide certificate collected from Academic Section.",
      "TA advance form submitted with sanction and Ex-India leave copies, if an advance is needed.",
      "No payment made before Academic Section notification unless unavoidable and documented."
    ]
  },
  {
    title: "External grants",
    items: [
      "ANRF ITS submitted or ready with event benefits, acceptance, abstract, certificates, and endorsement.",
      "CSIR TG/19 summary and main form prepared with NOC and attachments.",
      "Airfare estimate obtained from government-approved travel agent/portal.",
      "External grant acknowledgement/reference numbers saved."
    ]
  },
  {
    title: "Travel money",
    items: [
      "Forex card availability, supported currency, exchange rate, fees, reloading, and emergency support confirmed.",
      "Forex purchase/loading receipt and card transaction records saved.",
      "A small amount of emergency cash packed separately from the forex card.",
      "Another usable card or payment method kept as backup."
    ]
  },
  {
    title: "After return",
    items: [
      "T.A. reimbursement claim submitted within 15 days of completing the journey.",
      "Advance drawn recorded and deducted in the claim form.",
      "Two external-funding rejection/decision documents attached if requested.",
      "Original boarding passes retained.",
      "Original registration, visa, insurance, flight, hotel, food, poster-printing, local-travel, and forex receipts arranged.",
      "Bank/card statements printed and relevant transactions highlighted.",
      "Participation/presentation certificate collected.",
      "Attachment index with page numbers prepared before submission."
    ]
  }
];

const sources = [
  {
    title: "IITD Academics downloads",
    type: "Official page",
    href: "https://academics.iitd.ac.in/downloads/",
    note: "Check this page for the current forms and notifications before applying."
  },
  {
    title: "IITD RSTA/RETA guidelines, 18 Nov 2025",
    type: "Local extracted text",
    href: "sources/iitd-rsta-guidelines-18nov25.txt",
    note: "Local text extracted from dropped-files/RSTA-Guidlines-18nov25.pdf."
  },
  {
    title: "IITD RSTA/RETA application form, 18 Nov 2025",
    type: "Local extracted text",
    href: "sources/iitd-rsta-form-18nov25.txt",
    note: "Local text extracted from dropped-files/RSTA-FORM-18nov25.pdf."
  },
  {
    title: "How to Apply for IITD International Travel Grant",
    type: "Peer guide",
    href: "sources/how-to-apply-iitd-international-travel-grant.txt",
    note: "This is an unofficial HSS guide. It has useful process tips, but follow the current IITD rules wherever they differ."
  },
  {
    title: "IITD visa NOC and bonafide blank templates",
    type: "Redacted 2026 examples",
    href: "assets/pdfs/iitd-visa-noc-blank-template.pdf",
    note: "Blank copies made from the Academic Section wording and layout. Names, dates, reference numbers, signatures, and stamps have been removed."
  },
  {
    title: "IITD Application Form for TA Advance",
    type: "Local form",
    href: "assets/pdfs/rsta-ta-advance-form-public.pdf",
    note: "This is the two-page form I used after receiving the travel sanction. I received ₹90,000 in 2026. Ask Accounts for the current limit and submission process."
  },
  {
    title: "IITD T.A. Reimbursement/Settlement Form",
    type: "Local IITD form",
    href: "assets/pdfs/iitd-travel-reimbursement-form.pdf",
    note: "Two-page fillable form preserved as downloaded from IITD. Its printed instructions require a properly completed claim within 15 days of completing the journey, with tickets/PNR and boarding passes for air travel."
  },
  {
    title: "Akhil Abburu IITD RSTA guide",
    type: "Peer guide",
    href: "https://akhilabburu.github.io/iitd/rsta.html",
    note: "Unofficial notes on department routing, DRC or PG handoffs, tracking numbers, travel documents, and reimbursement."
  },
  {
    title: "CSIR HRDG Travel Grant Scheme",
    type: "Official page",
    href: "https://csirhrdg.res.in/Home/Index/1/InPage/51/14",
    note: "CSIR travel grant page for forms and attachment requirements."
  },
  {
    title: "ANRF International Travel Support",
    type: "Official portal",
    href: "https://anrfonline.in/ANRF/its",
    note: "Portal used for ANRF ITS applications."
  }
];

const state = {
  scale: 0.82,
  x: 64,
  y: -190,
  dragging: false,
  draggingNode: null,
  lastX: 0,
  lastY: 0
};

const viewport = document.getElementById("viewport");
const world = document.getElementById("world");
const nodeLayer = document.getElementById("nodeLayer");
const edgeLayer = document.getElementById("edgeLayer");
const zoomLabel = document.getElementById("zoomLabel");
const search = document.getElementById("search");
const miniWorld = document.querySelector(".mini-world");
const panelToggles = [...document.querySelectorAll('[data-action="toggle-checklist"]')];
const sidePanel = document.getElementById("sidePanel");
const headerMenus = [...document.querySelectorAll(".header-menu")];

const LAYOUT_VERSION = "2026-07-13-flow-v5";
const defaultNodePositions = Object.fromEntries(nodes.map((node) => [node.id, { x: node.x, y: node.y }]));

function loadSavedNodePositions() {
  try {
    const saved = JSON.parse(localStorage.getItem("iitd-guide-node-positions") || "{}");
    if (saved.version !== LAYOUT_VERSION || !saved.positions) return;
    nodes.forEach((node) => {
      if (saved.positions[node.id] && Number.isFinite(saved.positions[node.id].x) && Number.isFinite(saved.positions[node.id].y)) {
        node.x = saved.positions[node.id].x;
        node.y = saved.positions[node.id].y;
      }
    });
  } catch {
    localStorage.removeItem("iitd-guide-node-positions");
  }
}

function saveNodePositions() {
  const payload = {
    version: LAYOUT_VERSION,
    positions: Object.fromEntries(nodes.map((node) => [node.id, { x: Math.round(node.x), y: Math.round(node.y) }]))
  };
  localStorage.setItem("iitd-guide-node-positions", JSON.stringify(payload));
}

function setPanelOpen(open) {
  document.body.classList.toggle("panel-open", open);
  panelToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", String(open)));
  if (sidePanel) sidePanel.setAttribute("aria-hidden", String(!open));
  setTimeout(() => {
    renderEdges();
    updateMiniMap();
  }, 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderRichText(value) {
  if (value && typeof value === "object" && value.html) return value.html;
  return escapeHtml(value);
}

function renderNodes() {
  nodeLayer.innerHTML = nodes.map((node) => {
    const accent = colors[node.phase] || colors.docs;
    if (node.kind === "title") {
      return `
        <article class="node canvas-title-node" id="node-${escapeHtml(node.id)}" data-id="${escapeHtml(node.id)}" data-phase="${escapeHtml(node.phase)}"
          aria-label="Guide title. Drag to move." style="--x:${node.x}px; --y:${node.y}px; --w:${node.w}px; --accent:${accent}">
          <div class="canvas-title-content">
            <h1>${escapeHtml(node.title)}</h1>
            <p>${escapeHtml(node.body)}</p>
          </div>
        </article>`;
    }
    const bullets = node.bullets
      ? `<ul>${node.bullets.map((item) => `<li>${renderRichText(item)}</li>`).join("")}</ul>`
      : "";
    const body = node.bodyHtml || escapeHtml(node.body);
    const links = node.links
      ? `<div class="node-links">${node.links.map((link) => `<a class="source-link" href="${escapeHtml(link.href)}" ${link.target ? `target="${escapeHtml(link.target)}" rel="noopener"` : ""}>${escapeHtml(link.label)}</a>`).join("")}</div>`
      : "";
    const docs = node.docs
      ? `<div class="doc-carousel" data-doc-carousel>
          <button class="doc-carousel-arrow doc-carousel-prev" type="button" aria-label="Previous document" title="Previous document" data-carousel-prev>‹</button>
          <div class="doc-carousel-viewport" role="region" aria-label="Document previews" tabindex="0">
            <div class="doc-carousel-track">${node.docs.map((doc, index) => `
          <a class="doc-preview${index === 0 ? " is-active" : ""}" href="${escapeHtml(doc.href)}" target="_blank" rel="noopener" data-doc-index="${index}" aria-label="Document ${index + 1} of ${node.docs.length}: ${escapeHtml(doc.caption)}">
            <img src="${escapeHtml(doc.image)}" alt="${escapeHtml(doc.caption)}">
            <span>${escapeHtml(doc.caption)}</span>
          </a>
        `).join("")}</div>
          </div>
          <button class="doc-carousel-arrow doc-carousel-next" type="button" aria-label="Next document" title="Next document" data-carousel-next>›</button>
          <div class="doc-carousel-pagination" aria-label="Choose a document">
            ${node.docs.map((_, index) => `<button class="doc-page${index === 0 ? " is-active" : ""}" type="button" aria-label="Show document ${index + 1}" aria-current="${index === 0 ? "true" : "false"}" data-carousel-page="${index}">${index + 1}</button>`).join("")}
          </div>
        </div>`
      : "";
    const callout = node.callout ? `<div class="callout">${renderRichText(node.callout)}</div>` : "";
    return `
      <article class="node" id="node-${escapeHtml(node.id)}" data-id="${escapeHtml(node.id)}" data-phase="${escapeHtml(node.phase)}"
        style="--x:${node.x}px; --y:${node.y}px; --w:${node.w}px; --accent:${accent}">
        <div class="node-head">
          <p class="eyebrow">${escapeHtml(node.eyebrow)}</p>
          <h3>${escapeHtml(node.title)}</h3>
        </div>
        <div class="node-body">
          <p>${body}</p>
          ${bullets}
          ${callout}
          ${docs}
          ${links}
        </div>
      </article>`;
  }).join("");
}

function initDocumentCarousels() {
  document.querySelectorAll("[data-doc-carousel]").forEach((carousel) => {
    const carouselViewport = carousel.querySelector(".doc-carousel-viewport");
    const slides = [...carousel.querySelectorAll(".doc-preview")];
    const pages = [...carousel.querySelectorAll(".doc-page")];
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = 0;
    let scrollFrame = null;
    let autoplayTimer = null;

    const setActive = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === activeIndex));
      pages.forEach((page, pageIndex) => {
        const active = pageIndex === activeIndex;
        page.classList.toggle("is-active", active);
        page.setAttribute("aria-current", String(active));
      });
    };

    const goTo = (index, behavior = reducedMotion ? "auto" : "smooth") => {
      const normalized = (index + slides.length) % slides.length;
      const slide = slides[normalized];
      const left = slide.offsetLeft - (carouselViewport.clientWidth - slide.clientWidth) / 2;
      setActive(normalized);
      carouselViewport.scrollTo({ left, behavior });
    };

    const stopAutoplay = () => {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    };

    const startAutoplay = () => {
      if (reducedMotion || autoplayTimer) return;
      autoplayTimer = window.setInterval(() => goTo(activeIndex + 1), 5200);
    };

    previous.addEventListener("click", () => goTo(activeIndex - 1));
    next.addEventListener("click", () => goTo(activeIndex + 1));
    pages.forEach((page) => page.addEventListener("click", () => goTo(Number(page.dataset.carouselPage))));

    carouselViewport.addEventListener("scroll", () => {
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const center = carouselViewport.scrollLeft + carouselViewport.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDistance = Infinity;
        slides.forEach((slide, index) => {
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(center - slideCenter);
          if (distance < nearestDistance) {
            nearestIndex = index;
            nearestDistance = distance;
          }
        });
        setActive(nearestIndex);
      });
    }, { passive: true });

    carouselViewport.addEventListener("wheel", (event) => {
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!delta) return;
      event.preventDefault();
      event.stopPropagation();
      carouselViewport.scrollLeft += delta;
    }, { passive: false });

    carouselViewport.addEventListener("pointerdown", (event) => event.stopPropagation());
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) startAutoplay();
    });

    requestAnimationFrame(() => goTo(0, "auto"));
    startAutoplay();
  });
}

function nodeHeight(node) {
  const element = document.getElementById(`node-${node.id}`);
  return element ? element.offsetHeight : 320;
}

function nodeContentBounds() {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  nodes.forEach((node) => {
    const height = nodeHeight(node);
    minX = Math.min(minX, node.x);
    minY = Math.min(minY, node.y);
    maxX = Math.max(maxX, node.x + node.w);
    maxY = Math.max(maxY, node.y + height);
  });

  if (!Number.isFinite(minX)) {
    return { minX: 0, minY: 0, maxX: BASE_WORLD.width, maxY: BASE_WORLD.height, width: BASE_WORLD.width, height: BASE_WORLD.height };
  }

  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}

function normalizeCanvasOrigin() {
  const bounds = nodeContentBounds();
  const dx = bounds.minX < CANVAS_PADDING ? CANVAS_PADDING - bounds.minX : 0;
  const dy = bounds.minY < CANVAS_PADDING ? CANVAS_PADDING - bounds.minY : 0;

  if (!dx && !dy) return false;

  nodes.forEach((node) => {
    node.x += dx;
    node.y += dy;
    positionNodeElement(node);
  });

  if (state.draggingNode) {
    state.draggingNode.startX += dx;
    state.draggingNode.startY += dy;
  }

  state.x -= dx * state.scale;
  state.y -= dy * state.scale;
  return true;
}

function syncCanvasBounds() {
  const shifted = normalizeCanvasOrigin();
  const bounds = nodeContentBounds();
  WORLD = {
    width: Math.ceil(Math.max(BASE_WORLD.width, bounds.maxX + CANVAS_PADDING)),
    height: Math.ceil(Math.max(BASE_WORLD.height, bounds.maxY + CANVAS_PADDING))
  };

  world.style.width = `${WORLD.width}px`;
  world.style.height = `${WORLD.height}px`;
  nodeLayer.style.width = `${WORLD.width}px`;
  nodeLayer.style.height = `${WORLD.height}px`;
  edgeLayer.style.width = `${WORLD.width}px`;
  edgeLayer.style.height = `${WORLD.height}px`;
  edgeLayer.setAttribute("viewBox", `0 0 ${WORLD.width} ${WORLD.height}`);

  if (shifted) applyTransform();
}

function nodeCenter(id) {
  const node = nodes.find((item) => item.id === id);
  const element = document.getElementById(`node-${id}`);
  const height = element ? element.offsetHeight : 240;
  return {
    x: node.x + node.w / 2,
    y: node.y + height / 2,
    node,
    height
  };
}

function renderEdges() {
  syncCanvasBounds();
  const defs = `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(47, 123, 104, 0.42)"></path>
      </marker>
    </defs>`;
  const paths = edges.map(([from, to]) => {
    const a = nodeCenter(from);
    const b = nodeCenter(to);
    const dx = Math.max(140, Math.abs(b.x - a.x) * 0.45);
    const c1x = a.x + (b.x >= a.x ? dx : -dx);
    const c2x = b.x - (b.x >= a.x ? dx : -dx);
    const key = `${from}->${to}`;
    const label = edgeLabels[key];
    const path = `<path class="edge-path" marker-end="url(#arrow)" d="M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}"></path>`;
    if (!label) return path;
    const lx = (a.x + b.x) / 2;
    const ly = (a.y + b.y) / 2 - 10;
    return `${path}<text class="edge-label" x="${lx}" y="${ly}">${escapeHtml(label)}</text>`;
  }).join("");
  edgeLayer.innerHTML = defs + paths;
}

function positionNodeElement(node) {
  const element = document.getElementById(`node-${node.id}`);
  if (!element) return;
  element.style.setProperty("--x", `${node.x}px`);
  element.style.setProperty("--y", `${node.y}px`);
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem("iitd-guide-checklist") || "{}");
  document.getElementById("checklist").innerHTML = checklist.map((group, groupIndex) => `
    <section class="check-group">
      <h3>${escapeHtml(group.title)}</h3>
      ${group.items.map((item, itemIndex) => {
        const id = `check-${groupIndex}-${itemIndex}`;
        const checked = Boolean(saved[id]);
        return `
          <label class="check-item ${checked ? "done" : ""}">
            <input type="checkbox" data-check-id="${id}" ${checked ? "checked" : ""}>
            <span>${escapeHtml(item)}</span>
          </label>`;
      }).join("")}
    </section>
  `).join("");
}

function renderSources() {
  document.getElementById("sources").innerHTML = sources.map((source) => `
    <article class="source-card">
      <p class="phase-tag">${escapeHtml(source.type)}</p>
      <h3><a href="${escapeHtml(source.href)}">${escapeHtml(source.title)}</a></h3>
      <p>${escapeHtml(source.note)}</p>
    </article>
  `).join("");
}

function renderMiniMap() {
  const scaleX = 170 / WORLD.width;
  const scaleY = 92 / WORLD.height;
  const nodeMarkers = nodes.map((node) => `
    <span class="mini-node" style="left:${node.x * scaleX}px; top:${node.y * scaleY}px; --accent:${colors[node.phase] || colors.docs}"></span>
  `).join("");
  miniWorld.innerHTML = nodeMarkers + '<span class="mini-view"></span>';
  updateMiniMap();
}

function updateMiniMap() {
  const view = miniWorld.querySelector(".mini-view");
  if (!view) return;
  const rect = viewport.getBoundingClientRect();
  const scaleX = 170 / WORLD.width;
  const scaleY = 92 / WORLD.height;
  const worldLeft = -state.x / state.scale;
  const worldTop = -state.y / state.scale;
  const worldWidth = rect.width / state.scale;
  const worldHeight = rect.height / state.scale;
  view.style.left = `${Math.max(0, worldLeft * scaleX)}px`;
  view.style.top = `${Math.max(0, worldTop * scaleY)}px`;
  view.style.width = `${Math.min(170, worldWidth * scaleX)}px`;
  view.style.height = `${Math.min(92, worldHeight * scaleY)}px`;
}

function applyTransform() {
  world.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
  zoomLabel.textContent = `Zoom ${Math.round(state.scale * 100)}%`;
  updateMiniMap();
}

function clampScale(value) {
  return Math.min(1.55, Math.max(0.28, value));
}

function zoomAt(clientX, clientY, factor) {
  const rect = viewport.getBoundingClientRect();
  const pointX = clientX - rect.left;
  const pointY = clientY - rect.top;
  const worldX = (pointX - state.x) / state.scale;
  const worldY = (pointY - state.y) / state.scale;
  const nextScale = clampScale(state.scale * factor);
  state.x = pointX - worldX * nextScale;
  state.y = pointY - worldY * nextScale;
  state.scale = nextScale;
  applyTransform();
}

function focusNode(id) {
  syncCanvasBounds();
  const node = nodes.find((item) => item.id === id);
  if (!node) return;
  const rect = viewport.getBoundingClientRect();
  const targetScale = Math.min(0.82, Math.max(0.54, rect.width / 1600));
  const focusOffsetY = id === "documents" ? nodeHeight(node) / 2 : 160;
  state.scale = targetScale;
  state.x = rect.width / 2 - (node.x + node.w / 2) * state.scale;
  state.y = rect.height / 2 - (node.y + focusOffsetY) * state.scale;
  applyTransform();
}

function fitCanvas() {
  syncCanvasBounds();
  const rect = viewport.getBoundingClientRect();
  const bounds = nodeContentBounds();
  const pad = 240;
  const scale = Math.min(rect.width / (bounds.width + pad * 2), rect.height / (bounds.height + pad * 2), 0.72);
  state.scale = clampScale(scale);
  state.x = rect.width / 2 - (bounds.minX + bounds.width / 2) * state.scale;
  state.y = rect.height / 2 - (bounds.minY + bounds.height / 2) * state.scale;
  applyTransform();
}

function resetLayout() {
  nodes.forEach((node) => {
    node.x = defaultNodePositions[node.id].x;
    node.y = defaultNodePositions[node.id].y;
    positionNodeElement(node);
  });
  localStorage.removeItem("iitd-guide-node-positions");
  renderEdges();
  renderMiniMap();
  fitCanvas();
}

function searchCanvas(term) {
  const needle = term.trim().toLowerCase();
  const allNodes = document.querySelectorAll(".node");
  if (!needle) {
    allNodes.forEach((node) => node.classList.remove("dimmed"));
    return;
  }
  let firstMatch = null;
  allNodes.forEach((element) => {
    const text = element.textContent.toLowerCase();
    const matched = text.includes(needle);
    element.classList.toggle("dimmed", !matched);
    if (matched && !firstMatch) firstMatch = element.dataset.id;
  });
  if (firstMatch) focusNode(firstMatch);
}

function syncResponsiveHeader() {
  search.placeholder = window.innerWidth <= 520
    ? "Search guide"
    : "Search forms, approvals, reimbursement...";
}

function initEvents() {
  const closeHeaderMenus = (except = null) => {
    headerMenus.forEach((menu) => {
      if (menu !== except) menu.open = false;
    });
  };

  headerMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (menu.open) closeHeaderMenus(menu);
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".header-menu")) closeHeaderMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeHeaderMenus();
  });

  viewport.addEventListener("wheel", (event) => {
    event.preventDefault();
    const factor = event.deltaY > 0 ? 0.92 : 1.08;
    zoomAt(event.clientX, event.clientY, factor);
  }, { passive: false });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("a, button, input, label")) return;
    state.dragging = true;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    state.x += event.clientX - state.lastX;
    state.y += event.clientY - state.lastY;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    applyTransform();
  });

  viewport.addEventListener("pointerup", () => {
    state.dragging = false;
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "toggle-checklist") {
        setPanelOpen(!document.body.classList.contains("panel-open"));
        closeHeaderMenus();
        return;
      }
      const rect = viewport.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      if (button.dataset.action === "zoom-in") zoomAt(centerX, centerY, 1.14);
      if (button.dataset.action === "zoom-out") zoomAt(centerX, centerY, 0.86);
      if (button.dataset.action === "fit") fitCanvas();
      if (button.dataset.action === "reset-layout") resetLayout();
      closeHeaderMenus();
    });
  });

  document.querySelectorAll(".node").forEach((element) => {
    element.addEventListener("pointerdown", (event) => {
      if (event.target.closest("a, button, input, label")) return;
      const node = nodes.find((item) => item.id === element.dataset.id);
      if (!node) return;
      event.stopPropagation();
      state.draggingNode = {
        node,
        pointerId: event.pointerId,
        startClientX: event.clientX,
        startClientY: event.clientY,
        startX: node.x,
        startY: node.y
      };
      element.classList.add("dragging");
      element.setPointerCapture(event.pointerId);
    });

    element.addEventListener("pointermove", (event) => {
      if (!state.draggingNode || state.draggingNode.pointerId !== event.pointerId) return;
      const { node, startClientX, startClientY, startX, startY } = state.draggingNode;
      node.x = startX + (event.clientX - startClientX) / state.scale;
      node.y = startY + (event.clientY - startClientY) / state.scale;
      positionNodeElement(node);
      renderEdges();
      renderMiniMap();
    });

    element.addEventListener("pointerup", (event) => {
      if (!state.draggingNode || state.draggingNode.pointerId !== event.pointerId) return;
      element.classList.remove("dragging");
      state.draggingNode = null;
      saveNodePositions();
    });

    element.addEventListener("pointercancel", () => {
      element.classList.remove("dragging");
      state.draggingNode = null;
    });
  });

  document.querySelectorAll("[data-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      focusNode(button.dataset.focus);
      closeHeaderMenus();
    });
  });

  search.addEventListener("input", (event) => searchCanvas(event.target.value));

  document.getElementById("checklist").addEventListener("change", (event) => {
    const input = event.target.closest("[data-check-id]");
    if (!input) return;
    const saved = JSON.parse(localStorage.getItem("iitd-guide-checklist") || "{}");
    saved[input.dataset.checkId] = input.checked;
    localStorage.setItem("iitd-guide-checklist", JSON.stringify(saved));
    input.closest(".check-item").classList.toggle("done", input.checked);
  });

  window.addEventListener("resize", () => {
    closeHeaderMenus();
    syncResponsiveHeader();
    renderEdges();
    if (viewport.clientWidth < 540) {
      focusNode("start");
    } else {
      updateMiniMap();
    }
  });
}

loadSavedNodePositions();
renderNodes();
initDocumentCarousels();
renderEdges();
renderChecklist();
renderSources();
renderMiniMap();
initEvents();
setPanelOpen(false);
syncResponsiveHeader();
if (window.innerWidth <= 520) {
  focusNode("start");
} else {
  fitCanvas();
}
