declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;