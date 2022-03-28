var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/entry', exports, [
  [Primitive, ['boolean', 'string'], []],
  [gnc, ['GUID', 'GncNumeric', 'OwnerContent', 'TimeSpec'], []]
], [
  'BAcctType',
  'BillableType',
  'BillType',
  'BPayType',
  'BTaxableType',
  'BTaxincludedType',
  'BTaxtableType',
  'GuidType',
  'IAcctType',
  'IDischowType',
  'IDisctypeType',
  'InvoiceType',
  'ITaxableType',
  'ITaxincludedType',
  'ITaxtableType',
  'OrderType'
], [
  [0, 0, [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [21, 0], [22, 0], [23, 0], [24, 0], [25, 0], [26, 0]], []],
  [1, 3, [], [[27, 0]]],
  [3, 1, [], []],
  [1, 3, [], [[29, 0]]],
  [3, 2, [], []],
  [3, 1, [], []],
  [3, 1, [], []],
  [1, 3, [], [[28, 0]]],
  [1, 3, [], [[30, 0]]],
  [1, 3, [], [[31, 0]]],
  [3, 2, [], []],
  [3, 2, [], []],
  [1, 3, [], [[33, 0]]],
  [3, 1, [], []],
  [3, 1, [], []],
  [1, 3, [], [[32, 0]]],
  [1, 3, [], [[34, 0]]],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['action', [2], 0],
  ['bAcct:b-acct', [7], 0],
  ['bPay:b-pay', [10], 0],
  ['bPrice:b-price', [4], 0],
  ['bTaxable:b-taxable', [11], 0],
  ['bTaxincluded:b-taxincluded', [12], 0],
  ['bTaxtable:b-taxtable', [13], 0],
  ['bill', [9], 0],
  ['billable', [8], 0],
  ['billto', [5], 0],
  ['date', [6], 0],
  ['description', [2], 0],
  ['entered', [6], 0],
  ['guid', [14], 0],
  ['iAcct:i-acct', [15], 0],
  ['iDischow:i-disc-how', [16], 0],
  ['iDisctype:i-disc-type', [17], 0],
  ['iDiscount:i-discount', [4], 0],
  ['iPrice:i-price', [4], 0],
  ['iTaxable:i-taxable', [19], 0],
  ['iTaxincluded:i-taxincluded', [20], 0],
  ['iTaxtable:i-taxtable', [21], 0],
  ['invoice', [18], 0],
  ['notes', [2], 0],
  ['order', [22], 0],
  ['qty', [4], 0],
  ['type', [23], 0],
  ['type', [25], 0],
  ['type', [24], 0],
  ['type', [26], 0],
  ['type', [27], 0],
  ['type', [29], 0],
  ['type', [28], 0],
  ['type', [30], 0]
] )