import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {TreeItem, TreeView} from '@mui/lab'
import React, {useEffect, useState} from 'react'

import {Account, Transaction} from '../typescript3/gnucash-v2.xsd'
import AccountDetail from './AccountDetail'

type AccountWithChildren = Account & {
  children: AccountWithChildren[]
}

type AccountListProps = {
  selectedAccountId?: string
  onSelectAccount?: ( accountId: string ) => void
  accounts: Account[]
}
type AccountTreeProps = {
  accounts: AccountWithChildren[]
}

const makeAccountTree: ( act: Account, accounts: Account[] ) => AccountWithChildren = ( act, accounts ) => {
  return { ...act, children: ( accounts
    .filter(( childAct ) => {
      //@ts-ignore
      return childAct['act:parent']?.['#text'] === act['act:id']['#text']

    } )
    .map(( childAct ) => makeAccountTree( childAct, accounts ))) }
}

function AccountTree( { accounts }: AccountTreeProps ) {
  return <>{
    accounts.map(( act ) => (
      <TreeItem key={act['act:id']['#text']} nodeId={act['act:id']['#text']} label={act['act:name']}>
        <AccountTree accounts={act.children} />
      </TreeItem>
    ))
  }
  </>
}

const AccountList = ( { accounts, onSelectAccount }: AccountListProps ) => {
  const [accountTree, setAccountTree] = useState<AccountWithChildren[]>( [] )
  useEffect(() => {
    const accountsWithoutParent = accounts.filter(( act ) => !act['act:parent'] )
    setAccountTree(
      accountsWithoutParent.map(( act ) => {
        return makeAccountTree( act, accounts )
      } ))
  }, [] )

  const handleNodeSelect = ( _1: any, nodeId: string ) => {
    console.log({nodeId})
    if ( typeof nodeId === 'string' && onSelectAccount ) onSelectAccount( nodeId )
  }



  return <TreeView
    onNodeSelect={handleNodeSelect}
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpandIcon={<ChevronRightIcon />}
  >
    <AccountTree accounts={accountTree} />
  </TreeView>

}

export default AccountList
