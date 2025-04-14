import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

interface RateLimitRecord {
    count: number;
    firstRequest: number;
}

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
    private requestMap: Map<string, RateLimitRecord> = new Map();
    private readonly limit: number = 3;
    private readonly windowTime: number = 60 * 1000; // 1 minute

    use(req: Request, res: Response, next: NextFunction): void {
        const ip: string = req.ip || 'unknown';
        const currentTime: number = Date.now();
        const record: RateLimitRecord | undefined = this.requestMap.get(ip);

        // If this IP is making a request for the first time
        if (!record) {
            this.requestMap.set(ip, { count: 1, firstRequest: currentTime });
            return next();
        }

        // If the current time has exceeded the window time, reset the counter
        if (currentTime - record.firstRequest > this.windowTime) {
            this.requestMap.set(ip, { count: 1, firstRequest: currentTime });
            return next();
        }

        // If the number of requests is within the allowed limit
        if (record.count < this.limit) {
            record.count += 1;
            return next();
        }

        // If the request exceeds the limit within the time window, throw 429
        throw new HttpException('Too many requests', 429);
    }
}
