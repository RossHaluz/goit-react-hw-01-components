import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
border-collapse: collapse;
margin-top: 30px;
`

export const TransactionsTableHead = styled.thead`
border: 1px solid black;
    background-color: tomato;
    color: white;
    font-size: 18px
`

export const TransactionsTableHeadTh = styled.th`
border: 1px solid black;
padding: 20px 80px;
`

export const TransactionsTableBody = styled.tbody`
border: 1px solid black;
text-align: center;
`

export const TransactionsTableBodyTd = styled.td`
border: 1px solid black;
padding: 20px;

`
export const TransactionsTableBodyTr = styled.tr`
:nth-of-type(even) {
  background-color: #e1e1e7;
}
`