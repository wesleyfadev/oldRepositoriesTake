const { Router } = require('express')
const { ReposTakeController } = require('../controllers/ReposTakeController')
const reposTakeController = new ReposTakeController()

const routes = Router()

routes.get('/oldReposTakeCSharp', reposTakeController.listOldCSharpRepositories)

module.exports = routes