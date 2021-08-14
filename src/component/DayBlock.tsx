import { DateTime } from 'luxon';
import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Event from '../types/Event';
import EventBlock from './EventBlock';

type DayBlockProps = {
  date: DateTime;
  events: Event[];
};

class DayBlock extends React.Component<DayBlockProps> {
  render() {
    const { date, events } = this.props;
    return (
      <Row className='mt-1 mx-1'>
        <Col xs={2} className='me-1'>
          <Row className='bg-dark text-light rounded-pill'>
            <div className='mx-1'>
              {date.toLocaleString(DateTime.DATE_FULL)} ({date.weekdayShort})
            </div>
          </Row>
        </Col>
        <Col className='border rounded'>
          <EventBlock events={events} />
        </Col>
      </Row>
    );
  }
}

export default DayBlock;
