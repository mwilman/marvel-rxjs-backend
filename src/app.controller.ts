import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('heroes')
  gerHeroes(@Query("name") search: string) {
    return this.appService.getHeroes(search);
  }
}
