class Component {
    parentElement;
    element;
    constructor(parentElement, tag, className = "") {
        this.parentElement = parentElement;
        this.element = document.createElement(tag);
        this.element.className = className;
        parentElement.append(this.element);
    }
    render() {
        this.parentElement.append(this.element);
    }
    remove() {
        this.element.remove();
    }
}
export default Component;
