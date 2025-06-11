import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Name = () => {
    var[name,setName]=useState("g")
    var[a,seta]=useState()

    const inputHandler=(e)=>{
        setName(e.target.value)
    }
        const onClick=()=>{
            seta(name)
        }
  return (
    <div>
        <h1>Welcome {a} </h1>
        <TextField variant='outlined' label='Enter Name' onChange={inputHandler}/> <br /><br />
        <Button variant='contained' onClick={onClick} >Add</Button>
    </div>
  )
}

export default Name