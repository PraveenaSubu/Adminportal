import React from 'react'

function UserCreate() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-lg-6">
                    <label>Name</label>
                    <input type={"text"} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>E-Mail</label>
                    <input type={"text"} className="form-control" />
                </div>
                <div className="col-lg-4">
                    <label>Country</label>
                    <select className="form-control">
                        <option>India</option>
                        <option>USA</option>
                        <option>America</option>
                    </select>
                </div>
                <div className="col-lg-4">
                    <label>State</label>
                    <select className="form-control">
                        <option>India</option>
                        <option>USA</option>
                        <option>America</option>
                    </select>
                </div>
                <div className="col-lg-4">
                    <label>City</label>
                    <select className="form-control">
                        <option>India</option>
                        <option>USA</option>
                        <option>America</option>
                    </select>
                </div>
                <div className="col-lg-3" mt-3>
                    <input type={"submit"} value="Create" className="btn-btn-primary" />


                </div>
            </div>

        </div>
    )
}

export default UserCreate