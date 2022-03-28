var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var btdays = require( './bt-days' )
var btprox = require( './bt-prox' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/billterm', exports, [
  [Primitive, ['boolean', 'number', 'string'], []],
  [gnc, ['GUID', 'GncNumeric', 'Type_3'], ['slot']],
  [btprox, [], ['cutoff-day', 'disc-day', 'discount', 'due-day']],
  [btdays, [], ['disc-days', 'discount', 'due-days']]
], [
  'ChildType',
  'DaysType',
  'GuidType',
  'InvisibleType',
  'ParentType',
  'ProximoType',
  'SlotsType'
], [
  [0, 0, [[9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0]], []],
  [1, 4, [], [[19, 0]]],
  [0, 0, [[6, 1], [7, 1], [8, 1]], []],
  [1, 4, [], [[20, 0]]],
  [3, 1, [], []],
  [1, 4, [], [[21, 0]]],
  [0, 0, [[2, 1], [3, 1], [4, 1], [5, 1]], []],
  [0, 0, [[1, 2]], []],
  [3, 3, [], []],
  [3, 3, [], []],
  [3, 3, [], []]
], [
  ['child', [7], 0],
  ['days', [8], 0],
  ['desc', [3], 0],
  ['guid', [9], 0],
  ['invisible', [10], 0],
  ['name', [3], 0],
  ['parent', [11], 0],
  ['proximo', [12], 0],
  ['refcount', [2], 0],
  ['slots', [13], 0],
  ['type', [14], 0],
  ['type', [15], 0],
  ['type', [16], 0]
] )
