/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';

import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  Min,
  Max,
  IsInt,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  carId: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  lastName: string;

  @IsString()
  message: string;

  @Min(100000000)
  @Max(999999999)
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  phone: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  street: string;

  @Min(1)
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  days: number;

  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @Min(1)
  totalCost: number;
}
