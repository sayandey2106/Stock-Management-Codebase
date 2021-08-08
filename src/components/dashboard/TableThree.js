import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Tooltip, IconButton, Icon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

const data = [
  { name: "client1", number: 4, id: 3 },
  { name: "client2", number: 24, id: 32 },
  { name: "client3", number: 4, id: 23 },
];

const cardcontent = {
  position: "relative",
  width: "769px",
};
const griditem = {
  margin: "0px",
  height: "50px",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
};
const Tablestyle = {
  position: "relative",
  width: "740px",
};
const headstyle = {
  position: "relative",
  backgroundColor: "#01579b",
};
const rowstyle = {
  position: "relative",
  backgroundColor: "#EEE",

};
const h3style = {
  position: "relative",
  paddingLeft: "20px",
  fontFamily: "'Montserrat', sans-serif",
};

class TableThree extends Component {
  render() {
    return (
      <div style={{ position: "relative", top: "-30px" }}>

        <CardContent style={cardcontent}>

          <Grid item style={griditem}>
            <h2 style={h3style}>Entries Today</h2>
          </Grid>

          <Table style={Tablestyle}>
            <TableHead style={headstyle}>
              <TableRow>
                <TableCell align="left">Employee ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Consumption</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row) => (
                <TableRow style={rowstyle}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                  <TableCell align="center">

                    <Tooltip title="Delete">
                      <IconButton>
                        <Icon>delete</Icon>
                      </IconButton>
                    </Tooltip>

                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </CardContent>
      </div>
    );
  }
}

export default TableThree;
