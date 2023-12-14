import React from 'react';

const url = window.location.hostname + ':3003/';

class App extends React.Component {
  state = {
    name: '',
  };

  componentDidMount() {
    fetch(`http://${url}`)
      .then((res) => res.json())
      .then((data) => this.setState({ name: data.name }));
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}!</h1>
        <h4>{url}</h4>
        <h4>{window.location.href}</h4>
      </>
    );
  }
}

export default App;
