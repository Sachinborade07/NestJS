import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';



// Q13
@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        console.log(JSON.stringify({
            timestamp: new Date().toISOString(),
            method: req.method,
            url: req.url,
        }));
        next();
    }
}        