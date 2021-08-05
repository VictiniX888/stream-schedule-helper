import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { getDayOfWeek } from '../types/Date';
import Event from '../types/Event';
import EventBlock from './EventBlock';

type DayBlockProps = {
  date: Date;
  events: Event[];
};

class DayBlock extends React.Component<DayBlockProps> {
  render() {
    const { date, events } = this.props;
    return (
      <Row className='border rounded-pill mt-1 mx-1 overflow-hidden'>
        <Col xs={2} className='bg-dark text-light'>
          {date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          ({getDayOfWeek(date)})
        </Col>
        <Col>
          <EventBlock events={events} />
        </Col>
      </Row>
    );
  }
}

export default DayBlock;
