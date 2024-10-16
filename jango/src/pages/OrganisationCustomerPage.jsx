import React, { useState } from 'react';
import { Button, Card, Col, Form, Pagination, Row, Table, Modal } from 'react-bootstrap';
import { Icon } from '@iconify/react';


const OrganisationCustomerPage = () => {
  
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="m-0 vh-100">
      <Col xl={2} className="sidebar-color p-0">
        <div className="sidebar side-round h-100 d-flex flex-column">
        <div className="">
              <h2 className='ps-3 pt-2'>JANGO</h2>
            </div>
          <ul className="menu list-unstyled px-3 text-dark">
            <li className="menu-item py-2">
              <h5><Icon icon="ic:outline-dashboard" width="22" height="22" className="me-2" />Dashboard</h5>
            </li>
            <li className="menu-item py-2">
              <h5><Icon icon="fluent:person-support-16-filled" width="22" height="22" className="me-2" />Employee Details</h5>
            </li>
            <li className="menu-item py-2">
              <h5><Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2" />Customer Details</h5>
            </li>
            <li className="menu-item py-2">
              <h5><Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2" />Delivery Details</h5>
            </li>
          </ul>
        </div>
      </Col>


      <Col xl={10} className="p-4">

        <Card className="p-2 mb-4 fs-5 card-bg">
        Customer Details
        </Card>

        <Row className="d-flex justify-content-between align-items-center">
        <Col xl={2}>
            <Form.Control
              className='search-bar shadow-sm'
              type="text"
              placeholder="Search orders..."
            />
          </Col>
          <Col xl={2} className="text-end">
            <Button className="btn-danger mt-2" onClick={handleShow}>New User</Button>
          </Col>
        </Row>


        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Employee Id</th>
              <th>Organization Userid</th>
              <th>Email</th>
              <th>State</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>mar-1</td>
              <td>@mdo</td>
              <td className="text-center">
                <Icon icon="mdi:delete" width="20" height="20" className="text-danger" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>mar-1</td>
              <td>@fat</td>
              <td className="text-center">
                <Icon icon="mdi:delete" width="20" height="20" className="text-danger" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Marks</td>
              <td>Larry the Bird</td>
              <td>mar-1</td>
              <td>@twitter</td>
              <td className="text-center">
                <Icon icon="mdi:delete" width="20" height="20" className="text-danger" />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Pagination */}
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

        {/* Modal for Adding New User */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter state" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmployeeId">
                <Form.Label>Employee Id</Form.Label>
                <Form.Control type="text" placeholder="Enter employee id" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
};

export default OrganisationCustomerPage;
