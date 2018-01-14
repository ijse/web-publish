const Service = require('egg').Service

class GithubService extends Service{
  async list () {
    const github = this.app.github
    const { owner, repo } = this.ctx.params
    const ret = await github.pullRequests.getAll({ owner, repo })
    return ret
  }
}
module.exports = GithubService
