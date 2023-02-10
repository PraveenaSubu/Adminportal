import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Userlist() {
    //example of hook

    useEffect(() => {
        //on load
        console.log("Hello on load")
    }, [])

    useEffect(() => {
        return () => {
            console.log("Bye...")
        }
    }, [])
    const data = [
        {
            id: 1,
            username: "User 1",
            email: "user1@gmail.com",
            country: "India",
            state: "TN",
            city: "Chennai"
        },
        {
            id: 2,
            username: "User 2",
            email: "user2@gmail.com",
            country: "India",
            state: "TN",
            city: "Madurai"
        },
        {
            id: 3,
            username: "User 3",
            email: "user3@gmail.com",
            country: "India",
            state: "TN",
            city: "Karur"
        },
    ];
    const [searchParams, setParams] = useSearchParams()
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User-list</h1>

                <Link to="/portal/user-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create User</Link>

            </div>
            {/* <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p> */}



            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    data.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.country}</td>
                                                <td>{user.state}</td>
                                                <td>{user.city}</td>
                                                <th>
                                                    <Link to={`/portal/user-view/${user.id}`} className="btn btn-info btn-sm mr-1">
                                                        View
                                                    </Link>
                                                    <button className="btn btn-primary btn-sm mr-1">Edit</button>
                                                    <button className="btn btn-danger btn-sm mr-1">Delete</button>
                                                </th>
                                            </tr>)
                                    })
                                }

                                {/* <tr>
                                    <td>Zorita Serrano</td>
                                    <td>Software Engineer</td>
                                    <td>San Francisco</td>
                                    <td>56</td>
                                    <td>2012/06/01</td>
                                    <td>$115,000</td>
                                    <th>
                                        <button className="btn btn-info btn-sm mr-1">View</button>
                                        <button className="btn btn-primary btn-sm mr-1">Edit</button>
                                        <button className="btn btn-danger btn-sm mr-1">Delete</button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>Jennifer Acosta</td>
                                    <td>Junior Javascript Developer</td>
                                    <td>Edinburgh</td>
                                    <td>43</td>
                                    <td>2013/02/01</td>
                                    <td>$75,650</td>
                                    <th>
                                        <button className="btn btn-info btn-sm mr-1">View</button>
                                        <button className="btn btn-primary btn-sm mr-1">Edit</button>
                                        <button className="btn btn-danger btn-sm mr-1">Delete</button>
                                    </th>
                                </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlist