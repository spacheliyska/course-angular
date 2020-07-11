import { Injectable } from '@angular/core';
import { Post } from './core/Post';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  static nextId = 1;

  private publications: Post[] = [];

  constructor() {}

  add(p: Post): Promise<Post> {
    p.id = PostListService.nextId++;
    this.publications.push(p);
    return Promise.resolve(p);
  }

  findAll() {
    return Promise.resolve(this.publications);
  }

  update(p: Post): Promise<Post>{
    const index = this.publications.findIndex(pr => pr.id === p.id);
    if (index < 0) {
      return Promise.reject(new Error(`Publication not found Id: ${p.id}`));
    }
    this.publications[index] = p;
    return Promise.resolve(p);
  }

  remove(publicationId: number): Promise<Post>{
    const index = this.publications.findIndex(pr => pr.id === publicationId);
    if (index < 0) {
      return Promise.reject(new Error(`Publication not found Id: ${publicationId}`));
    }
    const p = this.publications.splice(index, 1);
    return Promise.resolve(p[0]);
  }
}
