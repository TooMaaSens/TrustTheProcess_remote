import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [WordsModule,
    ConfigModule.forRoot(),
    WinstonModule.forRoot({
      transports: new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          utilities.format.nestLike('MyApp', { prettyPrint: true }),
        ),
    }),
  }),
  MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
