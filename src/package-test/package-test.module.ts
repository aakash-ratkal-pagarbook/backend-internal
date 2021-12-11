import { Module, Global } from '@nestjs/common';
import { UserModule } from '../user';
import { PackageTestService } from './package-test.service';

@Global()
@Module({
	imports: [UserModule],
	providers: [PackageTestService],
	exports: [PackageTestService],
})
export class PackageTestModule {}
