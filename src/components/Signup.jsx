import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Signup Page</h1>
        <TextField label="Name" variant="outlined" /> <br/><br/>
        <TextField label="Email" varient="outlined" /> <br/><br/>
        <TextField label="Password" variant="outlined" /> <br/><br/>
        <Button variant="contained">SignUp</Button>
    </div>
  )
}

export default Signup