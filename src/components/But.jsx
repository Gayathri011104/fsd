import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const But = () => {
    var[button,setButton]=useState("")

    const react = ()=>{
        setButton("react")
    }
    const angu = ()=>{
        setButton("angular")
    }
    const nex = ()=>{
        setButton("next")
    }

    // useEffect(()=>{},[])
    useEffect(()=>{
        angu()
    },[])
    
  return (
    <div>
        <h1>welcome to {button}</h1> <br />
        <Button variant='contained' color="error" onClick={react} >React</Button>&nbsp; &nbsp;
        <Button variant='contained' color="success" onClick={angu} >Angular</Button>&nbsp; &nbsp;
        <Button variant='contained' color="secondary" onClick={nex} >Next</Button>
    </div>
  )
}

export default But