import React, { useState } from "react";
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

const ModalContainer = styled.div`
  /* width: 45rem;
  height: 32rem;
  position: absolute;
  bottom: 0;
  left: 5%;

  overflow: hidden;
  border-radius: 0.5rem;
  width: 90%;
  background: #34383d;

  border: 1px solid #23272c;

  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(100%)"};

  z-index: 20; */
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
  background-color: #41464b;
  display: flex;
  /* padding: 10px 16px; */
  padding: 10px 16px 10px 16px;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  width: 100%;
  border: 1px solid #23272c;
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
  /* background: transparent; */
  height: 80%;
`;
const ModalBodyRow = styled.div`
  border-bottom: 1px solid #34383d;
  text-align: left;
  padding: 8px 24px;
`;
const ModalBodyTextArea = styled.textarea`
  padding: 1rem;
  color: #636970;
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  padding-left: 24px;
  height: 100%;
  /* background: transparent; */
`;

const ModalFooter = styled.footer`
  border-top: 1px solid #2e3236;
  padding: 6px 12px 6px 12px;
  display: flex;
  column-gap: 1rem;
  /* background: transparent; */
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

export const Modal = ({ isOpen, onClose }) => {
  const [fromEmail, setFromEmail] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleReply = () => {
    // Implement reply functionality here
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalHeader>
        <TextTypeOne>Reply</TextTypeOne>
        <CloseButton onClick={onClose}>
          <IoClose size={24} />
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        <ModalBodyRow>to: jeanne@gmail.com</ModalBodyRow>
        <ModalBodyRow>from: peter@reachinbox.com</ModalBodyRow>
        <ModalBodyRow>Subject:Warmup Welcome</ModalBodyRow>
        <ModalBodyTextArea>Hellow wrold</ModalBodyTextArea>
      </ModalBody>
      <ModalFooter>
        <SendButton>
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

{
  /* <label>From Email</label>
      <input
        type="text"
        value={fromEmail}
        onChange={(e) => setFromEmail(e.target.value)}
      />
      <label>To Email</label>
      <input
        type="text"
        value={toEmail}
        onChange={(e) => setToEmail(e.target.value)}
      />
      <label>Subject</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <label>Text to Send</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleReply}>Send</button>
      <button onClick={onClose}>Cancel</button> */
}
