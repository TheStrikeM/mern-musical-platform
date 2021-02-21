import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import { ObjectId } from "mongoose";


@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() dto: CreateTrackDto) {
        // Create track with dto in this.trackService
        return this.trackService.create(dto)
    }

    @Get()
    getAll() {
        // Get all tracks
        return this.trackService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        // Get one track
        return this.trackService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        // Delete track
        return this.trackService.delete(id)
    }


}