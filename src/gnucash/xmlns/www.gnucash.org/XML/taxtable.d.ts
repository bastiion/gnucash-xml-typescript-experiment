import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/taxtable.xsd


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

interface _EntriesType extends BaseType {
	GncTaxTableEntry?: gnc.Type_4[];
}
export interface EntriesType extends _EntriesType { constructor: { new(): EntriesType }; }
export var EntriesType: { new(): EntriesType }

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

export interface document extends BaseType {
	child: ChildType;
	entries: EntriesType;
	guid: GuidType;
	invisible: boolean;
	name: string;
	parent: ParentType;
	refcount: number;
}
export var document: document
