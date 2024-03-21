import React from 'react';
import './App.css';
import SearchBar from './component/searchBar/SearchBar';
import Calender from './component/calender/Calender';
import Buttons from './component/button/Button';
import { Avatar } from '@mui/material';
import Avatars from './component/avatar/AvatarI';
import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  const content= useRoutes(routes)
  return content;
}

export default App;
