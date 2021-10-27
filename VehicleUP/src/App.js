import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';

import Nav from './Components/Nav';
import SubNav from './Components/SubNav';
import Footer from './Components/Footer';
import MyVideos from './Components/MyVideos';
import EntirePlayList from './Components/EntirePlayList';
import FavoritePlayList from './Components/FavoritePlayList';
import History from './Components/History';
import Home from './Components/Home';
import LikedVideos from './Components/LikedVideos';
import Account from './Components/Account';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import DeleteUser from './Components/DeleteUser';
import LogIn from './Components/LogIn';
import TrendingVideo from './Components/TrendingVideo';

export const ListContext = createContext();

function App() {
  const [youTube, setYouTube] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // YOUTUBE API SECTION ////////////
  const YT_API = `${process.env.REACT_APP_YOUTUBE_BASE_QUERY}${term}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch(YT_API)
      .then((resp) => resp.json())
      .then((res) => setYouTube(res.items || []))
      .catch((error) => console.log(error));

    setIsLoading(true);
  }, [term, isLoading, YT_API]);
  console.log(youTube);

  // END OF YOUTUBE API SECTION //////////

  return (
    <Router>
      <div className='App'>
        <ListContext.Provider
          value={{
            youTube,
            isLoading,
            term,
            setTerm,
          }}
        >
          <div className='all_Navbar_Container'>
            <Nav />
            <SubNav />
          </div>
          <Switch>
            <Route path='/' exact>
              {' '}
              <Home />{' '}
            </Route>
            <Route path='/entire-playlist'>
              {' '}
              <EntirePlayList />
            </Route>
            <Route path='/favorite-playlist'>
              {' '}
              <FavoritePlayList />
            </Route>
            <Route path='/history'>
              {' '}
              <History />
            </Route>
            <Route path='/myvideos'>
              {' '}
              <MyVideos />
            </Route>
            <Route path='/users' component={Account}></Route>
            <Route path='/add-user' component={AddUser}></Route>
            <Route path='/update-user/:id' component={UpdateUser}></Route>
            <Route path='/delete-user/:id' component={DeleteUser}></Route>
            <Route path='/login' component={LogIn}></Route>

            <Route exact path='/trending-airplanes'>
              <TrendingVideo term='airplanes' title='Trending Airplanes' />
            </Route>
            <Route path='/trending-boats'>
              <TrendingVideo term='boats' title='Trending Boats' />
            </Route>
            <Route path='/trending-cars'>
              <TrendingVideo term='cars' title='Trending Cars' />
            </Route>
            <Route path='/trending-motorcycles'>
              <TrendingVideo term='motorcycles' title='Trending Motorcycles' />
            </Route>
            <Route path='/likedvideos'>
              <LikedVideos />
            </Route>
          </Switch>
        </ListContext.Provider>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
