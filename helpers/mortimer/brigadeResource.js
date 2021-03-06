const Brigade = require('../../models/Brigade')
const AfterResourceHook = require('./afterResourceHook')
class BrigadeResource extends AfterResourceHook {
  constructor () {
    super(Brigade)
  }
  // This method implements the counting routine.
  after (tag) {
    return function (req, res, next) {
      // console.log('running', req.mrt.result, req.user)
      // TODO: edit req.mrt.result to sanitize returns
      req.mrt.result = req.mrt.result.map((brigade) => {
        brigade = brigade.toObject()
        delete brigade.auth
        return brigade
      })
      next()
    }
  }
}
const brigadeResource = new BrigadeResource(Brigade)

module.exports = brigadeResource
