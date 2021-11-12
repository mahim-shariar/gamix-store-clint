import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    let {users} = useAuth();
    let [orders, setOrder] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:8888/order?email=${users.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[users.email])
    
    const handleDelete = id =>{
        fetch(`http://localhost:8888/order/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('delete sucssesfully');
                const remainingOrder = orders.filter(order=>order._id !== id )
                setOrder(remainingOrder)
            }
        })
    }


    return (
        <div>
            <TableContainer component={Paper} elevation={10} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Game Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">User Name</TableCell>
                            <TableCell align="center"> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="center">$ {row.price}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align='center' onClick={()=>handleDelete(row._id)} > <Button> Delete </Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;