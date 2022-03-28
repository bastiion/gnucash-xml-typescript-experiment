import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/book.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _IdType extends gnc._GUID {
	type: IdTypeTypeType;
}
export interface IdType extends _IdType { constructor: { new(): IdType }; }
export var IdType: { new(): IdType }

type IdTypeTypeType = 'guid';
interface _IdTypeTypeType extends Primitive._string { content: IdTypeTypeType; }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

export interface document extends BaseType {
	id: IdType;
	slots: SlotsType;
}
export var document: document
