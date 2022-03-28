var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var cmdty = require( './cmdty' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/vendor', exports, [
  [Primitive, ['boolean', 'string'], []],
  [gnc, ['AddressContent', 'GUID', 'Type_3'], ['slot']],
  [cmdty, [], ['id', 'space']]
], [
  'ActiveType',
  'CurrencyType',
  'GuidType',
  'SlotsType',
  'TaxincludedType',
  'TaxtableType',
  'TermsType',
  'UseTtType'
], [
  [0, 0, [[4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0]], []],
  [3, 1, [], []],
  [0, 0, [[3, 0], [2, 0]], []],
  [1, 4, [], [[16, 0]]],
  [0, 0, [[1, 2]], []],
  [3, 2, [], []],
  [1, 4, [], [[17, 0]]],
  [1, 4, [], [[18, 0]]],
  [3, 1, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['active', [6], 0],
  ['addr', [3], 0],
  ['currency', [7], 0],
  ['guid', [8], 0],
  ['id', [2], 0],
  ['name', [2], 0],
  ['notes', [2], 0],
  ['slots', [9], 0],
  ['taxincluded', [10], 0],
  ['taxtable', [11], 0],
  ['terms', [12], 0],
  ['useTt:use-tt', [13], 0],
  ['type', [14], 0],
  ['type', [15], 0],
  ['type', [16], 0]
] )