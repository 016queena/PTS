import React from "react";
import { Link } from "react-router-dom";
import './../styles/dashboard.css';

function AdminDashboard(){
    const adminProfile = {
        name: 'Urooj Kanwal',
        position: 'Admin',
        department: 'Administration',
        email: 'admin@example.com',
        phone: '123456789',
      };
    
      const handleLogout = () => {
        // Handle logout logic here
      };

      return(
        <div className="dashboard">
            <div className="page-header">
                <h3>Admin panel</h3>
                <Link to = './components/login'>
                    <button className="button1">logout</button>
                </Link>
                
            </div>

            <div className="main">
                <div className="information">
                    
                </div>

                <div className="navigator">

                </div>               
            </div>
        </div>
      );
}
export default AdminDashboard;