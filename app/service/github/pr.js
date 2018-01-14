const Service = require('egg').Service

class GithubService extends Service{
  async list () {
    const github = this.app.github
    const ret = await github.pullRequests.getAll(this.config.repo)
    return ret
  }
}

module.exports = GithubService
