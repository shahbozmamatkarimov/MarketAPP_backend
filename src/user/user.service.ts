import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.userRepository.findByPk(id, {include: {all: true}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto, {where: {id}});
  }

  remove(id: number) {
    return this.userRepository.destroy({where: {id}});
  }
}
