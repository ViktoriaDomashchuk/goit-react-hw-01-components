import styled from 'styled-components';
import { getRandomHexColor } from './FunctionChangeColor';

export const StatistscsCard = styled.section`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  text-align: center;
  border: 2px solid black;
  width: 300px;
  height: auto;
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StastisticsList = styled.ul`
  display: flex;
  gap: 0px;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  color: black;
`;

export const StastisticsItem = styled.li`
  display: grid;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: ${getRandomHexColor};
`;
