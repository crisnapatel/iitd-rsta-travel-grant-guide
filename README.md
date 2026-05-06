# IITD Travel Grant Guide

Static GitHub Pages guide for IIT Delhi PhD students preparing RSTA, external travel-grant, leave, travel-evidence, and reimbursement paperwork.

## Files

- `index.html` - the canvas guide.
- `styles.css` - visual styling and responsive layout.
- `script.js` - pan/zoom canvas, checklist persistence, source rendering.
- `sources/` - extracted text and source metadata.
- `assets/doc-previews/` - rendered page previews from local PDFs.
- `assets/pdfs/` - copied PDFs used by guide links and preview cards.
  - `csir-tg-19-summary-main-blank.pdf` combines the official blank CSIR TG/19 summary sheet and main application for easier printing.
  - Blank public templates are included for ANRF applicant certificate, ANRF other-support declaration, and CSIR NOC/endorsement.
- `examples/anrf/` - redacted and blank LaTeX sources used to generate public ANRF example/template PDFs.
- `examples/csir/` - public CSIR template sources, including the IITD NOC/endorsement template.

## Local preview

From this directory:

```sh
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Source policy

Use official IIT Delhi/ANRF/CSIR pages first. The HSS guide and Akhil Abburu RSTA page are retained as peer-process guides for practical routing, tracking, and reimbursement notes; they should not override current IITD Academic Section notifications or forms.
