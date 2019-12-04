import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    paper: {
        width: 670,
        height: 250,
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    smallButton: {
        padding: 3
    },
    iconColumn: {
        width: 30
    },
})

export default function List(props) {
    const classes = useStyles();
    const [image, setimage] = useState("");

    const FileDrop = (e) => {

    }

    const onRowClick = (e, name) => {
        setimage("")
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={9} p={2}>
                        <Table className={classes.table} size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.iconColumn} />
                                    <TableCell>FileName</TableCell>
                                    <TableCell>FilePath</TableCell>
                                    <TableCell align="right">FileSize</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.data.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell className={classes.iconColumn}>
                                            <IconButton onClick={e => props.deletehandler(e, row.name)} className={classes.smallButton}>
                                                <Delete fontSize="small"/>
                                            </IconButton>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.path}</TableCell>
                                        <TableCell align="right">{row.size}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={3} p={2}>
                        <img src={image} />
                    </Grid>
                </Grid>

            </Paper>
        </div>
    );
}