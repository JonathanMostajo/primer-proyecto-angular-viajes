import {Image} from '../../../shared/models/Shared'


export interface Header {
    img: Image;
    name: string[];
}

export interface Hero {
    img:Image;
    description: string;
}

export interface Main {
    title: string;
    img: Image;
    text: string;
}

export interface Gallery {
    title:string;
    imageGallery: Image[]
}
