import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as newPostAcion } from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: < NewPost />, action: newPostAcion },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
