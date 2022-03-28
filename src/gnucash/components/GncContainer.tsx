import {Box, Drawer, Toolbar} from '@mui/material'
import React, {useEffect, useState} from 'react'

import {Account, Gncv2, Transaction} from '../typescript3/gnucash-v2.xsd'
import {useGnucashZustand} from '../useGnucachZustand'
import AccountDetail from './AccountDetail'
import AccountList from './AccountList'

type GncContainerProps = {
  gnucashData: Gncv2
}
const drawerWidth = 340

const GncContainer = ({gnucashData}: GncContainerProps) => {
  const [selectedAccountId, setSelectedAccountId] = useState<string | undefined>(undefined)
  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>()
  const [transactionsForAccount, setTransactionsForAccount] = useState<Transaction[]>([])
  const [databaseInitialized, setDatabaseInitialized] = useState(false)

  const { accounts, setAccounts, setTransactions} = useGnucashZustand()

  useEffect(() => {
    const _book = gnucashData['gnc:book'] || gnucashData
    const _accounts = _book['gnc:account'] || []
    const _transactions =  _book['gnc:transaction']
    console.log(gnucashData)
    const trns = _transactions?.map((trn) => ({
      ...trn,
      id: trn['trn:id']['#text']
    }))
    console.log({trns})
    setTransactions(trns)
    /*trns.forEach( trn => {
      try {
        transactions.insertOne( trn, true )
      } catch ( e ) {
        console.error( 'error inserting trn', e )
      }
    } )*/
    const accts = _accounts.map((act) => ({...act, id: act['act:id']['#text']}))
    setAccounts(accts)
    /*accts.forEach( act => {
      try {
        accounts.insertOne( act, true )
      } catch ( e ) {
        console.error( 'error inserting account', e )
      }
    } )*/
    setDatabaseInitialized(true)
  }, [gnucashData])


  useEffect(() => {
    if (!selectedAccountId) return
    const _selectedAccount = accounts.find(({id}) => id === selectedAccountId)
    if (_selectedAccount) {
      const _transactions = gnucashData['gnc:book']?.['gnc:transaction']?.filter((trn) => {
        const splits = trn['trn:splits']['trn:split'] || []
        try {
          return (splits.find((split) => split['split:account']['#text'] === selectedAccountId))
        } catch (e) {
          console.log('error')
          return false
        }
      })
      setTransactionsForAccount(_transactions)
      setSelectedAccount(_selectedAccount)
    } else {
      setSelectedAccount(undefined)
    }
  }, [selectedAccountId])

  return <>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: {width: drawerWidth, boxSizing: 'border-box'},
      }}
    >
      <Toolbar/>
      {databaseInitialized && <AccountList accounts={accounts} onSelectAccount={setSelectedAccountId}/>}
    </Drawer>
    <Box component="main" sx={{flexGrow: 1, p: 3}}>
      <Toolbar/>
      {selectedAccount && <AccountDetail
        account={selectedAccount}
        transactions={transactionsForAccount}
        onSelectAccount={setSelectedAccountId}/>}
    </Box>
  </>
}

export default GncContainer
