"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crypto_1 = require("../controllers/crypto");
const router = (0, express_1.Router)();
router.get('/sha256', crypto_1.getSHA256);
router.get('/aesGet', crypto_1.makeAES);
router.get('/aesCheck', crypto_1.getAES);
router.get('/rsaGet', crypto_1.makeRSA);
router.post('/rsaCheck', crypto_1.getRSA);
exports.default = router;
//# sourceMappingURL=crypto.js.map