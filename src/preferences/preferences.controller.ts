import { Controller, Get, Put, Body, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PreferencesService } from './preferences.service';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Preferences')
@ApiBearerAuth()
@Controller('preferences')
@UseGuards(JwtAuthGuard)
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Get()
  @ApiOperation({ summary: 'Ver preferencias actuales' })
  @ApiResponse({ status: 200, description: 'Preferencias obtenidas exitosamente.' })
  getPreferences(@Request() req) {
    return this.preferencesService.getPreferences(req.user.id);
  }

  @Put()
  @ApiOperation({ summary: 'Actualizar preferencias alimenticias y restricciones' })
  @ApiResponse({ status: 200, description: 'Preferencias actualizadas exitosamente.' })
  updatePreferences(@Body() updatePreferencesDto: UpdatePreferencesDto, @Request() req) {
    return this.preferencesService.updatePreferences(req.user.id, updatePreferencesDto);
  }
}
