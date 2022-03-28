import * as Primitive from '../../xml-primitives'
import * as cmdty from './cmdty'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/cust.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type ActiveType = boolean;
type _ActiveType = Primitive._boolean;

interface _CurrencyType extends BaseType {
	space: string;
	id: string;
}
export interface CurrencyType extends _CurrencyType { constructor: { new(): CurrencyType }; }
export var CurrencyType: { new(): CurrencyType }

interface _GuidType extends gnc._GUID {
	type: GuidTypeTypeType;
}
export interface GuidType extends _GuidType { constructor: { new(): GuidType }; }
export var GuidType: { new(): GuidType }

type GuidTypeTypeType = 'guid';
interface _GuidTypeTypeType extends Primitive._string { content: GuidTypeTypeType; }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

export type TaxincludedType = ( 'YES' | 'NO' | 'USEGLOBAL' );
interface _TaxincludedType extends Primitive._string { content: TaxincludedType; }

interface _TaxtableType extends gnc._GUID {
	type: TaxtableTypeTypeType;
}
export interface TaxtableType extends _TaxtableType { constructor: { new(): TaxtableType }; }
export var TaxtableType: { new(): TaxtableType }

type TaxtableTypeTypeType = 'guid';
interface _TaxtableTypeTypeType extends Primitive._string { content: TaxtableTypeTypeType; }

interface _TermsType extends gnc._GUID {
	type: TermsTypeTypeType;
}
export interface TermsType extends _TermsType { constructor: { new(): TermsType }; }
export var TermsType: { new(): TermsType }

type TermsTypeTypeType = 'guid';
interface _TermsTypeTypeType extends Primitive._string { content: TermsTypeTypeType; }

export type UseTtType = boolean;
type _UseTtType = Primitive._boolean;

export interface document extends BaseType {
	active: boolean;
	addr: gnc.AddressContent;
	credit: string;
	currency: CurrencyType;
	discount: string;
	guid: GuidType;
	id: string;
	name: string;
	notes: string;
	shipaddr: gnc.AddressContent;
	slots: SlotsType;
	taxincluded: TaxincludedType;
	taxtable: TaxtableType;
	terms: TermsType;
	useTt: boolean;
}
export var document: document
