
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './Routes/Router';
import { Scrollbars } from 'react-custom-scrollbars';


function App() {
  
  return (
    <>

     
     <RouterProvider router={router}/>

    </>
  )
}

export default App
