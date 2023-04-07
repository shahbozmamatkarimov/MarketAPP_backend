import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../guards/jwt-auth.guard';
import { SelfGuard } from '../guards/user-self.guard';

@ApiTags("Likes")
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) { }
  @ApiOperation({ summary: 'Create new admin' })
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @ApiOperation({ summary: 'Get all admins' })
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @ApiOperation({ summary: 'Get admin by id' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update admin' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @ApiOperation({ summary: 'Delete admin' })
  @UseGuards(SelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
