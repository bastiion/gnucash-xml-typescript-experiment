import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/owner.xsd


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

export type TypeType = ( 'gncCustomer' | 'gncJob' | 'gncVendor' | 'gncEmployee' );
interface _TypeType extends Primitive._string { content: TypeType; }

export interface document extends BaseType {
	id: IdType;
	type: TypeType;
}
export var document: document
