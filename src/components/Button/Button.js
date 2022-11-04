import './button.scss'
import { Component } from '../../core';



export class Button extends Component {
    constructor() {
        super()
        this.state = {
            isActive: false,
            count: 1,
        }
    }


    registerEvents() {
        this.addEventListener('click', (evt) => {
            if (evt.target.closest('.plus')) {
                this.setState((state) => {
                    return {
                        ...state,
                        count: state.count +=1
                    }
                })
            }
        })
    }










    render() {
        return `
        <button class='plus'>+</button>
        <span>${this.state.count}</span>
        <button>-</button>
        `;
    }
}
customElements.define('my-button', Button)


