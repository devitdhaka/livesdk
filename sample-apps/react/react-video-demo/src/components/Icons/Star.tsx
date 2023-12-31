import { FC } from 'react';
import classnames from 'classnames';

import { Props } from './types';

import styles from './Icons.module.css';

export const Star: FC<Props> = ({ className }) => {
  const rootClassName = classnames(styles.root, className);
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className={rootClassName}
    >
      <path
        d="M7.61926 0.927049C7.91861 0.00573802 9.22202 0.00574017 9.52137 0.927051L10.8155 4.90983C10.9493 5.32185 11.3333 5.60081 11.7665 5.60081H15.9543C16.923 5.60081 17.3257 6.84043 16.542 7.40983L13.1541 9.87132C12.8036 10.126 12.6569 10.5773 12.7908 10.9894L14.0849 14.9721C14.3842 15.8934 13.3298 16.6596 12.5461 16.0902L9.1581 13.6287C8.80761 13.374 8.33301 13.374 7.98253 13.6287L4.59457 16.0902C3.81086 16.6596 2.75638 15.8934 3.05573 14.9721L4.34981 10.9894C4.48369 10.5773 4.33703 10.126 3.98654 9.87132L0.598587 7.40983C-0.185127 6.84043 0.217651 5.60081 1.18637 5.60081H5.37412C5.80734 5.60081 6.1913 5.32185 6.32517 4.90983L7.61926 0.927049Z"
        fill="currentColor"
      />
    </svg>
  );
};
