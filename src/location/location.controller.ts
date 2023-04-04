import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Loaction")
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) { }

  @ApiOperation({ summary: 'Create new location' })
  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @ApiOperation({ summary: 'Get all locations' })
  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @ApiOperation({ summary: 'Get location by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update location' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @ApiOperation({ summary: 'Delete location' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
