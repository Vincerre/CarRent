import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get('/')
  getAll(): any {
    return this.carsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const car = await this.carsService.getById(id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  @Get('/extended')
  getAllExtended(): any {
    return this.carsService.getAllExtended();
  }

  @Get('/extended/:id')
  async getExtendedById(@Param('id', new ParseUUIDPipe()) id: string) {
    const car = await this.carsService.getByIdExtended(id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.carsService.getById(id)))
      throw new NotFoundException('Car not found');
    this.carsService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() carData: CreateCarDTO) {
    return this.carsService.create(carData);
  }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() carData: UpdateCarDTO,
  ) {
    if (!(await this.carsService.getById(id)))
      throw new NotFoundException('Car not found');

    await this.carsService.updateById(id, carData);
    return { success: true };
  }
}
