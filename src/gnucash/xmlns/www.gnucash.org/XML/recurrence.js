var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/recurrence', exports, [
  [Primitive, ['number', 'string'], []],
  [gnc, ['GDate'], []]
], [
  'Period_typeType',
  'Weekend_adjType'
], [
  [0, 0, [[1, 0], [2, 0], [3, 0], [4, 0]], []],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['mult', [1], 0],
  ['period_type', [4], 0],
  ['start', [3], 0],
  ['weekend_adj', [5], 0]
] )