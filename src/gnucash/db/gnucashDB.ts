import Loki from  'lokijs'

import {Account, Transaction} from '../typescript3/gnucash-v2.xsd'


type TransactionWithId = Transaction & { id: string}
type AccountWithId =  Account & { id: string }

const db = new Loki('gnucash')

export const accounts = db.addCollection<AccountWithId>('accounts', {
  indices: ['id'],
  unique: ['id']
})
export const transactions = db.addCollection<TransactionWithId>('transactions', {
  indices: ['id'],
  unique: ['id']
})
