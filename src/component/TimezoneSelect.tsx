import { getTimeZones } from '@vvo/tzdb';
import React, { FormEvent } from 'react';
import Form from 'react-bootstrap/esm/Form';

type TimezoneSelectProps = {
  defaultTimezone: string;
  setTimezone: (timezone: string) => void;
};

class TimezoneSelect extends React.Component<TimezoneSelectProps> {
  static timezones = getTimeZones();

  defaultValue = TimezoneSelect.timezones.find((timezone) => {
    return (
      this.props.defaultTimezone === timezone.name ||
      timezone.group.includes(this.props.defaultTimezone)
    );
  })?.name;

  handleChange = (e: FormEvent<HTMLSelectElement>) => {
    const timezone = e.currentTarget.value;
    this.props.setTimezone(timezone);
  };

  render() {
    return (
      <Form.Select
        defaultValue={this.defaultValue}
        onChange={this.handleChange}
      >
        {TimezoneSelect.timezones.map((timezone) => (
          <option key={timezone.name} value={timezone.name}>
            {timezone.currentTimeFormat}
          </option>
        ))}
      </Form.Select>
    );
  }
}

export default TimezoneSelect;
