import React from 'react';

// Styles
import {
  Wrapper,
  H1,
  H2,
  AddInfoWrap,
  Square,
  Description,
} from './styled';
import { H3, Info } from '../styled';

const AdditionalInfo = () => (
  <Wrapper>
    <Info>
      <H1>Kyrie Petrakis</H1>
      <H2>Digital Marketing</H2>
      <AddInfoWrap>
        <Square />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem ipsam praesentium magni exercitationem, facere adipisci ad nisi voluptatibus saepe.
        </Description>
      </AddInfoWrap>
    </Info>
    <Info>
      <H3 primary>Education</H3>
      <AddInfoWrap>
        <Square />
        <Description>
          2015-2017 <br/>
          School Of Marketing University <br/> 
          123 Anywhere st. Any City. <br/>
          ST 12345 <br/>
      </Description>
      </AddInfoWrap>
      <AddInfoWrap>
        <Square />
        <Description>
          2017-2019 <br/>
          School Of Economics University <br/>
          123 Anywhere st. Any City. <br/>
          ST 12345 <br/>
      </Description>
      </AddInfoWrap>
    </Info>
    <Info>
      <H3 primary>Work Experience</H3>
      <AddInfoWrap>
        <Square />
        <Description>
          Senior Marketing strategies <br/>
          Salford & co. | 2019-2020 <br/>
          <ul>
            <li>made more than 1000 deal with big companies</li>
            <li>complete a lot of complicated work</li>
          </ul>
        </Description>
      </AddInfoWrap>
      <AddInfoWrap>
        <Square />
        <Description>
          Senior Marketing strategies <br/>
          lliceria & co. | 2020-preset <br/>
          <ul>
            <li>made more than 1000 deal with big companies</li>
            <li>complete a lot of complicated work</li>
            <li>ensured customer satisfaction by handling day-today affairs</li>
          </ul>
      </Description>
      </AddInfoWrap>
    </Info>
  </Wrapper>
);

export default AdditionalInfo;
