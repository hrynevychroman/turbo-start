export interface CredentialPopupResponse {
  clientId: string;
  /** JWT credential string */
  credential: string;
  /** This field shows how the credential is selected */
  select_by: "auto" | "user" | "user_1tap" | "user_2tap" | "btn" | "btn_confirm" | "brn_add_session" | "btn_confirm_add_session";
}
export interface TokenPopupResponse {
  /** The access token of a successful token response. */
  access_token: string;
  authuser: string;
  /** The lifetime in seconds of the access token. */
  expires_in: string;
  /** Type of prompt presented to the user */
  prompt: string;
  /** A space-delimited list of scopes that are approved by the user. */
  scope: string;
  /** The type of the token issued. */
  token_type: string;
}
export interface CodePopupResponse {
  authuser: string;
  /** The authorization code of a successful token response */
  code: string;
  /** Type of prompt presented to the user */
  prompt: string;
  /**	A space-delimited list of scopes that are approved by the user */
  scope: string;
}
export interface ErrorPopupResponse {
  message: string;
  /** The error stack trace. */
  stack: string;
  /** The error type, giving the detailed reason for the error. */
  type: string;
}
