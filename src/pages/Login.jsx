import styled from "styled-components";
import ReachInBoxLogo from "../assects/ReachInboxLogo.png";
import GoogleLogo from "../assects/GoogleLogo.png";

const LoginContainer = styled.div`
  background: transparent;
  color: white;
  position: relative;
`;
const Header = styled.header`
  height: 4rem;
  /* width: 1440px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #25262b;
  padding: 10px, 100px, 10px, 100px;
  overflow: hidden;
`;
const Main = styled.main`
  /* width: 1440px; 663px*/
  height: 41.435rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginFormContainer = styled.section`
  height: 10rem;
  width: 16rem;
  border: 1px solid #343a40;
  border-radius: 1.01rem;
  padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  overflow: hidden;
`;
const LoginDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 6.43rem;
  gap: 2rem;
`;
const Legend = styled.p`
  width: 100%;
  height: 1.9375rem;
  font-size: 1.25rem;
  line-height: 1.9375rem;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
`;
const GoogleSignUpButton = styled.div`
  height: 3rem;
  border: 1px solid #707172;
  border-radius: 0%.25rem;
`;
const Footer = styled.footer`
  color: #5c5f66;
  background-color: #121212;
  /* width: 1440px; */
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;
  border-top: 1px solid #25262b;
  padding: 20px, 100px, 20px, 100px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <LoginContainer>
      <Header>
        <img src={ReachInBoxLogo} alt="Logo" width="156" height="28" />
      </Header>
      <Main>
        <LoginFormContainer>
          <LoginDetailsContainer>
            <Legend>Create a new account</Legend>
            <GoogleSignUpButton>
              <img src={GoogleLogo} alt="google" />
            </GoogleSignUpButton>
          </LoginDetailsContainer>
          <LoginDetailsContainer></LoginDetailsContainer>
        </LoginFormContainer>
      </Main>
      <Footer>&copy; 2023 Reachinbox. All rights reserved</Footer>
    </LoginContainer>
  );
}
