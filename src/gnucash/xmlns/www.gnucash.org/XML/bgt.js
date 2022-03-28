var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/bgt', exports, [
  [Primitive, ['number', 'string'], []],
  [gnc, ['GUID', 'RecurrenceContent', 'Type_3'], ['slot']]
], [
  'IdType',
  'SlotsType'
], [
  [0, 0, [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]], []],
  [1, 3, [], [[8, 0]]],
  [0, 0, [[1, 2]], []],
  [3, 2, [], []]
], [
  ['description', [2], 0],
  ['id', [6], 0],
  ['name', [2], 0],
  ['numPeriods:num-periods', [1], 0],
  ['recurrence', [4], 0],
  ['slots', [7], 0],
  ['type', [8], 0]
] )