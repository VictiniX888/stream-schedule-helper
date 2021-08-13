import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { getDayOfWeek } from '../types/Date';
import Event from '../types/Event';
import EventBlock from './EventBlock';

type DayBlockProps = {
  date: Date;
  timezone: string;
  events: Event[];
};

class DayBlock extends React.Component<DayBlockProps> {
  render() {
    const { date, timezone, events } = this.props;
    return (
      <Row className='mt-1 mx-1'>
        <Col xs={2} className='me-1'>
          <Row className='bg-dark text-light rounded-pill'>
            <div className='mx-1'>
              {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: timezone,
              })}{' '}
              ({getDayOfWeek(date)})
            </div>
          </Row>
        </Col>
        <Col className='border rounded'>
          <EventBlock events={events} timezone={timezone} />
        </Col>
      </Row>
    );
  }
}

export default DayBlock;
