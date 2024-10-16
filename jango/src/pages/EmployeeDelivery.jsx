import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Form, Pagination, Row, Table } from 'react-bootstrap';
import '../App.css';
 
import { Icon } from '@iconify/react/dist/iconify.js';

const EmployeeDelivery = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event, page) => {
    setCurrentPage(page);
  };
  return (

    <Row className='p-0 m-0 vh-100'>

   
<Col xl={2} className="sidebar-color p-0 ">
                <div className="sidebar side-round h-100 d-flex flex-column">
                <div className=" ">
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
                                Order List
                            </h5>
                        </li>
                        <li className="menu-item py-2 px-3 ">
                            <h5>
                                <Icon icon="fluent:person-48-regular" width="22" height="22" className="me-2" />
                                Delivery Details
                            </h5>
                        </li> 
                    </ul>
                </div>
            </Col>


      <Col xl={10} className='p-4'>
        <Card className='p-2  fs-5 card-bg'>Delivery Details</Card>
        <Row className='d-flex justify-content-between'>
        <Col xl={2}>
            <Form.Control
              className='search-bar shadow-sm mt-4'
              type="text"
              placeholder="Search orders..."
            />
          </Col>
        </Row>
        <Table striped bordered className='mt-4'>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Order Id</th>
              <th>Order Name</th>
              <th>Delivery Address</th>
              <th>Delivery Status </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>mar-1</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>mar-1</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>marks</td>
              <td>Larry the Bird</td>
              <td>mar-1</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <div className='d-flex justify-content-center mt-4'>

<Pagination  >
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>


    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item active>{3}</Pagination.Item>
    <Pagination.Item >{4}</Pagination.Item>
    <Pagination.Item>{5}</Pagination.Item>

    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
</div>
      </Col>

    </Row>
  );
};

export default EmployeeDelivery;
