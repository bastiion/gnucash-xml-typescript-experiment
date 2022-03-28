import create from 'zustand'

import {AccountWithId, TransactionWithId} from './db'

export type GnucashZustand = {
  transactions: TransactionWithId[]
  accounts: AccountWithId[]
  setTransactions: (trans: TransactionWithId[]) => void
  setAccounts: (accts: AccountWithId[]) => void
}


export const useGnucashZustand = create<GnucashZustand>( set => ({
  transactions: [],
  accounts: [],
  setTransactions: transactions => set(() => ({transactions})),
  setAccounts: accounts => set(() => ({accounts}))
}))
