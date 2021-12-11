import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
	public userServiceFunction(): UserDto {
		return {
			id: 1,
			name: 'Hello from user service',
		};
	}
}
