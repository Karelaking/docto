declare module 'clsx' {
  type ClassValue = 
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined;

  type ClassDictionary = Record<string, any>;
  type ClassArray = ClassValue[];

  function clsx(...inputs: ClassValue[]): string;
  export default clsx;
  export { clsx, type ClassValue };
}