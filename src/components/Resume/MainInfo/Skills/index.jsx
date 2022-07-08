import React from 'react';
import styled from 'styled-components';

// Styles
import { UnorderedList, ListItem } from 'components/Resume/styled';
const Bar = styled.div`
  position: relative;
  width: 70px;
  height: 8px;
  background-color: #fff;
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percent }) => percent}%;
    height: 8px;
    background-color: #737373;
    border-radius: 20px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

// Constants
const ITEMS = [
  {value: 'Content design', percent: 60 },
  {value: 'Speaking', percent: 25 },  
  {value: 'Content Marketing', percent: 88 }, 
  {value: 'Digital Marketing', percent: 79 }, 
  {value: 'Content editing', percent: 33 }
];

const Skills = () => (
  <UnorderedList>
    {ITEMS.map(({ value, percent }) => (
      <ListItem key={value}>
        <Wrap>
          <div>{value}</div>
          <Bar percent={percent}></Bar>
        </Wrap>
      </ListItem>
    ))}
  </UnorderedList>
);

export default Skills;
