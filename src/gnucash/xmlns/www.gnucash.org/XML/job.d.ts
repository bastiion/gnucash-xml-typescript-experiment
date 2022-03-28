import * as Primitive from '../../xml-primitives'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/job.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type ActiveType = boolean;
type _ActiveType = Primitive._boolean;

interface _GuidType extends gnc._GUID {
	type: GuidTypeTypeType;
}
export interface GuidType extends _GuidType { constructor: { new(): GuidType }; }
export var GuidType: { new(): GuidType }

type GuidTypeTypeType = 'guid';
interface _GuidTypeTypeType extends Primitive._string { content: GuidTypeTypeType; }

export interface document extends BaseType {
	active: boolean;
	guid: GuidType;
	id: string;
	name: string;
	owner: gnc.OwnerContent;
	reference: string;
}
export var document: document
