import {Module} from "@nestjs/common"
import {TrackModule} from "./track/track.module"
import {MongooseModule} from '@nestjs/mongoose'

const db_connect = "mongodb+srv://admin:admin@cluster0.imajd.mongodb.net/mern-music-platform?retryWrites=true&w=majority"

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot(db_connect)
    ]
})
export class AppModule {}