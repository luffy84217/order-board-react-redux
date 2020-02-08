export function $(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelector(selector);
}

export function $$(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelectorAll(selector);
}

export function getElement(tag, id) {
    return new Promise((resolve, reject) => {
        const el = document.createElement(tag);
        if (id) {
            el.id = id;
        }
        resolve(el);
    });
}
export function uuid() {
    /*jshint bitwise:false */
    let random;
    let uuid = '';

    for (let i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }

    return uuid;
}

export function save(namespace, data) {
    if (data) {
        return sessionStorage.setItem(namespace, JSON.stringify(data));
    }

    const store = sessionStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
}