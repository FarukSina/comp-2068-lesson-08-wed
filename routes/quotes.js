const { index, show, create, update, destroy, search } = require('../controllers/quotes');

module.exports = router => {
  router.get('/quotes', index);
  router.get('/quotes/search', search);
  router.get('/quotes/:id', show);
  router.post('/quotes', create);
  router.post('/quotes/update', update);
  router.post('/quotes/destroy', destroy);
};