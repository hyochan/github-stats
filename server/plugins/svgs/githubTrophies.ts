import type {Grade} from './assets';
import {LOWEST_TROPHIES_SCORE} from '..';
import type {PluginTrophy} from '../trophies';
import {renderTrophySvg} from './assets';

/* eslint-disable max-len */
export const renderGithubTrophies = (
  pluginTrophies: PluginTrophy[],
): string => {
  const filteredTrophies = pluginTrophies.filter(
    (el) => el.score >= LOWEST_TROPHIES_SCORE,
  );
  const height = filteredTrophies.length > 5 ? 248 : 124;

  return `<svg version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  fill="none"
  style="enable-background:new 0 0 640 ${height};"
  x="0px" y="0px" viewBox="0 0 620 ${height}">
  <style type="text/css">
      <![CDATA[
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=block");
      .backgroundColor {fill :#26272D;}
      ]]>
  </style>
  ${filteredTrophies.map((el, i) => {
    const getGrade = (score: number): Grade => {
      if (score >= 90) {
        return 'S';
      } else if (score >= 75) {
        return 'A+';
      } else if (score >= 60) {
        return 'A';
      } else if (score >= 40) {
        return 'A-';
      } else if (score >= 25) {
        return 'B+';
      } else if (score >= 10) {
        return 'B';
      }

      return 'B-';

      // } else if (score >= 20) {
      //   return 'C+';
      // } else if (score >= 10) {
      //   return 'C';
      // }

      // return 'C-';
    };

    return renderTrophySvg({
      index: i,
      title: el.type,
      subTitle: el.points.toLocaleString(),
      grade: getGrade(el.score as number),
      bar: el.score as number,
    });
  })}
</svg>`;
};
