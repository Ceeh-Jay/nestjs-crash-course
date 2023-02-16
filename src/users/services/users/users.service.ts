import { CreateUserType } from './../../../utils/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Chiemeka', email: 'chiemekaelumeziem@gmail.com' },
    { username: 'Chioma', email: 'ciomadia@gmail.com' },
    { username: 'Soludo', email: 'ccsoludo@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return {id, username: 'Chiemeka', email: 'Chiemekaelumeziem@gmail.com'}
    // return null;
  }
}
