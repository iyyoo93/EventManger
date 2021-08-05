const initialEvents = [
  {
    eventId: '1',
    eventTitle: 'Slido Slack integration',
    description: 'This event discuss about the steps and functions required to integrate slido with Slack',
    date: '2021-08-04',
    venue: 'London',
    onlineLink: 'https://www.webex.com/user1',
    // In additional scope we can use google maps to get it
    latitude: '51.5',
    longitude: '0.125'
  },
  {
    eventId: '2',
    eventTitle: 'React new version release',
    description: 'This event discuss the new functionality added in react in upcoming release',
    date: '2021-08-05',
    venue: 'Holborn',
    onlineLink: 'https://www.webex.com/react1',
    latitude: '71.5',
    longitude: '0.425'
  },
  {
    eventId: '3',
    eventTitle: 'Musical concert',
    description: 'AR Rahman musical event where he will be performing the Indian songs',
    date: '2022-01-01',
    venue: 'Manchester',
    onlineLink: null,
    latitude: '53.48',
    longitude: '2.24'
  },
  {
    eventId: '4',
    eventTitle: 'Cisco interview',
    description: 'Cisco slido interview with senior engineer and Engineering manager',
    date: '2021-09-15',
    venue: 'Chennai',
    onlineLink: 'https://www.webex.com/user1',
    latitude: '13.0',
    longitude: '18.10'
  },
  {
    eventId: '5',
    eventTitle: 'Slido Teams integration',
    description: 'This event discuss about the steps and functions required to integrate slido with Teams',
    date: '2021-06-05',
    venue: 'London',
    onlineLink: 'https://www.webex.com/user1',
    latitude: '71.5',
    longitude: '0.425'
  },
  {
    eventId: '6',
    eventTitle: 'Visa renewal',
    description: 'Visa renewal processed haas to be updated with the attorney for further process',
    venue: 'Burgess Hill',
    date: '2021-01-22',
    onlineLink: null,
    latitude: '54',
    longitude: '10.425'
  },
  {
    eventId: '7',
    eventTitle: 'Bank Holiday Calendar',
    description: 'Annual bank event to settle down the prints',
    date: '2021-08-31',
    venue: 'England',
    onlineLink: 'https://www.webex.com/user1',
    // In additional scope we can use google maps to get it
    latitude: '151.5',
    longitude: '90.125'
  },
  {
    eventId: '8',
    eventTitle: 'Redux new version release',
    description: 'This event discuss the new functionality added in Redux in upcoming release',
    date: '2022-02-05',
    venue: 'New york',
    onlineLink: 'https://www.webex.com/redux',
    latitude: '171.5',
    longitude: '30.425'
  },
  {
    eventId: '9',
    eventTitle: 'Dance concert',
    description: 'Micheal jackson dance event where he will be performing the Indian songs',
    date: '2022-01-01',
    venue: 'Swindon',
    onlineLink: null,
    latitude: '253.48',
    longitude: '6.24'
  },
  {
    eventId: '10',
    eventTitle: 'Cisco Town hall',
    description: 'Cisco sTown hall with higher management',
    date: '2021-10-15',
    venue: 'Chennai',
    onlineLink: 'https://www.webex.com/user1',
    latitude: '13.0',
    longitude: '18.10'
  },
];


const getIntialEvents = () => {
  return initialEvents;
}

export default getIntialEvents;
