import * as Primitive from '../../xml-primitives'
import * as act from './act'
import * as addr from './addr'
import * as bgt from './bgt'
import * as billterm from './billterm'
import * as book from './book'
import * as cd from './cd'
import * as cmdty from './cmdty'
import * as cust from './cust'
import * as employee from './employee'
import * as entry from './entry'
import * as invoice from './invoice'
import * as job from './job'
import * as lot from './lot'
import * as order from './order'
import * as owner from './owner'
import * as price from './price'
import * as recurrence from './recurrence'
import * as slot from './slot'
import * as sx from './sx'
import * as taxtable from './taxtable'
import * as trn from './trn'
import * as ts from './ts'
import * as tte from './tte'
import * as vendor from './vendor'

// Source files:
// http://localhost:3000/xsd/gnucash-v2.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _AccountType extends BaseType {
	version: AccountTypeVersionType;
	code?: string;
	commodity?: act.CommodityType;
	commodityScu?: number;
	description?: string;
	id: act.IdType;
	lots?: act.LotsType;
	name: string;
	nonStandardscu?: act.NonStandardscuType;
	parent?: act.ParentType;
	slots?: act.SlotsType;
	type: act.TypeType;
}
interface AccountType extends _AccountType { constructor: { new(): AccountType }; }

type AccountTypeVersionType = '2.0.0';
interface _AccountTypeVersionType extends Primitive._string { content: AccountTypeVersionType; }

interface _AddressContent extends BaseType {
	version: AddressContentVersionType;
	addr1?: string;
	addr2?: string;
	addr3?: string;
	addr4?: string;
	email?: string;
	fax?: string;
	name?: string;
	phone?: string;
}
export interface AddressContent extends _AddressContent { constructor: { new(): AddressContent }; }
export var AddressContent: { new(): AddressContent }

type AddressContentVersionType = '2.0.0';
interface _AddressContentVersionType extends Primitive._string { content: AddressContentVersionType; }

interface _BookType extends BaseType {
	version: BookTypeVersionType;
	account?: AccountType[];
	budget?: BudgetType[];
	commodity?: CommodityType[];
	countData?: BookTypeCountDataType[];
	GncBillTerm?: GncBillTermType[];
	GncCustomer?: GncCustomerType[];
	GncEmployee?: GncEmployeeType[];
	GncEntry?: GncEntryType[];
	GncInvoice?: GncInvoiceType[];
	GncJob?: GncJobType[];
	GncOrder?: GncOrderType[];
	GncTaxTable?: GncTaxTableType[];
	GncVendor?: GncVendorType[];
	id: book.IdType;
	pricedb?: PricedbType;
	schedxaction?: SchedxactionType[];
	slots?: book.SlotsType;
	templateTransactions?: TemplateTransactionsType[];
	transaction?: TransactionType[];
}
interface BookType extends _BookType { constructor: { new(): BookType }; }

interface _BookTypeCountDataType extends Primitive._number {
	type: cd.Type;
}
interface BookTypeCountDataType extends _BookTypeCountDataType { constructor: { new(): BookTypeCountDataType }; }

type BookTypeVersionType = '2.0.0';
interface _BookTypeVersionType extends Primitive._string { content: BookTypeVersionType; }

interface _BudgetType extends BaseType {
	version: BudgetTypeVersionType;
	description: string;
	id: bgt.IdType;
	name: string;
	numPeriods: number;
	recurrence: RecurrenceContent;
	slots?: bgt.SlotsType;
}
interface BudgetType extends _BudgetType { constructor: { new(): BudgetType }; }

type BudgetTypeVersionType = '2.0.0';
interface _BudgetTypeVersionType extends Primitive._string { content: BudgetTypeVersionType; }

interface _CommodityType extends BaseType {
	version: CommodityTypeVersionType;
	space: cmdty.Type[];
	fraction: string;
	get_quotes?: cmdty.Get_quotesType;
	id: string[];
	name?: string;
	quote_source?: string;
	quote_tz?: string;
	slots?: cmdty.SlotsType;
	xcode?: string;
}
interface CommodityType extends _CommodityType { constructor: { new(): CommodityType }; }

