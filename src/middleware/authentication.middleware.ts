import { Request, Response, NextFunction } from "express";
import { AuthoriztionError } from "../constructors/error.constructors";
import { PrismaClient } from "@prisma/client";
import { getUserIdbyToken } from "../helpers/jwt.helper";

const prismaClient = new PrismaClient();

export async function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const bearerToken = req.headers["authorization"];
		if (!bearerToken) {
			throw new AuthoriztionError("Bearer Token must be provided");
		}
		const [, token] = bearerToken.split(" ");
		const userId = getUserIdbyToken(token);
		const user = await prismaClient.user.findUnique({ where: { id: userId } });
		if (!user) {
			throw new AuthoriztionError("user not found");
		}

		req.body.user = user;
		next();
	} catch (error: any) {
		res.send(new AuthoriztionError(error.message));
	}
}
