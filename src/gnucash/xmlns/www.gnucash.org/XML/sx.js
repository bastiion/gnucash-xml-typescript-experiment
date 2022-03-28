var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var gnc = require( './gnc' )

cxml.register( 'http://www.gnucash.org/XML/sx', exports, [
  [Primitive, ['number', 'string'], []],
  [gnc, ['GDate', 'GUID', 'RecurrenceContent', 'Type_3'], ['recurrence', 'slot']]
], [
  'AutoCreateNotifyType',
  'AutoCreateType',
  'DeferredInstanceType',
  'EnabledType',
  'IdType',
  'ScheduleType',
  'SlotsType',
  'TemplAcctType'
], [
  [0, 0, [[3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0]], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [0, 0, [[11, 0], [12, 1], [15, 0]], []],
  [3, 2, [], []],
  [1, 4, [], [[20, 0]]],
  [0, 0, [[1, 3]], []],
  [0, 0, [[2, 2]], []],
  [1, 4, [], [[21, 0]]],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['advanceCreateDays', [1], 0],
  ['advanceRemindDays', [1], 0],
  ['autoCreate', [8], 0],
  ['autoCreateNotify', [7], 0],
  ['deferredInstance', [9], 0],
  ['enabled', [10], 0],
  ['end', [3], 0],
  ['id', [11], 0],
  ['instanceCount', [1], 0],
  ['last', [3], 0],
  ['name', [2], 0],
  ['numOccur:num-occur', [1], 0],
  ['remOccur:rem-occur', [1], 0],
  ['schedule', [12], 0],
  ['slots', [13], 0],
  ['start', [3], 0],
  ['templAcct:templ-acct', [14], 0],
  ['type', [15], 0],
  ['type', [16], 0]
] )