import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reservation } from "src/entities/Reservation.entity";
import { Room } from "src/entities/Room.entity";
import { User } from "src/entities/User.entity";
import { NotificationsService } from "../notifications/notifications.service";
import { SchedulerService } from "./scheduler.services";



@Module({
  imports: [TypeOrmModule.forFeature([Reservation, Room, User]), ScheduleModule.forRoot()],
    providers: [SchedulerService, NotificationsService],
  })
  export class SchedulerModule {}