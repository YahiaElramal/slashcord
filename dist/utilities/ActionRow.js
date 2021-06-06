"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRow = void 0;
class ActionRow {
    constructor(components) {
        this.type = 1;
        this.components = [];
        this.components = components;
    }
    addComponent(component) {
        this.components.push(component);
        return this;
    }
}
exports.ActionRow = ActionRow;
