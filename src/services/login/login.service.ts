import { Injectable } from '@angular/core';
import {LocalStorage} from "angular2-localstorage/WebStorage";
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const TOKEN_KEY = 'LoginToken';

interface IUser {
  username: string;
  authtoken: string;
  roles: string[];
}

/**
 * Service for handling Login.
 * 
 * Exposes the methods 'authenticate', 'deauthenticate' and 'getCurrentUser'. 
 * 
 * When authentication is done its builds a token from the specified username or 
 * password - or if they are not supplied it tries get it from LocalStorage.
 * 
 * If token is successfully built or retrieved authentication will progress - otherwise rejected.
 * When authentication progresses it will start by sending a request to <serviceurl>/system/authenticate 
 * with an 'Authorization' header carrying the token.
 * 
 * If responsestatus for this request is not '200', then the authentication is rejected. Otherwise it is 
 * considered successfull and will progress by storing token in LocalStorage(only if 'remember' is true),
 * applying authorization header as a default header for all subsequent requests, setting user at $rootScope.currentUser
 * and finally broadcasting 'login' with the user as a parameter.
 */
@Injectable()
export class LoginService {

  _currentUser = null;

  @LocalStorage(TOKEN_KEY) loginToken: string = null;

  constructor(private http: Http) { }

  public authenticate(username, password, remember): Observable<IUser> {

    let user: IUser = null;
    let authHeader: string;
    let token: string;
    let serviceUrl: string = ''; //blacktiger.getServiceUrl()

    if (!username && !password) {
      token = this.loginToken;
    } else if (username && password) {
      token = btoa(username.trim() + ':' + password.trim());
    }

    if (token) {
      let headers = new Headers();
      headers.append('Authorization', 'Basic ' + token);
      return this.http.get(serviceUrl + 'system/authenticate', {
        headers: headers
      })
        .map((response: Response) => {
          if (remember) {
            this.loginToken = token;
          }

          /*$rootScope.credentials = {
            username: username,
            password: password
          };*/
          let user: IUser = response.json();

          console.log('Authenticated. Returning user.');
          //AuthorizationHeaderSvc.setToken(authHeader);

          console.log('Logged in as ' + user.username);
          this._currentUser = user;
          //$rootScope.currentUser = user;
          //$rootScope.$broadcast('login', user);
          return user;
        })
        .catch(this.handleError);
    } else {
      console.log('Unable to authenticate.');
      return Observable.throw('No credentials specified or available for authentication.');
    }

  }

  private handleError(error: any) {
    var reason = error.status === 404 ? null : error.message;
    if (!reason || '' === reason) {
      reason = {
        message: 'Unable to communicate with server'
      };
    }
    this.loginToken = null;
    console.log('Unable to authenticate: ' + reason.message);
    return Observable.throw('Unable to authenticate. Reason: ' + reason.message);

  }

  public get currentUser() {
    return this.currentUser;
  }

  public deauthenticate() {
    //AuthorizationHeaderSvc.setToken(undefined);
    this.loginToken = null;
    //$rootScope.$broadcast('logout', currentUser);
    this._currentUser = null;
    //$rootScope.currentUser = null;
    //$rootScope.$broadcast('afterLogout', currentUser);

  }

}
