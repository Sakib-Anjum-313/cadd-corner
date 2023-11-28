import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>
    } 
  ]);


  return (
   <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
