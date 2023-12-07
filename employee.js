import React from "react";
import './employee.css'
import { Link } from "react-router-dom";
export function Employee() {
    const addToDB =()=> {
        var name = document.getElementById('employeeName').value;
        var email = document.getElementById('employeeEmail').value;
        var position = document.getElementById('employeePosition').value;

        alert("Added in DataBase")
    }
    return (
        <>
            <div class="main container form-container">
    <h2 class="text-center">Employee Details</h2>
    <form>
        <div class="form-group">
            <label for="employeeName">Employee Name:</label>
            <input type="text" class="form-control" id="employeeName" placeholder="Enter name" required/>
        </div>
        <div class="form-group">
            <label for="employeeEmail">Email:</label>
            <input type="email" class="form-control" id="employeeEmail" placeholder="Enter email" required/>
        </div>
        <div class="form-group">
            <label for="employeePosition">Position:</label>
            <input type="text" class="form-control" id="employeePosition" placeholder="Enter position" required/>
        </div>
        <Link to='/employeelist'><button type="button" class="btn btn-light">Add to DB</button></Link>
    </form>
</div>

        </>
    );
}