import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Comment")
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @ApiOperation({ summary: 'Create new comment' })
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @ApiOperation({ summary: 'Get all comments' })
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @ApiOperation({ summary: 'Get comment by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update comment' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Delete comment' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
