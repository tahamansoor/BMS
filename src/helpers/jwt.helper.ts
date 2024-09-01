import { env } from "process";
import * as jwt from "jsonwebtoken";

/**
 *
 * @param userId
 * @returns string
 */
export function generateJwtToken(userId: string) {
	if (!userId) throw new Error("userId is required");
	const key = String(env.JWT_KEY);
	const token = jwt.sign(userId, key, { expiresIn: 120 * 60 });
	return token;
}

/**
 *
 * @param token
 * @returns
 */
export function getUserIdbyToken(token: string) {
	if (!token) throw new Error("token is required");
	const key = String(env.JWT_KEY);
	const { userId } = jwt.verify(token, key) as jwt.JwtPayload;
	return userId as string;
}
