import { ToastContainer } from 'react-toastify'
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <Home></Home>
    <ToastContainer position='top-center' closeOnClick={false} pauseOnHover/>
    </>
  )
}

export default App
