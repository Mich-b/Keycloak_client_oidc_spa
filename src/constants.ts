export class Constants {
  public static stsAuthority = 'http://localhost/auth/realms/master/';
  public static clientId = 'oidc-spa';
  public static clientRoot = 'http://localhost:4200/';
  //public static clientRoot = 'https://gracious-kare-74625e.netlify.com/';
  public static clientScope = 'openid profile email';
  public static apiAudience = 'https://localapi.internal';
  public static apiRoot = 'https://localapi.internal/api/';
}
