var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/bt-prox', exports, [
  [Primitive, ['number'], []],
  [gnc, ['GncNumeric'], []]
], [
], [
  [0, 0, [[1, 0], [2, 0], [3, 0], [4, 0]], []]
], [
  ['cutoffDay:cutoff-day', [1], 0],
  ['discDay:disc-day', [1], 0],
  ['discount', [2], 0],
  ['dueDay:due-day', [1], 0]
] )