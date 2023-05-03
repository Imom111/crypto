import { Router } from 'express';

import {
    getAES,
    getRSA,
    getSHA256, makeAES, makeRSA
} from '../controllers/crypto';

const router = Router();

router.get('/sha256', getSHA256);

router.get('/aesGet', makeAES);
router.get('/aesCheck', getAES);

router.get('/rsaGet', makeRSA);
router.post('/rsaCheck', getRSA);


export default router;
