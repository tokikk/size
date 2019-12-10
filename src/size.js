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
    size: {
        width: 660,
        height: 110,
    },
    path: {
        width: 660,
        height: 200,
    },
    form: {
        textAlign: "left",
    },
    percent: {
        width: 250,
    },
    inputLine: {
        display: "flex",
        margin: 2,
    },
    inputField: {
        width: 80,
    }
})

export default function Size(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.size}>
                <Box m={2}>
                    <FormControl className={classes.form}>
                        <RadioGroup  name="mode" value={props.mode} onChange={(e) => props.changehandler(e)}>
                            <div className={classes.inputLine}>
                                <div className={classes.percent}>
                                    <FormControlLabel value="percentage" control={<Radio />} label="割合で指定する(1-100)" />
                                    <Box px={4}>
                                        <TextField
                                            className={classes.inputField}
                                            disabled={props.mode !== "percentage"}
                                            label="Percentage"
                                            type="number"
                                            size="small"
                                            value={props.values.percent}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                                shrink: "true",
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={e => props.valuehandler(e, "percentage")}
                                        />
                                    </Box>
                                </div>
                                <div>
                                    <FormControlLabel value="absolute" control={<Radio />} label="絶対値で指定する" />
                                        <Box px={4} className={classes.inputLine}>
                                            <TextField
                                                className={classes.inputField}
                                                disabled={props.mode !== "absolute"}
                                                label="Height"
                                                value={props.values.height}
                                                type="number"
                                                size="small"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">px</InputAdornment>,
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={e => props.valuehandler(e, "height")}
                                            />
                                            <Typography variant="body1">　</Typography>
                                            <TextField
                                                className={classes.inputField}
                                                disabled={props.mode !== "absolute"}
                                                label="Width"
                                                value={props.values.width}
                                                type="number"
                                                size="small"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">px</InputAdornment>,
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={e => props.valuehandler(e, "width")}
                                            />
                                        </Box>
                                </div>
                            </div>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Paper>
        </React.Fragment>
    )
}