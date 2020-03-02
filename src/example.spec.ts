import {Example} from "./example";

describe('Example', () => {

    let sut: Example;

    beforeEach(() => sut = new Example());

    it('says hello', () => {
        expect(sut.says('Hello!')).toEqual("Example says: Hello!");
    });

});
