import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/entry.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _BAcctType extends gnc._GUID {
	type: BAcctTypeTypeType;
}
export interface BAcctType extends _BAcctType { constructor: { new(): BAcctType }; }
export var BAcctType: { new(): BAcctType }

type BAcctTypeTypeType = 'guid';
interface _BAcctTypeTypeType extends Primitive._string { content: BAcctTypeTypeType; }

export type BillableType = boolean;
type _BillableType = Primitive._boolean;

interface _BillType extends gnc._GUID {
	type: BillTypeTypeType;
}
export interface BillType extends _BillType { constructor: { new(): BillType }; }
export var BillType: { new(): BillType }

type BillTypeTypeType = 'guid';
interface _BillTypeTypeType extends Primitive._string { content: BillTypeTypeType; }

export type BPayType = ( 'CASH' | 'CARD' );
interface _BPayType extends Primitive._string { content: BPayType; }

export type BTaxableType = boolean;
type _BTaxableType = Primitive._boolean;

export type BTaxincludedType = boolean;
type _BTaxincludedType = Primitive._boolean;

interface _BTaxtableType extends gnc._GUID {
	type: BTaxtableTypeTypeType;
}
export interface BTaxtableType extends _BTaxtableType { constructor: { new(): BTaxtableType }; }
export var BTaxtableType: { new(): BTaxtableType }

type BTaxtableTypeTypeType = 'guid';
interface _BTaxtableTypeTypeType extends Primitive._string { content: BTaxtableTypeTypeType; }

interface _GuidType extends gnc._GUID {
	type: GuidTypeTypeType;
}
export interface GuidType extends _GuidType { constructor: { new(): GuidType }; }
export var GuidType: { new(): GuidType }

type GuidTypeTypeType = 'guid';
interface _GuidTypeTypeType extends Primitive._string { content: GuidTypeTypeType; }

interface _IAcctType extends gnc._GUID {
	type: IAcctTypeTypeType;
}
export interface IAcctType extends _IAcctType { constructor: { new(): IAcctType }; }
export var IAcctType: { new(): IAcctType }

type IAcctTypeTypeType = 'guid';
interface _IAcctTypeTypeType extends Primitive._string { content: IAcctTypeTypeType; }

export type IDischowType = ( 'PRETAX' | 'POSTTAX' | 'SAMETIME' );
interface _IDischowType extends Primitive._string { content: IDischowType; }

export type IDisctypeType = ( 'VALUE' | 'PERCENT' );
interface _IDisctypeType extends Primitive._string { content: IDisctypeType; }

interface _InvoiceType extends gnc._GUID {
	type: InvoiceTypeTypeType;
}
export interface InvoiceType extends _InvoiceType { constructor: { new(): InvoiceType }; }
export var InvoiceType: { new(): InvoiceType }

type InvoiceTypeTypeType = 'guid';
interface _InvoiceTypeTypeType extends Primitive._string { content: InvoiceTypeTypeType; }

export type ITaxableType = boolean;
type _ITaxableType = Primitive._boolean;

export type ITaxincludedType = boolean;
type _ITaxincludedType = Primitive._boolean;

interface _ITaxtableType extends gnc._GUID {
	type: ITaxtableTypeTypeType;
}
export interface ITaxtableType extends _ITaxtableType { constructor: { new(): ITaxtableType }; }
export var ITaxtableType: { new(): ITaxtableType }

type ITaxtableTypeTypeType = 'guid';
interface _ITaxtableTypeTypeType extends Primitive._string { content: ITaxtableTypeTypeType; }

interface _OrderType extends gnc._GUID {
	type: OrderTypeTypeType;
}
export interface OrderType extends _OrderType { constructor: { new(): OrderType }; }
export var OrderType: { new(): OrderType }

type OrderTypeTypeType = 'guid';
interface _OrderTypeTypeType extends Primitive._string { content: OrderTypeTypeType; }

export interface document extends BaseType {
	action: string;
	bAcct: BAcctType;
	bPay: BPayType;
	bPrice: string;
	bTaxable: boolean;
	bTaxincluded: boolean;
	bTaxtable: BTaxtableType;
	bill: BillType;
	billable: boolean;
	billto: gnc.OwnerContent;
	date: gnc.TimeSpec;
	description: string;
	entered: gnc.TimeSpec;
	guid: GuidType;
	iAcct: IAcctType;
	iDischow: IDischowType;
	iDisctype: IDisctypeType;
	iDiscount: string;
	iPrice: string;
	iTaxable: boolean;
	iTaxincluded: boolean;
	iTaxtable: ITaxtableType;
	invoice: InvoiceType;
	notes: string;
	order: OrderType;
	qty: string;
}
export var document: document
