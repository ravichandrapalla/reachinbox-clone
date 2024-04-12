import { styled } from "styled-components";
import CampaignLogo from "../../assects/CampaignIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMailData } from "../../redux/store";

const MailContainer = styled.div`
  border-left: ${(props) => props.selected && "3px solid #5C7CFA"};
  background-color: ${(props) => props.selected && !props.dark && "#F4FAFF"};
  /* border-bottom: 1px solid #33383f; */
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
  /* color: #e1e0e0; */
  color: ${(props) => (props.dark ? "#e1e0e0" : "black")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;
const TagContainer = styled.div`
  display: flex;
  background-color: ${(props) => (props.dark ? "#343a40" : "#e1e0e0")};
  border-radius: 1rem;
  column-gap: 0.5rem;
  text-align: center;
  justify-content: space-around;
  /* width: 140px; */
  align-items: center;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;
const Tag = styled.span`
  padding: 0.1rem;
  color: ${(props) =>
    props.go ? "#46C18D" : props.dark ? "#ffffff" : "initial"};
  font-size: 0.8rem;
  background-color: initial;
`;
const Text = styled.span`
  /* color: #fff; */
  color: ${(props) => (props.dark ? "#fff" : "black")};
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
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: inherit; /* This makes it a circle */
  background-color: #46c18d; /* Change color as needed */
`;
const DotSurrounding = styled.div`
  padding: 0.15rem;
  background-color: #c4ecda;
  border-radius: 50%;
  border: 1px solid #c4ecda;
`;
const TagFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 0.4rem;
  padding: 2px;
  width: 83%;
  flex-wrap: nowrap;
  flex: 1;
`;

export const Mail = ({
  fromEmail,
  subject,
  sentAt,
  threadId,
  setCurrentThreadId,
  id,
}) => {
  const DateFormater = (timestmp) => {
    const date = new Date(timestmp);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const trimmedMonth = month.substring(0, 3);
    const formattedDate = `${trimmedMonth} ${day}`;
    return formattedDate;
  };
  const storeData = useSelector((state) => state);
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  return (
    <MailContainer
      selected={storeData.selectedMailBoxSlice.id === id}
      onClick={() => setCurrentThreadId(threadId)}
      dark={dark}
    >
      <MailNameContainer>
        <MailUser>
          <Text dark={dark}>{fromEmail}</Text>
          <TextTwo dark={dark}>{subject}</TextTwo>
        </MailUser>
        <DateContainer>
          <DarkText>{DateFormater(sentAt)}</DarkText>
        </DateContainer>
      </MailNameContainer>
      <TagFlex>
        <TagContainer dark={dark}>
          <DotSurrounding>
            <Dot />
          </DotSurrounding>

          <Tag go={true} dark={dark}>
            Intrested
          </Tag>
        </TagContainer>
        <TagContainer dark={dark}>
          <img
            src={CampaignLogo}
            alt="campaign"
            width={12}
            height={12}
            color={dark ? "#fff" : "#637381"}
          />
          <Tag dark={dark}>Campaign Name</Tag>
        </TagContainer>
      </TagFlex>
    </MailContainer>
  );
};
