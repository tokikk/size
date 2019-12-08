import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from "@material-ui/core/FormLabel";
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
    path: {
        width: 660,
        height: 80,
    },
})

export default function Path(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.path}>
            <Box m={2} p={2}>
                <div className={classes.inputLine}>
                    <TextField
                        disabled
                        fullWidth
                        label="Saved file path"
                        value={props.values.path}
                        InputProps={{
                            endAdornment:
                            <InputAdornment position="end">
                                <IconButton aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <IconButton aria-label="search">

                    </IconButton>
                </div>
            </Box>
        </Paper>
    )
}

