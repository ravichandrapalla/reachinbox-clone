import styled from "styled-components";
import SendIcon from "../../assects/send.png";
import Email from "../../assects/email.png";

import DraftIcon from "../../assects/drafts.png";
import { useSelector } from "react-redux";
import MailTimeline from "../../assects/MailTimeline.png";

const Section = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  /* width: 100%; */
`;
const SectionHeader = styled.header`
  width: 100%;
  display: flex;
  color: #ffffff;

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
  /* padding: 0px 2rem; */
  padding-left: 1.8rem;
  align-items: flex-start;
`;
const ModularDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 1.1rem;
`;
const BriefContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
`;
const BodyTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.dark === false ? "#1f1f1f" : "#ffffff")};
`;
const BriefHolder = styled.div`
  /* padding: 0rem 0.7rem; */
  padding-right: 0.7rem;
  border-right: ${(props) => props.position === "left" && "1px solid #403f3f"};
`;
const BriefText = styled.span`
  padding-left: ${(props) => (props.type === "last" ? "0.7rem" : "0")};
  color: ${(props) => (props.dark === false ? "#1f1f1f" : "#ffffff")};
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
  margin-right: 0.2rem; /* Adjust spacing between timeline items */
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
  color: ${(props) => (props.dark === false ? "#1f1f1f" : "#ffffff")};
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
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  return (
    <Section>
      <SectionHeader>Activities</SectionHeader>
      <SectionBody>
        <ModularDiv>
          <BodyTitle dark={dark}>Campaign Name</BodyTitle>
          <BriefContainer>
            <BriefHolder position="left">
              <BriefText dark={dark}>3 Steps</BriefText>
            </BriefHolder>
            <BriefHolder>
              <BriefText type="last" dark={dark}>
                5 Days in Sequence
              </BriefText>
            </BriefHolder>
          </BriefContainer>
        </ModularDiv>
        <Trick>
          <Timeline>
            <TimelineIcon>
              <img src={Email} alt="email" width={25} height={25} />
            </TimelineIcon>
            <TimelineLine />
          </Timeline>
          <TimelineContainer>
            <TimelineHead dark={dark}>Step 1: Email</TimelineHead>
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
              <img src={Email} alt="email" width={25} height={25} />
            </TimelineIcon>
            <TimelineLine />
          </Timeline>
          <TimelineContainer>
            <TimelineHead dark={dark}>Step 2: Email</TimelineHead>
            <BriefContainer>
              <img src={MailTimeline} alt="send" />
              <TimelineTailOne>Opened</TimelineTailOne>
              <TimelineTailTwo>5th,Feb</TimelineTailTwo>
            </BriefContainer>
          </TimelineContainer>
        </Trick>
        <Trick>
          <Timeline>
            <TimelineIcon>
              <img src={Email} alt="email" width={25} height={25} />
            </TimelineIcon>
            <TimelineLine number="last" />
          </Timeline>
          <TimelineContainer>
            <TimelineHead dark={dark}>Step 3: Email</TimelineHead>
            <BriefContainer>
              <img src={MailTimeline} alt="send" />
              <TimelineTailOne>Opened</TimelineTailOne>
              <TimelineTailTwo>5th,Feb</TimelineTailTwo>
            </BriefContainer>
          </TimelineContainer>
        </Trick>
      </SectionBody>
    </Section>
  );
}
