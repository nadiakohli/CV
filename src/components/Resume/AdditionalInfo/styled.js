import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';

export const Wrapper = styled.div`
  width: 275px;
  height: 700px;
  background-image: url(${backgroundImg});;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const H1 = styled.h1`
  margin: 15px 0 0 15px;
  color: #282a2f;
  font-size: 45px;
`;

export const H2 = styled.h2`
  margin: 10px;
  color: #282a2f;
  font-size: 21px;
  opacity: 65%;
`;

export const Description = styled.div`
  font-size: 13px;
  margin-left: 10px;
  width: 90%;
  height: 35%;
  color: #282a2fc1;
  padding: 0 0 5px 15px;
  border-left: 2px solid #282a2fc1;

  & ul {
    padding-left: 25px;
  }
`;

export const Square = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  margin-left: 8px;
  background-color: #282a2fc1;
`;

export const AddInfoWrap = styled.div`
  margin-bottom: 5px;
  position: relative;
`;
