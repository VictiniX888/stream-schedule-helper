import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import TimezoneSelect from './TimezoneSelect';

type HeaderBlockProps = {
  defaultTimezone: string;
  setTimezone: (timezone: string) => void;
};

class HeaderBlock extends React.Component<HeaderBlockProps> {
  render() {
    return (
      <header className='py-3 mb-4 border-bottom'>
        <Row className='mx-2'>
          <Col className='fs-4'>A simple schedule helper</Col>
          <Col>
            <TimezoneSelect
              defaultTimezone={this.props.defaultTimezone}
              setTimezone={this.props.setTimezone}
            />
          </Col>
        </Row>
      </header>
    );
  }
}

export default HeaderBlock;
