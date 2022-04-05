import React from "react";

import { Line } from "react-chartjs-2";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white" style={{ fontSize: "40px" }}>
                  Lorem ipsum dolor <br />
                  <span className="text-white">sit amet</span>
                </h1>
                <p className="text-white mb-3" style={{ fontSize: "17px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  et mauris imperdiet, tempus erat sed, tempus mauris.
                  Suspendisse accumsan id dolor id venenatis. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Ut vulputate, magna sit amet
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    + info
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png").default}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            {/* <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,227</CardTitle>
                                <p />
                                <p className="card-category">Awwwards</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,653</CardTitle>
                                <p />
                                <p className="card-category">Commits</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">593</CardTitle>
                                <p />
                                <p className="card-category">Presents</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">10,783</CardTitle>
                                <p />
                                <p className="card-category">Forks</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      News <br />
                      Noticias
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi et mauris imperdiet, tempus erat sed, tempus mauris.
                      Suspendisse accumsan id dolor id venenatis. Pellentesque
                      habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas. Ut vulputate, magna sit amet
                    </p>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi et mauris imperdiet, tempus erat sed, tempus mauris.
                      Suspendisse accumsan id dolor id venenatis. Pellentesque
                      habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas. Ut vulputate, magna sit amet
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ms Info{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container> */}
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png").default}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png").default}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Seccion 1: Informacion gratuita</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Precios de Mercado</h4>
                      <hr className="line-primary" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi et mauris imperdiet, tempus erat sed, tempus
                        mauris. Suspendisse accumsan id dolor id venenatis.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Manual de buenas practicas</h4>
                      <hr className="line-warning" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi et mauris imperdiet, tempus erat sed, tempus
                        mauris. Suspendisse accumsan id dolor id venenatis.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Glosario</h4>
                      <hr className="line-success" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi et mauris imperdiet, tempus erat sed, tempus
                        mauris. Suspendisse accumsan id dolor id venenatis.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png").default}
          />
            <Col md="12 mx-5">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Seccion 2: Noticias</h5>
                      <CardTitle tag="h2">
                        Cartas desplegadas en carrusel
                      </CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                {/* <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody> */}
              </Card>
            </Col>
          {/* <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/chester-wade.jpg").default}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">Lorem Ipsum</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Lorem</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Dolor sit amet</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi et mauris imperdiet, tempus erat sed, tempus mauris.
                    Suspendisse accumsan id dolor id venenatis. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Cumsan id dolor</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>tristique senectus et netus et</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>tristique senectus et netus et</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container> */}
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container
            fluid
            style={{
              backgroundColor: "white",
              padding: "0px 30px 0px 30px",
              borderRadius: "25px",
            }}
          >
            <Row>
              <Col md="12 text-center pt-5">
                <h1 className="text-dark">
                  Elige el plan{" "}
                  <span className="text-info">que mas se acomode a ti</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase text-dark">Lorem</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem className="text-dark">
                          Lorem ipsum
                        </ListGroupItem>
                        <ListGroupItem className="text-dark">
                          Lorem ipsum
                        </ListGroupItem>
                        <ListGroupItem className="text-dark">
                          Lorem ipsum
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Inscribete
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase text-dark">Lorem</h4>
                        <span>Plan</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem className="text-dark">
                          Lorem Ipsum
                        </ListGroupItem>
                        <ListGroupItem className="text-dark">
                          Lorem Ipsum
                        </ListGroupItem>
                        <ListGroupItem className="text-dark">
                          Lorem Ipsum
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Inscribete
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase text-dark">Lorem</h4>
                        <span>Plan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem className="text-dark">
                          Lorem Ipsum
                        </ListGroupItem>
                        <ListGroupItem className="text-dark">
                          Lorem Ipsum
                        </ListGroupItem>
                        <ListGroupItem className="text-dark">
                          Lorem Ipsum
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Inscribete
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
