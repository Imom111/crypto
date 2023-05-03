"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const crypto_1 = __importDefault(require("../routes/crypto"));
class Server {
    constructor() {
        this.apiPaths = {
            crypto: '/api/crypto'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8081';
        this.middlewares();
        this.routes();
    }
    ;
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.crypto, crypto_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server working on port ${this.port}`);
            console.log(`http://localhost:${this.port}/`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map