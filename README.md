# IITD RSTA Travel Grant Guide

This site is a field guide for IIT Delhi PhD students trying to use the Research Scholar Travel Award (RSTA) for international academic travel.

I built it after going through the paperwork myself. The difficult part was not one single form; it was understanding the dependencies between IIT Delhi approval, Ex-India leave, external travel-grant applications, organizer letters, airfare estimates, and later reimbursement evidence. A missing phrase in an invitation letter or a payment made before approval can create avoidable delay.

## What Problem This Solves

The RSTA process is spread across several offices, forms, and external agencies. Students often need to know:

- what evidence the organizer letter should contain;
- why two external travel-grant applications matter;
- how ANRF ITS and CSIR Travel Grant packets fit into the IITD workflow;
- when Ex-India leave and Academic Section approval become blockers;
- which Academic Section NOC and bonafide certificates support the visa application;
- how the optional TA advance of up to Rs. 90,000 fits after travel sanction;
- how a forex card, minimum emergency cash, and a backup payment method can make travel money easier to manage;
- what receipts and proof must be preserved for reimbursement.

The website turns that sequence into an infinite-canvas workflow. Each card explains one stage, the relationship edges show dependencies, and the checklist keeps the practical evidence requirements visible while you prepare the packet.

## How To Use The Site

Start from the acceptance-evidence card, then move left to right:

1. Check whether your event and presentation evidence are strong enough for RSTA.
2. Apply to two external travel-grant sources and preserve submission proof.
3. Prepare the IITD RSTA and Ex-India leave packet.
4. Wait for the Academic Section notification before making risky payments.
5. Collect the visa NOC and bonafide certificate; optionally apply for TA advance after sanction.
6. Arrange travel money: consider a forex card for convenience, carry only a small cash backup, and keep another payment method where possible.
7. Keep travel and reimbursement evidence organized from the beginning.

The document shelf links official PDFs, blank printable templates, and redacted examples. Treat the examples as layout and wording aids, not as official rules.

## Current Source Policy

Last updated: July 2026.

Always verify the latest IIT Delhi, ANRF, and CSIR forms before submission. The official IITD/ANRF/CSIR documents override this guide. Peer notes are included only because they capture practical routing and reimbursement lessons that are easy to miss in formal documents.

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
