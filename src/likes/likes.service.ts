import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Like) private readonly likeRepository: typeof Like) { }

  create(createLikeDto: CreateLikeDto) {
    return this.likeRepository.create(createLikeDto);
  }

  findAll() {
    return this.likeRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.likeRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return this.likeRepository.update(updateLikeDto, { where: { id } });;
  }

  remove(id: number) {
    return this.likeRepository.destroy({ where: { id } });
  }
}
