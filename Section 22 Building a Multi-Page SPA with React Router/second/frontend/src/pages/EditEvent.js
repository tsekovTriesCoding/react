import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm.js";

function EditEventPage() {
    const data = useRouteLoaderData('event-detail'); // this will be the data returned by the loader in App.js for the event-detail route
    const event = data.event;

    return <EventForm event={event} />;

}

export default EditEventPage;