import styled from 'styled-components';

export const UnorderedList = styled.ul`
  padding: 10px;
  padding-left: ${({ primary }) => (primary ? '25px' : '45px')};
`;

export const ListItem = styled.li`
  color: #c7c5b6;
  font-size: 13px;
`;

export const H3 = styled.h3`
  padding-left: 15px;
  color: ${({ primary }) => (primary ? '#282a2f' : '#fff')};
  font-size: 21px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
