/**
 * @extends Error
 * @name UnknownError
 */
export class UnknownError extends Error {
	constructor(message: string) {
		super();
		this.status = 500;
		this.name = "Unknown error";
		this.message = message || "Uknown error ocurred";
	}
	status: number;
}

/**
 * @extends Error
 * @name NotFoundError
 */
export class NotFoundError extends Error {
	constructor(name: string) {
		super();
		this.status = 404;
		this.name = "Not Found Error";
		this.message = `${name} Can not be found`;
	}
	status: number;
}

/**
 * @extends Error
 * @name AuthenticationError
 */
export class AuthenticationError extends Error {
	constructor(message?: string) {
		super();
		this.status = 403;
		this.name = "Authentication Error";
		this.message = message || "Unauthenticated error";
	}
	status: number;
}

export class AuthoriztionError extends Error {
	constructor(message?: string) {
		super();
		this.message = message || "Authoriztion error";
		this.name = "Authoriztion Error";
		this.status = 401;
	}
	status: number;
}