type CommodityTypeVersionType = '2.0.0';
interface _CommodityTypeVersionType extends Primitive._string { content: CommodityTypeVersionType; }

interface _GDate extends BaseType {
	gdate: string;
}
export interface GDate extends _GDate { constructor: { new(): GDate }; }
export var GDate: { new(): GDate }

type GDateGdateType = string;
type _GDateGdateType = Primitive._string;

interface _GncBillTermType extends BaseType {
	version: GncBillTermTypeVersionType;
	child?: billterm.ChildType;
	days: billterm.DaysType;
	desc: string;
	guid?: billterm.GuidType;
	invisible: boolean;
	name: string;
	parent?: billterm.ParentType;
	proximo: billterm.ProximoType;
	refcount: number;
	slots?: billterm.SlotsType;
}
interface GncBillTermType extends _GncBillTermType { constructor: { new(): GncBillTermType }; }

type GncBillTermTypeVersionType = '2.0.0';
interface _GncBillTermTypeVersionType extends Primitive._string { content: GncBillTermTypeVersionType; }

interface _GncCustomerType extends BaseType {
	version: GncCustomerTypeVersionType;
	active: boolean;
	addr: AddressContent;
	credit: string;
	currency: cust.CurrencyType;
	discount: string;
	guid: cust.GuidType;
	id: string;
	name: string;
	notes?: string;
	shipaddr: AddressContent;
	slots?: cust.SlotsType;
	taxincluded: cust.TaxincludedType;
	taxtable?: cust.TaxtableType;
	terms?: cust.TermsType;
	useTt: boolean;
}
interface GncCustomerType extends _GncCustomerType { constructor: { new(): GncCustomerType }; }

type GncCustomerTypeVersionType = '2.0.0';
interface _GncCustomerTypeVersionType extends Primitive._string { content: GncCustomerTypeVersionType; }

interface _GncEmployeeType extends BaseType {
	version: GncEmployeeTypeVersionType;
	acl?: string;
	active: boolean;
	addr: AddressContent;
	ccard?: employee.CcardType;
	currency: employee.CurrencyType;
	guid: employee.GuidType;
	id: string;
	language?: string;
	rate: string;
	slots?: employee.SlotsType;
	username: string;
	workday: string;
}
interface GncEmployeeType extends _GncEmployeeType { constructor: { new(): GncEmployeeType }; }

type GncEmployeeTypeVersionType = '2.0.0';
interface _GncEmployeeTypeVersionType extends Primitive._string { content: GncEmployeeTypeVersionType; }

interface _GncEntryType extends BaseType {
	version: GncEntryTypeVersionType;
	action?: string;
	bAcct?: entry.BAcctType;
	bPay?: entry.BPayType;
	bPrice?: string;
	bTaxable?: boolean;
	bTaxincluded?: boolean;
	bTaxtable?: entry.BTaxtableType;
	bill?: entry.BillType;
	billable?: boolean;
	billto?: OwnerContent;
	date: TimeSpec;
	description?: string;
	entered: TimeSpec;
	guid: entry.GuidType;
	iAcct?: entry.IAcctType;
	iDischow?: entry.IDischowType;
	iDisctype?: entry.IDisctypeType;
	iDiscount?: string;
	iPrice?: string;
	iTaxable?: boolean;
	iTaxincluded?: boolean;
	iTaxtable?: entry.ITaxtableType;
	invoice?: entry.InvoiceType;
	notes?: string;
	order?: entry.OrderType;
	qty?: string;
}
interface GncEntryType extends _GncEntryType { constructor: { new(): GncEntryType }; }

type GncEntryTypeVersionType = '2.0.0';
interface _GncEntryTypeVersionType extends Primitive._string { content: GncEntryTypeVersionType; }

