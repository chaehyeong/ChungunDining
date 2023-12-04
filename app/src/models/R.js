"use strict";

const RStorage = require("./RStorage");

class R {
    constructor(body) {
        this.body = body;
    }

    async ask() {
        const client = this.body;
        try {
            const response = await RStorage.save(client);
            return response;
        } catch (err) {
            return {success: false, msg: err};
        }
    }
}

module.exports = R;