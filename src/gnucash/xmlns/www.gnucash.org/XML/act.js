var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var cmdty = require( './cmdty' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/act', exports, [
  [Primitive, ['number', 'string'], []],
  [gnc, ['GUID', 'Type', 'Type_3'], ['lot', 'slot']],
  [cmdty, [], ['id', 'space']]
], [
  'CommodityType',
  'IdType',
  'LotsType',
  'NonStandardscuType',
  'ParentType',
  'SlotsType',
  'TypeType'
], [
  [0, 0, [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0]], []],
  [0, 0, [[4, 0], [3, 0]], []],
  [1, 3, [], [[16, 0]]],
  [0, 0, [[1, 2]], []],
  [0, 0, [], []],
  [1, 3, [], [[17, 0]]],
  [0, 0, [[2, 2]], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['code', [2], 0],
  ['commodity', [6], 0],
  ['commodityScu:commodity-scu', [1], 0],
  ['description', [2], 0],
  ['id', [7], 0],
  ['lots', [8], 0],
  ['name', [2], 0],
  ['nonStandardscu:non-standard-scu', [9], 0],
  ['parent', [10], 0],
  ['slots', [11], 0],
  ['type', [12], 0],
  ['type', [13], 0],
  ['type', [14], 0]
] )