import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Region")
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) { }

  @ApiOperation({ summary: 'Create new region' })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: 'Get all regions' })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: 'Get region by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update region' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: 'Delete region' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
