var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/owner', exports, [
  [Primitive, ['string'], []],
  [gnc, ['GUID'], []]
], [
  'IdType',
  'TypeType'
], [
  [0, 0, [[1, 0], [2, 0]], []],
  [1, 2, [], [[3, 0]]],
  [3, 1, [], []],
  [3, 1, [], []]
], [
  ['id', [3], 0],
  ['type', [4], 0],
  ['type', [5], 0]
] )