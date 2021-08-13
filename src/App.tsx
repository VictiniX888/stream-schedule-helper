import React from 'react';
import './App.css';
import HeaderBlock from './component/HeaderBlock';
import ScheduleBlock from './component/ScheduleBlock';

type AppState = {
  timezone: string;
};

class App extends React.Component<{}, AppState> {
  defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  state: AppState = {
    timezone: this.defaultTimezone,
  };

  setTimezone = (timezone: string) => {
    this.setState({ timezone });
  };

  render() {
    return (
      <div className='App'>
        <HeaderBlock
          defaultTimezone={this.defaultTimezone}
          setTimezone={this.setTimezone}
        />
        <ScheduleBlock timezone={this.state.timezone} />
      </div>
    );
  }
}

export default App;
