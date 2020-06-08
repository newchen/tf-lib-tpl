declare module '*.css';
declare module '*.less' {
  const resource: {[key: string]: string};
  export default resource
}
declare module '*.scss'{
  const resource: {[key: string]: string};
  export default resource
}
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';