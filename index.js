const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('./loggerMiddleware')

app.use(cors())
app.use(express.json())
app.use(logger)

let notes = [
    {
        id: 1,
        content: "Ola uwu",
        date: "2015-05-30T17:30:31.098Z",
        important: true
    },
{
        id: 2,
        content: "aña uwu",
        date: "2015-05-3clear0T17:30:31.098Z",
        important: true
    },
    {
        id: 3,
        content: "sakevnoswrnv uwu",
        date: "2015-05-30T17:30:31.098Z",
        important: true
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    }else{
        response.status(404).end()
    }
    response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const note = request.body

    if(!note || !note.content) {
        return response.status(400).end()
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)
    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }

    notes = [...notes, newNote]
    response.json(newNote)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})