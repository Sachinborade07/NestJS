import { applyDecorators, CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";

export function Timeout(ms: number) {
    @Injectable()
    class TimeoutInterceptor implements NestInterceptor {
        async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
            const controllerPromise = next.handle();

            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new RequestTimeoutException()), ms);
            });

            return Promise.race([controllerPromise, timeoutPromise]) as any;
        }
    }

    return applyDecorators(UseInterceptors(new TimeoutInterceptor()));
}