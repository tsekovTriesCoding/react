import { Link, useLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem.js";

function EventDetailPage() {
    const data = useLoaderData();
    const event = data.event;

    return (
        <>
            <EventItem event={event} />
            <p>
                <Link to="..">Back to all events</Link>
            </p>
        </>
    );
}

export default EventDetailPage;

export async function loader({ request, params }) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event.' }), { status: 500 });
    } else {
        return response;
    }
}