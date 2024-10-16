import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Form, Pagination, Row, Table } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import '../App.css';


const EmployeeOrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedStatus, setSelectedStatus] = useState('');
  const navigate = useNavigate();

  
  const orders = [
    { id: 'ORD001', name: 'Mark Otto', phone: '123-456-7890', status: 'Confirmed', date: '2023-10-05' },
    { id: 'ORD002', name: 'Jacob Thornton', phone: '234-567-8901', status: 'Pending', date: '2023-10-04' },
    { id: 'ORD003', name: 'Larry Bird', phone: '345-678-9012', status: 'Shipped', date: '2023-10-03' },
    { id: 'ORD004', name: 'John Smith', phone: '456-789-0123', status: 'Delivered', date: '2023-10-02' },
    { id: 'ORD005', name: 'Paul Adams', phone: '567-890-1234', status: 'Shipped', date: '2023-10-01' },
    { id: 'ORD006', name: 'Anna Blake', phone: '678-901-2345', status: 'Pending', date: '2023-09-30' },
    { id: 'ORD007', name: 'Sara Hall', phone: '789-012-3456', status: 'Confirmed', date: '2023-09-29' },
    { id: 'ORD008', name: 'Chris Paul', phone: '890-123-4567', status: 'Delivered', date: '2023-09-28' },
    { id: 'ORD009', name: 'Jane Doe', phone: '901-234-5678', status: 'Shipped', date: '2023-09-27' },
    { id: 'ORD010', name: 'Michael Jordan', phone: '012-345-6789', status: 'Confirmed', date: '2023-09-26' },

  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearchQuery =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.phone.includes(searchQuery) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatusFilter = selectedStatus === '' || order.status === selectedStatus;

    return matchesSearchQuery && matchesStatusFilter;
  });

  const totalEntries = filteredOrders.length;


  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`); 
  };

  return (
    <Row className='p-0 m-0 vh-100'>
      <Col xl={2} className='sidebar p-3'>
        <div className='sidebar h-100'>
          <ul className='list-unstyled'>
            <div className=" ">
                        <h2 className='ps-3 pt-2'>JANGO</h2>
                    </div>            
            <li className='mb-4 mt-4 '>
              <h5 className='sidebar-item'>
                <Icon icon="ic:outline-dashboard" width="22" height="22" className='me-2' />
                Dashboard
              </h5>
            </li>
            <li className='mb-4'>
              <h5 className='sidebar-item'>
                <Icon icon="lsicon:order-outline" width="22" height="22" className='me-2' />
                Orders List
              </h5>
            </li>
            <li className='mb-4'>
              <h5 className='sidebar-item'>
                <Icon icon="carbon:delivery" width="22" height="22" className='me-2' />
                Delivery Details
              </h5>
            </li>
          </ul>
        </div>
      </Col>

      <Col xl={10} className='p-4'>
      <Card className='p-2 fs-5 card-bg'>Orders List</Card>
        <Row className='d-flex justify-content-between mt-3 mb-3'>
          <Col xl={2}>
            <Form.Control
              className='search-bar shadow-sm'
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            />
          </Col>

          <Col xl={6} className="d-flex align-items-center justify-content-end">
            <Form.Group>
              <Form.Select
                aria-label="Filter by Status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Table className='shadow-sm table-bg table-hover'>
          <thead className='table-header'>
            <tr>
              <th>Sno</th>
              <th>Order Id</th>
              <th>Order Name</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Order Confirmed Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={order.id} onClick={() => handleRowClick(order.id)} className='clickable-row'>
                <td>{indexOfFirstEntry + index + 1}</td>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="justify-content-between align-items-center mt-3 mb-3">
          <Col xl={6}>

            <div className="d-flex align-items-center">
              <span className="me-2">Showing</span>
              <Form.Select
                className='entries-dropdown mx-2'
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1); 
                }}
                style={{ width: 'auto' }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </Form.Select>
              <span className="mx-2">entries</span>
              <span className="fw-bold">{indexOfFirstEntry + 1}</span>
              <span className="mx-1">to</span>
              <span className="fw-bold">{Math.min(indexOfLastEntry, totalEntries)}</span>
              <span className="mx-1">of</span>
              <span className="fw-bold">{totalEntries}</span>
            </div>
          </Col>


          <Col xl={6} className="d-flex justify-content-end">
            <Pagination>
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, pageIndex) => (
                <Pagination.Item
                  key={pageIndex + 1}
                  active={currentPage === pageIndex + 1}
                  onClick={() => setCurrentPage(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EmployeeOrderList;
