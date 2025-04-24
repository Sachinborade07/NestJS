## 1. Dynamic Route Handling
Task: Create a route GET /users/:id/role/:role where:
● If role=admin, return mock admin data.
● If role=user, return filtered user data.
● Use Param decorator and conditional logic in the service.

users.services.ts -> [Week2/ass2/src/users/users.service.ts](https://github.com/Sachinborade07/NestJS/blob/4df68152f2a6ca3360266ad7a4781d6c9d5d6bd0/Week2/ass2/src/users/users.service.ts)
users.controller.ts -> [Week2/ass2/src/users/users.controller.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/ass2/src/users/users.controller.ts)

## 2. Custom Decorator
Task: Create a @Timeout(delay: number) decorator that cancels the request if it takes longer
than delay ms.
● Use setTimeout + throw new RequestTimeoutException().

time decorator -> [Week2/ass2/src/decorator/timeout.decorator.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/ass2/src/decorator/timeout.decorator.ts)


##3. Pipe for Custom Validation

Task: Create a @IsEven() pipe that rejects numbers if not even (for routes like GET /check-
even/:num).

TimeOut -> [Week2/ass2/src/pipe/is-even.pipe.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/ass2/src/pipe/is-even.pipe.ts)

## 4. Middleware for Rate Limiting
Task: Implement middleware to allow only 3 requests/minute per IP (use Map to store IP
counts).

rate limiting -> [Week2/ass2/src/middleware/rate-limit.middleware.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/ass2/src/middleware/rate-limit.middleware.ts)

## 5 Mock E-Commerce Checkout Flow
● Simulate an entire checkout process (cart → payment → order confirmation)
● Use in-memory arrays for:
● Cart items (/cart routes)
● Mock payment processing (/payment route)
● Order history (/orders route)
● Throw custom errors (e.g., InsufficientStockException)

insufficient_stock exception -> Week2/e-commerce/src/exception/insufficient_stock.exception.ts
cart :
cart services -> [Week2/e-commerce/src/cart/cart.service.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/e-commerce/src/cart/cart.service.ts)
cart controller -> [Week2/e-commerce/src/cart/cart.controller.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/e-commerce/src/cart/cart.controller.ts)
order:
order services -> [Week2/e-commerce/src/orders/orders.service.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/e-commerce/src/orders/orders.service.ts)
payment: 
payment controller -> [Week2/e-commerce/src/payment/payment.controller.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/e-commerce/src/payment/payment.controller.ts)


## 6. Validation Assignment Create a post method for each DTO & throw errors
DTO Structure:
{
firstName: string; // 2-50 chars
lastName: string; // 2-50
chars email: string; // Valid email format
age: number; // 18-65
}
Tasks:
1. Implement class-validator decorators
2. Return simple error format:
Like { "message": "Validation failed", "errors": ["Invalid email"] }

user dto -> [Week2/validation/src/dto/user.dto.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/validation/src/dto/user.dto.ts)
user controller -> [Week2/validation/src/user/user.controller.ts](https://github.com/Sachinborade07/NestJS/blob/581d77b417b0d5947c60e32b229fa308c9550ace/Week2/validation/src/user/user.controller.ts)



