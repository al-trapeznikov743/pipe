import {Controller, Get} from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  getRoot(): string {
    return 'Hello, this is the root route!';
  }
}