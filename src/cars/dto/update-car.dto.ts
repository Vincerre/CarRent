/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';

import { IsNotEmpty, IsString, Min, IsInt } from 'class-validator';

export class UpdateCarDTO {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  gearbox: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  seats: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  price: number;

  @IsNotEmpty()
  airCon: boolean;
}
