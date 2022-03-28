import * as Primitive from '../../xml-primitives'
import * as cmdty from './cmdty'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/act.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _CommodityType extends BaseType {
	space: string;
	id: string;
}
export interface CommodityType extends _CommodityType { constructor: { new(): CommodityType }; }
export var CommodityType: { new(): CommodityType }

interface _IdType extends gnc._GUID {
	type: IdTypeTypeType;
}
export interface IdType extends _IdType { constructor: { new(): IdType }; }
export var IdType: { new(): IdType }

type IdTypeTypeType = 'guid';
interface _IdTypeTypeType extends Primitive._string { content: IdTypeTypeType; }

interface _LotsType extends BaseType {
	lot: gnc.Type[];
}
export interface LotsType extends _LotsType { constructor: { new(): LotsType }; }
export var LotsType: { new(): LotsType }

type _NonStandardscuType = BaseType
export interface NonStandardscuType extends _NonStandardscuType { constructor: { new(): NonStandardscuType }; }
export var NonStandardscuType: { new(): NonStandardscuType }

interface _ParentType extends gnc._GUID {
	type: ParentTypeTypeType;
}
export interface ParentType extends _ParentType { constructor: { new(): ParentType }; }
export var ParentType: { new(): ParentType }

type ParentTypeTypeType = 'guid';
interface _ParentTypeTypeType extends Primitive._string { content: ParentTypeTypeType; }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

export type TypeType = ( 'NONE' | 'BANK' | 'CASH' | 'CREDIT' | 'ASSET' | 'LIABILITY' | 'STOCK' | 'MUTUAL' | 'CURRENCY' | 'INCOME' | 'EXPENSE' | 'EQUITY' | 'RECEIVABLE' | 'PAYABLE' | 'ROOT' | 'TRADING' | 'CHECKING' | 'SAVINGS' | 'MONEYMRKT' | 'CREDITLINE' );
interface _TypeType extends Primitive._string { content: TypeType; }

export interface document extends BaseType {
	code: string;
	commodity: CommodityType;
	commodityScu: number;
	description: string;
	id: IdType;
	lots: LotsType;
	name: string;
	nonStandardscu: NonStandardscuType;
	parent: ParentType;
	slots: SlotsType;
	type: TypeType;
}
export var document: document
