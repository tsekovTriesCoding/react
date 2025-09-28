import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
 const events =  useLoaderData(); // this will be the array of events returned by the loader in App.js

  return (
      <EventsList events={events} />
  );
}

export default EventsPage;
