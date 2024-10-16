import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Card, Col, Form, Pagination, Row, Table } from 'react-bootstrap'

const OrganisationOrders = () => {
  return (
    <div>
      <Row className='p-0 m-0 vh-100'>

        <Col xl={2} className='sidebar-color'>
          <div className='sidebar side-round '>
            <ul className='menu mt-5 px-3 list-unstyled text-white'>
            <div className=" ">
                        <h2 className='ps-3 pt-2'>JANGO</h2>
                    </div>
              <li >
                <h4>
                  <span><Icon icon="ic:outline-dashboard" width="20" height="20" /></span>
                  Dashboard</h4>
              </li>
              <li className='pt-2'>
                <h4>
                  <Icon icon="fluent:person-support-16-filled" width="20" height="20" />
                  Employee Details</h4>
              </li>
              <li className='pt-2'>
                <h4>
                  <Icon icon="fluent:person-48-regular" width="20" height="20" />
                  Customer Details</h4>
              </li>
              <li className='pt-2'>
                <h4>
                  <span><Icon icon="carbon:delivery" width="20" height="20" /></span>
                  Orders List</h4>
              </li>
              <li className='pt-2'>
                <h4>
                  <span><Icon icon="carbon:delivery" width="20" height="20" /></span>
                  Delivery Details</h4>
              </li>
            </ul>
          </div>
        </Col>

        <Col xl={10} className='mt-4'>
          <Card className='p-2  fs-5'>Order List</Card>
          <Row className='d-flex justify-content-between'>
            <Col xl={3} >
              <Form.Control className='mt-4' type="text" placeholder="Normal text" />
            </Col>
          </Row>
          <Table striped bordered className='mt-4'>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Order Id</th>
                <th>Order Name</th>
                <th>Order Date</th>
                <th>OrderStatus </th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>mar-1</td>
                <td>@mdo</td>
                <td className='text-center'><Icon icon="fluent-mdl2:completed-solid" width="20" height="20" /></td>
                <td className='text-center'><Icon icon="mdi:delete" width="20" height="20" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>mar-1</td>
                <td>@fat</td>
                <td className='text-center'><Icon icon="tdesign:pending" width="20" height="20" /></td>
                <td className='text-center'><Icon icon="mdi:delete" width="20" height="20" /></td>
              </tr>
              <tr>
                <td>3</td>
                <td>marks</td>
                <td>Larry the Bird</td>
                <td>mar-1</td>
                <td>@twitter</td>
                <td className='text-center'><Icon icon="fluent-mdl2:completed-solid" width="20" height="20" /></td>
                <td className='text-center'><Icon icon="mdi:delete" width="20" height="20" /></td>
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
    </div>
  )
}

export default OrganisationOrders