var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/split', exports, [
  [Primitive, ['string'], []],
  [gnc, ['GUID', 'GncNumeric', 'TimeSpec', 'Type_3'], ['slot']]
], [
  'AccountType',
  'IdType',
  'LotType',
  'ReconciledStateType',
  'SlotsType'
], [
  [0, 0, [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0]], []],
  [1, 2, [], [[12, 0]]],
  [1, 2, [], [[13, 0]]],
  [1, 2, [], [[14, 0]]],
  [3, 1, [], []],
  [0, 0, [[1, 2]], []],
  [3, 1, [], []],
  [3, 1, [], []],
  [3, 1, [], []]
], [
  ['account', [6], 0],
  ['action', [1], 0],
  ['id', [7], 0],
  ['lot', [8], 0],
  ['memo', [1], 0],
  ['quantity', [3], 0],
  ['reconcileDate:reconcile-date', [4], 0],
  ['reconciledState:reconciled-state', [9], 0],
  ['slots', [10], 0],
  ['value', [3], 0],
  ['type', [11], 0],
  ['type', [12], 0],
  ['type', [13], 0]
] )