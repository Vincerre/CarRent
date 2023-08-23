/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Car } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Car[]> {
    return this.prismaService.car.findMany();
  }

  public getById(id: Car['id']): Promise<Car | null> {
    return this.prismaService.car.findUnique({
      where: { id },
    });
  }

  public deleteById(id: Car['id']): Promise<Car> {
    return this.prismaService.car.delete({
      where: { id },
    });
  }

  public create(
    carData: Omit<Car, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Car> {
    return this.prismaService.car.create({
      data: carData,
    });
  }

  public updateById(
    id: Car['id'],
    carData: Omit<Car, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Car> {
    return this.prismaService.car.update({
      where: { id },
      data: carData,
    });
  }

  public getAllExtended(): Promise<Car[]> {
    return this.prismaService.car.findMany({ include: { orders: true } });
  }
  public getByIdExtended(id: Car['id']): Promise<Car | null> {
    return this.prismaService.car.findUnique({
      where: { id },
      include: { orders: true },
    });
  }
}
