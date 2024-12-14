import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Statistics')
@ApiBearerAuth()
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Obtener estadísticas de valor nutricional y ahorro/desperdicio.' })
  @ApiResponse({
    status: 200,
    description: 'Estadísticas obtenidas exitosamente.',
    schema: {
      example: {
        userId: 'user-id',
        nutritionalStats: {
          calories: 12000,
          proteins: 560,
          carbs: 1400,
          fats: 320,
        },
        savings: {
          foodWaste: '2kg',
          estimatedCost: '$50',
        },
      },
    },
  })
  @Get()
  async getStatistics(@Request() req) {
    const userId = req.user.id;
    return await this.statisticsService.getStatistics(userId);
  }
}