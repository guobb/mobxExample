/**
 * Created by apple on 17/3/11.
 */

import {observable, computed, autorun, action} from 'mobx';

class Foo {
    @observable
    selected = 0;

    @observable
    items = [];

    @computed
    get selectedItem() {
        if (this.selected >= this.items.length) {
            return null;
        }
        return this.items[this.selected];
    }

    @action
    addItem(item) {
        this.items.push(item);
    }

    @action
    removeAt(id) {
        this.items.splice(id, 1);
        if (this.selected >= id) {
            this.selected--;
        }
    }

    @action
    removeSelected(){
        this.items.splice(this.selected, 1);
    }
}

export default function demo5() {
    const foo = new Foo();
    autorun (()=>{
        console.log(`select is:${foo.selectedItem}`);
    });
    foo.addItem(0);
    foo.addItem(1);
    foo.addItem(2);
    foo.addItem(3);
    foo.addItem(4);

    foo.selected = 2;

    foo.removeSelected();
    foo.removeAt(0);
}