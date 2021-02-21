import {Body, Controller, Get, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";


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
        return 'Привет!'
    }

    getOne() {

    }

    delete() {

    }

}