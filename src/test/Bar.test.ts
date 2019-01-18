import {Bar} from "../Bar";

it('fails', () => {
    const bar = new Bar();
    expect(bar.baz).toEqual("baz");
});
