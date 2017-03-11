/**
 * Created by apple on 17/3/11.
 */
import {observable, autorun} from 'mobx';

export default function auto() {
    const value = observable(0);
    autorun(() => {
        console.log(`value is: ${value.get()}`)
    });

    value.set(2);
}


