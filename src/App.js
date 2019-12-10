import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Size from './size.js'
import Path from './path'
import List from './list.js'
import './App.css';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles({
  App: {
    textAlign: "left",
    fontSize: 2,
  }
})

export default function App() {
  const classes = useStyles();
  const [mode, setMode] = useState('percentage');
  const [values, setValue] = useState({
    percent: "",
    height: "",
    width: "",
    path: "",
  });
  const [rows, setRow] = useState([]);
  const inputRef = useRef();
  const { ipcRenderer } = window

  const testdata = [
    { name: "test", size: 100, path: "testes" },
    { name: "test2", size: 200, path: "testes2" },
    { name: "test3", size: 300, path: "testes3" },
    { name: "test4", size: 400, path: "testes4" },
    { name: "test5", size: 500, path: "testes5" }
  ];

  const handleChange = (e) => {
    setMode(e.target.value);
    setValue("percent", "")
    setValue("height", "")
    setValue("width", "")
  };

  const handleValue = (e, name) => {
    setValue(name, e.target.value)
  };

  const handleDelete = (e, name) => {
    e.preventDefault();

    const delIndex = rows.findIndex(rows => rows.name === name)
    let newRows = rows.concat()
    newRows.splice(delIndex, 1)
    setRow(newRows)
  };

  const { dialog } = window;
  const openDialog = (e) => {
    alert('renderer');
    //let directory = dialog.showOpenDialog(null, { properties: ['openDirectory'] });
    const directory = ipcRenderer.sendSync('open-dialog', 'test');
    alert('renderer2');
    console.log('rend:' + directory)
    setValue('path', directory);
  };

  useEffect(
    () => {
      setRow(testdata)
    },
    [inputRef]
  );

  return (
    <div className={classes.App}>
      <Box m={1}>
        <Size changehandler={handleChange} valuehandler={handleValue} mode={mode} values={values} />
      </Box>
      <Box m={1}>
        <Path values={values} dialoghandler={openDialog} />
      </Box>
      <Box m={1}>
        <List data={rows} deletehandler={handleDelete} />
      </Box>
    </div>
  );
};