import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { FamilyGroupService } from './family-group.service';
import { CreateFamilyGroupDto } from './dto/create-family-group.dto';
import { InviteMemberDto } from './dto/invite-member.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Family Group')
@Controller('family-group')
@UseGuards(JwtAuthGuard)
export class FamilyGroupController {
  constructor(private readonly familyGroupService: FamilyGroupService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Crear un grupo familiar o de colaboración' })
  async createFamilyGroup(@Body() dto: CreateFamilyGroupDto) {
    return this.familyGroupService.createFamilyGroup(dto);
  }

  @Post('/:id/invite')
  @ApiOperation({ summary: 'Invitar a otros usuarios al grupo' })
  async inviteMember(@Param('id') id: string, @Body() dto: InviteMemberDto) {
    return this.familyGroupService.inviteMember(+id, dto);
  }

  @Get('/:id/members')
  @ApiOperation({ summary: 'Ver los miembros de un grupo familiar' })
  async getGroupMembers(@Param('id') id: string) {
    return this.familyGroupService.getGroupMembers(+id);
  }
}
