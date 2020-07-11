import { Component, OnInit } from '@angular/core';
import { Post } from '../core/Post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostListService } from '../post-list.service';
import { PostStatus } from '../core/PostStatus';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required),
    imageURL: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
}); 

updatePostForm = new FormGroup({
  title: new FormControl('', Validators.required),
  author: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  tags: new FormControl('', Validators.required),
  imageURL: new FormControl('', Validators.required),
  status: new FormControl('', Validators.required),
}); 

  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postListService.findAll().then( result => {
      this.posts = result});
  }

  onFormSubmit(): void {
    let newPost = new Post();
    newPost.publicationDate = new Date().toLocaleString();
    newPost.title = this.postForm.get('title').value;
    newPost.author = this.postForm.get('author').value;
    newPost.description = this.postForm.get('description').value;
    newPost.tags = this.postForm.get('tags').value;
    newPost.imageURL = this.postForm.get('imageURL').value;
    newPost.status = this.postForm.get('status').value;

    this.postForm.reset();

    this.postListService.add(newPost);
    this.postListService.findAll().then( result => {
      this.posts = result});
  } 
  
  deleteElemWithIndex(publication: Post){
    this.postListService.remove(publication.id);
    this.postListService.findAll().then( result => {
      this.posts = result});
  }

  updateElemWIthIndex(publication: Post){
    this.postListService.update(publication);
    this.postListService.findAll().then( result => {
      this.posts = result});
  }

  update(publication: Post){
    publication.toUpdate = true;
  }

  onUpdateFormSubmit(publication: Post){
    publication.publicationDate = new Date().toLocaleString();
    publication.title = this.updatePostForm.get('title').value;
    publication.author = this.updatePostForm.get('author').value;
    publication.description = this.updatePostForm.get('description').value;
    publication.tags = this.updatePostForm.get('tags').value;
    publication.imageURL = this.updatePostForm.get('imageURL').value;
    publication.status = this.updatePostForm.get('status').value;

    this.updateElemWIthIndex(publication);

    this.postForm.reset();
    publication.toUpdate = false;
  }
}
