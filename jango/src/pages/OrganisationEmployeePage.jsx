import React, { useState } from 'react';
import { Button, Card, Col, Form, Pagination, Row, Table, Modal } from 'react-bootstrap';
import { Icon } from '@iconify/react';


const OrganisationEmployeePage = () => {
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState([
    { id: 1, employeeId: 'EMP001', organizationUserId: 'ORG001', email: 'mark@example.com', state: 'Active' },
    { id: 2, employeeId: 'EMP002', organizationUserId: 'ORG002', email: 'jacob@example.com', state: 'Inactive' },
    { id: 3, employeeId: 'EMP003', organizationUserId: 'ORG003', email: 'larry@example.com', state: 'Active' },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row className='p-0 m-0 vh-100'>
        <Col xl={2} className="sidebar-color p-0 ">
          <div className="sidebar side-round h-100 d-flex flex-column">
            <div className="">
              <h2 className='ps-3 pt-2'>JANGO</h2>
            </div>
            <ul className="menu list-unstyled flex-grow-1 text-dark">
              <li className="menu-item py-2 px-3 ">
                <h5>
                  <Icon icon="ic:outline-dashboard" width="22" height="22" className="me-2" />
                  Dashboard
                </h5>
              </li>
              <li className="menu-item py-2 px-3 ">
                <h5>
                  <Icon icon="fluent:person-support-16-filled" width="22" height="22" className="me-2" />
                  Employee Details
                </h5>
              </li>
              <li className="menu-item py-2 px-3 ">
                <h5>
                  <Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2" />
                  Customer Details
                </h5>
              </li>
              <li className="menu-item py-2 px-3 ">
                <h5>
                  <Icon icon="lsicon:order-filled" width="22" height="22" className="me-2" />
                  Delivery Details
                </h5>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={10} className=' p-4'>
          <Card className='p-2 fs-5 card-bg'>Employee Details</Card>

          <Row className='d-flex justify-content-between'>
          <Col xl={2}>
            <Form.Control
              className='search-bar shadow-sm mt-4'
              type="text"
              placeholder="Search orders..."
            />
          </Col>
            <Col xl={1}>
              <Button className='btn-danger mt-4'>New User</Button>
            </Col>
          </Row>

          <Table striped bordered className='mt-4'>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Employee Id</th>
                <th>Organization Userid</th>
                <th>Email</th>
                <th>State</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.employeeId}</td>
                  <td>{employee.organizationUserId}</td>
                  <td>{employee.email}</td>
                  <td>{employee.state}</td>
                  <td className='text-center'>
                    <Icon
                      icon="mdi:delete"
                      width="20"
                      height="20"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div className='d-flex justify-content-center mt-4'>
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
              <Form onSubmit>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Enter state" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmployeeId">
                  <Form.Label>Employee Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter employee id" required />
                </Form.Group>
                <Button variant="primary" type="submit">Save Changes</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default OrganisationEmployeePage;
