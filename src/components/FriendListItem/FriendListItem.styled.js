import styled from 'styled-components';

export const Friends = styled.li`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 280px;
  padding: 10px;
  border: 2px solid #595d88;
  border-radius: 5px;
  color: #595d88;
  text-transform: uppercase;
`;

export const Status = styled.span`
  color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;

export const Img = styled.img`
  border: 1px solid #595d88;
  border-radius: 50%;
  padding: 10px;
  box-shadow: inset 0 0 29px 5px #e5c6f3;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
