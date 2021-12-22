const mongoHelper = require("../../helper/mongodb");

const COLLECTION = "comodato";

const findAll = async ( params = {}) => {
  return await mongoHelper.getAll(COLLECTION, params, { size: 100 });
};

module.exports = {
  findAll,
};
