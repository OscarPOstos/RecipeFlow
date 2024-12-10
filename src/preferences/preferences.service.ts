import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PreferencesService {
  private preferences: Record<string, any> = {}; // Simulación de base de datos en memoria

  getPreferences(userId: string) {
    const preferences = this.preferences[userId];
    if (!preferences) {
      throw new NotFoundException(`No preferences found for user ID ${userId}`);
    }
    return preferences;
  }

  updatePreferences(userId: string, updatePreferencesDto: any) {
    this.preferences[userId] = {
      ...this.preferences[userId],
      ...updatePreferencesDto,
    };
    return this.preferences[userId];
  }
}
