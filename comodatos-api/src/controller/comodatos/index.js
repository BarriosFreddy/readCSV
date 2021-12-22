const comodatosService = require("../../services/comodatos");

const get = async (req, res) => {
  try {
    const { BL, CIUDAD } = req.query;
    const params = {};
    BL && (params.BL = BL);
    CIUDAD && (params.CIUDAD = CIUDAD);
    const comodatos = await comodatosService.findAll(params);
    res.send(comodatos);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  get,
};
