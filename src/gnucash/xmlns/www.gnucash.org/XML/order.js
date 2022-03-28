var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/order', exports, [
  [Primitive, ['boolean', 'string'], []],
  [gnc, ['GUID', 'OwnerContent', 'TimeSpec'], []]
], [
  'ActiveType',
  'GuidType'
], [
  [0, 0, [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]], []],
  [3, 1, [], []],
  [1, 3, [], [[9, 0]]],
  [3, 2, [], []]
], [
  ['active', [6], 0],
  ['closed', [5], 0],
  ['guid', [7], 0],
  ['id', [2], 0],
  ['notes', [2], 0],
  ['opened', [5], 0],
  ['owner', [4], 0],
  ['reference', [2], 0],
  ['type', [8], 0]
] )