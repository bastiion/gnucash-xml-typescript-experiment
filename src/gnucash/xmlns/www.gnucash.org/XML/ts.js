var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )

cxml.register( 'http://www.gnucash.org/XML/ts', exports, [
  [Primitive, ['number', 'string'], []]
], [
  'DateType'
], [
  [0, 0, [[1, 0], [2, 0]], []],
  [3, 2, [], []]
], [
  ['date', [3], 0],
  ['ns', [1], 0]
] )