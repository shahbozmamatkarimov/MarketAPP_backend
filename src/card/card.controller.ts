import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { SelfGuard } from '../guards/user-self.guard';

@ApiTags("Card")
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}
 
  @ApiOperation({ summary: 'Create new card' })
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }
  
  @ApiOperation({ summary: 'Get all cards' })
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.cardService.findAll();
  }
  
  @ApiOperation({ summary: 'Get card by id' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(+id);
  }
  
  @ApiOperation({ summary: 'Update card' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(+id, updateCardDto);
  }
  
  @ApiOperation({ summary: 'Delete card' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardService.remove(+id);
  }
}
