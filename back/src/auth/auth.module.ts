import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../users/user.entity';  // Import de l'entité User

@Module({
  imports: [
    TypeOrmModule.forFeature([User])  // Ajout de l'entité User dans AuthModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],  // Permet d'utiliser AuthService dans d'autres modules
})
export class AuthModule {}
