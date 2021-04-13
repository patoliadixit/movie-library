import React from 'react'
import { Home } from '@material-ui/icons'
import "./Header.css"
import Button from "@material-ui/core/Button"
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Search from './Search'

function Header() {
  return (
    <div className="header">
      <Button
        style={{
          padding: 2,
          width: "80px",
          fontSize: "20px",
          height: "40px"
        }}
        variant="contained"
        component={Link} to="/"
        color="secondary"
      >
        Home
        </Button>
      <Search />
      {/* <Button
        variant="contained"
        color="primary"
        style={{ padding: 0 }}
      >
        log In
      </Button> */}
      {/* <Button
        variant="contained"
        color="primary"
        style={{ padding: 0 }}
      >
        Register
      </Button> */}
      {/* <div className="signIn_class">Sign In</div> */}
      {/* <div className="signIn_class">Sign Up</div> */}
    </div>
  )
}

export default Header
