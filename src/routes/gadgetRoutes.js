const auth = require('../middlewares/auth');
const express = require('express');
const gadgetController = require('../controllers/gadgetControllers');

const router = express.Router();

router.get('/', auth(), gadgetController.getGadgets);
router.post('/', auth(['admin']), gadgetController.addGadget);
router.patch('/:id', auth(['admin']), gadgetController.updateGadget);
router.delete('/:id', auth(['admin']), gadgetController.decommissionGadget);
router.post('/:id/self-destruct', auth(), gadgetController.selfDestructGadget);

module.exports = router;
