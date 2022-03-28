import * as Primitive from '../../xml-primitives'

// Source files:
// http://localhost:3000/xsd/addr.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export interface document extends BaseType {
	addr1: string;
	addr2: string;
	addr3: string;
	addr4: string;
	email: string;
	fax: string;
	name: string;
	phone: string;
}
export var document: document
