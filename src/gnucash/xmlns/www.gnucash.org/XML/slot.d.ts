import * as Primitive from '../../xml-primitives'

// Source files:
// http://localhost:3000/xsd/slot.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _Type extends Primitive._number {
	type: Type_2;
}
export interface Type extends _Type { constructor: { new(): Type }; }
export var Type: { new(): Type }

type Type_2 = 'integer';
interface _Type_2 extends Primitive._string { content: Type_2; }

export interface document extends BaseType {
	key: string;
}
export var document: document
