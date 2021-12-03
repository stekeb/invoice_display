import React from "react";
import { Item } from "../../../interfaces";

import "./invoiceDetailsItemsList.css";
function InvoiceDetailsItemsList({
  invoiceDetailsItems,
}: {
  invoiceDetailsItems: Item[];
}) {
  const itemsCard = invoiceDetailsItems.map((item) => (
    <tr key={item.id}>
      <td className="itemamount">{item.amount}</td>
      <td className="itemdescription">{item.description}</td>
      <td className="itemvat">{item.vat_rate} %</td>
      <td className="itemprice">
        {item.price} {item.currency}
      </td>
    </tr>
  ));
  return (
    <table className="invoicetable">
      <thead>
        <tr>
          <th className="itemamount">Amount</th>
          <th className="itemdescription">Description</th>
          <th className="itemvat">VAT</th>
          <th className="itemprice">Price</th>
        </tr>
      </thead>
      <tbody>{itemsCard}</tbody>
    </table>
  );
}

export default InvoiceDetailsItemsList;
