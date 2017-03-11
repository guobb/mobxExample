/**
 * Created by apple on 17/3/11.
 */


import {observable, computed, autorun} from 'mobx';

export default function comput() {
    const value = observable(0);
    const condition = computed(() => ( value.get() >= 0));

    autorun(()=>{
        console.log(`condition is: ${condition.get()}`);
    });

    value.set(9);
    value.set(-2);
}