const api = require('../api/api')

class ReposTake {
    async listOldCSharpRepositories() {
        let response
        await api.get('users/takenet/repos?sort=created&direction=asc')
            .then(function (res) {
                response = res.data
            })
            .catch(function (error) {
                console.log(error)
            })
        return response
    }
}

module.exports = { ReposTake }