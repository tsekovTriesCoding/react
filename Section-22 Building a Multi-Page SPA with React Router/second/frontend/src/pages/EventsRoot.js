import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation.js";

function EventsRootLayout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}

export default EventsRootLayout;