import { Injectable } from '@nestjs/common';

@Injectable()
export class StatisticsService {
  async getStatistics(userId: string) {
    // Mock data (reemplazar con lógica real de la base de datos y APIs externas)
    const nutritionalStats = {
      calories: 12000, // Total de calorías consumidas en la semana
      proteins: 560,   // Total de proteínas (g)
      carbs: 1400,     // Total de carbohidratos (g)
      fats: 320,       // Total de grasas (g)
    };

    const savings = {
      foodWaste: '2kg',      // Alimento desperdiciado
      estimatedCost: '$50',  // Ahorro estimado en alimentos
    };

    return {
      userId,
      nutritionalStats,
      savings,
    };
  }
}