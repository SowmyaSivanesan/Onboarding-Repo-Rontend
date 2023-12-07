import React from "react";
import './list.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
export function EmployeeList(){
    return(
        <>
        <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="/employee" class="btn btn-dark bg-light text-dark" data-toggle="modal"><FontAwesomeIcon icon={faPlus} /><span>Add New Employee</span></a>
						<a href="#deleteEmployeeModal" class="btn btn-dark bg-light text-danger" data-toggle="modal"><FontAwesomeIcon icon={faTrash} /><span>Delete</span></a>						
					</div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
                        <th>Name</th>
                        <th>Email</th>
						<th>Position</th>
						<th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>
                        <td>Aswin</td>
                        <td>aswin@mail.com</td>
						<td>developer</td>
                        <td>
                            <a href="/edit" class="btn edit" data-toggle="modal"><FontAwesomeIcon icon={faPenToSquare} /></a>
                            <a href="#/" class="delete btn" data-toggle="modal"><FontAwesomeIcon icon={faTrash} /></a>
                        </td>
                    </tr>
                    <tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox2" name="options[]" value="1"/>
								<label for="checkbox2"></label>
							</span>
						</td>
                        <td>hari</td>
                        <td>hari@mail.com</td>
						<td>developer</td>
                        <td>
                            <a href="/edit" class="edit btn" data-toggle="modal"><FontAwesomeIcon icon={faPenToSquare} /></a>
                            <a href="#deleteEmployeeModal" class="delete btn" data-toggle="modal"><FontAwesomeIcon icon={faTrash} /></a>
                        </td>
                    </tr>
					<tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox3" name="options[]" value="1"/>
								<label for="checkbox3"></label>
							</span>
						</td>
                        <td>vicky</td>
                        <td>vicky@mail.com</td>
						<td>python</td>
                        <td>
                            <a href="/edit" class="edit btn" data-toggle="modal"><FontAwesomeIcon icon={faPenToSquare} /></a>
                            <a href="#deleteEmployeeModal" class="delete btn" data-toggle="modal"><FontAwesomeIcon icon={faTrash} /></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </>
    );
}