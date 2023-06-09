import styled from 'styled-components';

export const UserFile = styled.div`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  border: 2px solid #595d88;
  width: 300px;
  border-radius: 5px;
`;

export const CardUser = styled.div`
  display: inline-block;
  padding: 10px 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: inset 0 0 29px 5px #e5c6f3;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0;
  color: #595d88;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ListInfo = styled.ul`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 6px;
  margin: 0;
`;

export const ListInfoItem = styled.li`
  display: grid;
  width: 70px;
  border: 1px solid #595d88;
  border-radius: 5px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #595d88;
`;
