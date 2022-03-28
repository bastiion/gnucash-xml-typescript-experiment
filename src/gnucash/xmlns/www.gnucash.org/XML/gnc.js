var cxml = require( 'cxml' )
var Primitive = require( '../../xml-primitives' )
var act = require( './act' )
var addr = require( './addr' )
var bgt = require( './bgt' )
var billterm = require( './billterm' )
var book = require( './book' )
var cd = require( './cd' )
var cmdty = require( './cmdty' )
var cust = require( './cust' )
var employee = require( './employee' )
var entry = require( './entry' )
var invoice = require( './invoice' )
var job = require( './job' )
var lot = require( './lot' )
var order = require( './order' )
var owner = require( './owner' )
var price = require( './price' )
var recurrence = require( './recurrence' )
var slot = require( './slot' )
var sx = require( './sx' )
var taxtable = require( './taxtable' )
var trn = require( './trn' )
var ts = require( './ts' )
var tte = require( './tte' )
var vendor = require( './vendor' )

cxml.register( 'http://www.gnucash.org/XML/gnc', exports, [
  [Primitive, ['number', 'string'], []],
  [owner, ['IdType', 'TypeType'], ['id', 'type']],
  [bgt, ['IdType', 'SlotsType'], ['description', 'id', 'name', 'num-periods', 'recurrence', 'slots']],
  [book, ['IdType', 'SlotsType'], ['id', 'slots']],
  [lot, ['IdType', 'SlotsType'], ['id', 'slots']],
  [act, ['CommodityType', 'IdType', 'LotsType', 'NonStandardscuType', 'ParentType', 'SlotsType', 'TypeType'], ['code', 'commodity', 'commodity-scu', 'description', 'id', 'lots', 'name', 'non-standard-scu', 'parent', 'slots', 'type']],
  [cmdty, ['Get_quotesType', 'SlotsType', 'Type'], ['fraction', 'get_quotes', 'id', 'name', 'quote_source', 'quote_tz', 'slots', 'space', 'xcode']],
  [addr, [], ['addr1', 'addr2', 'addr3', 'addr4', 'email', 'fax', 'name', 'phone']],
  [vendor, ['ActiveType', 'CurrencyType', 'GuidType', 'SlotsType', 'TaxincludedType', 'TaxtableType', 'TermsType', 'UseTtType'], ['active', 'addr', 'currency', 'guid', 'id', 'name', 'notes', 'slots', 'taxincluded', 'taxtable', 'terms', 'use-tt']],
  [entry, ['BAcctType', 'BPayType', 'BTaxableType', 'BTaxincludedType', 'BTaxtableType', 'BillType', 'BillableType', 'GuidType', 'IAcctType', 'IDischowType', 'IDisctypeType', 'ITaxableType', 'ITaxincludedType', 'ITaxtableType', 'InvoiceType', 'OrderType'], ['action', 'b-acct', 'b-pay', 'b-price', 'b-taxable', 'b-taxincluded', 'b-taxtable', 'bill', 'billable', 'billto', 'date', 'description', 'entered', 'guid', 'i-acct', 'i-disc-how', 'i-disc-type', 'i-discount', 'i-price', 'i-taxable', 'i-taxincluded', 'i-taxtable', 'invoice', 'notes', 'order', 'qty']],
  [price, ['CommodityType', 'CurrencyType', 'IdType', 'TypeType'], ['commodity', 'currency', 'id', 'source', 'time', 'type', 'value']],
  [recurrence, ['Period_typeType', 'Weekend_adjType'], ['mult', 'period_type', 'start', 'weekend_adj']],
  [job, ['ActiveType', 'GuidType'], ['active', 'guid', 'id', 'name', 'owner', 'reference']],
  [slot, ['Type'], ['key', 'value']],
  [ts, ['DateType'], ['date', 'ns']],
  [order, ['ActiveType', 'GuidType'], ['active', 'closed', 'guid', 'id', 'notes', 'opened', 'owner', 'reference']],
  [trn, ['CurrencyType', 'IdType', 'SlotsType', 'SplitsType'], ['currency', 'date-entered', 'date-posted', 'description', 'id', 'num', 'slots', 'splits']],
  [cust, ['ActiveType', 'CurrencyType', 'GuidType', 'SlotsType', 'TaxincludedType', 'TaxtableType', 'TermsType', 'UseTtType'], ['active', 'addr', 'credit', 'currency', 'discount', 'guid', 'id', 'name', 'notes', 'shipaddr', 'slots', 'taxincluded', 'taxtable', 'terms', 'use-tt']],
  [employee, ['ActiveType', 'CcardType', 'CurrencyType', 'GuidType', 'SlotsType'], ['acl', 'active', 'addr', 'ccard', 'currency', 'guid', 'id', 'language', 'rate', 'slots', 'username', 'workday']],
  [invoice, ['ActiveType', 'CurrencyType', 'GuidType', 'PostaccType', 'PostlotType', 'PosttxnType', 'SlotsType', 'TermsType'], ['active', 'billing_id', 'billto', 'charge-amt', 'currency', 'guid', 'id', 'notes', 'opened', 'owner', 'postacc', 'posted', 'postlot', 'posttxn', 'slots', 'terms']],
  [billterm, ['ChildType', 'DaysType', 'GuidType', 'InvisibleType', 'ParentType', 'ProximoType', 'SlotsType'], ['child', 'days', 'desc', 'guid', 'invisible', 'name', 'parent', 'proximo', 'refcount', 'slots']],
  [taxtable, ['ChildType', 'EntriesType', 'GuidType', 'InvisibleType', 'ParentType'], ['child', 'entries', 'guid', 'invisible', 'name', 'parent', 'refcount']],
  [sx, ['AutoCreateNotifyType', 'AutoCreateType', 'DeferredInstanceType', 'EnabledType', 'IdType', 'ScheduleType', 'SlotsType', 'TemplAcctType'], ['advanceCreateDays', 'advanceRemindDays', 'autoCreate', 'autoCreateNotify', 'deferredInstance', 'enabled', 'end', 'id', 'instanceCount', 'last', 'name', 'num-occur', 'rem-occur', 'schedule', 'slots', 'start', 'templ-acct']],
  [cd, ['Type'], ['type']],
  [tte, ['AcctType', 'TypeType'], ['acct', 'amount', 'type']]
], [
  'AddressContent',
  'GDate',
  'GncNumeric',
  'GUID',
  'OwnerContent',
  'RecurrenceContent',
  'TimeSpec',
  'Type',
  'Type_3',
  'Type_4'
], [
  [0, 0, [[197, 0], [198, 0], [199, 0], [200, 0], [201, 0], [202, 0], [203, 0], [204, 0], [205, 0], [206, 0], [207, 0], [208, 0], [209, 0], [210, 0], [211, 0], [212, 0], [213, 0], [214, 0], [216, 0], [217, 0]], []],
  [0, 0, [[33, 1], [34, 1], [35, 1], [36, 1], [37, 1], [38, 1], [39, 1], [40, 1]], [[222, 0]]],
  [0, 0, [[219, 0]], []],
  [3, 2, [], []],
  [3, 2, [], []],
  [0, 0, [[1, 0], [2, 0]], [[223, 0]]],
  [0, 0, [[86, 0], [87, 0], [88, 0], [89, 1]], [[221, 0]]],
  [0, 0, [[98, 0], [99, 1]], []],
  [0, 0, [[11, 0], [12, 0]], [[225, 0]]],
  [0, 0, [[97, 2], [96, 0]], []],
  [0, 0, [[194, 1], [195, 0], [196, 0]], []],
  [0, 0, [[13, 1], [14, 1], [15, 1], [16, 1], [17, 0], [18, 1], [19, 0], [20, 1], [21, 1], [22, 1], [23, 0]], [[224, 0]]],
  [3, 2, [], []],
  [3, 2, [], []],
  [0, 0, [[197, 3], [199, 3], [200, 3], [218, 3], [201, 3], [202, 3], [203, 3], [204, 3], [205, 3], [206, 3], [207, 3], [208, 3], [210, 3], [9, 0], [212, 1], [214, 3], [10, 1], [216, 3], [217, 3]], [[226, 0]]],
  [1, 1, [], [[193, 0]]],
  [3, 2, [], []],
  [0, 0, [[3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 1]], [[227, 0]]],
  [3, 2, [], []],
  [0, 0, [[31, 2], [24, 0], [25, 1], [26, 2], [27, 1], [28, 1], [29, 1], [30, 1], [32, 1]], [[228, 0]]],
  [3, 2, [], []],
  [3, 2, [], []],
  [0, 0, [[159, 1], [160, 0], [161, 0], [162, 1], [163, 0], [164, 0], [165, 1], [166, 0], [167, 0], [168, 1]], [[229, 0]]],
  [3, 2, [], []],
  [0, 0, [[116, 0], [117, 0], [118, 0], [119, 0], [120, 0], [121, 0], [122, 0], [123, 0], [124, 1], [125, 0], [126, 1], [127, 0], [128, 1], [129, 1], [130, 0]], [[230, 0]]],
  [3, 2, [], []],
  [0, 0, [[131, 1], [132, 0], [133, 0], [134, 1], [135, 0], [136, 0], [137, 0], [138, 1], [139, 0], [140, 1], [141, 0], [142, 0]], [[231, 0]]],
  [3, 2, [], []],
  [0, 0, [[53, 1], [54, 1], [55, 1], [56, 1], [57, 1], [58, 1], [59, 1], [60, 1], [61, 1], [62, 1], [63, 0], [64, 1], [65, 0], [66, 0], [67, 1], [68, 1], [69, 1], [70, 1], [71, 1], [72, 1], [73, 1], [74, 1], [75, 1], [76, 1], [77, 1], [78, 1]], [[232, 0]]],
  [3, 2, [], []],
  [0, 0, [[143, 0], [144, 1], [145, 1], [146, 1], [147, 0], [148, 0], [149, 0], [150, 1], [151, 0], [152, 0], [153, 1], [154, 1], [155, 1], [156, 1], [157, 1], [158, 1]], [[233, 0]]],
  [3, 2, [], []],
  [0, 0, [[90, 0], [91, 0], [92, 0], [93, 0], [94, 0], [95, 1]], [[234, 0]]],
  [3, 2, [], []],
  [0, 0, [[100, 0], [101, 1], [102, 0], [103, 0], [104, 1], [105, 0], [106, 0], [107, 1]], [[235, 0]]],
  [3, 2, [], []],
  [0, 0, [[169, 1], [170, 0], [171, 1], [172, 0], [173, 0], [174, 1], [175, 0]], [[236, 0]]],
  [3, 2, [], []],
  [0, 0, [[41, 0], [42, 0], [43, 0], [44, 0], [45, 0], [46, 0], [47, 1], [48, 1], [49, 0], [50, 1], [51, 1], [52, 0]], [[237, 0]]],
  [3, 2, [], []],
  [3, 2, [], []],
  [0, 0, [[220, 2]], [[238, 0]]],
  [3, 2, [], []],
  [0, 0, [[79, 0], [80, 0], [81, 0], [82, 1], [83, 0], [84, 1], [85, 0]], []],
  [3, 2, [], []],
  [0, 0, [[176, 0], [177, 0], [178, 0], [179, 0], [180, 3], [181, 0], [182, 1], [183, 0], [184, 0], [185, 1], [186, 0], [187, 1], [188, 1], [189, 0], [190, 1], [191, 0], [192, 0]], [[239, 0]]],
  [3, 2, [], []],
  [0, 0, [[197, 3], [217, 3]], []],
  [0, 0, [[108, 0], [109, 0], [110, 0], [111, 1], [112, 0], [113, 1], [114, 1], [115, 0]], [[240, 0]]],
  [3, 2, [], []],
  [3, 2, [], []]
], [
  ['account', [115], 0],
  ['book', [118], 0],
  ['budget', [121], 0],
  ['commodity', [123], 0],
  ['GncBillTerm', [126], 0],
  ['GncCustomer', [128], 0],
  ['GncEmployee', [130], 0],
  ['GncEntry', [132], 0],
  ['GncInvoice', [134], 0],
  ['GncJob', [136], 0],
  ['GncOrder', [138], 0],
  ['GncTaxTable', [140], 0],
  ['GncTaxTableEntry', [114], 0],
  ['GncVendor', [142], 0],
  ['lot', [112], 0],
  ['pricedb', [145], 0],
  ['recurrence', [110], 0],
  ['schedxaction', [149], 0],
  ['slot', [113], 0],
  ['templateTransactions:template-transactions', [151], 0],
  ['transaction', [152], 0],
  ['countData:count-data', [119], 0],
  ['gdate', [125], 0],
  ['price', [147], 0],
  ['version', [148], 0],
  ['version', [117], 0],
  ['version', [144], 0],
  ['version', [116], 0],
  ['version', [154], 0],
  ['version', [120], 0],
  ['version', [122], 0],
  ['version', [124], 0],
  ['version', [127], 0],
  ['version', [129], 0],
  ['version', [131], 0],
  ['version', [133], 0],
  ['version', [135], 0],
  ['version', [137], 0],
  ['version', [139], 0],
  ['version', [141], 0],
  ['version', [143], 0],
  ['version', [146], 0],
  ['version', [150], 0],
  ['version', [153], 0]
] )