var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/cmdty', exports, [
  [Primitive, ['string'], []],
  [gnc, ['Type_3'], ['slot']]
], [
  'Get_quotesType',
  'SlotsType',
  'Type'
], [
  [0, 0, [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [11, 0]], []],
  [0, 0, [], []],
  [0, 0, [[1, 2]], []],
  [3, 1, [], []]
], [
  ['fraction', [1], 0],
  ['get_quotes', [3], 0],
  ['id', [1], 0],
  ['name', [1], 0],
  ['quote_source', [1], 0],
  ['quote_tz', [1], 0],
  ['slots', [4], 0],
  ['space', [1], 0],
  ['space', [5], 0],
  ['xcode', [1], 0]
] )