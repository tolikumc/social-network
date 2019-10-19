import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator
} from './profile-reducer';

const state = {
  posts: [
    { postText: 'Hi, how are you?', id: '123412' },
    { postText: 'Its my first post', id: '23423sad' }
  ]
};

it('new post should be added', () => {
  // 1.test data
  const action = addPostActionCreator('some text');

  // 2.action
  let newState = profileReducer(state, action);
  //3. expectation

  expect(newState.posts.length).toBe(3);
});

it('text should be correct', () => {
  // 1.test data
  const action = addPostActionCreator('some text');

  // 2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts[2].postText).toBe('some text');
});


it('after deleted post length posts should be decrement', () => {
  // 1.test data
  const action = deletePostActionCreator(123412);

  // 2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(2);
});

it('posts should be decrement if postId incorrect', () => {
  // 1.test data
  const action = deletePostActionCreator(1);

  // 2.action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(2);
});
