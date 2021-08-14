import { DateTime } from 'luxon';
import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Event from '../types/Event';

type EventBlockProps = {
  events: Event[];
};

class EventBlock extends React.Component<EventBlockProps> {
  render() {
    const { events } = this.props;
    return (
      <>
        {events.map((event) => (
          <Row key={event.title}>
            <Col>{event.title}</Col>
            <Col xs={1}>
              {event.time.toLocaleString(DateTime.TIME_24_SIMPLE)}
            </Col>
          </Row>
        ))}
      </>
    );
  }
}

export default EventBlock;
