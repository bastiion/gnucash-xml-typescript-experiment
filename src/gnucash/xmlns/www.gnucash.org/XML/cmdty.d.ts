import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/cmdty.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
type _Get_quotesType = BaseType
export interface Get_quotesType extends _Get_quotesType { constructor: { new(): Get_quotesType }; }
export var Get_quotesType: { new(): Get_quotesType }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

export type Type = 'ISO4217';
interface _Type extends Primitive._string { content: Type; }

export interface document extends BaseType {
	fraction: string;
	get_quotes: Get_quotesType;
	id: string;
	name: string;
	quote_source: string;
	quote_tz: string;
	slots: SlotsType;
	xcode: string;
}
export var document: document
