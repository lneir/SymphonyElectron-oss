/**
 * implementation for notifications
 */
class Notify {
    constructor() {}

    show() {
        return 10;
    }

    close() {
        this.destroy();
    }

    destroy() {}

    requirePermissions() {}

    addEventListener(event, cb) {
    }

    removeEventListener(event, cb) {
    }

    //
    // private stuff below here
    //
}

module.exports = Notify;
