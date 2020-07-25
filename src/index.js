"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactTunesPlayer = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = require("prop-types");
exports.ReactTunesPlayer = function (_a) {
    var tunes = _a.tunes;
    return react_1.default.createElement("div", null, "player - playing");
};
exports.ReactTunesPlayer.defaultProps = {
    tunes: []
};
exports.ReactTunesPlayer.propTypes = {
    tunes: prop_types_1.arrayOf(prop_types_1.exact({
        tune: prop_types_1.string.isRequired,
        name: prop_types_1.string.isRequired,
        album: prop_types_1.string.isRequired,
    })).isRequired,
};
exports.default = exports.ReactTunesPlayer;
