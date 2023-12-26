const {Router} = require("express")
const usersRouter = require("./usersRoutes")
const notesRouter = require("./notesRoutes")
const tagsRouter = require("./tagsRoutes")
const sessionsRouter = require("./sessions.routes")

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)
routes.use("/sessions", sessionsRouter)

module.exports = routes