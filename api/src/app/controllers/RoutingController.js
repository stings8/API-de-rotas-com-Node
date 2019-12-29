import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      from: Yup.array(),
      to: Yup.array(),
    });

    return res.json({ ok: true });
  }
  
}

export default new UserController();
