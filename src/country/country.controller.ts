import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Country")
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }
  
  @ApiOperation({ summary: 'Create new country' })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @ApiOperation({ summary: 'Get all countrys' })
  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @ApiOperation({ summary: 'Get country by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update country' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }

  @ApiOperation({ summary: 'Delete country' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
