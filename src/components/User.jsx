import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const User = () => {
    var[user,setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setuser(res.data)
    })

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                       <TableCell sx={{ fontWeight: 'bold' }} >Name</TableCell>
                       <TableCell sx={{ fontWeight: 'bold' }} >Username</TableCell>
                       <TableCell sx={{ fontWeight: 'bold' }} >City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val)=>{
                        return(
                    <TableRow>
                        <TableCell>{val.name} </TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                    )
                })}

                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default User