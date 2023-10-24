const {Router} = require("express")
const usersRouter = require("./usersRoutes")
const notesRouter = require("./notesRoutes")
const tagsRouter = require("./tagsRoutes")

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)


module.exports = routes