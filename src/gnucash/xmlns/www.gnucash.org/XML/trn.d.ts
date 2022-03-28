import * as Primitive from '../../xml-primitives'
import * as cmdty from './cmdty'
import * as gnc from './gnc'
import * as split from './split'

// Source files:
// http://localhost:3000/xsd/trn.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _CurrencyType extends BaseType {
	space: string;
	id: string;
}
export interface CurrencyType extends _CurrencyType { constructor: { new(): CurrencyType }; }
export var CurrencyType: { new(): CurrencyType }

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

interface _SplitsType extends BaseType {
	split: SplitType[];
}
export interface SplitsType extends _SplitsType { constructor: { new(): SplitsType }; }
export var SplitsType: { new(): SplitsType }

interface _SplitType extends BaseType {
	account: split.AccountType;
	action?: string;
	id: split.IdType;
	lot?: split.LotType;
	memo?: string;
	quantity: string;
	reconcileDate?: gnc.TimeSpec;
	reconciledState: split.ReconciledStateType;
	slots?: split.SlotsType;
	value: string;
}
interface SplitType extends _SplitType { constructor: { new(): SplitType }; }

export interface document extends BaseType {
	currency: CurrencyType;
	dateEntered: gnc.TimeSpec;
	datePosted: gnc.TimeSpec;
	description: string;
	id: IdType;
	num: string;
	slots: SlotsType;
	split: SplitType;
	splits: SplitsType;
}
export var document: document
