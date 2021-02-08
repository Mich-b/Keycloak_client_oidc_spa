import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { Constants } from '../constants';

export { User };

@Injectable({
  providedIn: 'root'
})
export class AppAuthNService {

  _userManager: UserManager;
  _user: User;

  constructor() {
    var settings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}assets/signin-callback.html`,
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime : 200,
      silent_redirect_uri: `${Constants.clientRoot}assets/silent-callback.html`,
      post_logout_redirect_uri: `${Constants.clientRoot}`,
      response_type: 'code',
      scope: Constants.clientScope,
    };
    this._userManager = new UserManager(settings);

    this._userManager.events.addUserLoaded(function(){
      console.log("user reloaded...");
    });
  }

  public getUser(): Promise<User> {
    return this._userManager.getUser();
  }

  public login(): Promise<void> {
    return this._userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this._userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this._userManager.signoutRedirect();
  }
}
