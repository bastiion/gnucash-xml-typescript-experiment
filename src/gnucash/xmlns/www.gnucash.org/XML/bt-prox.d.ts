import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/bt-prox.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export interface document extends BaseType {
	cutoffDay: number;
	discDay: number;
	discount: string;
	dueDay: number;
}
export var document: document
