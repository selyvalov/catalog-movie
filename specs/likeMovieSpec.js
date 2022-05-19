import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the movie has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });
});
