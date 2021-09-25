import { Response, Server } from 'miragejs'

type User = {
  name: string
  email: string
  password: string
}

const users: User[] = [
  {
    name: 'Bryant dos Anjos',
    email: 'bryant_mx@hotmail.com',
    password: '123456',
  },
  {
    name: 'Visitante',
    email: 'teste@email.com',
    password: '123456',
  },
  {
    name: 'João Victor Tinoco',
    email: 'tinoco@mobixtec.com',
    password: '123456',
  },
]

const server = new Server({
  routes() {
    this.passthrough('https://pokeapi.co/api/v2/***')
    this.timing = 1000

    this.post('/api/login', (_schema, request) => {
      let req = JSON.parse(request.requestBody)
      const user = users.find(u => u.email === req.email)

      if (!user || user.password !== req.password) {
        return new Response(400, undefined, {
          message: 'Usuário ou senha incorreto.',
        })
      }

      return new Response(200, undefined, { user })
    })
  },
})

export default {
  start: () => server,
  stop: () => server.shutdown(),
}
