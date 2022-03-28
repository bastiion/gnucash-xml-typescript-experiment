import * as Primitive from '../../xml-primitives'

// Source files:
// http://localhost:3000/xsd/ts.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type DateType = string;
type _DateType = Primitive._string;

export interface document extends BaseType {
	date: string;
	ns: number;
}
export var document: document
