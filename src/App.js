import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from "./components/homescreen";
import {BrowserRouter,Route,Routes,Switch,Link, Router} from 'react-router-dom';
import Aboutus from "./components/aboutus";
import Header from "./components/navbar";
import Services from "./components/services";
import Seminar_And_Conferences from "./components/seminarandconferences";
import Corporate from "./components/corporate";
import ServicePage from "./components/corporate";

function App() {
  return (
    <>
    
    <BrowserRouter>
        <Header></Header>
         <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>} />
          <Route path='/about' element={<Aboutus></Aboutus> } />
          <Route path='/our-services' element={<Services></Services>} />
          <Route path='/services/:serviceId' element={<ServicePage></ServicePage>} />
          <Route path='/services/:serviceId/sub-service/:subServiceId' element={<Seminar_And_Conferences></Seminar_And_Conferences>} />
        </Routes> 
    </BrowserRouter>

    {/* <BrowserRouter>
    <Header></Header>
      <HomeScreen/>
      <Aboutus/>
      <Services/>

    </BrowserRouter> */}


    {/* <Router>
    <Switch>
          <Route path="/">
            <Header/>
            <HomeScreen />
            <Aboutus/>
            <Services/>
            <ServicePage/>
            <Seminar_And_Conferences/>
          </Route>
        </Switch>
    </Router> */}
    </>
  );
}

export default App;
