import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateList } from '../actions';

import Restlist from './RestList.js';
import Filter from './SortBtn.js';
import MyForm from './form.js';

import './App.css';

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class App extends Component {
  constructor(props) {
  super(props);
  this.fetchRestaurants();
}

postRestaurants = (values) => {
  fetch('http://localhost:3001/restaurants', {
    method:'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => this.fetchRestaurants())
}

fetchRestaurants() {
  console.log('eccolo');
  fetch(`http://localhost:3001/restaurants/name`)
  .then(response => response.json())
  .then(data => {
    this.props.update(data)
  });
}

  render () {
    return (
      <div>
        <h1>~ RESTAURANTS 🍴~</h1>
        <div className="filters">
          <Filter sortParam='name' text='Name'/>
          <Filter sortParam='rating' text='Rating'/>
          <Filter sortParam='createDate' text='Date'/>
        </div>
        <div className="list">
          <Restlist
            restaurants={this.props.restaurants}
          />
        </div>
        <h1>Add a new Restaurant</h1>
        <div className="form">
          <MyForm onSubmit={this.postRestaurants} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurantsList,
});

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(updateList(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
