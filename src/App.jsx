import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; 
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Main />
      <Footer />
      
    </>
  );
}

export default App;
