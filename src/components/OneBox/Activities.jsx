import styled from "styled-components";
import SendIcon from "../../assects/send.png";
import Email from "../../assects/email.png";

import DraftIcon from "../../assects/drafts.png";

const Section = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  /* width: 100%; */
`;
const SectionHeader = styled.header`
  /* width: 100%; */
  display: flex;

  /* height: 2.25rem; */

  border-radius: 8px;
  padding: 8px 12px;
  gap: 1rem;
  background-color: #23272c;
`;
const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  padding: 0px 2rem;
  align-items: center;
`;
const ModularDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 1.5rem;
`;
const BriefContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BodyTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
`;
const BriefHolder = styled.div`
  padding: 0rem 0.7rem;
  border-right: ${(props) => props.position === "left" && "1px solid #403f3f"};
`;
const BriefText = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  line-height: 14.52px;
`;

const Timeline = styled.div`
  /* height: 100%; */
  /* width: 100px; */
  position: relative;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
  margin-right: 1rem; /* Adjust spacing between timeline items */
`;

const TimelineIcon = styled.div`
  background-color: #41464b; /* Color of the timeline icon */
  border-radius: 60%;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* visibility: hidden; */
`;

const TimelineLine = styled.div`
  z-index: 999;
  width: 1.5px; /* 
  /* flex: 1; */
  position: absolute;
  background-color: #263238;
  top: 28px;
  height: ${(props) => (props.number === "last" ? "0" : "32px")};
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem; /* Adjust distance between timeline and content */
`;
const TimelineHead = styled.span`
  font-weight: 600;
  font-size: 13px;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
`;
const TimelineTailOne = styled.span`
  font-weight: 400;
  font-size: 10px;
  font-family: "Inter", sans-serif;
  line-height: 18px;
  color: #b9b9b9;
  padding: 0.2rem 0.5rem;
`;
const TimelineTailTwo = styled.span`
  font-weight: 600;
  font-size: 10px;
  font-family: "Inter", sans-serif;
  line-height: 18px;
  color: #b9b9b9;
  padding: 0.2rem 0;
`;
const Trick = styled.div`
  /* width: 60%; */
  position: relative;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Activities() {
  return (
    <Section>
      <SectionHeader>Activities</SectionHeader>
      <SectionBody>
        <ModularDiv>
          <BodyTitle>Campaign Name</BodyTitle>
          <BriefContainer>
            <BriefHolder position="left">
              <BriefText>3 Steps</BriefText>
            </BriefHolder>
            <BriefHolder>
              <BriefText>5 Days in Sequence</BriefText>
            </BriefHolder>
          </BriefContainer>
        </ModularDiv>
        <Trick>
          <Timeline>
            <TimelineIcon>
              <img src={Email} alt="email" width={20} height={20} />
            </TimelineIcon>
            <TimelineLine />
          </Timeline>
          <TimelineContainer>
            <TimelineHead>Step 1: Email</TimelineHead>
            <BriefContainer>
              <img src={SendIcon} alt="send" />
              <TimelineTailOne>Sent</TimelineTailOne>
              <TimelineTailTwo>3rd,Feb</TimelineTailTwo>
            </BriefContainer>
          </TimelineContainer>
        </Trick>
        <Trick>
          <Timeline>
            <TimelineIcon>
              <img src={Email} alt="email" width={20} height={20} />
            </TimelineIcon>
            <TimelineLine />
          </Timeline>
          <TimelineContainer>
            <TimelineHead>Step 1: Email</TimelineHead>
            <BriefContainer>
              <img src={SendIcon} alt="send" />
              <TimelineTailOne>Sent</TimelineTailOne>
              <TimelineTailTwo>3rd,Feb</TimelineTailTwo>
            </BriefContainer>
          </TimelineContainer>
        </Trick>
        <Trick>
          <Timeline>
            <TimelineIcon>
              <img src={Email} alt="email" width={20} height={20} />
            </TimelineIcon>
            <TimelineLine number="last" />
          </Timeline>
          <TimelineContainer>
            <TimelineHead>Step 1: Email</TimelineHead>
            <BriefContainer>
              <img src={SendIcon} alt="send" />
              <TimelineTailOne>Sent</TimelineTailOne>
              <TimelineTailTwo>3rd,Feb</TimelineTailTwo>
            </BriefContainer>
          </TimelineContainer>
        </Trick>
      </SectionBody>
    </Section>
  );
}
