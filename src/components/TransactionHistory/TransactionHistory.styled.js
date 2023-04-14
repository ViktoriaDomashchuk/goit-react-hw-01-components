import styled from 'styled-components';

export const TransactionCard = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  letter-spacing: 2px;
`;

export const TransactionColumTh = styled.th`
  border: 2px solid black;
  padding: 6px 15px;
  width: 200px;
  height: 30px;
`;

export const TransactionColumTd = styled.td`
  border: 1px solid black;
  padding: 6px;
  text-align: center;
  color: black;
  font-size: 16px;
`;

export const HeadlineTransactionCard = styled.thead`
  background-color: blue;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
`;

export const BodyTransactionCard = styled.tbody`
  background-color: white;
`;
