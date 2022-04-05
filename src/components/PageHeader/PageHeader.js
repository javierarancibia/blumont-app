import React from "react";

import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Blumont Crypto</h1>
          <h3 className="d-none d-sm-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mauris imperdiet, tempus erat sed, tempus mauris. Suspendisse accumsan id dolor id venenatis. Pellentesque
          </h3>
        </div>
      </Container>
    </div>
  );
}
