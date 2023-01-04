import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  margin-top: 30px;
`;

export const TransactionsTableHead = styled.thead`
  border: 1px solid black;
  background-color: ${prop => prop.theme.colors.tomato};
  color: ${prop => prop.theme.colors.white};
  font-size: 18px;
`;

export const TransactionsTableHeadTh = styled.th`
  border: ${prop => `1px solid ${prop.theme.colors.black}`};
  padding: 20px 80px;
`;

export const TransactionsTableBody = styled.tbody`
  border: ${prop => `1px solid ${prop.theme.colors.black}`};
  text-align: center;
`;

export const TransactionsTableBodyTd = styled.td`
  border: ${prop => `1px solid ${prop.theme.colors.black}`};
  padding: 20px;
`;
export const TransactionsTableBodyTr = styled.tr`
  :nth-of-type(even) {
    background-color: ${prop => prop.theme.colors.whiteGray};
  }
`;
