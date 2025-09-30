// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.js";
import HomePage from "./pages/Home.js";
import EventsPage, { loader as eventsLoader } from "./pages/Events.js";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetail.js";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";
import EventsRootLayout from "./pages/EventsRoot.js";
import ErrorPage from "./pages/Error.js";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// DONE
// 4. Add properly working links to the MainNavigation
// DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// DONE
// 7. Output the ID of the selected event on the EventDetailPage
// DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
// DONE

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail', // id is needed to reference this loader from other components (e.g. EditEventPage)
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />
              },
              {
                path: 'edit',
                element: <EditEventPage />
              },
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: newEventAction,
          },
        ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
