import './App.css';
import Main from './Main';
import EmployeeOrderList from './pages/EmployeeOrderList';
import EmployeeDashboard from './pages/EmployeeDashboard';
import { Route, Router, Routes } from 'react-router-dom';
import EmployeeDelivery from './pages/EmployeeDelivery';
import OrganisationDashboard from './pages/OrganisationDashboard';
import OrganisationEmployeePage from './pages/OrganisationEmployeePage';
import OrganisationCustomerPage from './pages/OrganisationCustomerPage';

function App() {
  return (
    <div className="App">
      <OrganisationCustomerPage/>
      {/* <EmployeeDashboard/> */}

    </div>
  );
}

export default App;
