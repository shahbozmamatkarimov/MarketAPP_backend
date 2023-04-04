import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private readonly productRepository: typeof Product) { }

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  findAll() {
    return this.productRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(updateProductDto, { where: { id } });;
  }

  remove(id: number) {
    return this.productRepository.destroy({ where: { id } });
  }
}
