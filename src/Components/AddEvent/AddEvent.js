import {
  Button, TextField,
}  from '@material-ui/core';
import React, { useState, useEffect, useCallback } from 'react';
import fieldMap, { initialState } from '../../util/AddFormConst.js';

const renderInput = ({ field, value, error, setError, setValue }) => (
  <div>
    <TextField
      style={{"width" : "100%"}}
      type={field === "date" ? "date" : ""}
      label={fieldMap[field]}
      value={value[field]}
      error={error[field]}
      helperText={error[field]}
      onChange={(event) => {
        const tmpVal = { ...value }
        const tmpErr = { ...error }
        tmpVal[field] = event.target.value;
        setValue(tmpVal);
        tmpErr[field] = event.target.value ? false : 'Please enter valid value';
        setError(tmpErr);
      }}
    />
    <br /><br />
  </div>
);

function AddEvent({ closeModal, events, setEvents }) {
  const [value, setValue] = useState(initialState.value);
  const [error, setError] = useState(initialState.error);

  const handleSubmit = useCallback(() => {
    const errorFields = Object.keys(initialState.value).filter(field => value[field] === '');
    if(errorFields.length === 0) {
      const tEvents = [ ...events ];
      const tValue = { ...value };
      tValue.eventId = events.length + 1;
      tEvents.push(tValue);
      setEvents(tEvents);
      closeModal();
    } else {
      const tError = { ...error };
      errorFields.forEach((field) => {
        tError[field] = 'Please enter valid value';
      });
      setError(tError);
    }
  }, [events, value, error, closeModal]);

  return (
    <div className="alignCenter">
      <h2>Add Event</h2>
      {Object.keys(initialState.value).map(
        (field) => renderInput({ field, value, error, setError, setValue }))}
      <Button color="primary" onClick={handleSubmit}>
        <b>Add Event</b>
      </Button>
      <Button color="secondary" onClick={closeModal}>
        <b>Close</b>
      </Button>
    </div>
  );
}

export default AddEvent;
