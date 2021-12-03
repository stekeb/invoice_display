const AUTHURL = process.env.REACT_APP_AUTHURL;
const APIURL = process.env.REACT_APP_APIURL;
const USERNAME = process.env.REACT_APP_USERNAME;
const PASSWORD = process.env.REACT_APP_PASSWORD;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE;

export const getToken = async () => {
  return fetch(`${AUTHURL}`, {
    method: "POST",
    body: JSON.stringify({
      username: USERNAME,
      password: "n*E%<_eAYd$Gvixe{eV4je>H",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: GRANT_TYPE,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((userData) => userData);
};

export const getPage = async (token: string, pageNumber: number) => {
  return fetch(`${APIURL}/v1/invoices/debit/list?page=${pageNumber}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data.json())
    .then((invoiceData) => invoiceData);
};

export const getSingleInvoice = async (token: string, id: number) => {
  return fetch(`${APIURL}/v1/invoices/debit/list/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data.json())
    .then((invoiceData) => invoiceData);
};

export const downloadInvoiceFile = async (token: String, fileURL: String) => {
  return fetch(`${fileURL}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
