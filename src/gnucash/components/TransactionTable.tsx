import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {Link, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'

import {db} from '../db'
import {Account,Gncv2, Transaction} from '../typescript3/gnucash-v2.xsd'
import {getAccountById, getPriceFromSplit} from './helper'

type TransactionTableProps ={
  transactions: Transaction[]
  accountId: string
  onSelectAccount?: ( accountId: string ) => void
  data: Gncv2
}

type EnhancedTransaction = Transaction & {
  balance: number
  splitValue: [number, number]
  dateEntered: Date
}

const AccountInfo = ( {accountId} : { accountId: string} ) => {
  const [account, setAccount] = useState<Account | undefined>()

  /*useEffect(() => {
    db.accounts.get(accountId).then(act => { account && setAccount(account)})
  }, [accountId]);*/


  return account ? <>{account['act:name']}</> : <>{accountId}</>


}

const TransactionTable = ( { transactions, accountId, onSelectAccount, data }: TransactionTableProps ) => {

  const [enhancedTransactions, setEnhancedTransactions] = useState<EnhancedTransaction[]>( [] )

  useEffect(() => {
    //const _trWithBalance: EnhancedTransaction[] = []
    let currentbalance = 0
    const sortedTransactions = transactions
      .map(( trn ) => ( {...trn, dateEntered: new Date( trn['trn:date-entered']['ts:date'] ) } ))
      .sort(( t0, t1 ) => t0.dateEntered.getTime() < t1.dateEntered.getTime() ? -1 : 1 )
      .map( trn => {

        const [split0, split1] = trn['trn:splits']['trn:split']
        const price0 =  getPriceFromSplit( split0 )
        const price1 =  getPriceFromSplit( split1 )
        currentbalance += split0['split:account']['#text'] === accountId ?  price0 : price1
        return  {
          ...trn,
          balance: currentbalance,
          splitValue: [price0, price1]
        } as EnhancedTransaction
      } )
    setEnhancedTransactions( sortedTransactions )
  }, [transactions] )



  return <Paper sx={{width: '100%'}}>
    <TableContainer>
      <Table sx={{ minWidth: 750}}>
        <TableBody>
          {enhancedTransactions.map(( trn ) => {
            const [split0, split1] = trn['trn:splits']['trn:split']
            const [price0, price1] = trn.splitValue
            return (
              <TableRow hover key={trn['trn:id']['#text']}>
                <TableCell component={'th'} scope='row'>
                  {trn['trn:description']}
                </TableCell>
                <TableCell align='right'>{trn['trn:date-entered']['ts:date']}</TableCell>
                <TableCell align='right'>
                  <Link component='button' onClick={() => onSelectAccount && onSelectAccount( split1['split:account']['#text'] )}><AccountInfo accountId={ split1['split:account']['#text']} /></Link>
                  <Typography>{price1}</Typography>
                </TableCell>
                <TableCell>
                  <ArrowRightIcon />
                </TableCell>
                <TableCell align='left'>
                  <Link component='button' onClick={() => onSelectAccount && onSelectAccount( split0['split:account']['#text'] )}><AccountInfo accountId={ split0['split:account']['#text']} /></Link>
                  <Typography>{price0}</Typography>
                </TableCell>
                <TableCell>
                  {trn.balance}
                </TableCell>
              </TableRow>
            )
          } )}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
}

export default TransactionTable
