import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductType } from './entities/product_type.entity';

@Injectable()
export class ProductTypeService {
  constructor(@InjectModel(ProductType) private readonly productTypeRepository: typeof ProductType) { }

  create(createProductTypeDto: CreateProductTypeDto) {
    return this.productTypeRepository.create(createProductTypeDto);
  }

  findAll() {
    return this.productTypeRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productTypeRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return this.productTypeRepository.update(updateProductTypeDto, { where: { id } });
  }

  remove(id: number) {
    return this.productTypeRepository.destroy({ where: { id } });
  }
}
