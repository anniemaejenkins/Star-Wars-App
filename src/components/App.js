import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handlePilot = this._handlePilot.bind(this);
  }
_handleSubmit(event){
  event.preventDefault();
  let pilot = this.state.value;
  this.setState({pilot});
}
_handlePilot(event){
  this.setState({
    value: event.target.value
  });
}

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:



  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount(){
      fetch('https://swapi.co/api/vehicles/')
      .then((results) => {
        results.json().then((response) => {
          // make sure you check the data that is returned and target the information you need for state
          // in this case, response is an object with a results key; results is the array of information you want
          // console.log('results', response);
          this.setState({vehicles: response.results });
          console.log("vehicle", this.state);
        });
      });
    }

    // componentDidMount() {
    //   fetch('https://swapi.co/api/vehicles')
    //   .then( (response) => {
    //     return response.json();
    //   })
    //   .then(results => {
    //     this.setState( { vehicles: results });
    //   })
    // }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  /*
  Store vehicles state in a variable.
  Map over this variable to access the values needed to render.
  */
  /*
  The App component needs the following:
   jumbotron section, form section, vehicle cards section.
   Your form will also need a header in which you will pass the state of the form upon submit.
   */
  render() {
    let vehicles = this.state.vehicles.map((vehicle, index) => {
      return <div key={index} className="card col-md-4">
              <div className="card-block">
                <h4 className="card-title">Vehicle: { vehicle.name }</h4>
                <p className="card-text">Model: { vehicle.model }</p>
              </div>
              <p className="card-text">Specs</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Manufacturer: { vehicle.manufacturer }</li>
                <li className="list-group-item">Class: { vehicle.class }</li>
                <li className="list-group-item">Passengers: { vehicle.passengers }</li>
                <li className="list-group-item">Crew: { vehicle.crew }</li>
                <li className="list-group-item">Length: { vehicle.length }</li>
                <li className="list-group-item">Max Speed: { vehicle.max_atmosphering_speed }</li>
                <li className="list-group-item">Cargo Capacity: { vehicle.cargo_capacity }</li>
              </ul>
            </div>
    })
    return (
      <div className="App">

        <div className="jumbotron">
          <h1 className="display-3">Star Wars</h1>
          <hr className="my-4"/>
          <p>The Vehicles of Star Wars.</p>
        </div>

        <div>
          <h2>What is your name, pilot?</h2>
          <form onSubmit={ this._handleSubmit }>
          <input type="text" placeholder="Enter your name" value={ this.state.value } onChange={ this._handlePilot }/>
          <input type="submit" />
          </form>
          <p>{ this.state.pilot }</p>
        </div>

        { vehicles }

      </div>
    );
  }
}

export default App;
