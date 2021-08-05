import moment from 'moment';

const fieldMap = {
  eventTitle: 'Event Title*',
  description: 'Event Description*',
  onlineLink: 'Link*',
  venue: 'Venue*',
  latitude: 'Latitude*',
  longitude: 'Longitude*'
};

export const cellHeaders = [
  "Event Title",
  "Event Id",
  "Date",
  "Status"
];

export const cellData = [
  "eventTitle",
  "eventId",
  "date",
  "status"
];

export const initialState = {
  value: {
    eventTitle: '',
    description: '',
    onlineLink: '',
    venue: '',
    latitude: '',
    longitude: '',
    date: moment().format('YYYY-MM-DD'),
  },
  error: {
    eventTitle: false,
    description: false,
    onlineLink: false,
    venue: false,
    latitude: false,
    longitude: false,
    date: false
  }
};

export default fieldMap;
