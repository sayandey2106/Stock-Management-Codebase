import React from 'react';
import './Userlist.css';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 1591232345, "sayand@ghjsa", 24, 4.0),
    createData('Ice cream sandwich', 2371232345, "sayand@ghjsa.sd", 37, 4.3),
    createData('Eclair', 2621232345, "sayand@ghjsa.cg", 24, 6.0),
    createData('Cupcake', 3051232345, "sayand@ghjsas", 67, 4.3),
    createData('Gingerbread', 3561232345, "sayand@ghjsa.cpm", 49, 3.9),
  ];

  //toggle button
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
     ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  //toggle button

export default function Userlist() {
  return (
    <div className='container'>
  <TableContainer component={Paper} style={{margin:"auto"}}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"black", color:"white"}}>
            <TableCell style={{color:"white",fontSize:"20px"}}>Name</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Phone No</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Email ID</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Details</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" style={{fontSize:"18px"}} scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.calories}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>{row.fat}</TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
              <Button variant="contained">View ID</Button>
              </TableCell>
              <TableCell align="center" style={{fontSize:"18px"}}>
              <Switch  defaultChecked color="success" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
