import {Typography} from '@mui/material'
import React from 'react'

import {Account, Gncv2, Transaction} from '../typescript3/gnucash-v2.xsd'
import TransactionDataGrid from './TransactionDataGrid'

type AccountDetailProps = {
  account: Account
  transactions: Transaction[]
  onSelectAccount?: ( accountId: string ) => void
}

const AccountDetail = ( {account, transactions, onSelectAccount}: AccountDetailProps ) => {
  return <div>
    <Typography variant={'h2'}>{account['act:name']}</Typography>
    <TransactionDataGrid
      transactions={transactions}
      onSelectAccount={onSelectAccount}
      accountId={account['act:id']['#text']}/>
  </div>
}

export default AccountDetail
