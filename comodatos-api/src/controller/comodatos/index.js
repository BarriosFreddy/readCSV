const comodatosService = require("../../services/comodatos");

const get = async (req, res) => {
  try {
    const { BL } = req.query;
    const comodatos = await comodatosService.findAll({ BL });
    res.send(comodatos);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  get,
};
