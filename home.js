import React from "react";
import './home.css'
import { Link } from "react-router-dom";
export function Home() {
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="heading text-center mt-5">
                    <h1 className="text-dark">
                        EMPLOYEE DETAILS
                    </h1>
                </div>
                <div className="dec mt-5 pt-5">
                    <h3 className="mt-5 text-dark">
                    The Employee Management System is a simple and user-friendly web application designed to help organizations keep track of their employees. The system provides a clean and intuitive interface for listing all the employees currently working in the organization. Additionally, users have the capability to add new employees to the system, enabling seamless management of workforce information.
                    </h3>
                    <div className="addem">
                    <Link to='/employee'><button className="btn btn-light">Add Employee</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}