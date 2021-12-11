export class PackageTestError extends Error {
	constructor(err: { message: string; stack: string }) {
		super(`Failed to load config ${err.message} ${err.stack}`);
	}
}
