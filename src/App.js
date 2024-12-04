import {RouterProvider} from "react-router-dom";
import './App.css';
import root from "./router/root";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return <RouterProvider router={root}/>
}

export default App;
