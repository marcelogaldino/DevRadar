const Dev = require('../models/Dev')
const ParseStringAsArray = require('../utils/ParseStringAsArray')


module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = ParseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray // $in -> MongoDB Operator
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return res.json({ devs })
    }
}