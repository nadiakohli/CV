import React from 'react';
import styled from 'styled-components';

// Components
import MainInfo from './MainInfo';
import AdditionalInfo from './AdditionalInfo';

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Resume = () => (
  <Wrapper>
    <MainInfo />
    <AdditionalInfo />
  </Wrapper>
);

export default Resume;
