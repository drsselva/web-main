// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import { google } from 'googleapis';

// const GoogleCalendar = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Load Google Calendar API client
//     const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
//     const API_KEY = 'YOUR_API_KEY';
//     const CLIENT_ID = 'YOUR_CLIENT_ID';
//     const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

//     const handleClientLoad = () => {
//       gapi.load('client:auth2', initClient);
//     };

//     const initClient = () => {
//       gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//       }).then(() => {
//         gapi.auth2.getAuthInstance().signIn().then(() => {
//           listUpcomingEvents();
//         });
//       });
//     };

//     const listUpcomingEvents = () => {
//       gapi.client.calendar.events.list({
//         calendarId: 'primary',
//         timeMin: (new Date()).toISOString(),
//         showDeleted: false,
//         singleEvents: true,
//         maxResults: 10,
//         orderBy: 'startTime',
//       }).then((response) => {
//         const events = response.result.items;
//         setEvents(events);
//       });
//     };

//     handleClientLoad();

//   }, []);

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <strong>{event.summary}</strong>
//             <br />
//             {format(new Date(event.start.dateTime), 'yyyy-MM-dd HH:mm')} - {format(new Date(event.end.dateTime), 'HH:mm')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GoogleCalendar;

import React from 'react'

function ActivityCalendar() {
  return (
    <div className='Calendar'>ActivityCalendar</div>
  )
}

export default ActivityCalendar