import React from 'react';
import './App.css';

class App  extends React.Component {
  state = {
    data: null
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then((data) => this.setState({data: data.results}));
  }

  render() {
    let data = this.state.data
    return ( 
      <>
        {data ? 
          data.map(user => {
            return <div key={Math.random()}>
              <img src={`${user.picture.medium}`} alt='profile'/>
              <p>{user.name.first}</p>
              <p>{user.name.last}</p>
              <p>{user.email}</p>
              <hr />
            </div>
          })
        : null}
      </>
    )
  }
}
 
export default App;


