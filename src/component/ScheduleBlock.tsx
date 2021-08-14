import { DateTime } from 'luxon';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { getEvents } from '../integration/GoogleCalendar';
import Event from '../types/Event';
import DayBlock from './DayBlock';

type ScheduleBlockProps = {
  timezone: string;
};

type ScheduleBLockState = {
  events?: Event[];
};

class ScheduleBlock extends React.Component<
  ScheduleBlockProps,
  ScheduleBLockState
> {
  static CAL_ID = 'gd15qdug2f3mm1e9upk3d3us4s@group.calendar.google.com';

  state: ScheduleBLockState = {};

  async componentDidMount() {
    const events = await getEvents(ScheduleBlock.CAL_ID);
    this.setState({ events });
  }

  private groupEventsByDate = (events: Event[]) => {
    let partitionedEvents = new Map<DateTime, Event[]>();

    let currentDate: DateTime | undefined;
    let group: Event[] = [];
    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const time = event.time.setZone(this.props.timezone);
      event.time = time;

      if (currentDate === undefined || !currentDate.hasSame(time, 'day')) {
        group = [event];
        partitionedEvents.set(time, group);
        currentDate = time;
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

    console.log(this.props.timezone);

    const partitionedEvents = this.groupEventsByDate(events);

    return (
      <Container>
        {Array.from(partitionedEvents, ([date, eventGroup]) => (
          <DayBlock key={date.toISODate()} date={date} events={eventGroup} />
        ))}
      </Container>
    );
  }
}

export default ScheduleBlock;
