import { ForbiddenException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class VerifyApiKeyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const apiKey = req.headers['x-api-key'];
        const validKey = process.env.API_KEY;
        if (apiKey !== validKey) {
            throw new ForbiddenException('Invalid or missing API key');
        }
        // console.log('IP:', req.ip); // Bonus: log IP
        next();
    }
}
