import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavBar from "./components/NewNavBar";


function App() {
  return(
    <>
     <NewNavBar />
    <Container>
     
      <Outlet />
      </Container>
    
    </>
  )
}

export default App;
