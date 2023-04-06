import { Controller, Get, Post, Body, Param, Delete, HttpCode, UseInterceptors, Put, UploadedFile } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @ApiOperation({ summary: 'Admin yaratish' })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createAdminDto: CreateAdminDto, @UploadedFile() image: any) {
    return this.adminService.create(createAdminDto, image);
  }

  @ApiOperation({ summary: 'Adminlarni olish' })
  @Get('all')
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: 'Bitta Admin olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: 'Bitta Admin o`zgartirish' })
  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto, @UploadedFile() image: any) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Bitta Admin o`chirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
