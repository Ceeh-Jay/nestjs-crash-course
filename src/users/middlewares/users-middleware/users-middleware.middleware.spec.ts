import { UsersMiddlewareMiddleware } from './users-middleware.middleware';

describe('UsersMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new UsersMiddlewareMiddleware()).toBeDefined();
  });
});
