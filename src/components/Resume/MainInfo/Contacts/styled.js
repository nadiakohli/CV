import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
`;

export const TextWrap = styled.div`
  margin-left: 5px;
  list-style: none;
  color: #c7c5b6;
  font-size: 13px;
`;

export const IconWrap = styled.div`
  color: #c7c5b6;
  font-size: 13px;
  list-style: ${({ primary }) => (primary ? 'none' : 'disc')};

  & svg {
    width: 12px;
    height: 100%;

    & path {
      fill: #fff;
    }
  }
`;
