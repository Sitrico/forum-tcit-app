import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { getPosts } from './apiHandler';

import PostsList from './components/postsList';
import FilterPosts from './components/filterPosts';
import CreatePost from './components/createPost';

import Container from '@material-ui/core/Container';

getPosts();


const App = () => (
  <Provider store={store}>
    <Container maxWidth="md" spacing={2}>
      <FilterPosts/>
      <PostsList/>
      <CreatePost/>
    </Container>
  </Provider>
)

export default App;
