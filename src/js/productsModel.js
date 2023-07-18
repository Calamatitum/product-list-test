const changeHandler = {
  set(target, property, value) {
    const oldValue = target[property];
    target[property] = value;
    if (target._handlers[property]) {
      target._handlers[property].forEach(handler => {
        handler(property, oldValue, value);
      });
    }
    return true;
  }
};

let target = {
  _handlers: {},
  onPropertyChange: (propertyName, handler) => {
    if (!target._handlers[propertyName]) {
      target._handlers[propertyName] = [];
    }
    target._handlers[propertyName].push(handler);
  }}


export const model = new Proxy(target, changeHandler);
