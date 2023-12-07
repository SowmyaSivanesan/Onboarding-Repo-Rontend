import React from "react";
export function Edit(){
 const submitForm = () => {
        var name = document.getElementById('employeeName').value;
        var email = document.getElementById('employeeEmail').value;
        var position = document.getElementById('employeePosition').value;

       alert("submited")
    }
    return(
        <>
       <div class="container form-container">
    <h1 class="text-center">Edit Employee</h1>
    <form>
        <div class="form-group">
            <label for="employeeName">Employee Name:</label>
            <input type="text" class="form-control" id="employeeName" placeholder="Enter name" required/>
        </div>
        <div class="form-group">
            <label for="employeeEmail">Email Address:</label>
            <input type="email" class="form-control" id="employeeEmail" placeholder="Enter email" required/>
        </div>
        <div class="form-group">
            <label for="employeePosition">Position:</label>
            <input type="text" class="form-control" id="employeePosition" placeholder="Enter position" required/>
        </div>
        <button type="button" class="btn btn-light" onclick="submitForm()">Submit</button>
    </form>
</div>
        </>
    );
}