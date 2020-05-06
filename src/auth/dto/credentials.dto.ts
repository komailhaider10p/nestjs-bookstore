import { ApiProperty } from '@nestjs/swagger';
export class CredentialsDTO {
    @ApiProperty()
    readonly username: string;
    @ApiProperty()
    readonly password: string;
}