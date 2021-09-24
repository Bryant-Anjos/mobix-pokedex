/**
 * Action types
 */
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_OUT_REQUEST = '@auth/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS = '@auth/SIGN_OUT_SUCCESS',
}

/**
 * Data types
 */
interface User {
  name: string
  email: string
}

/**
 * State type
 */
export interface AuthState {
  readonly user?: User
  readonly signed: boolean
  readonly loading: boolean
}
