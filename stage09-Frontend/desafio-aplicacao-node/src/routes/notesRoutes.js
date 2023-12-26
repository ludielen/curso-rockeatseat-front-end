const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

// query params
notesRoutes.post("/notes", ensureAuthenticated, notesController.create) 
notesRoutes.get("/notes", ensureAuthenticated, notesController.getNotes) 
notesRoutes.get("/notes/query", ensureAuthenticated, notesController.getMoviesByQueryParams) 
notesRoutes.get("/:id", notesController.show) 
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;