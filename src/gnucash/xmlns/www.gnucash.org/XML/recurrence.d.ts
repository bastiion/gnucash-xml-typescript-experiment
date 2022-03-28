import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/recurrence.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type Period_typeType = ( 'once' | 'day' | 'week' | 'month' | 'end of month' | 'nth weekday' | 'last weekday' | 'year' );
interface _Period_typeType extends Primitive._string { content: Period_typeType; }

export type Weekend_adjType = ( 'none' | 'back' | 'forward' );
interface _Weekend_adjType extends Primitive._string { content: Weekend_adjType; }

export interface document extends BaseType {
	mult: number;
	period_type: Period_typeType;
	start: gnc.GDate;
	weekend_adj: Weekend_adjType;
}
export var document: document
