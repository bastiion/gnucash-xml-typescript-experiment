var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/taxtable', exports, [
  [Primitive, ['boolean', 'number', 'string'], []],
  [gnc, ['GUID', 'Type_4'], ['GncTaxTableEntry']]
], [
  'ChildType',
  'EntriesType',
  'GuidType',
  'InvisibleType',
  'ParentType'
], [
  [0, 0, [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]], []],
  [1, 4, [], [[9, 0]]],
  [0, 0, [[1, 3]], []],
  [1, 4, [], [[10, 0]]],
  [3, 1, [], []],
  [1, 4, [], [[11, 0]]],
  [3, 3, [], []],
  [3, 3, [], []],
  [3, 3, [], []]
], [
  ['child', [6], 0],
  ['entries', [7], 0],
  ['guid', [8], 0],
  ['invisible', [9], 0],
  ['name', [3], 0],
  ['parent', [10], 0],
  ['refcount', [2], 0],
  ['type', [11], 0],
  ['type', [12], 0],
  ['type', [13], 0]
] )