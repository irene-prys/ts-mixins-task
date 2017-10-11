import { SmartObject } from "../ts/smart-object-class";

describe('SmartObject', () => {
    test('should make read only', () => {
        let value: string = "hello";
        let obj: SmartObject = new SmartObject(value);
        expect(obj.value).toEqual(value);

        value = "world";
        obj.value = value;
        expect(obj.value).toEqual(value);

        obj.readOnly();
        obj.value = "Hello World";
        expect(obj.value).toEqual(value);
    });

    test('dispose object', () => {
        let obj: SmartObject = new SmartObject("hello");
        expect(obj.status).toEqual("active");
        obj.dispose();
        expect(obj.status).toEqual("");
    });

    test('delete object', () => {
        let obj: SmartObject = new SmartObject("hello");
        expect(obj.status).toEqual("active");
        obj.delete();
        expect(obj.status).toEqual("deleted");
    });

    test('should show dispose status if object disposed and deleted', () => {
        let obj: SmartObject = new SmartObject("hello");
        expect(obj.status).toEqual("active");
        obj.dispose();
        obj.delete();
        expect(obj.status).toEqual("");
    });
});