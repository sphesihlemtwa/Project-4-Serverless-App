import { decode } from 'jsonwebtoken'

import { JwtPayload } from './JwtPayload'

/**
 * Parse a JWT token and return a user id
 * @param jwtToken JWT token to parse
 * @returns a user id from the JWT token
 */
export function parseUserId(jwtToken: string): string {
  const decodeJwt = decode(jwtToken) as JwtPayload
  return decodeJwt.sub
}


export function getToken(authHeader: string): string {

  if (!authHeader.toLowerCase().startsWith('bearer ')) {
    throw new Error('Invalid authentication header');
  }

  if (!authHeader) {
    throw new Error('No authentication header');
  }



  const splitAuthHeader = authHeader.split(' ');
  const token = splitAuthHeader[1];

  return token;
}