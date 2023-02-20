import type {Locale} from '../../../src/i18n';
import type {ReactElement} from 'react';

// const Container = styled.div`
//   align-self: stretch;
//   background: ${(props) => props.theme.background};

//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   overflow: scroll;

//   @media ${device.mobileL} {
//     padding: 0px;
//   }
// `;

type Props = {
  lang: Locale;
};

function Home({lang}: Props): ReactElement {
  return (
    <div
      className="align-self-stretch bg-paper flex-1
      flex flex-col justify-start items-center overflow-scroll
      dark:bg-paper-dark"
    >
      <p className="text-2xl">{lang}</p>
    </div>
  );
}

export default Home;
