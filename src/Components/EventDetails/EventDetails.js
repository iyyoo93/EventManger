import {
  Table, TableCell,
  TableRow, Button, CircularProgress
}  from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './EventDetails.css';

const renderRow = (key, value) => (
  <TableRow>
    <TableCell className="rowStyle"><b>{key}</b></TableCell>
    <TableCell className="leftAlign"><b>{value}</b></TableCell>
  </TableRow>
);

function EventDetails({event, closeModal}) {
  const [loader, setLoader] = useState(true);
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherReport = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${event.latitude}&lon=${event.longitude}`);
        const weatherJson = await weatherReport.json()

        // Setting uurent weather but we can parse as per datein future
        const weather = weatherJson.properties.timeseries[0].data.next_12_hours.summary.symbol_code;
        setLoader(false);
        setWeather(weather);
      } catch(e) {
        setLoader(false);
        setWeather('Failed to Fetch weather report');
      }
    };
    getWeather();
  }, []);

  return (
    <div className="alignCenter">
      <h2>Event details</h2>
      <Table>
        {renderRow("Id:", event.eventId)}
        {renderRow("Title:", event.eventTitle)}
        {renderRow("Description:", event.description)}
        {renderRow("Date:", event.date)}
        {renderRow("Venue:", event.venue)}
        {renderRow("Link:", event.onlineLink ? event.onlineLink : "This meeting dont have online link")}
        {renderRow("Expected Weather:", loader ? <CircularProgress /> : weather)}
      </Table><br />
      <Button color="primary" onClick={closeModal}>
        <b>Close</b>
      </Button>
    </div>
  );
}

export default EventDetails;
