import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
    return (
        <div className="user">
            <div className="usertitlecontainer">
                <h1 className="usertitle">Edit User</h1>
                <Link to="/newuser">
                <button className="useraddbutton">Create</button>
                </Link>
            </div>
            <div className="usercontainer">
                <div className="usershow">
                    <div className="usershowtop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="usershowimg" />
                        <div className="usershowtoptitle">
                            <span className="usershowusername">Deborah Lapidoth</span>
                            <span className="showusertitle">Software Tester</span>
                        </div>
                    </div>
                    <div className="usershowbottom">
                        <span className="usershowtitle">Account Detials</span>
                        <div className="usershowinfo">
                            <PermIdentity className="usershowicon" />
                            <span className="usershowinfotitle">345637537463</span>
                        </div>
                        <div className="usershowinfo">
                            <CalendarToday className="usershowicon" />
                            <span className="usershowinfotitle">01/12/2029</span>
                        </div>
                        <span className="usershowtitle">Contact Detials</span>
                        <div className="usershowinfo">
                            <PhoneAndroid className="usershowicon" />
                            <span className="usershowinfotitle">+2334343</span>
                        </div>
                        <div className="usershowinfo">
                            <MailOutline className="usershowicon" />
                            <span className="usershowinfotitle">ame@gmail.com</span>
                        </div>
                        <div className="usershowinfo">
                            <LocationSearching className="usershowicon" />
                            <span className="usershowinfotitle">Zion | Heaven</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userupdate">
                    <span className="userupdatetitle">Edit</span>
                    <form className="userupdateform">
                        <div className="userupdateleft">
                            <div className="userupdateitem">
                                <label> Username </label>
                                <input type="text" placeholder="lawson" className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Derin Asake" className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label> Email </label>
                                <input type="text" placeholder="dee@gmail.com" className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label>Phone </label>
                                <input type="text" placeholder="+!232342" className="userupdateinput" />
                            </div>
                            <div className="userupdateitem">
                                <label> Address </label>
                                <input type="text" placeholder="London | Ontario" className="userupdateinput" />
                            </div>
                        </div>
                        <div className="userupdateright">
                            <div className="userupdateupload">
                                <label htmlFor="file">
                                    <Publish className="userupdateicon" />
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="userupdateimage" />
                                </label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className="userupdatebutton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
