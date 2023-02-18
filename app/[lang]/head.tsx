import type {ReactElement} from 'react';

export default function Head(): ReactElement {
  return (
    <>
      <title>doobooio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="All stats for developers" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
