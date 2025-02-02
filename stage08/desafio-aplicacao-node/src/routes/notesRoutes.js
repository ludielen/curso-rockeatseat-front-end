const { Router } = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesController = new NotesController()

// query params
notesRoutes.post("/:user_id", notesController.create) 
notesRoutes.get("/:id", notesController.show) 
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;