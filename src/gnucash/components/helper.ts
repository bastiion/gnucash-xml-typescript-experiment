import {Account, Gncv2} from '../typescript3/gnucash-v2.xsd'
import {Split} from '../typescript3/trn.xsd'

export const getAccountById: ( data: Gncv2, id: string ) => Account | undefined = ( data: Gncv2, id: string ) =>
  data['gnc:book']['gnc:account'].find(( act ) => act['act:id']['#text'] === id )

export const getPriceFromSplit: ( split: Split ) => number  = ( split: Split ) => {
  try {
    const [nominator, denominator] = split['split:value'].split( '/' ).map( v => parseInt( v ))
    return nominator / denominator
  } catch ( e ) {
    return NaN
  }
}