interface _GncInvoiceType extends BaseType {
	version: GncInvoiceTypeVersionType;
	active: boolean;
	billing_id?: string;
	billto?: OwnerContent;
	chargeAmt?: string;
	currency: invoice.CurrencyType;
	guid: invoice.GuidType;
	id: string;
	notes?: string;
	opened: TimeSpec;
	owner: OwnerContent;
	postacc?: invoice.PostaccType;
	posted?: TimeSpec;
	postlot?: invoice.PostlotType;
	posttxn?: invoice.PosttxnType;
	slots?: invoice.SlotsType;
	terms?: invoice.TermsType;
}
interface GncInvoiceType extends _GncInvoiceType { constructor: { new(): GncInvoiceType }; }

type GncInvoiceTypeVersionType = '2.0.0';
interface _GncInvoiceTypeVersionType extends Primitive._string { content: GncInvoiceTypeVersionType; }

interface _GncJobType extends BaseType {
	version: GncJobTypeVersionType;
	active: boolean;
	guid: job.GuidType;
	id: string;
	name: string;
	owner: OwnerContent;
	reference?: string;
}
interface GncJobType extends _GncJobType { constructor: { new(): GncJobType }; }

type GncJobTypeVersionType = '2.0.0';
interface _GncJobTypeVersionType extends Primitive._string { content: GncJobTypeVersionType; }

export type GncNumeric = string;
type _GncNumeric = Primitive._string;

interface _GncOrderType extends BaseType {
	version: GncOrderTypeVersionType;
	active: boolean;
	closed?: TimeSpec;
	guid: order.GuidType;
	id: string;
	notes?: string;
	opened: TimeSpec;
	owner: OwnerContent;
	reference?: string;
}
interface GncOrderType extends _GncOrderType { constructor: { new(): GncOrderType }; }

type GncOrderTypeVersionType = '2.0.0';
interface _GncOrderTypeVersionType extends Primitive._string { content: GncOrderTypeVersionType; }

interface _GncTaxTableType extends BaseType {
	version: GncTaxTableTypeVersionType;
	child?: taxtable.ChildType;
	entries: taxtable.EntriesType;
	guid?: taxtable.GuidType;
	invisible: boolean;
	name: string;
	parent?: taxtable.ParentType;
	refcount: number;
}
interface GncTaxTableType extends _GncTaxTableType { constructor: { new(): GncTaxTableType }; }

type GncTaxTableTypeVersionType = '2.0.0';
interface _GncTaxTableTypeVersionType extends Primitive._string { content: GncTaxTableTypeVersionType; }

interface _GncVendorType extends BaseType {
	version: GncVendorTypeVersionType;
	active: boolean;
	addr: AddressContent;
	currency: vendor.CurrencyType;
	guid: vendor.GuidType;
	id: string;
	name: string;
	notes?: string;
	slots?: vendor.SlotsType;
	taxincluded: vendor.TaxincludedType;
	taxtable?: vendor.TaxtableType;
	terms?: vendor.TermsType;
	useTt: boolean;
}
interface GncVendorType extends _GncVendorType { constructor: { new(): GncVendorType }; }

type GncVendorTypeVersionType = '2.0.0';
interface _GncVendorTypeVersionType extends Primitive._string { content: GncVendorTypeVersionType; }

export type GUID = string;
type _GUID = Primitive._string;

interface _OwnerContent extends BaseType {
	version: OwnerContentVersionType;
	id: owner.IdType;
	type: owner.TypeType;
}
export interface OwnerContent extends _OwnerContent { constructor: { new(): OwnerContent }; }
export var OwnerContent: { new(): OwnerContent }

type OwnerContentVersionType = '2.0.0';
interface _OwnerContentVersionType extends Primitive._string { content: OwnerContentVersionType; }

interface _PricedbType extends BaseType {
	version: PricedbTypeVersionType;
	price: PriceType[];
}
interface PricedbType extends _PricedbType { constructor: { new(): PricedbType }; }

type PricedbTypeVersionType = '1';
interface _PricedbTypeVersionType extends Primitive._string { content: PricedbTypeVersionType; }

interface _PriceType extends BaseType {
	commodity: price.CommodityType;
	currency: price.CurrencyType;
	id: price.IdType;
	source?: string;
	time: TimeSpec;
	type?: price.TypeType;
	value: string;
}
interface PriceType extends _PriceType { constructor: { new(): PriceType }; }

