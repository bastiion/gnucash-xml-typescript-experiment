// Code generated by xgen. DO NOT EDIT.

// Id ...
import {TimeSpec} from './gnucash-v2.xsd'

export interface Id {
	'@_type': string;
	Value: string;
}

// Commodity ...
export interface Commodity {
//	'cmdty:space1': Space1;
	'cmdty:id': string;
}

// Currency ...
export interface Currency {
//	'cmdty:space1': Space1;
	'cmdty:id': string;
}

// Time ...
export type Time = TimeSpec;

// Source ...
export type Source = string;

// Type ...
export type Type = string;

// Value ...
export type Value = string;
