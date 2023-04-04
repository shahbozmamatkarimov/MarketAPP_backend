import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Card")
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
 
  @ApiOperation({ summary: 'Create new card' })
  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }
  
  @ApiOperation({ summary: 'Get all cards' })
  @Get()
  findAll() {
    return this.cardService.findAll();
  }
  
  @ApiOperation({ summary: 'Get card by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(+id);
  }
  
  @ApiOperation({ summary: 'Update card' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }
  
  @ApiOperation({ summary: 'Delete card' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
