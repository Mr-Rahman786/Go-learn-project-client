import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastHeader } from 'react-bootstrap';
import ReactSwitch from 'react-switch';
function App() {
  return (
    <div  className='App'>
      <RouterProvider router={routes}></RouterProvider>
      {/* <ToastHeader /> */}

    </div>
  );
}

export default App;
