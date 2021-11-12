import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './components/Home/Home/Home';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import AllGames from './components/AllGames/AllGames';
import Header from './components/Home/header/Header';
import Login from './components/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Registar from './components/Login/Registar/Registar';
import Abouts from './components/Abouts/Abouts';
import PrivateRoute from './components/PrivetRoute/PrivateRoute';
import Drawers from './components/DashBoard/Drawers/Drawers';
import Order from './components/Review/Review/Orders';
import Footer from './components/Footer/Footer';
// import Drawers from './components/Dashbord/Drower/Drawers';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/allgames'>
            <AllGames></AllGames>
          </Route>
          <PrivateRoute path='/review/:id'>
            <Order></Order>
          </PrivateRoute>
          <Route path='/abouts'>
            <Abouts></Abouts>
          </Route>
          <Route path='/registar'>
            <Registar></Registar>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Drawers></Drawers>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
