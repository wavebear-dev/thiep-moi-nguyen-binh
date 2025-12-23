import { Controller, Get, Post, Body, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHome() {
    return {
      title: 'Thiep Cuoi Thanh Bình và Tất Thành',
    };
  }

  @Get(':name')
  @Render('index')
  getHello(@Param('name') name: string) {
    return {
      title: 'Thiep Cuoi Thanh Bình và Tất Thành',
      name,
    };
  }

  @Post('join-event')
  async joinEvent(@Body() data: any) {
    console.log('Guest data:', data);
    return {
      success: true,
      message: 'Cảm ơn bạn đã đăng ký tham dự!',
      data: data,
    };
  }
}
