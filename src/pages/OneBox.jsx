import styled from "styled-components";
import NoMailsIcon from "../assects/NoMailsIcon.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Screen = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const EmptyMessageContainer = styled.section`
  width: 52rem;
  height: 24.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  background: transparent;
`;
const TextContainer = styled.section`
  width: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  row-gap: 1rem;
`;
const TextLegend = styled.span`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
`;
const Message = styled.span`
  color: #9e9e9e;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  width: 20rem;
`;

export default function OneBox() {
  const storeData = useSelector((state) => state);
  console.log(storeData);
  useEffect(() => {}, []);
  const EmptyScreen = () => {
    return (
      <EmptyMessageContainer>
        <img src={NoMailsIcon} alt="nomails" width={190} height={150} />
        <TextContainer>
          <TextLegend>
            It's the beginning of a legendary sales pipeline
          </TextLegend>
          <Message>When you have inbound E-mails you'll see them here</Message>
        </TextContainer>
      </EmptyMessageContainer>
    );
  };
  return (
    <Screen>
      <EmptyScreen />
    </Screen>
  );
}
