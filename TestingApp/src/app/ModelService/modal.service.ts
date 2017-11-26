import { without, find } from 'lodash';
import { window } from 'rxjs/operator/window';

export class ModalService2 {
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        let modalToRemove = find(this.modals, { id: id });
        this.modals = without(this.modals, modalToRemove);
    }

    open(id: string) {
        alert("Awa");
        // open modal specified by id
        let modal = find(this.modals, { id: id });
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        let modal = find(this.modals, { id: id });
        modal.close();
    }
}