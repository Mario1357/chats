
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import HomeChat from './components/pages/HomeChat';
import style from './components/style.css';

import{
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

    const {currentUser} = useContext(AuthContext)

    const ProtectedRoute = ({children}) => {
      if(!currentUser){
        return <Navigate to="/login"/>;
      }
        return children
    }

  return (

    <BrowserRouter>
    <Routes>
      <Route path ="/">
        <Route index element={
        <ProtectedRoute>
        <HomeChat/>
        </ProtectedRoute>
        }/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    );


  }

export default App;

  {/* 
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={5}
        justifyContent="space-between"
        sx={{ width: '100%' }} // Establece un ancho máximo para todo el Stack
      >
       
       {/* 
        <div style={{ flex: '1' }}>
          <Sidebar sx={{ width: '20%' }} />
        </div> 
       */}
        
       
        <div style={{ flex: '3' }}>
          <Register sx={{ width: '60%' }} />
          </div>
          
           {/* Establece el ancho deseado para Feed 
        </div> */}
       {/* <div style={{ flex: '1' }}>
          <Rightbar sx={{ width: '20%' }} />  Establece el ancho deseado para Rightbar 
        </div>


      </Stack>
    </Box>
    */}


