import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import {
  LinkTitle,
  CategoryPreviewContainer,
  PreView,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <LinkTitle to={title}>{title.toUpperCase()}</LinkTitle>
      </h2>
      <PreView>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreView>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
