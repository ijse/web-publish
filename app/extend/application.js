const GitHub = require('github')
const GH = Symbol('Application#github')

module.exports = {
  get github () {
    if (!this[GH]) {
      const github = new GitHub(this.config.github)
      if (this.config.github.authenticate) {
        console.log('auth github', this.config.github)
        github.authenticate(this.config.github.authenticate)
      }
      this[GH] = github
    }
    return this[GH]
  }
}
