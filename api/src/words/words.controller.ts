import { Controller, Get } from '@nestjs/common';
import { json } from 'stream/consumers';

@Controller('words')
export class WordsController {
  @Get()
  getWords(): string {
    return JSON.stringify([
      {
        id: 1,
        name: `test`,
      },
      {
        id: 2,
        name: `jabko`,
      },
      {
        id: 2,
        name: `owoc`,
      },
    ]);
  }
}