interface _RecurrenceContent extends BaseType {
	version: RecurrenceContentVersionType;
	mult: number;
	period_type: recurrence.Period_typeType;
	start: GDate;
	weekend_adj?: recurrence.Weekend_adjType;
}
export interface RecurrenceContent extends _RecurrenceContent { constructor: { new(): RecurrenceContent }; }
export var RecurrenceContent: { new(): RecurrenceContent }

type RecurrenceContentVersionType = '1.0.0';
interface _RecurrenceContentVersionType extends Primitive._string { content: RecurrenceContentVersionType; }

interface _SchedxactionType extends BaseType {
	version: SchedxactionTypeVersionType;
	advanceCreateDays: number;
	advanceRemindDays: number;
	autoCreate: sx.AutoCreateType;
	autoCreateNotify: sx.AutoCreateNotifyType;
	deferredInstance?: sx.DeferredInstanceType[];
	enabled: sx.EnabledType;
	end?: GDate;
	id: sx.IdType;
	instanceCount: number;
	last?: GDate;
	name: string;
	numOccur?: number;
	remOccur?: number;
	schedule: sx.ScheduleType;
	slots?: sx.SlotsType;
	start: GDate;
	templAcct: sx.TemplAcctType;
}
interface SchedxactionType extends _SchedxactionType { constructor: { new(): SchedxactionType }; }

type SchedxactionTypeVersionType = '2.0.0';
interface _SchedxactionTypeVersionType extends Primitive._string { content: SchedxactionTypeVersionType; }

interface _TemplateTransactionsType extends BaseType {
	account?: AccountType[];
	transaction?: TransactionType[];
}
interface TemplateTransactionsType extends _TemplateTransactionsType { constructor: { new(): TemplateTransactionsType }; }

interface _TimeSpec extends BaseType {
	date: string;
	ns?: number;
}
export interface TimeSpec extends _TimeSpec { constructor: { new(): TimeSpec }; }
export var TimeSpec: { new(): TimeSpec }

interface _TransactionType extends BaseType {
	version: TransactionTypeVersionType;
	currency: trn.CurrencyType;
	dateEntered: TimeSpec;
	datePosted: TimeSpec;
	description?: string;
	id: trn.IdType;
	num?: string;
	slots?: trn.SlotsType;
	splits: trn.SplitsType;
}
interface TransactionType extends _TransactionType { constructor: { new(): TransactionType }; }

type TransactionTypeVersionType = '2.0.0';
interface _TransactionTypeVersionType extends Primitive._string { content: TransactionTypeVersionType; }

interface _Type extends BaseType {
	version: Type_2;
	id: lot.IdType;
	slots: lot.SlotsType;
}
export interface Type extends _Type { constructor: { new(): Type }; }
export var Type: { new(): Type }

type Type_2 = '2.0.0';
interface _Type_2 extends Primitive._string { content: Type_2; }

interface _Type_3 extends BaseType {
	value: slot.Type[];
	key: string;
}
export interface Type_3 extends _Type_3 { constructor: { new(): Type_3 }; }
export var Type_3: { new(): Type_3 }

interface _Type_4 extends BaseType {
	acct?: tte.AcctType;
	amount: string;
	type: tte.TypeType;
}
export interface Type_4 extends _Type_4 { constructor: { new(): Type_4 }; }
export var Type_4: { new(): Type_4 }

export interface document extends BaseType {
	account: AccountType;
	book: BookType;
	budget: BudgetType;
	commodity: CommodityType;
	GncBillTerm: GncBillTermType;
	GncCustomer: GncCustomerType;
	GncEmployee: GncEmployeeType;
	GncEntry: GncEntryType;
	GncInvoice: GncInvoiceType;
	GncJob: GncJobType;
	GncOrder: GncOrderType;
	GncTaxTable: GncTaxTableType;
	GncTaxTableEntry: Type_4;
	GncVendor: GncVendorType;
	lot: Type;
	pricedb: PricedbType;
	recurrence: RecurrenceContent;
	schedxaction: SchedxactionType;
	templateTransactions: TemplateTransactionsType;
	transaction: TransactionType;
}
export var document: document
