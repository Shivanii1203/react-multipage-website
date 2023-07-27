import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const header = {
        display:'inline-block',
        padding:'10px',
    }

    const header1 = {
        textDecoration:'none',
        color : "black",
        fontSize :"20px",
        marginRight : "20px"
    }

    const header2 = {
        position:'absolute',
        right : '0px',
        backgroundColor: ""
    }
    

  return (
    <div>
        <ul style={header2}>
            <li style={header}>
                <Link to='/' style={header1}>Home</Link>
                {/* <a href=""></a> */}
            </li>
            <li style={header}>
                <Link to='/about' style={header1}>About</Link>
            </li>
            <li style={header}>
                <Link to="/courses" style={header1}>Courses</Link>
            </li>
            <li style={header}>
                <Link to="/contact" style={header1}>contact us</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar