import { jwtDecode } from 'jwt-decode';

export const JWTdecode = (token: string)=> {
  try {
    const decoded = jwtDecode(token)
    return decoded.sub;
  } catch (err) {
    console.error('Token decode failed:', err);
    return null;
  }
}