import React, { useState, useEffect } from "react";
import {
  getToken,
  getPage,
  downloadInvoiceFile,
  getSingleInvoice,
} from "./services/API_Database";
import OverviewList from "./components/Overview/OverviewList/OverviewList";
import InvoiceDetails from "./components/Invoice/InvoiceDetails/InvoiceDetails";
import Pagination from "./components/Pagination/Pagination";
import { Invoices, SingleInvoice, File } from "./interfaces";
import { dummyInvoice, dummyPage } from "./dummyObjects";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [invoices, setInvoices] = useState<Invoices>(dummyPage);
  const [invoiceDetails, setInvoiceDetails] =
    useState<SingleInvoice>(dummyInvoice);
  const [detailView, setDetailView] = useState<Boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const setTokenState = async () => {
    const tokenState = await getToken();
    setToken(tokenState.access_token);
    return tokenState.access_token;
  };

  const setInvoicesState = async (token: string, pageNumber: number) => {
    const invoicesState = await getPage(token, pageNumber);
    setInvoices(invoicesState);
  };

  const detailViewHandler = async (id: number) => {
    const invoiceDetails = await getSingleInvoice(token, id);
    setInvoiceDetails(invoiceDetails);
    setDetailView(true);
  };

  const pageChangeHandler = (page: string) => {
    if (page === "-10" && pageNumber - 10 > 0) setPageNumber(pageNumber - 10);
    if (page === "-1" && pageNumber - 1 > 0) setPageNumber(pageNumber - 1);
    if (page === "1" && pageNumber + 1 <= invoices.page_count)
      setPageNumber(pageNumber + 1);
    if (page === "10" && pageNumber + 10 <= invoices.page_count)
      setPageNumber(pageNumber + 10);
  };

  const downloadInvoiceHandler = async (fileData: File) => {
    let anchor = document.createElement("a");
    document.body.appendChild(anchor);
    let fileURL = fileData.file_url;
    await downloadInvoiceFile(token, fileURL)
      .then((response) => response.blob())
      .then((blobby) => {
        let objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = fileData.filename;
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
      });
  };

  const overviewSwitch = () => setDetailView(false);

  useEffect(() => {
    setTokenState().then((token) => {
      setInvoicesState(token, pageNumber);
    });
  }, [pageNumber]);
  console.log(invoices);
  return (
    <div className="App">
      {invoices._embedded.list_debits[0].Debitor.name !== "Dummyname" &&
      !detailView ? (
        <div className="overview-wrapper">
          <OverviewList
            invoices={invoices}
            detailViewHandler={detailViewHandler}
          />
          <Pagination
            pageChangeHandler={pageChangeHandler}
            maxPage={invoices.page_count}
            currentPage={pageNumber}
          />
        </div>
      ) : null}
      {invoices && detailView ? (
        <InvoiceDetails
          invoiceDetails={invoiceDetails}
          overviewSwitch={overviewSwitch}
          downloadInvoiceHandler={downloadInvoiceHandler}
        />
      ) : null}
    </div>
  );
}

export default App;
