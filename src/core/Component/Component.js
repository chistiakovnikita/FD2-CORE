export class Component extends HTMLElement {
    constructor() {
        super()
        this.state = {}
        this.props = {}
    }

    setState(callback) {
        this.state = callback(this.state);
        this.innerHTML = this.render()
            .toString()
            .trim()
            .replaceAll(/true|false/gi, "")
            .replaceAll(",", "");


    }

    connectedCallback() {
        this.innerHTML = this.render()
            .toString()
            .trim()
            .replaceAll(/true|false/gi, "")
            .replaceAll(",", "");
        this.componentDidMount();
        this.registerEvents();
    }

    disconnectedCallBack() {
        this.componentWillUnMount()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.componentWillUpdate(name, oldValue, newValue);
        this.getAttributeNames().forEach(() => {
            this.props[name] = this.getAttribute(name)
        })
    }


    dispatch(type, props) {
        this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: props }));
    }

    registerEvents() {

    }

    componentDidMount() {          //компонент вмонтирован

    }

    componentWillUpdate() {         //обновление

    }

    componentWillUnMount() {        //удаление

    }

    render() {

    }
}