import styled from "styled-components";

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
  text-align: left;

  /* height: 2.25rem; */
  color: #ffffff;
  border-radius: 8px;
  padding: 8px 12px;
  gap: 1rem;
  background-color: #23272c;
`;
const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`;
const BodyRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  line-height: 14.52px;
`;
const Description = styled.span`
  color: #b9b9b9;
  font-weight: 400;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  line-height: 16.94px;
`;

export default function LeadDetails() {
  return (
    <Section>
      <SectionHeader>Lead Details</SectionHeader>
      <SectionBody>
        <BodyRow>
          <Title>Name</Title>
          <Description>Orlando</Description>
        </BodyRow>
        <BodyRow>
          <Title>Contact No</Title>
          <Description>+54-9062827869</Description>
        </BodyRow>
        <BodyRow>
          <Title>Email ID</Title>
          <Description>orlando@gmail.com</Description>
        </BodyRow>
        <BodyRow>
          <Title>Linkedin</Title>
          <Description>linkedin.com/in/timvadde/</Description>
        </BodyRow>
        <BodyRow>
          <Title>Company Name</Title>
          <Description>Reachinbox</Description>
        </BodyRow>
      </SectionBody>
    </Section>
  );
}
