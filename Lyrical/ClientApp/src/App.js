import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';


import './custom.css'
import { PartialSongGame } from './components/PartialSong';
import { Links } from './components/Links';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path="/game" component={PartialSongGame} />
        <Route path="/links" component={Links} />
      </Layout>
    );
  }
}
