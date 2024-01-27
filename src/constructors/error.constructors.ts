/**
 * @extends Error
 * @name UnknownError
 */
export class UnknownError extends Error{
     constructor(message:string){
         super();
        this.status = 500
        this.name = 'Unknown error'
        this.message = message || 'Uknown error ocurred'
    }
    status:number
}

/**
 * @extends Error
 * @name NotFoundError
 */
export class NotFoundError extends Error {
    constructor (name:string){
        super();
        this.status = 404
        this.name = 'Not Found Error'
        this.message = `${name} Can not be found`
    }
    status:number
}

/**
 * @extends Error
 * @name AuthoriztionError
 */
export class AuthoriztionError extends Error {
    constructor (message?:string){
        super();
        this.status = 401
        this.name = 'Unauthenticated Error'
        this.message = message || "Unauthenticated error"
    }
    status:number

}