const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { data: prList } = await this.service.github.pr.list()
    await this.ctx.render('home.html', { prList })
  }
}

module.exports = HomeController;
