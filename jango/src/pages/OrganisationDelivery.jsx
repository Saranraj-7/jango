import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Card, Col, Form, Pagination, Row, Table } from 'react-bootstrap'


const OrganisationDelivery = () => {
  return (
    <div>
         <Row className=' m-0 vh-100'>


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
Delivery Details                            </h5>
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
        <th>Delivery Id</th>
        <th>Delivery Address</th>
        <th>Phone Number</th>
        <th>Cost </th>
        <th>OrderID</th>
        <th>shippingMethod</th>
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

export default OrganisationDelivery