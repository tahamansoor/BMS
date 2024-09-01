import * as bcrypt from "bcrypt";

/**
 * return hashed password
 * @param password
 * @returns
 */
export async function genrateHashedPassword(password: string) {
	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		return hashedPassword;
	} catch (error: any) {
		throw new Error(error.message);
	}
}

/**
 * compare hashed password to a string password
 * @param hashedPassword
 * @param givenPassword
 * @returns true/false
 */
export async function comparePasswords(
	hashedPassword: string,
	givenPassword: string,
) {
	try {
		const hashedPass = await genrateHashedPassword(givenPassword);

		if (hashedPassword !== hashedPass) {
			throw false;
		}

		return true;
	} catch (error: any) {
		throw new Error(error.message);
	}
}
