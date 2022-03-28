import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/bt-days.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export interface document extends BaseType {
	discDays: number;
	discount: string;
	dueDays: number;
}
export var document: document
