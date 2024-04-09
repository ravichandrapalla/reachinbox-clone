import styled from "styled-components";
import ReachInBoxLogo from "../assects/ReachInboxLogo.png";
import GoogleLogo from "../assects/GoogleLogo.png";
import { handleGoogleLoginApi } from "../services/authapi";
import { axios } from "axios";

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
  height: 19.5rem;
  width: 28.75rem;
  border: 1px solid #343a40;
  border-radius: 1.01rem;
  padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  column-gap: 3.5rem;
  row-gap: 2rem;
  overflow: hidden;
`;
const LoginDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.type === "manual" && "center"};
  text-align: center;
  /* width: 100%; */
  height: 8rem;
  gap: ${(props) => (props.type === "manual" ? "0.6rem" : "0.6rem")};
  padding: 0.5rem;
  overflow: hidden;
  justify-content: space-between;
  /* background-color: green; */
`;
const Legend = styled.p`
  width: 100%;
  height: 1.9rem;
  font-size: 1.25rem;
  /* line-height: 1.9375rem; */
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  margin: 0;
`;
const NormalText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #cccccc;
`;
// const SigninLink = styled.anchor`
//   font-weight: 400;
//   font-size: 1rem;
//   font-family: "Open Sans", sans-serif;
//   color: #cccccc;
// `;
const GoogleSignUpButton = styled.button`
  /* background: yellow; */
  /* height: 3rem; */
  border: 1px solid #707172;
  border-radius: 0.25rem;
  background-color: transparent;

  justify-content: space-evenly;
  align-items: center;
  /* gap: 0.5rem; */

  /* padding: 0.3rem; */
  color: #cccccc;
  cursor: pointer;
`;

const ButtonInnerContainer = styled.div`
  /* width: 11.25rem; */
  column-gap: 0.75rem;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
const CreateAccountButton = styled.button`
  width: 12.18rem;
  height: 3rem;
  border-radius: 0.25rem;
  padding: 13px 35px 13px 35px;
  background: linear-gradient(to right, #4b63dd 100%, #0524bf 99%);
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
`;
const CompositeText = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;
const TextTypeTwo = styled.p`
  font-weight: 400;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #909296;
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
  const handleGoogleLogin = () => {
    // handleGoogleLoginApi()
    // .then((resp) => console.log("response is ---->", resp))
    // .catch((err) => console.log("error --->", err));

    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/";
  };
  return (
    <LoginContainer>
      <Header>
        <img src={ReachInBoxLogo} alt="Logo" width="156" height="28" />
      </Header>
      <Main>
        <LoginFormContainer>
          <LoginDetailsContainer>
            <Legend>Create a new account</Legend>
            <GoogleSignUpButton onClick={handleGoogleLogin}>
              <ButtonInnerContainer>
                <img src={GoogleLogo} alt="google" width={30} height={30} />
                <NormalText>Sign Up with Google</NormalText>
              </ButtonInnerContainer>
            </GoogleSignUpButton>
          </LoginDetailsContainer>
          <LoginDetailsContainer type="manual">
            <CreateAccountButton>Create an Account</CreateAccountButton>
            <CompositeText>
              <TextTypeTwo>Already have an account?</TextTypeTwo>
              <NormalText>Sign in</NormalText>
            </CompositeText>
          </LoginDetailsContainer>
        </LoginFormContainer>
      </Main>
      <Footer>&copy; 2023 Reachinbox. All rights reserved</Footer>
    </LoginContainer>
  );
}
