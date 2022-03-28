var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/lot', exports, [
  [Primitive, ['string'], []],
  [gnc, ['GUID', 'Type_3'], ['slot']]
], [
  'IdType',
  'SlotsType'
], [
  [0, 0, [[2, 0], [3, 0]], []],
  [1, 2, [], [[4, 0]]],
  [0, 0, [[1, 2]], []],
  [3, 1, [], []]
], [
  ['id', [4], 0],
  ['slots', [5], 0],
  ['type', [6], 0]
] )