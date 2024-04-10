import { styled } from "styled-components";
import { useSelector } from "react-redux";

const ThreadMessagesContainer = styled.div`
  /* padding: 1.2rem; */
  border-radius: 5px;
  background-color: #1f1f1f;
`;
const SingleThreadMessageBox = styled.div`
  border: 1px solid #343a40;
  border-radius: 5px;
  padding: 0.8rem;
  height: 13rem;
  overflow-y: auto;
  /* background-color: initial; */
  background-color: ${(props) => (props.dark ? "initial" : "#ffffff")};
`;
const SingleThreadBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: initial;
`;
const SingleThreadBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 1rem;
  row-gap: 0.5rem;
  background-color: initial;
`;
const ThreadBoxHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  text-align: left;
`;
const ThreadBoxHeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
`;
const DarkTextTwo = styled.span`
  color: ${(props) => (props.dark ? "#aeaeae" : "initial")};
  /* color: #aeaeae; */
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
`;
const DarkTextThree = styled.span`
  color: #7f7f7f;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
`;
const TextHighWidth = styled.span`
  color: ${(props) => (props.dark ? "#ffffff" : "initial")};
  font-size: 0.8rem;
  font-weight: ${(props) => (props.type = "two" ? 500 : 600)};
  width: 300px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Open Sans", sans-serif;
`;
const ThreadMessage = styled.div`
  color: ${(props) => (props.dark ? "#ffffff" : "initial")};
  font-size: 0.8rem;
  overflow-y: auto;
`;
const FlexDiv = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;
export const ThreadBox = ({ data }) => {
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  const getThreadHeader = (threadData) => {
    const { fromEmail, toEmail, subject, cc } = threadData;
    return (
      <>
        <ThreadBoxHeaderLeft>
          <TextHighWidth dark={dark}>${subject}</TextHighWidth>
          <FlexDiv>
            <DarkTextTwo dark={dark}>from: {fromEmail}</DarkTextTwo>
            {cc.length !== 0 && <DarkTextTwo dark={dark}>cc: {cc}</DarkTextTwo>}
          </FlexDiv>

          <DarkTextTwo dark={dark}>to: {toEmail}</DarkTextTwo>
        </ThreadBoxHeaderLeft>
        <ThreadBoxHeaderRight>
          <DarkTextThree>20 june 2022:9:16AM</DarkTextThree>
        </ThreadBoxHeaderRight>
      </>
    );
  };
  const getThreadBody = (threadData) => {
    const { body } = threadData;
    const getHtml = (body) => {
      return { __html: body };
    };
    return (
      <>
        <ThreadMessage dark={dark} dangerouslySetInnerHTML={getHtml(body)} />
      </>
    );
  };
  return (
    <>
      <ThreadMessagesContainer>
        <SingleThreadMessageBox dark={dark}>
          <SingleThreadBoxHeader dark={dark}>
            {getThreadHeader(data)}
          </SingleThreadBoxHeader>
          <SingleThreadBoxBody dark={dark}>
            {getThreadBody(data)}
          </SingleThreadBoxBody>
        </SingleThreadMessageBox>
      </ThreadMessagesContainer>
    </>
  );
};
