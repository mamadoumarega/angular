import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  // Inscription avec firenase
  // signUpUser(email: string, password: string) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password).then(
  //         () => {
  //           console.log('Connecté');
  //           resolve();
  //         }
  //       ).catch(
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //     }
  //   );
  // }
  // connexion avec firebase
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // Decconexion
  signOutUser() {
    firebase.auth().signOut();
  }
}
