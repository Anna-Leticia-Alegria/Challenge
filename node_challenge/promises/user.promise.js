import { mongoose, userModel} from '../config/database'

const getUser = (email) => {
  userModel.find({userEmail: email})
}

export default { getUser }
