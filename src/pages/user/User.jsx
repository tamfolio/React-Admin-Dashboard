import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import './user.css'

function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='newUser'>
              <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
              <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Sofware Engineer</span>
            </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTItle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTItle">annabeck99</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTItle">10.12.1999</span>
                </div>
                <span className="userShowTItle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTItle">+1 123 456 67</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTItle">annabeck99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTItle">NewYork, USA</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <div className="userUpdateTitle">Edit</div>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text"  placeholder='annabeck99' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text"  placeholder='Anna Becker' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="text"  placeholder='annabeck99@gmail.com' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone Number</label>
                    <input type="text"  placeholder='+1 123 456 67' className='userUpdateInput' />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text"  placeholder='NewYork, USA' className='userUpdateInput' />
                  </div>
                </div>
                <div className="userUpdateRight">
                <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default User