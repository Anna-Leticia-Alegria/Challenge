import userPromise from '../promises/user.promise.js'
import asyncMiddleware from '../utils/asyncMiddleware'

async function getUser(req, res) {
  const { email } = req.params

  const user = await userPromise.getUser(email)

  res.send(user);
}

export default { getUser }
