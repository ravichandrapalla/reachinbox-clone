import { styled } from "styled-components";
import CampaignLogo from "../../assects/CampaignIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMailData } from "../../redux/store";

const MailContainer = styled.div`
  border-left: ${(props) => props.selected && "3px solid #5C7CFA"};
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
  return (
    <MailContainer
      selected={storeData.selectedMailBoxSlice.id === id}
      onClick={() => setCurrentThreadId(threadId)}
    >
      <MailNameContainer>
        <MailUser>
          <Text>{fromEmail}</Text>
          <TextTwo>{subject}</TextTwo>
        </MailUser>
        <DateContainer>
          <DarkText>{DateFormater(sentAt)}</DarkText>
        </DateContainer>
      </MailNameContainer>
      <TagContainer>
        <img src={CampaignLogo} alt="campaign" width={15} height={15} />
        <Tag>Campaign Name</Tag>
      </TagContainer>
    </MailContainer>
  );
};
