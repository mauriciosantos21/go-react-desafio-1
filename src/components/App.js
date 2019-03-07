import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'JN Fernandes',
        avatar: 'https://avatars1.githubusercontent.com/u/9919?s=200&v=4',
        time: 'há 10 min',
        body:
          'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Morbi pretium diam sit amet velit consectetur varius. Fusce justo sapien, auctor sed tortor at, fringilla placerat orci. Mauris placerat interdum ultricies. Integer commodo, lectus eu lacinia egestas, enim odio placerat metus, lobortis elementum purus mi ac ante. Proin eget interdum nulla. Pellentesque dictum eget metus ut volutpat. Etiam rhoncus neque eget metus porta fringilla. Maecenas quis justo luctus, consectetur risus vel, sollicitudin ipsum. Proin interdum quam at nunc iaculis, tristique tincidunt massa pretium. Mauris fringilla pellentesque mauris, eu pulvinar ligula blandit in. Praesent maximus efficitur ipsum, quis laoreet eros vulputate ut. Aenean interdum eros ut nulla luctus placerat. Nulla ex enim, laoreet condimentum enim non, tincidunt lobortis mi. Aenean auctor imperdiet feugiat. Vivamus volutpat porta velit, non viverra lacus aliquam ac. Sed a bibendum eros.',
      },
      {
        id: 2,
        name: 'Jose Maria',
        avatar: 'https://avatars3.githubusercontent.com/u/1180972?s=60&v=4',
        time: 'há 30 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium diam sit amet velit consectetur varius. Fusce justo sapien, auctor sed tortor at, fringilla placerat orci. Mauris placerat interdum ultricies. Integer commodo, lectus eu lacinia egestas, enim odio placerat metus, lobortis elementum purus mi ac ante. Proin eget interdum nulla. Pellentesque dictum eget metus ut volutpat. Etiam rhoncus neque eget metus porta fringilla. Maecenas quis justo luctus, consectetur risus vel, sollicitudin ipsum. Proin interdum quam at nunc iaculis, tristique tincidunt massa pretium. Mauris fringilla pellentesque mauris, eu pulvinar ligula blandit in. Praesent maximus efficitur ipsum, quis laoreet eros vulputate ut. Aenean interdum eros ut nulla luctus placerat. Nulla ex enim, laoreet condimentum enim non, tincidunt lobortis mi. Aenean auctor imperdiet feugiat. Vivamus volutpat porta velit, non viverra lacus aliquam ac. Sed a bibendum eros.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
