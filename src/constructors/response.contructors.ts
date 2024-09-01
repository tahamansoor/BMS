/**
 * @name SuccessResponse
 * @argument message
 */
export class SuccessResponse {
	constructor(message: string, data?: object, metaData?: object) {
		this.error = false;
		this.message = message;
		this.data = data;
		this.metaData = metaData;
	}
	message: string;
	error: boolean;
	data: object | undefined;
	metaData: object | undefined;
}
