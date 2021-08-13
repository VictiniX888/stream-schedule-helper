import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Event from '../types/Event';

type EventBlockProps = {
  events: Event[];
  timezone: string;
};

class EventBlock extends React.Component<EventBlockProps> {
  render() {
    const { events, timezone } = this.props;
    return (
      <>
        {events.map((event) => (
          <Row key={event.title}>
            <Col>{event.title}</Col>
            <Col xs={1}>
              {event.time.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: timezone,
              })}
            </Col>
          </Row>
        ))}
      </>
    );
  }
}

export default EventBlock;
