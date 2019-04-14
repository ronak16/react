import React from 'react';

function ConvertedDate(props) {
    return <h2>Time :- {props.date.toLocaleTimeString(props.locale, {timeZone :props.timeZone})}</h2>;
}

class ClockForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), locale : "en-IN", timeZone : "Asia/Kolkata", country : "India" };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
       var index =  event.target.selectedIndex;
       this.setState({date: new Date(), locale : event.target[index].value, timeZone : event.target[index].attributes['data-timezone'].value, country : event.target[index].text});
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.startClock(),
            1000
        );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    startClock() {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
      return (
        <div className="clock-main">
            <h1>{this.state.country}</h1>
            <ConvertedDate date={this.state.date} locale={this.state.locale} timeZone={this.state.timeZone} />  
            <label>
                Select Country : &nbsp;
                <select value={this.state.locale} onChange={this.handleChange} className="select-box">
                <option value="en-IN" data-timezone="Asia/Kolkata">India</option>
                <option value="en-US" data-timezone="America/New_York">America</option>
                <option value="fi-FI" data-timezone="Europe/Helsinki">Europe</option>
                </select>
            </label>
        </div>   
      );
    }
}
  
function App() {
    return (
      <div>
        <ClockForm />
      </div>
    );
  }

export default App;