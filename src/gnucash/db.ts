import Dexie, { Table } from 'dexie'

import {Account, Transaction} from './typescript3/gnucash-v2.xsd'

export type TransactionWithId = Transaction & { id: string}
export type AccountWithId =  Account & { id: string }


export class GnuCashDexie extends Dexie {
  transactions!: Table<TransactionWithId>
  accounts!: Table<AccountWithId>

  constructor() {
    super( 'gnucash' )
    this.version( 1 ).stores( {
      transactions: 'id', // Primary key and indexed props
      accounts: 'id'
    } )
  }
}

export const db = new GnuCashDexie()

