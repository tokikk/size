import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Ope from './ope.js'
import List from './list.js'
import './App.css';

const useStyles = makeStyles({})

export default function App() {
  const [setting, setSetting] = useState({})
  const [rows, setRow] = useState([]);
  const inputRef = useRef();

  const testdata = [
    { name: "test", size: 100, path: "testes" },
    { name: "test2", size: 200, path: "testes2" },
    { name: "test3", size: 300, path: "testes3" },
    { name: "test4", size: 400, path: "testes4" },
    { name: "test5", size: 500, path: "testes5" }
  ];

  const handleDelete = (e, name) => {
    e.preventDefault();

    const delIndex = rows.findIndex(rows => rows.name === name)
    let newRows = rows.concat()
    newRows.splice(delIndex, 1)
    setRow(newRows)
  };

  useEffect(
    () => {
      setRow(testdata)
    },
    [inputRef]
  );

  return (
    <div className="App">
      <Ope />
      <List data={rows} deletehandler={handleDelete} />
    </div>
  );
};