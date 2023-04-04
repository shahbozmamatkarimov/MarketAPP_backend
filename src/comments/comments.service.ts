import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comments) private readonly commentRepository: typeof Comments) { }
  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.create(createCommentDto);
  }

  findAll() {
    return this.commentRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.commentRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(updateCommentDto, { where: { id } });;
  }

  remove(id: number) {
    return this.commentRepository.destroy({ where: { id } });
  }
}
