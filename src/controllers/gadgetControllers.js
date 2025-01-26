const gadgetService = require('../services/gadgetService');

const getGadgets = async (req, res) => {
  try {
    const gadgets = await gadgetService.getAllGadgets();
    res.json(gadgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error); 
  }
};

const addGadget = async (req, res) => {
  try {
    const { name } = req.body;
    const gadget = await gadgetService.createGadget(name);
    res.status(201).json(gadget);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error); 
  }
};

const updateGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await gadgetService.updateGadget(id, req.body);
    res.json(gadget);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error); 
  }
};

const decommissionGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await gadgetService.decommissionGadget(id);
    res.json(gadget);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error); 
  }
};

const selfDestructGadget = async (req, res) => {
    try {
      const { id } = req.params;
      const confirmationCode = await gadgetService.triggerSelfDestruct(id);
      res.json({ confirmationCode });
    } catch (error) {
      res.status(500).json({ message: error.message });
      next(error); 
    }
  };

module.exports = {
    getGadgets,
    addGadget,
    updateGadget,
    decommissionGadget,
    selfDestructGadget,
};