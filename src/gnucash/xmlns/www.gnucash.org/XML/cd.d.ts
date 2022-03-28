import * as Primitive from '../../xml-primitives'

// Source files:
// http://localhost:3000/xsd/cd.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type Type = 'commodity';
interface _Type extends Primitive._string { content: Type; }

export type document = BaseType
export var document: document
