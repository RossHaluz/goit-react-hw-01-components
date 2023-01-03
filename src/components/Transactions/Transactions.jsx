import PropTypes from 'prop-types';

import { TransactionsTable, TransactionsTableHead, TransactionsTableBody, TransactionsTableHeadTh, TransactionsTableBodyTd, TransactionsTableBodyTr } from "./Transactions.styled"

export const Transactions = ({ items }) => {
    return (
        <TransactionsTable>
  <TransactionsTableHead>
    <tr>
      <TransactionsTableHeadTh>Type</TransactionsTableHeadTh>
      <TransactionsTableHeadTh>Amount</TransactionsTableHeadTh>
      <TransactionsTableHeadTh>Currency</TransactionsTableHeadTh>
    </tr>
            </TransactionsTableHead>
            <TransactionsTableBody>
                {items.map(({id, type, amount, currency}) => {  
                  return  (
                        <TransactionsTableBodyTr key={id}>
                            <TransactionsTableBodyTd>{type}</TransactionsTableBodyTd>
                            <TransactionsTableBodyTd>{amount}</TransactionsTableBodyTd>
                            <TransactionsTableBodyTd>{currency}</TransactionsTableBodyTd>
    </TransactionsTableBodyTr>
                    )
                    
                })}
  </TransactionsTableBody>
</TransactionsTable>
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}