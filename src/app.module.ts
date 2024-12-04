import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';
import { MealPlansModule } from './meal-plans/meal-plans.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env', // Ruta del archivo .env
  }),TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      autoLoadEntities: true,
      synchronize: configService.get<boolean>('DB_SYNCHRONIZE'), // false en producción
    }),
  }), AuthModule, UserModule, RecipesModule, MealPlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
