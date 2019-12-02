import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';


const List = (props) => {
  const classes = useStyles();
  const [row, setRow] = useState();

  const FileDrop = (e) => {

  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table" onDrop="">
          <TableHead>
            <TableRow>
              <TableCell>FileName</TableCell>
              <TableCell align="right">FileSize</TableCell>
              <TableCell align="right">FilePath</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.size}</TableCell>
                <TableCell align="right">{row.path}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
