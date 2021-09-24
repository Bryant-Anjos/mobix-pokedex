import { useState } from 'react'

export enum State {
  IDLE,
  LOADING,
  SUCCESS,
  FAILURE,
}

type User = {
  name: string
  email: string
}

type Result =
  | [State.IDLE, undefined]
  | [State.LOADING, undefined]
  | [State.SUCCESS, User]
  | [State.FAILURE, Error]

export const useLogin = () => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])

  const signIn = (email: string, password: string) => {
    setResult([State.LOADING, undefined])

    const getUser = () =>
      new Promise<User>((resolve, reject) => {
        setTimeout(() => {
          if (email === 'teste@email.com' && password === '123456') {
            resolve({
              name: 'Treinador',
              email: 'teste@email.com',
            })
          } else {
            reject(new Error('Email ou senha incorretos.'))
          }
        }, 2000)
      })

    getUser()
      .then(user => setResult([State.SUCCESS, user]))
      .catch(error => setResult([State.FAILURE, error]))
  }

  return { result, signIn }
}
