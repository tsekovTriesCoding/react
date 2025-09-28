import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData(); // this will be the array of events returned by the loader in App.js

  return (
    <EventsList events={events} />
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //    status: 500,
    //  });
    // throw new Error('Could not fetch events.');
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
