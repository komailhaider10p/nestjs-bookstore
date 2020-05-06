import { ApiProperty } from '@nestjs/swagger';
export class CreateBookDTO {
    readonly id: number;
    @ApiProperty()
    readonly title: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly author: string;
}