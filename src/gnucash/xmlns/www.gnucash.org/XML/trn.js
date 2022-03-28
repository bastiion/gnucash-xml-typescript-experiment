var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var cmdty = require( './cmdty' )
var gnc = require( './gnc' )
var split = require( './split' )

cxml.register( 'http://www.gnucash.org/XML/trn', exports, [
  [Primitive, ['string'], []],
  [gnc, ['GUID', 'GncNumeric', 'TimeSpec', 'Type_3'], ['slot']],
  [cmdty, [], ['id', 'space']],
  [split, ['AccountType', 'IdType', 'LotType', 'ReconciledStateType', 'SlotsType'], ['account', 'action', 'id', 'lot', 'memo', 'quantity', 'reconcile-date', 'reconciled-state', 'slots', 'value']]
], [
  'CurrencyType',
  'IdType',
  'SlotsType',
  'SplitsType'
], [
  [0, 0, [[14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [21, 0], [22, 0]], []],
  [0, 0, [[3, 0], [2, 0]], []],
  [1, 2, [], [[23, 0]]],
  [0, 0, [[1, 2]], []],
  [0, 0, [[21, 2]], []],
  [3, 1, [], []],
  [0, 0, [[4, 0], [5, 1], [6, 0], [7, 1], [8, 1], [9, 0], [10, 1], [11, 0], [12, 1], [13, 0]], []]
], [
  ['currency', [11], 0],
  ['dateEntered:date-entered', [4], 0],
  ['datePosted:date-posted', [4], 0],
  ['description', [1], 0],
  ['id', [12], 0],
  ['num', [1], 0],
  ['slots', [13], 0],
  ['split', [16], 0],
  ['splits', [14], 0],
  ['type', [15], 0]
] )