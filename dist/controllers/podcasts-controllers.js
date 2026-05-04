"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controllers/podcasts-controllers.ts
var podcasts_controllers_exports = {};
__export(podcasts_controllers_exports, {
  getListEpisodes: () => getListEpisodes
});
module.exports = __toCommonJS(podcasts_controllers_exports);
var getListEpisodes = async (request, response) => {
  response.writeHead(200, { "Content-Type": "aplication/json" });
  response.end(JSON.stringify({
    name: "Henrique Branco"
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getListEpisodes
});
