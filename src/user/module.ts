import { Module, Global } from '@nestjs/common';
import { UserService } from './service';

@Global()
@Module({
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
