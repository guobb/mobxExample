/**
 * Created by apple on 17/3/11.
 */

import {observable, computed, autorun} from 'mobx';

export default function demo4() {
    const value = observable([0]);
    autorun(() => {
        console.log(`value.length is: ${value.length}`);
    });

    autorun(() => {
        console.log(`value[0] is: ${value[0]}`);
    });

    value[0] = 1;
    value.push(2);

    value.splice(0,1);


}