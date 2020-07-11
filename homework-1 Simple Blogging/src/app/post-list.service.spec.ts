import { TestBed } from '@angular/core/testing';

import { PostListService } from './post-list.service';

describe('PublicationListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostListService = TestBed.get(PostListService);
    expect(service).toBeTruthy();
  });
});
