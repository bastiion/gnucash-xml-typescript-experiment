var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var cmdty = require( './cmdty' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/employee', exports, [
  [Primitive, ['boolean', 'string'], []],
  [gnc, ['AddressContent', 'GUID', 'GncNumeric', 'Type_3'], ['slot']],
  [cmdty, [], ['id', 'space']]
], [
  'ActiveType',
  'CcardType',
  'CurrencyType',
  'GuidType',
  'SlotsType'
], [
  [0, 0, [[4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0]], []],
  [3, 1, [], []],
  [1, 4, [], [[16, 0]]],
  [0, 0, [[3, 0], [2, 0]], []],
  [1, 4, [], [[17, 0]]],
  [0, 0, [[1, 2]], []],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['acl', [2], 0],
  ['active', [7], 0],
  ['addr', [3], 0],
  ['ccard', [8], 0],
  ['currency', [9], 0],
  ['guid', [10], 0],
  ['id', [2], 0],
  ['language', [2], 0],
  ['rate', [5], 0],
  ['slots', [11], 0],
  ['username', [2], 0],
  ['workday', [5], 0],
  ['type', [12], 0],
  ['type', [13], 0]
] )