const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = () => {
  const buildUrl = () => {
    let url = new URL('https://api.pexels.com/v1/search');
    url.search = new URLSearchParams({
      // TODO: change to a variable
      query: 'nature',
      orientation: 'square',
      size: 'small',
      // TODO: change to a variable
      per_page: 2,
      // spice things/pages up when users already finish game
      page: getRandomPage(),
    });
    return url;
  };

  // Fetch request to API
  fetch(buildUrl(), {
    headers: {
      Authorization: process.env.REACT_APP_AUTH_KEY,
    },
  });
};

export default useGetImages;
