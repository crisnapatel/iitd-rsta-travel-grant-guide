# IITD RSTA Travel Grant Guide

This site is a field guide for IIT Delhi PhD students trying to use the Research Scholar Travel Award (RSTA) for international academic travel.

I built this after going through the paperwork myself. The forms were manageable once I understood how IIT Delhi approval, Ex-India leave, external travel-grant applications, organizer letters, airfare estimates, and reimbursement fit together. Small things, such as a missing phrase in the invitation letter or paying before approval, can delay the process.

## What the guide covers

The RSTA process is spread across several offices, forms, and external agencies. Students often need to know:

- what the organizer letter should contain
- why two external travel-grant applications matter
- how ANRF ITS and CSIR Travel Grant fit into the IITD process
- when you need Ex-India leave and Academic Section approval
- which NOC and bonafide certificates I used for the visa application
- how I applied for a TA advance after receiving the travel sanction
- how I used a forex card, some emergency cash, and a backup card while travelling
- which bills, payment records, external-funding decisions, and boarding passes I submitted for reimbursement
- why the T.A. reimbursement claim must be submitted within 15 days of completing the journey.

The site lays out the process on an infinite canvas. Each card covers one stage. The connecting lines show what needs to happen first, and the checklist helps you keep track of the documents.

## How to use the site

Start from the acceptance-evidence card, then move left to right:

1. Check whether your event and presentation evidence are strong enough for RSTA.
2. Apply to two external travel-grant sources and preserve submission proof.
3. Prepare the IITD RSTA and Ex-India leave packet.
4. Wait for the Academic Section notification before making risky payments.
5. Collect the visa NOC and bonafide certificate. Apply for a TA advance after sanction if you need one.
6. Arrange your travel money. A forex card is convenient, but keep some emergency cash and another payment method too.
7. Keep travel and reimbursement evidence organized from the beginning.
8. Submit the T.A. reimbursement form and its indexed evidence packet within 15 days of completing the journey.

The document shelf links official PDFs, blank printable templates, and redacted examples. Use the examples to understand the layout and wording. Check the current official documents before submitting anything.

## Sources

Last updated: August 2026.

Check the latest IIT Delhi, ANRF, and CSIR forms before submitting anything. Follow the official documents whenever they differ from this guide. I included peer notes because they explain some of the office routing and reimbursement steps that the formal documents leave out.

## Local Preview

From this directory:

```sh
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Repository Layout

- `index.html` - the canvas guide.
- `styles.css` - visual styling and responsive layout.
- `script.js` - pan/zoom canvas, draggable cards, checklist persistence, and source rendering.
- `sources/` - extracted text and source metadata.
- `assets/doc-previews/` - rendered page previews from useful PDFs.
- `assets/pdfs/` - PDFs linked from the guide and document shelf.
- `examples/` - LaTeX sources for public blank templates and redacted examples.
