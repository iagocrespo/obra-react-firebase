import React from "react";
import EventoAxenda from "./EventoAxenda";
import PropTypes from "prop-types";

const SectionEvents = props => (
  <ul className="events-container">
    {Object.keys(props.events)
      .filter(eventKey => {
        const actualDate = new Date();
        const eventDate = new Date(props.events[eventKey].date_event);
        return actualDate < eventDate;
      })
      .filter(eventKey => props.events[eventKey].visible)
      .map(eventKey => (
        <EventoAxenda key={eventKey} eventDetails={props.events[eventKey]} />
      ))}
  </ul>
);

SectionEvents.propTypes = {
  events: PropTypes.object.isRequired
};

export default SectionEvents;
