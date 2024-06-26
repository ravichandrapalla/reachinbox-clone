import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import ButtonDownArrow from "../../assects/arrow_drop_down.png";
import PowerIcon from "../../assects/Power.png";
import PreviewEmail from "../../assects/PreviewEmail.png";
import SpellCheck from "../../assects/spellcheck.png";
import LinkIcon from "../../assects/link.png";
import ImageIcon from "../../assects/image.png";
import Emoji from "../../assects/sentiment_satisfied.png";
import Unfold from "../../assects/PersonRemove.png";
import CodeIcon from "../../assects/unfold_more.png";
import { useSelector } from "react-redux";

const ModalContainer = styled.div`
  width: 45rem;
  height: 32rem;
  position: absolute;
  bottom: ${(props) => (props.isOpen ? "0" : "-32rem")};
  left: 5%;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  overflow: hidden;
  border-radius: 0.5rem;
  width: 90%;
  background: #34383d;
  border: 1px solid #23272c;
  transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 20;
`;
const CloseButton = styled.button`
  /* position: absolute;
  top: 10px;
  right: 5px; */

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const ModalHeader = styled.header`
  /* background-color: #41464b; */
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#41464b"};
  display: flex;
  /* padding: 10px 16px; */
  padding: 10px 5px 10px 30px;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  width: 100%;
  border: ${(props) =>
    props.dark === false ? "1px solid white" : "1px solid #23272c"};
`;
const TextTypeOne = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: #bab9bd;
  background: transparent;
`;
const ModalBody = styled.section`
  display: flex;
  flex-direction: column;
  /* background: #1f1f1f; */
  background: ${(props) => (props.dark === false ? "#1f1f1f" : "#ffffff")};
  height: 80%;
`;
const ModalBodyRow = styled.div`
  border-bottom: 1px solid #34383d;
  text-align: left;
  padding: 8px 30px;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#1f1f1f"};
  color: white;
`;
const ModalBodyTextArea = styled.textarea`
  border: none;
  padding: 1rem;
  color: #636970;
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  padding-left: 30px;
  height: 100%;
  background: ${(props) => (props.dark === false ? "#ffffff" : "#1f1f1f")};
`;

const ModalFooter = styled.footer`
  border-top: 1px solid #2e3236;
  padding: 6px 12px 6px 12px;
  display: flex;
  column-gap: 1rem;
  background: ${(props) => (props.dark === false ? "#ffffff" : "#1f1f1f")};
`;
const SendButton = styled.button`
  background: linear-gradient(to right, #4b63dd 100%, #0524bf 99%);
  width: 6rem;
  height: 2.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;
const TextTypeTwo = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  background: transparent;
`;
const TextTypeTThree = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  color: #adadad;
  background-color: transparent;
`;
const Attachments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.8rem;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
`;
const NewText = styled.span`
  color: #bab9bd;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
`;
const NewTextTwo = styled.span`
  color: ${(props) => (props.dark === false ? "#41464b" : "#ffffff")};
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
`;

export const Modal = ({ isOpen, onClose, send, setReplyActive }) => {
  const storeData = useSelector((state) => state);
  const dark = useSelector((store) => store.darkModeSlice.isDark);
  // const {fromEmail, toEmail} = storeData.selectedMailBoxSlice;

  const [text, setText] = useState("");
  const [finalData, setFinalData] = useState({
    toName: "",
    to: "",
    from: "",
    fromName: "",
    subject: "",
    body: "",
    references: "",
    inReplyTo: "",
  });

  const handleReply = () => {
    // Implement reply functionality here
    console.log("final data is ", finalData);
    send(storeData.selectedMailBoxSlice.threadId, finalData);
  };
  const handleTextChange = (e) => {
    console.log("setting text", e.target.value);
    setFinalData({ ...finalData, body: e.target.value });
  };
  useEffect(() => {
    setFinalData({
      toName: storeData.selectedMailBoxSlice.toName,
      to: storeData.selectedMailBoxSlice.toEmail,
      from: storeData.selectedMailBoxSlice.fromEmail,
      fromName: storeData.selectedMailBoxSlice.fromName,
      subject: storeData.selectedMailBoxSlice.subject,
      body: text,
      references: storeData.selectedMailBoxSlice.references,
      inReplyTo: storeData.selectedMailBoxSlice.inReplyTo,
    });
    console.log(`store data is `, storeData);
  }, [storeData.selectedMailBoxSlice.id]);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalHeader dark={dark}>
        <TextTypeOne>Reply</TextTypeOne>
        <CloseButton
          onClick={() => {
            setText("");
            onClose();
          }}
        >
          <IoClose size={24} color={dark ? "white" : "black"} />
        </CloseButton>
      </ModalHeader>
      <ModalBody dark={dark}>
        <ModalBodyRow dark={dark}>
          <NewText>to:</NewText>{" "}
          <NewTextTwo dark={dark}>{`${finalData.from || ""}`}</NewTextTwo>
        </ModalBodyRow>
        <ModalBodyRow dark={dark}>
          <NewText>from:</NewText>{" "}
          <NewTextTwo dark={dark}>{`${finalData.to || ""}`}</NewTextTwo>
        </ModalBodyRow>
        <ModalBodyRow dark={dark}>
          <NewText>Subject:</NewText>{" "}
          <NewTextTwo dark={dark}>{`${finalData.subject || ""}`}</NewTextTwo>
        </ModalBodyRow>
        <ModalBodyTextArea
          onFocus={() => setReplyActive(true)}
          onBlur={() => setReplyActive(false)}
          dark={dark}
          onChange={(e) => handleTextChange(e)}
          value={finalData.text}
        >
          {text}
        </ModalBodyTextArea>
      </ModalBody>
      <ModalFooter dark={dark}>
        <SendButton onClick={handleReply}>
          <TextTypeTwo>Send</TextTypeTwo>
          <img
            src={ButtonDownArrow}
            alt="down arrow"
            style={{ background: "transparent" }}
          />
        </SendButton>
        <Attachments>
          <img src={PowerIcon} alt="power" width={10} height={20} />
          <TextTypeTThree>Variables</TextTypeTThree>
        </Attachments>
        <Attachments>
          <img src={PreviewEmail} alt="preview" width={20} height={15} />
          <TextTypeTThree>Preview Email</TextTypeTThree>
        </Attachments>
        <Attachments>
          <img src={SpellCheck} alt="preview" width={20} height={20} />
          <img src={LinkIcon} alt="preview" width={20} height={20} />
          <img src={ImageIcon} alt="preview" width={20} height={20} />
          <img src={Emoji} alt="preview" width={20} height={20} />
          <img src={Unfold} alt="preview" width={20} height={15} />
          <img src={CodeIcon} alt="preview" width={20} height={20} />
        </Attachments>
      </ModalFooter>
    </ModalContainer>
  );
};
