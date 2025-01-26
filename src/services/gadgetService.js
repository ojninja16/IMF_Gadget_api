const prisma = require('../config/db');
const generateCodename = require('../utils/genCodename');
const generateSuccessProbability = require('../utils/genSuccessProbability');
const generateConfirmationCode=require('../utils/genConfirmationCode')

const getAllGadgets = async (status) => {
    const where = status ? { status } : {};
    const gadgets = await prisma.gadget.findMany({ where });
    return gadgets.map(gadget => ({
        ...gadget,
        successProbability: `${generateSuccessProbability()}%`,
        }));
    };

const createGadget = async (name) => {
  const codename = generateCodename();
  return await prisma.gadget.create({
    data: { name, codename },
  });
};

const updateGadget = async (id, data) => {
  return await prisma.gadget.update({
    where: { id },
    data,
  });
};

const decommissionGadget = async (id) => {
  return await prisma.gadget.update({
    where: { id },
    data: { status: 'Decommissioned', decommissionedAt: new Date() },
  });
};

const triggerSelfDestruct = async (id) => {
    const confirmationCode = generateConfirmationCode();
    await prisma.gadget.update({
        where: { id },
        data: { status: 'Destroyed' },
        });
        return confirmationCode;
    };

module.exports = {
    getAllGadgets,
    createGadget,
    updateGadget,
    decommissionGadget,
    triggerSelfDestruct,
};