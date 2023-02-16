import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SecondMiddlewreMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Our second middleware');
    next();
  }
}
