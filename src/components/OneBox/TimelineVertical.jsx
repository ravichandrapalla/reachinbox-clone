import React from "react";
import styled from "styled-components";

// Define the styled components for the timeline and its items
const TimelineContainer = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TimelineIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const TimelineContent = styled.div`
  max-width: 70%;
`;

// Define a functional component to render the timeline
const VerticalTimeline = ({ events }) => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineIcon>{event.icon}</TimelineIcon>
          <TimelineContent>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

// Example usage:
const App = () => {
  // Define some example events
  const events = [
    { icon: "1", title: "Event 1", description: "Description of event 1" },
    { icon: "2", title: "Event 2", description: "Description of event 2" },
    { icon: "3", title: "Event 3", description: "Description of event 3" },
  ];

  return (
    <div>
      <h1>Vertical Timeline</h1>
      <VerticalTimeline events={events} />
    </div>
  );
};

export default App;
