
import { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Button, TextField,
}  from '@material-ui/core';
import './EventSection.css';
import EventModal from './Modal/EventModal.js'
import getIntialEvents from '../Mock/InitialEvents.js';
import EventDetails from './EventDetails/EventDetails.js';
import AddEvent from './AddEvent/AddEvent.js';
import findStatus from '../util/DateCalculation.js';
import { cellHeaders, cellData } from '../util/AddFormConst';

const renderTableHead = () => cellHeaders.map(header => (<TableCell><h3>{header}</h3></TableCell>));

const renderTableCell = (row) => cellData.map(data => (
                      <TableCell>
                        { data === 'status' ? findStatus(row.date) : row[data] }
                      </TableCell>)
                    );

function EventSection() {
  const [events, setEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [addEvent, setAddEvent] = useState(false);
  // As of now search done by stringify the json.. normal filter is possible
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Instead of fetching from API have mocked
    const eventFromApi = getIntialEvents();
    setEvents(eventFromApi);
  }, []);

  const filteredEvent = search ?
    events.filter(event => JSON.stringify(event).toLowerCase().includes(search))
    : events;

  return (
      <div className="sectionTop">
        <h3>Slido Event administration manage and tracking Tool</h3>
        <div className="buttonRight">
          <Button variant="contained"  color="primary" onClick={() => setAddEvent(true)}>
            Create New Event
          </Button>
        </div>
        <div>
          <TextField
            style={{"width" : "80%"}}
            label="Search Event by Name/Id/Date etc"
            value={search}
            onChange={({ target: { value }}) => setSearch(value)}
          />
        </div>
        <Table aria-label="simple table">
          <TableHead>
            {renderTableHead()}
          </TableHead>
          <TableBody>
            {filteredEvent.map((row) => (
              <TableRow
                key={row.eventId}
                onClick={() => {
                  setModal(true);
                  setModalInfo(row);
              }}
              >
                {renderTableCell(row)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <EventModal isOpen={modal || addEvent} setModal={setModal} >
          {modalInfo ? <EventDetails
            event={modalInfo}
            closeModal={() => {
              setModal(false);
              setModalInfo(false);
            }}
            /> :
           <AddEvent
            events={events}
             setEvents={setEvents}
             closeModal={() => {
               setAddEvent(false);
               setModal(false);
             }}
            />}
        </EventModal>
      </div>
  );
}

export default EventSection;
