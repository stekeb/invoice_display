import React from "react";
import { SingleInvoice, Invoices } from "../../../interfaces";
import OverviewCard from "../OverviewCard/OverviewCard";
import "./OverviewList.css";

function OverviewList({
  invoices,
  detailViewHandler,
}: {
  invoices: Invoices;
  detailViewHandler: (id: number) => void;
}) {
  const singleInvoice = invoices._embedded.list_debits.map(
    (invoice: SingleInvoice) => (
      <OverviewCard
        key={invoice.id}
        invoice={invoice}
        detailViewHandler={detailViewHandler}
      />
    )
  );
  return <div className="overview">{singleInvoice}</div>;
}

export default OverviewList;
