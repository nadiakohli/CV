import React from 'react';
import styled from "styled-components";

// Components
import Skills from './Skills';
import Languages from './Languages';
import Contacts from './Contacts';

// Images
import modelImg from 'assets/images/model.jpg';

// Styles
import { H3, Info } from '../styled';
const Img = styled.img`
  border-radius: 0 50px 0 0;
  width: 275px;
`;

const Wrapper = styled.div`
  background-color: #282a2f;
`;

const MainInfo = () => (
  <Wrapper>
    <Img src={modelImg} alt="Photo of model" />
      <Info>
        <H3>Expertise Skill</H3>
        <Skills />
      </Info>
      <Info>
        <H3>Language</H3>
        <Languages />
      </Info>
      <Info>
        <H3>Contact Me</H3>
        <Contacts />
      </Info>
  </Wrapper>
);

export default MainInfo;
