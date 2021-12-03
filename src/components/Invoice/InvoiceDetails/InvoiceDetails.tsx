import React from "react";
import InvoiceDetailsItemsList from "../InvoiceDetailsItemsList/InvoiceDetailsItemsList";
import { SingleInvoice, File } from "../../../interfaces";
import "./invoiceDetails.css";

function InvoiceDetails({
  invoiceDetails,
  overviewSwitch,
  downloadInvoiceHandler,
}: {
  invoiceDetails: SingleInvoice;
  overviewSwitch: () => void;
  downloadInvoiceHandler: (fileData: File) => void;
}) {
  return (
    <div className="invoicedetails">
      <div className="detailsheader">
        <div className="closer" onClick={overviewSwitch}>
          X
        </div>
        <h1 className="debitorname">{invoiceDetails.Debitor.name}</h1>
        <h3>Invoice #: {invoiceDetails.billing_number}</h3>
      </div>
      <div className="detailsdates">
        <h2>Invoice Date: {invoiceDetails.receipt_date}</h2>
        <h2>Due Date: {invoiceDetails.due_date}</h2>
        <h2>Service Period: {invoiceDetails.service_period}</h2>
      </div>
      <InvoiceDetailsItemsList invoiceDetailsItems={invoiceDetails.items} />
      <div className="detailsamounts">
        <h2>Net Amount: {invoiceDetails.netto.toFixed(2)} EUR</h2>
        <h2>Gross Amount: {invoiceDetails.brutto.toFixed(2)} EUR</h2>
        <h2>
          VAT Total {(invoiceDetails.brutto - invoiceDetails.netto).toFixed(2)}{" "}
          EUR
        </h2>
        <h2>Open Amount: {invoiceDetails.balance.toFixed(2)} EUR</h2>
      </div>

      {invoiceDetails.file.file_exists ? (
        <h2
          className="download"
          onClick={() => downloadInvoiceHandler(invoiceDetails.file)}
        >
          Download Invoice
        </h2>
      ) : null}
    </div>
  );
}

export default InvoiceDetails;
