import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import EmployeeOrderList from './pages/EmployeeOrderList';
import OrderDetails from './pages/OrderDetails';
import OrganisationCustomerPage from './pages/OrganisationCustomerPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import OrganisationOrders from './pages/OrganisationOrders';
import EmployeeDelivery from './pages/EmployeeDelivery';
import OrganisationDashboard from './pages/OrganisationDashboard';
import OrganisationDelivery from './pages/OrganisationDelivery';  
import LoginPage from './pages/Login Page';
import OrganisationEmployeePage from './pages/OrganisationEmployeePage';
import { Customer } from './pages/Customer';
import SignupPage from './pages/SignUp';
import { OrderResult } from './pages/OrderResult';

const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<SignupPage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/employee/orders" element={<EmployeeOrderList />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/organisation/customers" element={<OrganisationCustomerPage />} />
        <Route path='/organisation/employees' element={<OrganisationEmployeePage/>}/>
        <Route path='organisation/dashboard' element={<OrganisationDashboard/>}/>
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/organisation/orders" element={<OrganisationOrders />} />
        <Route path="/employee/delivery" element={<EmployeeDelivery />} />
        <Route path="/organisation/dashboard" element={<OrganisationDashboard />} />
        <Route path="/organisation/delivery" element={<OrganisationDelivery />} />
        <Route path='/customer/dashboard' element={<Customer/>}/>
        <Route path='/customer/delivery' element={<OrderResult/>}/>

      </Routes>
    </Router>
  );
};

export default App;
