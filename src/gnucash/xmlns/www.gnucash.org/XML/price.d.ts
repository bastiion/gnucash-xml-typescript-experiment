import * as Primitive from '../../xml-primitives'
import * as cmdty from './cmdty'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/price.xsd


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

interface _CurrencyType extends BaseType {
	space: string;
	id: string;
}
export interface CurrencyType extends _CurrencyType { constructor: { new(): CurrencyType }; }
export var CurrencyType: { new(): CurrencyType }

interface _IdType extends gnc._GUID {
	type: IdTypeTypeType;
}
export interface IdType extends _IdType { constructor: { new(): IdType }; }
export var IdType: { new(): IdType }

type IdTypeTypeType = 'guid';
interface _IdTypeTypeType extends Primitive._string { content: IdTypeTypeType; }

export type TypeType = ( 'bid' | 'ask' | 'last' | 'nav' | 'transaction' | 'unknown' );
interface _TypeType extends Primitive._string { content: TypeType; }

export interface document extends BaseType {
	commodity: CommodityType;
	currency: CurrencyType;
	id: IdType;
	source: string;
	time: gnc.TimeSpec;
	type: TypeType;
	value: string;
}
export var document: document
