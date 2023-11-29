import { FC } from 'react';
import classnames from 'classnames';

import { Props } from './types';

import styles from './Icons.module.css';

export const MicMuted: FC<Props> = ({ className }) => {
  const rootClassName = classnames(styles.root, className);
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={rootClassName}
    >
      <path
        d="M18.65 13.4414V6.66016C18.65 4.65 16.975 3.02734 14.9 3.02734C12.975 3.02734 11.4125 4.43203 11.2 6.23633L18.65 13.4414ZM22.5 13.9258C21.9875 13.9258 21.5375 14.2891 21.4625 14.7855C21.4 15.173 21.3125 15.5605 21.1875 15.9117L22.775 17.4496C23.15 16.723 23.425 15.9359 23.5625 15.1004C23.65 14.4828 23.15 13.9258 22.5 13.9258ZM4.5375 4.91641C4.05 5.38867 4.05 6.15156 4.5375 6.62383L11.15 13.0418V13.5625C11.15 15.0035 11.9 16.3719 13.1875 17.0863C14.125 17.607 14.95 17.6191 15.7125 17.4617L17.7875 19.4719C16.9 19.8715 15.9125 20.1016 14.9 20.1016C11.725 20.1016 8.8 17.9582 8.3375 14.7855C8.2625 14.2891 7.8125 13.9258 7.3 13.9258C6.65 13.9258 6.15 14.4828 6.2375 15.1004C6.8125 18.6848 9.9375 21.5184 13.65 22.0633V24.8242C13.65 25.4902 14.2125 26.0352 14.9 26.0352C15.5875 26.0352 16.15 25.4902 16.15 24.8242V22.0633C17.2875 21.9059 18.3625 21.5184 19.3375 20.9734L23.7 25.1996C24.1875 25.6719 24.975 25.6719 25.4625 25.1996C25.95 24.7273 25.95 23.9645 25.4625 23.4922L6.3 4.91641C5.8125 4.44414 5.025 4.44414 4.5375 4.91641Z"
        fill="currentColor"
      />
    </svg>
  );
};