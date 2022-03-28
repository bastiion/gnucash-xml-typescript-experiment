var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )

cxml.register( 'http://www.gnucash.org/XML/cd', exports, [
  [Primitive, ['string'], []]
], [
  'Type'
], [
  [0, 0, [], []],
  [3, 1, [], []]
], [
  ['type', [2], 0]
] )