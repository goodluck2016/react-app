import React from 'react';
import styles from './index.less';
import SearchInput from './SearchInput/index';
import Carousel from './Carousel/index';

export default () => {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
    </div>
  );
};
