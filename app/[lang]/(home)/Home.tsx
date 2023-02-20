import type {Locale} from '../../../src/i18n';
import type {ReactElement} from 'react';

type Props = {
  lang: Locale;
};

function Home({lang}: Props): ReactElement {
  return (
    <div
      className="
        align-self-stretch flex-1 bg-paper
        flex flex-col justify-start items-center overflow-scroll
      "
    >
      <p className="text-2xl">{lang}</p>
    </div>
  );
}

export default Home;
