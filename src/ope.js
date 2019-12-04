import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    paper: {
        width: 660,
        height:300,
    },
})

export default function List(props) {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>

            </Paper>
        </div>

    )

}