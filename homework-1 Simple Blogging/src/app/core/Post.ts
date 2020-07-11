import { PostStatus } from './PostStatus';

export class Post {
    id: number;
    publicationDate: string;
    title: string;
    author: string;
    description: string;
    tags: string[];
    imageURL: string;
    status: PostStatus;

    toUpdate?: boolean = false;
}