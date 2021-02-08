# Goal
This repository contains a client which will call my instance [Keycloak](https://github.com/Mich-b/Keycloak_fido2_hibp) configured with password as first factor and WebAuthn (FIDO2) as second factor. The first factor is a password for which the guidelines mentioned in [NIST SP 800-63b](https://pages.nist.gov/800-63-3/sp800-63b.html) have been followed:
* at least 8 characters in length
* not allowed in case the password is present in a blacklist that contains values known to be commonly-used, expected, or compromised. In casu, the [HIBP API](https://haveibeenpwned.com/API/v3) is used. 

WebAutn can also be used as the sole factor and hence replace passwords completely. However, since I also wanted to showcase the HIBP API, I'm  using WebAuthn as a second factor and password as a first factor. Note that, although functionally very similar, I'm not using U2F (FIDO1) here. WebAuthn (FIDO2) is used.

# Demo
- currently only the client is online: https://demo.michaelboeynaems.com
- please host the server yourself based on https://github.com/Mich-b/Keycloak_fido2_hibp

# About access and refresh token expiry
See https://github.com/Mich-b/Keycloak_fido2_hibp

# Get started
## change config
You probably will have to make changes to the config in the following files:
* /src/constants.ts
* /src/assets/signin-callback.html
* /src/assets/silent-callback.html
* /src/app/app-auth-n.service.ts

## run the project
*npm install
*npm start
*npm run-script build

## (optional) host on Netlify
Simply drop the /dist/App folder in Netlify, or link your Github forked repo. 

## enable logging in the console
Oidc.Log.logger = console;