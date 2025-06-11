import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar >
            <Toolbar>
                <h3>Myapp</h3>&nbsp;
                <Link to="/login">
                <Button variant='contained' sx= {{ color:'white' }} >Login</Button>
                </Link>&nbsp;

                <Link to="/signup">
                <Button variant='contained' sx= {{ color:'white' }}>Signup</Button>
                </Link>&nbsp;

                <Link to="/name">
                <Button variant='contained' sx= {{ color:'white' }}>Name</Button>
                </Link>&nbsp;

                <Link to="/count">
                <Button variant='contained' sx= {{ color:'white' }}>Count</Button>
                </Link>&nbsp;

                <Link to="/button">
                <Button variant='contained'sx= {{ color:'white' }}>Button</Button>
                </Link>&nbsp;

                <Link to="/user">
                <Button variant='contained'sx= {{ color:'white' }}>User</Button>
                </Link>&nbsp;

                <Link to="/product">
                <Button variant='contained'sx= {{ color:'white' }}>Product</Button>
                </Link>&nbsp;

            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default NavBar