import { IsNotEmpty, Length } from 'class-validator'

export class CreateDeviceDTO {
  @Length(3, 20)
  @IsNotEmpty()
    name: string

  @Length(3, 20)
  @IsNotEmpty()
    brand: string
}
