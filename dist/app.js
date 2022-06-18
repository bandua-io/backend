"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.DEFAULT_PORT;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.use(routes_1.default);
//# sourceMappingURL=app.js.map