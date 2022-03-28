import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/tte.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _AcctType extends gnc._GUID {
	type: AcctTypeTypeType;
}
export interface AcctType extends _AcctType { constructor: { new(): AcctType }; }
export var AcctType: { new(): AcctType }

type AcctTypeTypeType = 'guid';
interface _AcctTypeTypeType extends Primitive._string { content: AcctTypeTypeType; }

export type TypeType = ( 'VALUE' | 'PERCENT' );
interface _TypeType extends Primitive._string { content: TypeType; }

export interface document extends BaseType {
	acct: AcctType;
	amount: string;
	type: TypeType;
}
export var document: document
