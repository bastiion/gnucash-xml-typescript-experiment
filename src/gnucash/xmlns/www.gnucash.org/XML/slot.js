var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )

cxml.register( 'http://www.gnucash.org/XML/slot', exports, [
  [Primitive, ['number', 'string'], []]
], [
  'Type'
], [
  [0, 0, [[1, 0]], []],
  [1, 1, [], [[3, 0]]],
  [3, 2, [], []]
], [
  ['key', [2], 0],
  ['value', [3], 0],
  ['type', [4], 0]
] )