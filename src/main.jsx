import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import AboutPage from './pages/About';
import PortfolioPage from './pages/Portfolio';
import ErrorPage from './components/Error';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  // Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      }
    ],
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);