import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Create from '../../pages/create/Create';
import Play from '../../pages/play/Play';

const Main = () => ( <
  main >
  <
  Switch >
  <
  Route exact path = "/"
  component = {
    Home
  }
  />{' '} <
  Route exact path = "/play"
  component = {
    Play
  }
  />{' '} <
  Route exact path = "/create"
  component = {
    Create
  }
  />{' '} < /
  Switch > {
    ' '
  } <
  /main>
);

export default Main;
