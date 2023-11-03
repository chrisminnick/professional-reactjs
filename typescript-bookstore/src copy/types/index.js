import PropTypes from 'prop-types';

export const productType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}).isRequired;

export const productsType = PropTypes.arrayOf(productType);
