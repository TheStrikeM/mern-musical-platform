import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, ObjectId } from 'mongoose'
import * as mongo from 'mongoose'
import {Comment} from "./comment.schema"

export type TrackDocument = Track & Document

@Schema()
export class Track {
    @Prop()
    name: string;
    @Prop()
    artist: string;
    @Prop()
    text: string;
    @Prop()
    listens: number;
    @Prop()
    picture: string;
    @Prop()
    audio: string;

    @Prop({type: [{type: mongo.Schema.Types.ObjectId, ref: 'Comment'}]})
    comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);