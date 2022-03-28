var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var cmdty = require( './cmdty' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/invoice', exports, [
  [Primitive, ['boolean', 'string'], []],
  [gnc, ['GUID', 'GncNumeric', 'OwnerContent', 'TimeSpec', 'Type_3'], ['slot']],
  [cmdty, [], ['id', 'space']]
], [
  'ActiveType',
  'CurrencyType',
  'GuidType',
  'PostaccType',
  'PostlotType',
  'PosttxnType',
  'SlotsType',
  'TermsType'
], [
  [0, 0, [[4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0]], []],
  [3, 1, [], []],
  [0, 0, [[3, 0], [2, 0]], []],
  [1, 3, [], [[20, 0]]],
  [1, 3, [], [[21, 0]]],
  [1, 3, [], [[22, 0]]],
  [1, 3, [], [[23, 0]]],
  [0, 0, [[1, 2]], []],
  [1, 3, [], [[24, 0]]],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['active', [8], 0],
  ['billing_id', [2], 0],
  ['billto', [5], 0],
  ['chargeAmt:charge-amt', [4], 0],
  ['currency', [9], 0],
  ['guid', [10], 0],
  ['id', [2], 0],
  ['notes', [2], 0],
  ['opened', [6], 0],
  ['owner', [5], 0],
  ['postacc', [11], 0],
  ['posted', [6], 0],
  ['postlot', [12], 0],
  ['posttxn', [13], 0],
  ['slots', [14], 0],
  ['terms', [15], 0],
  ['type', [16], 0],
  ['type', [17], 0],
  ['type', [18], 0],
  ['type', [19], 0],
  ['type', [20], 0]
] )