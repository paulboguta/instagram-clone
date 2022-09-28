/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//

import firebase from "firebase/compat/app";
import { attachCustomCommands } from "cypress-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTOSMhSAH1ZAp_Akoe2-Jn6jZbIqx9TCk",
  authDomain: "instagram-d534e.firebaseapp.com",
  projectId: "instagram-d534e",
  storageBucket: "instagram-d534e.appspot.com",
  messagingSenderId: "676808198167",
  appId: "1:676808198167:web:09908d82fe199910cfb452",
};

firebase.initializeApp(firebaseConfig);

attachCustomCommands({ Cypress, cy, firebase });
