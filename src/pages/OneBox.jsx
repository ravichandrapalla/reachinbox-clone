import styled from "styled-components";
import NoMailsIcon from "../assects/NoMailsIcon.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllMailsApi } from "../services/resourceapi";
import Spinner from "../ui/Spinner";
import { IoIosArrowDown } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import CampaignLogo from "../assects/CampaignIcon.png";
import { Mail } from "../components/OneBox/MailBox";
import { setSelectedMailData } from "../redux/store";
import Sun from "../assects/Sun.png";
import { SlOptions } from "react-icons/sl";

const ScreenEmpty = styled.div`
  background: transparent;
  height: 84vh;
  width: calc(100vw-32px);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const ScreenNonEmpty = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center;
  align-content: center; */
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
const SpinnerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  background-color: rgba(219, 214, 217, 0.2);
  backdrop-filter: blur(5px);
`;

const SpinnerContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const AllMailsContainer = styled.section`
  width: 15rem;
  display: flex;
  flex-direction: column;
  background: transparent;
  height: 85vh;
  padding: 1.2rem;
  border-right: 1px solid #33383f;
`;
const AllThreadsContainer = styled.section`
  width: 50rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  background: transparent;
  overflow: auto;
  height: 85vh;

  border: 1px solid #33383f;
`;
const AllThreadsHeader = styled.section`
  /* padding: 1rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  border-bottom: 1px solid #343a40;
`;
const AllThreadsHeaderLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 0.2rem;
`;
const AllThreadsHeaderRightSection = styled.div`
  display: flex;
  column-gap: 1rem;
`;
const RightDetailsOne = styled.div`
  background-color: #1f1f1f;
  display: flex;
  column-gap: 0.2rem;
  padding: 0.1rem 0.3rem;
  align-items: center;
  border: 1px solid #343a40;
  border-radius: 5px;
`;
const DividerContainer = styled.div`
  padding: 1.2rem;
  position: relative;

  overflow: hidden;
`;
const Divider = styled.div`
  height: 0.1px;
  border: 1px solid #343a40;
`;
const TimeLineDate = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AllMailsHeader = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CompoundContainee = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerTwo = styled.div`
  display: flex;
  align-items: self-start;
`;
const MailLegendContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MailLegend = styled.span`
  margin-right: 0.6rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: #4285f4;
`;
const InboxDataContainer = styled.div`
  display: flex;
  column-gap: 0.2rem;
`;
const NumberOfMails = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
`;
const Text = styled.span`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  width: 85px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Open Sans", sans-serif;
`;

const DarkText = styled.span`
  color: #7f7f7f;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
`;
const ReloadLogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f3030;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const CountContainer = styled.span`
  display: flex;
  align-items: center;
  background-color: #2f3030;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  color: #4285f4;
`;
const InputContainer = styled.div`
  padding-top: 1rem;
  background-color: transparent;
  overflow: hidden;
`;
const SearchInput = styled.input`
  background-color: #2f3030;
  border-radius: 0.3rem;
  padding: 0.5rem 0.5rem;
  outline: none;
  border: none;
  width: 94%;
`;
const Containerthree = styled.span`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 0.7rem 0rem;
  overflow: hidden;
`;
const ReplyCountDiv = styled.div`
  display: flex;
  column-gap: 0.1rem;
  align-items: center;
  color: #fff;
`;
const MailContainer = styled.div`
  border-bottom: 1px solid #33383f;
  padding: 0.5rem;
  cursor: pointer;
`;
const MailNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const MailUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.5rem;
  width: 70%;
  overflow: hidden;
`;
const DateContainer = styled.div`
  color: #2f3030;
  display: flex;
  align-items: flex-start;
`;
const TextTwo = styled.span`
  font-weight: 400;
  font-size: 12px;
  font-family: sans-serif;
  color: #e1e0e0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;
const TagContainer = styled.div`
  display: flex;
  background-color: #222426;
  border-radius: 1rem;
  column-gap: 0.5rem;
  text-align: center;
  justify-content: center;
  width: 140px;
  align-items: center;
  padding: 0.1rem;
`;
const Tag = styled.span`
  padding: 0.1rem;
  color: #fff;
  font-size: 0.8rem;
`;
const TimeLineDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f3030;
  padding: 0.3rem;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 5px;
