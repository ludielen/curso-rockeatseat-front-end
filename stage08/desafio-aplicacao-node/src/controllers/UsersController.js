
const { hash, compare} = require("bcryptjs")

const appError = require("../utils/appError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response) {
        const {name, email, password} = request.body

        const database = await sqliteConnection()

        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new appError("Este email ja está cadastrado")
        }

        const hashedPassword =  await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return response.status(201).json()
    }

    async update(request, response) {
        const {name, email, password, old_password} = request.body
        const {id} = request.params

        const database = await sqliteConnection()

        const userRegistered = await database.get("SELECT * FROM users WHERE id = (?)", [id])

        if(!userRegistered) {
            throw new appError("Usuário não encontrado")
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)",  [email])

        if(validateDuplicateEmail(userWithUpdateEmail, userRegistered)){
            throw new appError("Este email já existe, tente outro email")
        }

     userRegistered.name = name ?? userRegistered.name
     userRegistered.email = email ?? userRegistered.email

     if(password && !old_password) {
        throw new appError("Informe a senha antiga para definir a nova senha")
     }

     if(password && old_password) {
        const checkOldPassword = await compare(old_password,userRegistered.password)

        if(!checkOldPassword) {
            throw new appError(" A senha antiga não confere")
        }

        userRegistered.password = await hash(password, 8)
     }

        await database.run(`
         UPDATE users SET 
         name = ?,
         email = ?,
         password = ?,
         updated_at= DATETIME('now')
         WHERE id = ?`,
         [userRegistered.name, userRegistered.email, userRegistered.password, id])
    
         return response.json()
    }
}

function validateDuplicateEmail(userWithUpdateEmail, userRegistered) {
    return userWithUpdateEmail && userWithUpdateEmail.id !== userRegistered.id
}

module.exports = UsersController
