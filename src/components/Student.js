import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Student() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [students, setStudents] = useState([])

    const paperStyles = {padding:'50px 20px', width:'85ch', margin:"auto auto"}

    const handleClick = (e) => {
        e.preventDefault()
        const student = {name, address}
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        }
        )
    }, [])

    return (
        <Container sx={{ marginTop: '2rem' }}>
            <Paper elevation={3} style={paperStyles}>
                <h1 style={{color:"blueviolet"}}>Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 3, width: '75ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="filled-basic-name" label="Student Name" variant="filled"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField id="filled-basic-address" label="Student Address" variant="filled"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                </Box>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
            </Paper>

            <h1 style={{color:"blueviolet"}}>Students List</h1>

            <Paper elevation={3} style={paperStyles}>
                
                {students.map(student => (
                    <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
                        Id:{student.id}<br />
                        Name:{student.name}<br />
                        Address:{student.address}
                    </Paper>
                ))}
            </Paper>
        </Container>
  );
}
