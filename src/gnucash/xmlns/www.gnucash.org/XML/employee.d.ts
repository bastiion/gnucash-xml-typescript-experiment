import * as Primitive from '../../xml-primitives'
import * as cmdty from './cmdty'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/employee.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type ActiveType = boolean;
type _ActiveType = Primitive._boolean;

interface _CcardType extends gnc._GUID {
	type: CcardTypeTypeType;
}
export interface CcardType extends _CcardType { constructor: { new(): CcardType }; }
export var CcardType: { new(): CcardType }

type CcardTypeTypeType = 'guid';
interface _CcardTypeTypeType extends Primitive._string { content: CcardTypeTypeType; }

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

export interface document extends BaseType {
	acl: string;
	active: boolean;
	addr: gnc.AddressContent;
	ccard: CcardType;
	currency: CurrencyType;
	guid: GuidType;
	id: string;
	language: string;
	rate: string;
	slots: SlotsType;
	username: string;
	workday: string;
}
export var document: document
