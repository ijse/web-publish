const Controller = require('egg').Controller;

class HomeController extends Controller {
  async register () {
    const { ctx } = this
    const body = ctx.request.body
    const userProp = {
      login: body.username,
      name: body.username,
      password: body.password
    }
    const user = await this.model.User.create(userProp)
  }
}

module.exports = HomeController;
