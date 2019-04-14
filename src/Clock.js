
import React from 'react';

function ConvertedDate(props) {
    return <h2>Time :- {props.date.toLocaleTimeString(props.locale, {timeZone :props.timeZone})}</h2>;
}
  
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), locale : props.locale, timeZone : props.timeZone, country : props.country };
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
            </div>
        );
    }
} 

function App() {
    return (
      <div>
        <Clock country="India" locale="en-IN" timeZone="Asia/Kolkata"/>
        <Clock country="USA" locale="en-US" timeZone="America/New_York" />
        <Clock country="Finaland" locale="fi-FI" timeZone="Europe/Helsinki" />
      </div>
    );
  }

export default App;