// Code generated by xgen. DO NOT EDIT.

// Id ...
import {TimeSpec} from './gnucash-v2.xsd'

export interface Id {
	'@_type': string;
	Value: string;
}

// Memo ...
export type Memo = string;

// Action ...
export type Action = string;

// Reconciledstate ...
export type Reconciledstate = string;

// Reconciledate ...
export type Reconciledate = TimeSpec;

// Value ...
export type Value = string;

// Quantity ...
export type Quantity = string;

// Account ...
export interface Account {
	'@_type': string;
	Value: string;
}

// Lot ...
export interface Lot {
	'@_type': string;
	Value: string;
}

// Slots ...
export interface Slots {
	'gnc:KvpSlot': Array<any>;
}
