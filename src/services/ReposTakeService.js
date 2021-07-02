const { ReposTake } = require('../models/ReposTake')
const reposTake = new ReposTake()

class ReposTakeService {
    async listOldCSharpRepositories() {
        const response = await reposTake.listOldCSharpRepositories()

        const oldRepositoriesCSharp = []

        const repositoriesCSharp = response.filter(items => {
            return items.language === 'C#'
        })

        let count = 1
        repositoriesCSharp.map(items => {
            if (count <= 5) {
                count++
                oldRepositoriesCSharp.push({
                    name: items.name,
                    description: items.description,
                    avatar_url: items.owner.avatar_url,
                })
            }
        })
        return oldRepositoriesCSharp
    }

}

module.exports = { ReposTakeService }