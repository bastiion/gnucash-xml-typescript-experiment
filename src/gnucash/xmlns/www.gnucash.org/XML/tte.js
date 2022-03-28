var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/tte', exports, [
  [Primitive, ['string'], []],
  [gnc, ['GUID', 'GncNumeric'], []]
], [
  'AcctType',
  'TypeType'
], [
  [0, 0, [[1, 0], [2, 0], [3, 0]], []],
  [1, 2, [], [[4, 0]]],
  [3, 1, [], []],
  [3, 1, [], []]
], [
  ['acct', [4], 0],
  ['amount', [3], 0],
  ['type', [5], 0],
  ['type', [6], 0]
] )