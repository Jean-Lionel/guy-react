import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import formatm1 from "../../../asset/pdf/formatm1.pdf"

function DisplayPdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={formatm1} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
          </p>
          
          <a href={formatm1}> Check document</a>
    </div>
  );
}

export default DisplayPdf;