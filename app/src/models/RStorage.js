"use strict";

const exp = require("constants");

const fs = require("fs").promises;

class RStorage {

    static #getRestaurant(data, isAll, fields) {
        const Restaurant = JSON.parse(data);
        if (isAll) return Restaurant;

        const newRestaurant = fields.reduce((newRestaurant, field) => {
            if (Restaurant.hasOwnProperty(field)) {
                newRestaurant[field] = Restaurant[field];
            }
            return newRestaurant;
        }, {});
        return newRestaurant;
    }

    static getRestaurant(isAll, ...fields) {
        return fs
            .readFile("./src/database/Restaurant.json")
            .then((data) => {
                return this.#getRestaurant(data, isAll, fields);
            })
            .catch(console.error);
    }

    static async save(RInfo) {
        const Restaurant = await this.getRestaurant(true);
        Restaurant.name.push(RInfo.name);
        Restaurant.category.push(RInfo.category);
        Restaurant.loc.push(RInfo.loc);
        Restaurant.email.push(RInfo.email);
        fs.writeFile("./src/database/Restaurant.json", JSON.stringify(Restaurant));
        return {success: true};
    }
}

module.exports = RStorage;