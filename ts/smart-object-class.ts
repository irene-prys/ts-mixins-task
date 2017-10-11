import { Disposable } from "./disposable-class";
import { Deletable } from "./deletable-class";
import { Readable } from "./readable-class";
import { Utility } from "./util";

export class SmartObject implements Disposable, Deletable, Readable {
    private _value: string;

    isDisposed: boolean = false;
    isDeleted: boolean = false;
    isReadOnly: boolean = false;
    dispose: () => void;
    delete: () => void;
    readOnly: () => void;
    rcestore: () => void;

    constructor(value) {
        this._value = value;
    }

    set value(newValue: string) {
        if(!this.isReadOnly) {
            this._value = newValue;
        }
    }

    get value() : string {
        return this._value;
    }

    get status() : string {
        if(this.isDisposed) {
            return "";
        }
        if(this.isDeleted) {
            return "deleted";
        }
        return "active";
    }
}

Utility.applyMixins(SmartObject, [Disposable, Deletable, Readable]);