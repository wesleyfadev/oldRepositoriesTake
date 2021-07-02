const { ReposTakeService } = require('../services/ReposTakeService')
const reposTakeService = new ReposTakeService()

class ReposTakeController {
    async listOldCSharpRepositories(req, res) {
        try {
            const oldRepositoriesCSharp = await reposTakeService.listOldCSharpRepositories()
            return res.status(200).json(oldRepositoriesCSharp)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Something went wrong' })
        }
    }
}

module.exports = { ReposTakeController }