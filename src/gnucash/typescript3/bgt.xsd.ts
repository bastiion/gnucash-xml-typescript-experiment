// Code generated by xgen. DO NOT EDIT.

// Id ...
import {RecurrenceContent} from './gnucash-v2.xsd'

export interface Id {
	'@_type': string;
	Value: string;
}

// Name ...
export type Name = string;

// Description ...
export type Description = string;

// Numperiods ...
export type Numperiods = number;

// Recurrence ...
export type Recurrence = RecurrenceContent;

// Slots ...
export interface Slots {
	'gnc:KvpSlot': Array<any>;
}
