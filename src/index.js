//Import react from node-modules folder first...
import React from 'react';
//Because React DOM is a better way to handle dom manipulation we will use it instead of react.
import ReactDOM from 'react-dom';
// Custom components go down
import SearchBox from './components/search_bar';
//Create a new component, this component should produce some HTML.

const apiKey = 'AIzaSyC5u4rnribvfKecEb2zaBFNHlj5fH4yEaE';

const App = () => {
  return (
    <div>
      <SearchBox />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
