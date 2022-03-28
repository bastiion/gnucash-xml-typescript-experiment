import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/sx.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type AutoCreateNotifyType = ( 'y' | 'n' );
interface _AutoCreateNotifyType extends Primitive._string { content: AutoCreateNotifyType; }

export type AutoCreateType = ( 'y' | 'n' );
interface _AutoCreateType extends Primitive._string { content: AutoCreateType; }

interface _DeferredInstanceType extends BaseType {
	instanceCount: number;
	last?: gnc.GDate;
	remOccur: number;
}
export interface DeferredInstanceType extends _DeferredInstanceType { constructor: { new(): DeferredInstanceType }; }
export var DeferredInstanceType: { new(): DeferredInstanceType }

export type EnabledType = ( 'y' | 'n' );
interface _EnabledType extends Primitive._string { content: EnabledType; }

interface _IdType extends gnc._GUID {
	type: IdTypeTypeType;
}
export interface IdType extends _IdType { constructor: { new(): IdType }; }
export var IdType: { new(): IdType }

type IdTypeTypeType = 'guid';
interface _IdTypeTypeType extends Primitive._string { content: IdTypeTypeType; }

interface _ScheduleType extends BaseType {
	recurrence?: gnc.RecurrenceContent[];
}
export interface ScheduleType extends _ScheduleType { constructor: { new(): ScheduleType }; }
export var ScheduleType: { new(): ScheduleType }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

interface _TemplAcctType extends gnc._GUID {
	type: TemplAcctTypeTypeType;
}
export interface TemplAcctType extends _TemplAcctType { constructor: { new(): TemplAcctType }; }
export var TemplAcctType: { new(): TemplAcctType }

type TemplAcctTypeTypeType = 'guid';
interface _TemplAcctTypeTypeType extends Primitive._string { content: TemplAcctTypeTypeType; }

export interface document extends BaseType {
	advanceCreateDays: number;
	advanceRemindDays: number;
	autoCreate: AutoCreateType;
	autoCreateNotify: AutoCreateNotifyType;
	deferredInstance: DeferredInstanceType;
	enabled: EnabledType;
	end: gnc.GDate;
	id: IdType;
	instanceCount: number;
	last: gnc.GDate;
	name: string;
	numOccur: number;
	remOccur: number;
	schedule: ScheduleType;
	slots: SlotsType;
	start: gnc.GDate;
	templAcct: TemplAcctType;
}
export var document: document
