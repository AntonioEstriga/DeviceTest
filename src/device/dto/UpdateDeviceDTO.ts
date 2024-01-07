import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator"

export class UpdateDeviceDTO {
  @Length(3, 20)
  @IsOptional()
  name: string

  @Length(3, 20)
  @IsOptional()
  brand: string

  @IsInt()
  @IsNotEmpty()
  id:number;
}