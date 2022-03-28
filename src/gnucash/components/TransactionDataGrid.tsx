import {Link, Paper, Typography} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import React, {useEffect, useState} from 'react'

import {accounts} from '../db/gnucashDB'
import {Account,Transaction} from '../typescript3/gnucash-v2.xsd'
import {Split} from '../typescript3/trn.xsd'
import {getPriceFromSplit} from './helper'

type TransactionDataGridProps ={
  transactions: Transaction[]
  accountId: string
  onSelectAccount?: ( accountId: string ) => void
}

type EnhancedSplit = Split & { account: Account, value: number }

type EnhancedTransaction = Transaction & {
  id: string,
  balance: number
  dateEntered: Date
  splits: [ EnhancedSplit, EnhancedSplit ]
}

const AccountInfo = ( {account} : { account?: Account} ) => {

  return <>{account?.['act:name']}</>

}

const TransactionDataGrid = ( { transactions, accountId, onSelectAccount }: TransactionDataGridProps ) => {

  const [enhancedTransactions, setEnhancedTransactions] = useState<EnhancedTransaction[]>( [] )

  useEffect(() => {
    //const _trWithBalance: EnhancedTransaction[] = []
    let currentbalance = 0
    const sortedTransactions = transactions
      ?.map(( trn ) => ( {...trn, dateEntered: new Date( trn['trn:date-entered']['ts:date'] ) } ))
      .sort(( t0, t1 ) => t0.dateEntered.getTime() < t1.dateEntered.getTime() ? -1 : 1 )
      .map( trn => {
        const [split0, split1] = trn['trn:splits']['trn:split']
        const price0 =  getPriceFromSplit( split0 )
        const price1 =  getPriceFromSplit( split1 )
        currentbalance += split0['split:account']['#text'] === accountId ?  price0 : price1
        return  {
          ...trn,
          id: trn['trn:id']['#text'],
          balance: currentbalance,
          splits: [
            {
              ...split0,
              value: price0,
              account: accounts.findOne( {'id':  split0['split:account']['#text']} )
            },{
              ...split1,
              value: price1,
              account: accounts.findOne( {'id':  split1['split:account']['#text']} )
            }
          ]
        } as EnhancedTransaction
      } )
    setEnhancedTransactions( sortedTransactions || [])
    console.log({sortedTransactions})
  }, [transactions] )



  return <Paper style={{ height: '80vh', width: '100%' }}  sx={{width: '100%'}}>
    <DataGrid
      columns={[
        {field: 'date', headerName: 'Date entered', flex: 1, type: 'date',
          valueGetter: ( params ) => {
            const trn = params.row as EnhancedTransaction
            return new Date( trn['trn:date-entered']['ts:date'] )
          }
        },
        {field: 'trn:description', headerName: 'Description', flex: 3},
        {field: 'value', headerName: 'Value', flex: 0.5,
          valueGetter: ( params ) => {
            const trn = params.row as EnhancedTransaction
            return `${trn.splits[0].value} €`
          }
        },
        {field: 'split1', headerName: 'from account', flex: 2,
          renderCell: ( params ) => {
            const trn = params.row as EnhancedTransaction
            const [ , split] = trn.splits
            return ( <>
              <Typography>{split.value}</Typography>
              <Link component='button' onClick={() => onSelectAccount && onSelectAccount( split['split:account']['#text'] )}><AccountInfo account={split.account} /></Link>
            </> )
          }
        },
        {field: 'split0', headerName: 'to account', flex: 2,
          renderCell: ( params ) => {
            const trn = params.row as EnhancedTransaction
            const [split] = trn.splits
            return ( <>
              <Typography>{split.value}</Typography>
              <Link component='button' onClick={() => onSelectAccount && onSelectAccount( split['split:account']['#text'] )}><AccountInfo account={split.account} /></Link>
            </> )
          }
        },
        {field: 'balance', headerName: 'Balance'}
      ]}
      rows={enhancedTransactions}
      pageSize={100} />
  </Paper>
}

export default TransactionDataGrid
