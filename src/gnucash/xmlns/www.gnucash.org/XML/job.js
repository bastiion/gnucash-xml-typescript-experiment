var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/job', exports, [
  [Primitive, ['boolean', 'string'], []],
  [gnc, ['GUID', 'OwnerContent'], []]
], [
  'ActiveType',
  'GuidType'
], [
  [0, 0, [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]], []],
  [3, 1, [], []],
  [1, 3, [], [[7, 0]]],
  [3, 2, [], []]
], [
  ['active', [5], 0],
  ['guid', [6], 0],
  ['id', [2], 0],
  ['name', [2], 0],
  ['owner', [4], 0],
  ['reference', [2], 0],
  ['type', [7], 0]
] )