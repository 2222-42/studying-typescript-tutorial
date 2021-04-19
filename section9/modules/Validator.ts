
// Use `export` statement to export variables, functions, classes, interfaces, type, etc., from a module.
// export interface Validator {
interface Validator {
    isValid(s: string): boolean
}

// export { Validator as StringValidator };
export { Validator }