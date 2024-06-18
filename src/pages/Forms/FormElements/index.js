import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//import Components
import Checkboxes from './Checkboxes';
import Formlayouts from './Formlayouts';
import RangeInputs from './RangeInputs';
import SizingInput from './SizingInput';
import TextualInputs from './Textual-inputs';
import { Link } from "react-router-dom"

const FormElements = () => {
     //meta title
     document.title = "Basic Elements | enmaa.com";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <div className='d-flex justify-content-between'>
                    <Breadcrumbs title="Forms" breadcrumbItem="Home Page" />
                    <div className='d-flex flex-end gap-3 p-4'>
            <Link to="/form-elements"className=" d-flex align-items-center gap-2 btn btn-outline-light"><i className="mdi mdi-file-document"></i>Guidelines</Link>
            <Link to="/https://enmaa-previews.vercel.app/" className=" d-flex align-items-center gap-2 btn btn-outline-light" target="_blank"><i className="mdi mdi-open-in-new"></i>Preview</Link>

                </div></div>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Banner Section</h4>
                                    <p className="card-title-desc">Here you can change the each <code> HEADING & IMAGE</code> </p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import TextualInputs */}
                                    <TextualInputs />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                        {/* <Col1 xs={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Section 2</h4>
                                    <p className="card-title-desc">Here you can change the each <code> HEADING & IMAGE</code> </p>
                                </CardHeader>
                                <CardBody className="p-4">
                                    {/* import TextualInputs 
                                    <TextualInputs />
                                </CardBody>
                            </Card>
                        </Col1> */}
      
                    {/* <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Form layouts</h4>
                                    <p className="card-title-desc">Form layout options : from inline, horizontal & custom grid implementations</p>
                                </CardHeader>
                                <CardBody className="p-4"> */}
                                    {/* import Formlayouts */}
                                    {/* <Formlayouts />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row> */}
                    {/* import Checkbox */}
                    {/* <Checkboxes /> */}
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FormElements;