import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/split.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _AccountType extends gnc._GUID {
	type: AccountTypeTypeType;
}
export interface AccountType extends _AccountType { constructor: { new(): AccountType }; }
export var AccountType: { new(): AccountType }

type AccountTypeTypeType = 'guid';
interface _AccountTypeTypeType extends Primitive._string { content: AccountTypeTypeType; }

interface _IdType extends gnc._GUID {
	type: IdTypeTypeType;
}
export interface IdType extends _IdType { constructor: { new(): IdType }; }
export var IdType: { new(): IdType }

type IdTypeTypeType = 'guid';
interface _IdTypeTypeType extends Primitive._string { content: IdTypeTypeType; }

interface _LotType extends gnc._GUID {
	type: LotTypeTypeType;
}
export interface LotType extends _LotType { constructor: { new(): LotType }; }
export var LotType: { new(): LotType }

type LotTypeTypeType = 'guid';
interface _LotTypeTypeType extends Primitive._string { content: LotTypeTypeType; }

export type ReconciledStateType = ( 'y' | 'n' | 'c' | 'f' | 'v' );
interface _ReconciledStateType extends Primitive._string { content: ReconciledStateType; }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

export interface document extends BaseType {
	account: AccountType;
	action: string;
	id: IdType;
	lot: LotType;
	memo: string;
	quantity: string;
	reconcileDate: gnc.TimeSpec;
	reconciledState: ReconciledStateType;
	slots: SlotsType;
	value: string;
}
export var document: document
