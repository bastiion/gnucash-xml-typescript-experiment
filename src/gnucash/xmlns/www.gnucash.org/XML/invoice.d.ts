import * as Primitive from '../../xml-primitives'
import * as cmdty from './cmdty'
import * as gnc from './gnc'

// Source files:
// http://localhost:3000/xsd/invoice.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type ActiveType = boolean;
type _ActiveType = Primitive._boolean;

interface _CurrencyType extends BaseType {
	space: string;
	id: string;
}
export interface CurrencyType extends _CurrencyType { constructor: { new(): CurrencyType }; }
export var CurrencyType: { new(): CurrencyType }

interface _GuidType extends gnc._GUID {
	type: GuidTypeTypeType;
}
export interface GuidType extends _GuidType { constructor: { new(): GuidType }; }
export var GuidType: { new(): GuidType }

type GuidTypeTypeType = 'guid';
interface _GuidTypeTypeType extends Primitive._string { content: GuidTypeTypeType; }

interface _PostaccType extends gnc._GUID {
	type: PostaccTypeTypeType;
}
export interface PostaccType extends _PostaccType { constructor: { new(): PostaccType }; }
export var PostaccType: { new(): PostaccType }

type PostaccTypeTypeType = 'guid';
interface _PostaccTypeTypeType extends Primitive._string { content: PostaccTypeTypeType; }

interface _PostlotType extends gnc._GUID {
	type: PostlotTypeTypeType;
}
export interface PostlotType extends _PostlotType { constructor: { new(): PostlotType }; }
export var PostlotType: { new(): PostlotType }

type PostlotTypeTypeType = 'guid';
interface _PostlotTypeTypeType extends Primitive._string { content: PostlotTypeTypeType; }

interface _PosttxnType extends gnc._GUID {
	type: PosttxnTypeTypeType;
}
export interface PosttxnType extends _PosttxnType { constructor: { new(): PosttxnType }; }
export var PosttxnType: { new(): PosttxnType }

type PosttxnTypeTypeType = 'guid';
interface _PosttxnTypeTypeType extends Primitive._string { content: PosttxnTypeTypeType; }

interface _SlotsType extends BaseType {
	slot: gnc.Type_3[];
}
export interface SlotsType extends _SlotsType { constructor: { new(): SlotsType }; }
export var SlotsType: { new(): SlotsType }

interface _TermsType extends gnc._GUID {
	type: TermsTypeTypeType;
}
export interface TermsType extends _TermsType { constructor: { new(): TermsType }; }
export var TermsType: { new(): TermsType }

type TermsTypeTypeType = 'guid';
interface _TermsTypeTypeType extends Primitive._string { content: TermsTypeTypeType; }

export interface document extends BaseType {
	active: boolean;
	billing_id: string;
	billto: gnc.OwnerContent;
	chargeAmt: string;
	currency: CurrencyType;
	guid: GuidType;
	id: string;
	notes: string;
	opened: gnc.TimeSpec;
	owner: gnc.OwnerContent;
	postacc: PostaccType;
	posted: gnc.TimeSpec;
	postlot: PostlotType;
	posttxn: PosttxnType;
	slots: SlotsType;
	terms: TermsType;
}
export var document: document
