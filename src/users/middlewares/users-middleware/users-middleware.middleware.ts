import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example middleware');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;

    if (!authorization)
    throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
    if (authorization === 'sddfgrghhyh') next();
    else
    throw new HttpException(
      'Invalid Authorization Token',
      HttpStatus.FORBIDDEN,
    )
    next();
  }
}
