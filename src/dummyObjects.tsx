export const dummyInvoice = {
  Debitor: { name: "Dummyname", number: "Dummynumber" },
  balance: 0,
  netto: 0,
  brutto: 0,
  receipt_date: "Dummydate",
  id: 0,
  service_period: "Dummydate",
  due_date: "Dummydate",
  billing_number: "Dummynumber",
  file: { file_exists: true, file_url: "DummyURL", filename: "Dummyname" },
  items: [
    {
      amount: 0,
      description: "Dummydescription",
      price: 0,
      sum: 0,
      vat_rate: 0,
      id: 0,
      currency: "Dummycurrency",
    },
  ],
};

export const dummyPage = {
  page: 1,
  page_count: 1,
  page_size: 1,
  total_items: 1,
  _embedded: { list_debits: [dummyInvoice] },
  _links: {
    first: { href: "string" },
    last: { href: "string" },
    next: { href: "string" },
    self: { href: "string" },
  },
};
