class LocalStorage {
    constructor() {
        this.favorites = JSON.parse(localStorage.getItem("favorites"));
        this.addedToCart = JSON.parse(localStorage.getItem("addedToCart"));
    }

    add(obj, itemId) {
        this[obj] ? this[obj].push(itemId) : this[obj] = [itemId];
        this._sync(obj);
    }

    remove(obj, itemId) {
        const id = this[obj].findIndex(storedId => itemId === storedId);
        if (id !== -1) {
            this[obj].splice(id, 1);
            this._sync(obj);
        }
    }

    clear(obj) {
        this[obj] = [];
        this._sync(obj);
    }

    _sync(syncObj) {
        localStorage.setItem(syncObj, JSON.stringify(this[syncObj]));
    }
}

export default new LocalStorage();