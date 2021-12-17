const mongoHelper = require('../../helper/mongodb')

const COLLECTION = 'comodato'

const findAll = async () => {
   return await mongoHelper.getAll(COLLECTION, null, {size: 100})
}

module.exports = {
    findAll
}