`;
export default function OneBox() {
  const [allMails, setAllMails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currThread, setCurrThread] = useState(0);
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(storeData);
  useEffect(() => {
    setLoading(true);
    handleGetAllMailsApi()
      .then((data) => {
        if (data?.data) {
          setAllMails(data.data);
        } else {
          setAllMails([]);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    console.log("cur the", storeData);
  }, [currThread]);
  // useEffect(() => {
  //   console.log("state of allmails ---> ", allMails);
  // }, [allMails]);
  // const DateFormater = (timestmp) => {
  //   const date = new Date(timestmp);
  //   const monthNames = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   const month = monthNames[date.getMonth()];
  //   const day = date.getDate();
  //   const trimmedMonth = month.substring(0, 3);
  //   const formattedDate = `${trimmedMonth} ${day}`;
  //   return formattedDate;
  // };
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
  const handleSetCurrentThread = (user, thread) => {
    dispatch(setSelectedMailData(user));
    setCurrThread(thread);
  };
  const getDataFromStore = () => {
    const { fromEmail, fromName } = storeData.selectedMailBoxSlice;
    return (
      <>
        <Text>{fromName}</Text>
        <DarkText>{fromEmail}</DarkText>
      </>
    );
  };
  // const Mail = ({ fromEmail, subject, sentAt }) => (
  //   <MailContainer>
  //     <MailNameContainer>
  //       <MailUser>
  //         <Text>{fromEmail}</Text>
  //         <TextTwo>{subject}</TextTwo>
  //       </MailUser>
  //       <DateContainer>
  //         <DarkText>{DateFormater(sentAt)}</DarkText>
  //       </DateContainer>
  //     </MailNameContainer>
  //     <TagContainer>
  //       <img src={CampaignLogo} alt="campaign" width={15} height={15} />
  //       <Tag>Campaign Name</Tag>
  //     </TagContainer>
  //   </MailContainer>
  // );
  return loading ? (
    <SpinnerBackground>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </SpinnerBackground>
  ) : allMails?.length === 0 ? (
    <ScreenEmpty>
      <EmptyScreen />
    </ScreenEmpty>
  ) : (
    <ScreenNonEmpty>
      <AllMailsContainer>
        <AllMailsHeader>
          <CompoundContainee>
            <ContainerOne>
              <MailLegendContainer>
                <MailLegend>All Inbox(s)</MailLegend>
                <IoIosArrowDown color="#4285f4" />
              </MailLegendContainer>
              <InboxDataContainer>
                <NumberOfMails>25/25</NumberOfMails>
                <DarkText>Inboxes selected</DarkText>
              </InboxDataContainer>
            </ContainerOne>
            <ContainerTwo>
              <ReloadLogoContainer>
                <IoReload color="white" />
              </ReloadLogoContainer>
            </ContainerTwo>
          </CompoundContainee>
          <InputContainer>
            <SearchInput placeholder="Search" />
          </InputContainer>
          <Containerthree>
            <ReplyCountDiv>
              <CountContainer>26</CountContainer>
              <Text>New Replies</Text>
            </ReplyCountDiv>

            <ReplyCountDiv>
              <Text>Newest</Text> <IoIosArrowDown />
            </ReplyCountDiv>
          </Containerthree>
        </AllMailsHeader>
        {allMails?.map((m) => (
          <Mail
            key={m.id}
            fromEmail={m.fromEmail}
            subject={m.subject}
            sentAt={m.sentAt}
            thread={m.threadId}
            setCurrentThread={(thread) => handleSetCurrentThread(m, thread)}
          />
        ))}
      </AllMailsContainer>
      <AllThreadsContainer>
        <AllThreadsHeader>
          <AllThreadsHeaderLeftSection>
            {getDataFromStore()}
          </AllThreadsHeaderLeftSection>
          <AllThreadsHeaderRightSection>
            <RightDetailsOne>
              <img src={Sun} alt="sun" width={20} height={20} />
              <TextTwo>Meeting Completed</TextTwo>
              <IoIosArrowDown color="white" />
            </RightDetailsOne>
            <RightDetailsOne>
              <TextTwo>Move</TextTwo>
              <IoIosArrowDown color="white" />
            </RightDetailsOne>

            <ReloadLogoContainer>
              <SlOptions color="white" />
            </ReloadLogoContainer>
          </AllThreadsHeaderRightSection>
        </AllThreadsHeader>
        <DividerContainer>
          <Divider></Divider>
          <TimeLineDate>
            <TimeLineDateContainer>Today</TimeLineDateContainer>
          </TimeLineDate>
        </DividerContainer>
      </AllThreadsContainer>
    </ScreenNonEmpty>
  );
}
