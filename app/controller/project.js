const Controller = require('egg').Controller

class PublishController extends Controller {
  async listPRs() {
    const { data: prList } = await this.service.github.pr.list()

    await this.ctx.render('project/prlist', {
      prList
    })
  }
}

module.exports = PublishController
