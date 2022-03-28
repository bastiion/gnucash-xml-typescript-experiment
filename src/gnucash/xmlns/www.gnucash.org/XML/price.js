var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var cmdty = require( './cmdty' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/price', exports, [
  [Primitive, ['string'], []],
  [gnc, ['GUID', 'GncNumeric', 'TimeSpec'], []],
  [cmdty, [], ['id', 'space']]
], [
  'CommodityType',
  'CurrencyType',
  'IdType',
  'TypeType'
], [
  [0, 0, [[3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]], []],
  [0, 0, [[2, 0], [1, 0]], []],
  [0, 0, [[2, 0], [1, 0]], []],
  [1, 2, [], [[10, 0]]],
  [3, 1, [], []],
  [3, 1, [], []]
], [
  ['commodity', [5], 0],
  ['currency', [6], 0],
  ['id', [7], 0],
  ['source', [1], 0],
  ['time', [4], 0],
  ['type', [8], 0],
  ['value', [3], 0],
  ['type', [9], 0]
] )