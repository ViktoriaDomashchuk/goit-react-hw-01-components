import styled from 'styled-components';

export const Friends = styled.li`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 280px;
  padding: 10px;
  border: 2px solid black;
`;
export const Status = styled.span`
  color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;
export const Img = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
