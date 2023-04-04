import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("product_type")
@Controller('product-type')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) { }

  @ApiOperation({ summary: 'Create new product type' })
  @Post()
  create(@Body() createProductTypeDto: CreateProductTypeDto) {
    return this.productTypeService.create(createProductTypeDto);
  }

  @ApiOperation({ summary: 'Get all product types' })
  @Get()
  findAll() {
    return this.productTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get product type by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update product type' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTypeDto: UpdateProductTypeDto) {
    return this.productTypeService.update(+id, updateProductTypeDto);
  }

  @ApiOperation({ summary: 'Delete product type' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTypeService.remove(+id);
  }
}
