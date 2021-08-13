import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { getEvents } from '../integration/GoogleCalendar';
import { compareDate } from '../types/Date';
import Event from '../types/Event';
import DayBlock from './DayBlock';

type ScheduleBLockState = {
  events?: Event[];
};

class ScheduleBlock extends React.Component<{}, ScheduleBLockState> {
  static CAL_ID = 'gd15qdug2f3mm1e9upk3d3us4s@group.calendar.google.com';

  state: ScheduleBLockState = {};

  async componentDidMount() {
    const events = await getEvents(ScheduleBlock.CAL_ID);
    this.setState({ events });
  }

  private groupEventsByDate = (events: Event[]) => {
    let partitionedEvents = new Map<Date, Event[]>();

    let currentDate: Date | undefined;
    let group: Event[] = [];
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const time = event.time;
      const date = new Date(
        time.getFullYear(),
        time.getMonth(),
        time.getDate()
      );

      if (currentDate === undefined || compareDate(currentDate, date) !== 0) {
        group = [event];
        partitionedEvents.set(date, group);
        currentDate = date;
      } else {
        group.push(event);
      }
    }

    return partitionedEvents;
  };

  render() {
    const { events } = this.state;

    if (events === undefined) {
      return null;
    }

    const partitionedEvents = this.groupEventsByDate(events);

    return (
      <Container>
        {Array.from(partitionedEvents, ([date, eventGroup]) => (
          <DayBlock date={date} events={eventGroup} />
        ))}
      </Container>
    );
  }
}

export default ScheduleBlock;
