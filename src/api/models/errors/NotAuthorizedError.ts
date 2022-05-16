export class NotAuthorizedError extends Error {

    statusCode: number
    
    constructor(message: string) {
        super(message)
        this.name = "NotAuthorizedError"
        this.statusCode = 401
    }
}