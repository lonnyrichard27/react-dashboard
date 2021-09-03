import React from 'react'
import './newuser.css'

const NewUser = () => {
    return (
        <div className="newuser">
            <h1 className="newusertitle">New User</h1>
            <form className="newuserform">
                <div className="newuseritem">
                    <label>Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newuseritem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                </div>
                <div className="newuseritem">
                    <label>Email</label>
                    <input type="email" placeholder="John@gmail.com" />
                </div>
                <div className="newuseritem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newuseritem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1758576" />
                </div>
                <div className="newuseritem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newuseritem">
                    <label>Gender</label>
                    <div className="newusergender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="emale">Female</label>
                    </div>
                </div>
                <div className="newuseritem">
                    <label>Active</label>
                    <select name="active" id="active" className="newuserselect">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </form>
                <button className="newuserbutton">Create</button>
        </div>
    )
}

export default NewUser
