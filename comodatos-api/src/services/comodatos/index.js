const mongoHelper = require("../../helper/mongodb");

const COLLECTION = "comodato";

const findAll = async ({ BL = undefined }) => {
  return await mongoHelper.getAll(COLLECTION, { BL }, { size: 100 });
};

module.exports = {
  findAll,
};
