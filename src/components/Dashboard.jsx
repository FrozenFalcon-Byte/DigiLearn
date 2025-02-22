import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Dashboard() {
  return (
    <div className='home min-h-screen w-full'>
        <nav className="navbar">
            <div className="logo">
                <a href="/">DigiLearn</a>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/signin">Home</Link></li>
                    <li><Link to="/signup">Courses</Link></li>
                    <li><Link to="/parentlogin">Account</Link></li>
                    <li><i class="ri-menu-4-line"></i></li>
                </ul>
            </div>
      </nav> 

      <div className="container">
        <div className="heading">
            <h1>
                Hello, <span>Ajinkya</span>
            </h1>
        </div>
        <div className="inner-container">
        <div className="left">
            <div className="upper-container">
                <div className="left-upper-container">
                    <h3>Current Course Progress</h3>
                    <h1>85%</h1>
                    <div className="progress-bar"></div>
                </div>
                <div className="right-upper-container">
                    <h3>Current Course</h3>
                    <h1>Java Basics to Advanced</h1>
                </div>
            </div>

            <div className="lower-container">
                <div className="cards c1">
                    <h3>
                        No. of courses completed
                    </h3>
                    <h1>24</h1>
                </div>
                <div className="cards c2">
                    <h3>Notifications</h3>
                    <h1>3</h1>
                </div>
                <div className="cards c3">
                    <h3>Average test score</h3>
                    <h1>96%</h1>
                </div>
            </div>
        </div>

        <div className="right">
            <div className="card">
                <h1>Quick Actions</h1>
                <div className="list-container">
                    <ul>
                        <li>Start a new Course <i class="ri-arrow-right-up-line"></i></li>
                        <div className="border-div"></div>
                        <li>View certificates <i class="ri-arrow-right-up-line"></i></li>
                        <div className="border-div"></div>
                        <li>Test Results <i class="ri-arrow-right-up-line"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;