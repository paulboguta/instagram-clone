declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API: string;
      REACT_APP_AUTHDOMAIN: string;
      REACT_APP_PROJECT_ID: string;
      REACT_APP_STORAGE_BUCKET: string;
      REACT_APP_MESSAGING_SENDER_ID: string;
      REACT_APP_ID: string;
    }
  }
}

export {};
