import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  location: string,
  distance: string,
  description: string,
) {
  return { name, location, distance, description };
}

const rows = [
  createData('08/03/2024', "Ward road, Texas, 7843", "600km", "Shipment delayed"),
  createData('02/02/2024', "Ward road, Texas, 7843","3000km","Route to delivery location"),
  createData('12/12/2023', "Ward road, Texas, 7843", "200km", "Carrier departed pick-up location with shipment"),
  createData('05/01/2024', "Ward road, Texas, 7843", "500km", "Arrived at pickup location"),
  createData('06/03/2024', "Ward road, Texas, 7843", "200km","Shipment delayed"),
  createData('06/03/2024', "Ward road, Texas, 7843", "200km","Shipment delayed"),
  createData('06/03/2024', "Ward road, Texas, 7843", "200km","Shipment delayed"),
  createData('06/03/2024', "Ward road, Texas, 7843", "200km","Shipment delayed"),
  createData('06/03/2024', "Ward road, Texas, 7843", "200km","Shipment delayed"),
  createData('06/03/2024', "Ward road, Texas, 7843", "200km","Shipment delayed"),
 
];

export default function OrderDetail() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            bgcolor:"#f8f9fb",
            fontFamily:"Poppins",
            
          }} >
            <TableCell>Date </TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Distance</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.distance}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
