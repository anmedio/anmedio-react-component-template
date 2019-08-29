const devDomain = 'https://dev.domain/api/v1';
const prodDomain = '/api/v1';

const devRoutes = {
  fakeData: {
    someRequest: `${devDomain}/go/?debug=1`,
  },
};

const prodRoutes = {
  fakeData: {
    someRequest: `${prodDomain}/go/`,
  },
};

const routes = process.env.NODE_ENV === 'development' ? devRoutes : prodRoutes;

export default routes;
