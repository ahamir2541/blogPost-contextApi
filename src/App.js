import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Post from './Components/Post';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogProvider from './Context/BlogProvider';

const App = () => {
  return (
    <BlogProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:postId" component={Post} />
          </Switch>
        </Router>
      </div>
    </BlogProvider>
  );
};

export default App;