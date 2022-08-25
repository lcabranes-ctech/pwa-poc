import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    contacts = [];

    connectedCallback() {
        fetch('https://reqres.in/api/users')
            .then((response) => {
                return response.json();
            })
            .then((contacts) => {
                this.contacts = contacts.data;
            });
    }

    handleClick() {
        console.log('hola');
    }
}
