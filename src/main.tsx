import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'app/styles/App.scss';
import { appRouter } from 'app/providers/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={appRouter} />
  // </React.StrictMode>
);
