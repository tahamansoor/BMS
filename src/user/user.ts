import { Request, Response } from "express";
import {
	comparePasswords,
	genrateHashedPassword,
} from "../helpers/password.helper";
import {
	NotFoundError,
	AuthoriztionError,
	UnknownError,
	AuthenticationError,
} from "../constructors/error.constructors";
import { PrismaClient } from "@prisma/client";
import { SuccessResponse } from "../constructors/response.contructors";
import { generateJwtToken } from "../helpers/jwt.helper";
import { roles } from "./enums/role.eum";

const prismaClient = new PrismaClient();

async function createUser(req: Request, res: Response) {
	try {
		const { name, userName, password, role, user: tokenUser } = req.body;
		if (tokenUser.role !== roles.HEAD_ADMIN) {
			throw new AuthenticationError(
				"User wit HEAD_ADMIN role only can create user",
			);
		}
		if (!(name || userName || password || role)) {
			throw new Error("missing field is required");
		}
		const hashedPassword = await genrateHashedPassword(password);
		await prismaClient.user.create({
			data: {
				name: name,
				password: hashedPassword,
				role: role,
				userName: userName,
			},
		});

		return res
			.status(200)
			.send(new SuccessResponse("Successfuly user signed up"));
	} catch (error: any) {
		res.send(error.status ? error : new UnknownError(error.message));
	}
}

async function signIn(req: Request, res: Response) {
	try {
		const { password, user: tokenUser } = req.body;
		const user = await prismaClient.user.findUnique({
			where: { id: tokenUser.id },
		});
		if (!user) throw new NotFoundError("user");
		const comparePassword = await comparePasswords(user.password, password);
		if (!comparePassword) {
			throw new AuthoriztionError();
		}
		const bearerToken = generateJwtToken(user.id);
		res.send(
			new SuccessResponse("successfuly signed in", { token: bearerToken }),
		);
	} catch (error) {
		res.send(error);
	}
}

export { signIn, createUser };
