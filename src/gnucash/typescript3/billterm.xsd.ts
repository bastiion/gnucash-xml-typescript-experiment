// Code generated by xgen. DO NOT EDIT.

// Guid ...
export interface Guid {
	'@_type': string;
	Value: string;
}

// Name ...
export type Name = string;

// Desc ...
export type Desc = string;

// Refcount ...
export type Refcount = number;

// Invisible ...
export type Invisible = boolean;

// Slots ...
export interface Slots {
	'gnc:KvpSlot': Array<any>;
}

// Child ...
export interface Child {
	'@_type': string;
	Value: string;
}

// Parent ...
export interface Parent {
	'@_type': string;
	Value: string;
}

// Days ...
export interface Days {
	'bt-days:due-days': number;
	'bt-days:disc-days': number;
	'bt-days:discount': string;
}

// Proximo ...
export interface Proximo {
	'bt-prox:due-day': number;
	'bt-prox:disc-day': number;
	'bt-prox:discount': string;
	'bt-prox:cutoff-day': number;
}