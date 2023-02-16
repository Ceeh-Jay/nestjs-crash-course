import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { SecondMiddlewreMiddleware } from './middlewares/second-middlewre/second-middlewre.middleware';
import { UsersMiddlewareMiddleware } from './middlewares/users-middleware/users-middleware.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddlewareMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
      
    },
    //this is an array so you can add more route:
    {
      path: 'user/:id',
      method: RequestMethod.GET,
    }
    ).apply(SecondMiddlewreMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
      
    },
    //this is an array so you can add more route:
    {
      path: 'user/:id',
      method: RequestMethod.GET,
    });
  }
}
