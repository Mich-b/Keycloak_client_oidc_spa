export const environment = {
  production: true,
  authority: 'https://login.portasecura.com/auth/realms/WebAuthnTest/',
  client_id: 'oidc-spa',
  redirect_uri: 'https://demo.michaelboeynaems.com/assets/signin-callback.html',
  automaticSilentRenew: true,
  accessTokenExpiringNotificationTime : 180,
  silent_redirect_uri: 'https://demo.michaelboeynaems.com/assets/silent-callback.html',
  post_logout_redirect_uri: 'https://demo.michaelboeynaems.com',
  response_type: 'code',
  scope: 'openid profile email',
};
