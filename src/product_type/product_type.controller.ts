import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { SelfGuard } from '../guards/user-self.guard';

@ApiTags("product_type")
@Controller('product-type')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) { }

  @ApiOperation({ summary: 'Create new product type' })
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createProductTypeDto: CreateProductTypeDto) {
    return this.productTypeService.create(createProductTypeDto);
  }

  @ApiOperation({ summary: 'Get all product types' })
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.productTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get product type by id' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update product type' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTypeDto: UpdateProductTypeDto) {
    return this.productTypeService.update(+id, updateProductTypeDto);
  }

  @ApiOperation({ summary: 'Delete product type' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTypeService.remove(+id);
  }
}
