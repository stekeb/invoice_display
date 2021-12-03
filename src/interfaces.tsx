export interface SingleInvoice {
  Debitor: { name: String; number: String };
  balance: number;
  netto: number;
  brutto: number;
  receipt_date: string;
  id: number;
  service_period: string;
  due_date: string;
  billing_number: string;
  file: File;
  items: Item[];
}

export interface File {
  file_exists: Boolean;
  file_url: string;
  filename: string;
}

export interface Item {
  amount: number;
  description: string;
  price: number;
  sum: number;
  vat_rate: number;
  id: number;
  currency: string;
}

export interface Invoices {
  page: number;
  page_count: number;
  page_size: number;
  total_items: number;
  _embedded: { list_debits: SingleInvoice[] };
  _links: {
    first: { href: string };
    last: { href: string };
    next: { href: string };
    self: { href: string };
  };
}
