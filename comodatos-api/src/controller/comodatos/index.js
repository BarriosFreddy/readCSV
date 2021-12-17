const comodatosService = require('../../services/comodatos')

const get = async (req, res) => {
    try {
        const comodatos =  await comodatosService.findAll()
        res.send(comodatos)  
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    get
}