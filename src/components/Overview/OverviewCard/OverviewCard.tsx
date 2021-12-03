import React from "react";
import { SingleInvoice } from "../../../interfaces";
import "./OverviewCard.css";

function OverviewCard({
  invoice,
  detailViewHandler,
}: {
  invoice: SingleInvoice;
  detailViewHandler: (id: number) => void;
}) {
  return (
    <div
      onClick={() => detailViewHandler(invoice.id)}
      className="overview-item-wrapper"
    >
      <div className="overview-item-header">
        <h1>{invoice.Debitor.name}</h1>
        <h2>Invoice #:{invoice.billing_number}</h2>
        <h3>Invoice Date: {invoice.receipt_date}</h3>
      </div>
      <div className="overview-item-body">
        <h2>Net Amount: {invoice.netto.toFixed(2)} EUR</h2>
        <h2>Gross Amount: {invoice.brutto.toFixed(2)} EUR</h2>
        <h2>Open Amount: {invoice.balance.toFixed(2)} EUR</h2>
      </div>
    </div>
  );
}

export default OverviewCard;
