import * as Primitive from '../../xml-primitives'
import * as btdays from './bt-days'
import * as btprox from './bt-prox'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/billterm.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _ChildType extends gnc._GUID {
	type: ChildTypeTypeType;
}
export interface ChildType extends _ChildType { constructor: { new(): ChildType }; }
export var ChildType: { new(): ChildType }

type ChildTypeTypeType = 'guid';
interface _ChildTypeTypeType extends Primitive._string { content: ChildTypeTypeType; }

interface _DaysType extends BaseType {
	discDays?: number;
	discount?: string;
	dueDays?: number;
}
export interface DaysType extends _DaysType { constructor: { new(): DaysType }; }
export var DaysType: { new(): DaysType }

interface _GuidType extends gnc._GUID {
	type: GuidTypeTypeType;
}
export interface GuidType extends _GuidType { constructor: { new(): GuidType }; }
export var GuidType: { new(): GuidType }

type GuidTypeTypeType = 'guid';
interface _GuidTypeTypeType extends Primitive._string { content: GuidTypeTypeType; }

export type InvisibleType = boolean;
type _InvisibleType = Primitive._boolean;

interface _ParentType extends gnc._GUID {
	type: ParentTypeTypeType;
}
export interface ParentType extends _ParentType { constructor: { new(): ParentType }; }
export var ParentType: { new(): ParentType }

type ParentTypeTypeType = 'guid';
interface _ParentTypeTypeType extends Primitive._string { content: ParentTypeTypeType; }

interface _ProximoType extends BaseType {
	cutoffDay?: number;
	discDay?: number;
	discount?: string;
	dueDay?: number;
}
export interface ProximoType extends _ProximoType { constructor: { new(): ProximoType }; }
export var ProximoType: { new(): ProximoType }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

export interface document extends BaseType {
	child: ChildType;
	days: DaysType;
	desc: string;
	guid: GuidType;
	invisible: boolean;
	name: string;
	parent: ParentType;
	proximo: ProximoType;
	refcount: number;
	slots: SlotsType;
}
export var document: document
