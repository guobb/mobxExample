/**
 * Created by apple on 17/3/11.
 */
import {observable, autorun} from 'mobx';

export default function demo3() {
    const value = observable({
        foo: 0,
        bar: 0,
        get condition() {
            return this.foo >= 0;
        }
    });

    autorun(() => {
        console.log(`value.foo is:${value.foo}`);
    });

    autorun(()=>{
        console.log(`value.condition is: ${value.condition}`)
    });

    value.foo = 3;
    value.foo = -4;

    value.bar = 2;
}