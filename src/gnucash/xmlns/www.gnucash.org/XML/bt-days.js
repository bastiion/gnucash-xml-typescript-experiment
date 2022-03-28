var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/bt-days', exports, [
  [Primitive, ['number'], []],
  [gnc, ['GncNumeric'], []]
], [
], [
  [0, 0, [[1, 0], [2, 0], [3, 0]], []]
], [
  ['discDays:disc-days', [1], 0],
  ['discount', [2], 0],
  ['dueDays:due-days', [1], 0]
] )