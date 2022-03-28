var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )

cxml.register( 'http://www.gnucash.org/XML/addr', exports, [
  [Primitive, ['string'], []]
], [
], [
  [0, 0, [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]], []]
], [
  ['addr1', [1], 0],
  ['addr2', [1], 0],
  ['addr3', [1], 0],
  ['addr4', [1], 0],
  ['email', [1], 0],
  ['fax', [1], 0],
  ['name', [1], 0],
  ['phone', [1], 0]
] )