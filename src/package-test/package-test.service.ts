import { Injectable } from '@nestjs/common';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user';

@Injectable()
export class PackageTestService {
	constructor(private readonly userService: UserService) {}

	public testFunction(): UserDto {
		return this.userService.userServiceFunction();
	}

	public testFunction2(): string {
		return 'Test function 2 from package 2';
	}
}
