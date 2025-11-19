
declare module 'dify-client';
declare module 'uuid';

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.css' {
    const content: any;
    export default content;
}
