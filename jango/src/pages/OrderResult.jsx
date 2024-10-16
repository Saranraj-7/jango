import React, { useState } from "react";
import {Container, Row, Col, Table, Button, Form, Pagination, Card, Modal} from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";


export const OrderResult = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="vh-100 p-0">
      <Row className="m-0 vh-100">
        <Col xl={2} className="sidebar-color p-0">
          <div className="sidebar side-round h-100 d-flex flex-column">
          <div className=" ">
                        <h2 className='ps-3 pt-2'>JANGO</h2>
                    </div>
            <ul className="menu list-unstyled flex-grow-1 text-dark">
              <li className="menu-item py-2 px-3 d-flex">
                  <Icon icon="ic:outline-dashboard" width="25" height="25" className="me-2"/>
                  <h5 > Dashboard </h5>
              </li>
              <li className="menu-item py-2 px-3 d-flex">
                  <Icon icon="lsicon:order-outline" width="25" height="25" className='me-2' /> 
                  <h5> Order List </h5>
              </li>
              <li className="menu-item py-2 px-3 d-flex">
                  <Icon icon="fluent:person-48-regular" width="26" height="26" className="me-2"/>
                  <h5> Delivery Details </h5>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={10} className="p-4">
          <Card className="p-2 px-2   card-bg">
            <h4>Order List</h4>
          </Card>
          <Row className="d-flex justify-content-between align-items-center ">
          <Col xl={2}>
            <Form.Control
              className='search-bar shadow-sm mt-4'
              type="text"
              placeholder="Search orders..."
            />
            </Col>              <Col xl={2} className="text-end">
              <Button className="btn-danger mt-4" onClick={handleShow}>
                New Order
              </Button>
            </Col>
          </Row>
          <Table striped bordered hover className="mt-4">
          <thead className="text-center">
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Delivered Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>12345</td>
              <td>Pending</td>
              <td>12-09-2024</td>
              <td className="text-center">
                <Icon icon="carbon:edit" width="20" height="20" className="text-danger mx-2" />
                <Icon icon="mdi:delete" width="20" height="20" className="text-danger" />
              </td>
            </tr>
            <tr>
              <td>13456</td>
              <td>Delivery</td>
              <td>13-09-2024</td>
            <td className="text-center">
                <Icon icon="carbon:edit" width="20" height="20" className="text-danger mx-2" />
                <Icon icon="mdi:delete" width="20" height="20" className="text-danger" />
              </td>
            </tr>
            <tr>
              <td>23455</td>
              <td>Pending</td>
              <td>14-09-2024</td>
              <td className="text-center">
                <Icon icon="carbon:edit" width="20" height="20" className="text-danger mx-2" />
                <Icon icon="mdi:delete" width="20" height="20" className="text-danger" />
              </td>
            </tr>
          </tbody>
        </Table>

          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" name="file" placeholder="file" required />
          </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Order Information Id</Form.Label>
                  <Form.Control type="email" placeholder="Enter Order Information id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formState">
                  <Form.Label>Specification Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter Specification id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmployeeId">
                  <Form.Label>Pricing Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter pricing id" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

