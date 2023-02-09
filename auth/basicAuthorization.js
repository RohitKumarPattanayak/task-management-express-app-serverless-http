import { AUTH_USER, AUTH_PASS } from "../utils/constants.js";
import basicAuth from "express-basic-auth";
function myAuthorizer(username, password) {
  const userMatches = basicAuth.safeCompare(username, AUTH_USER);
  const passwordMatches = basicAuth.safeCompare(password, AUTH_PASS);

  return userMatches & passwordMatches;
}
export default myAuthorizer;
