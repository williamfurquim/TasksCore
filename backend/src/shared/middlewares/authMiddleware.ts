import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

interface TokenPayload {
    userId: string;
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        throw new AppError("Token error", 401);
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        throw new AppError("Token malformatted", 401);
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as TokenPayload;

        req.user = {
            id: decoded.userId,
        };

        return next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}