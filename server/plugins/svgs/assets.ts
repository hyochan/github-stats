import type {DoobooStatsResponse} from '../../services/githubService';
import type {TopLanguage} from '../topLanguages';

/* eslint-disable max-len */

type GithubStatsSvgType = {
  stats: DoobooStatsResponse;
  tierSvg: string;
  login: string;
  avgScore: number;
  tierName: string;
  peopleAxis: string;
  treeAxis: string;
  fireAxis: string;
  earthAxis: string;
  waterAxis: string;
  goldAxis: string;
};

export const renderGithubStatsSvg = ({
  login,
  tierName,
  avgScore,
  tierSvg,
  stats,
  earthAxis,
  fireAxis,
  goldAxis,
  peopleAxis,
  treeAxis,
  waterAxis,
}: GithubStatsSvgType): string => `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 350 144" style="enable-background:new 0 0 350 144;" xml:space="preserve">
  <style type="text/css">
    <![CDATA[
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=block");
    .backgroundColor{fill:#26272D;}
    .backgroundColorLine{stroke:#26272D;}
    .backgroundInnerLineOpacity{opacity:1;}
    .statsBaseLineStyle{fill:none; stroke:#FFFFFF; stroke-width:0.5; opacity:0.2;}
    .statsBaseIconStyle{fill:#FFFFFF; opacity:0.2;}
    .currentStatsShapeStyle{opacity:0.8; stroke:#FFFFFF; stroke-width:1;}
    .currentStatsLoadingStyle{opacity:0.8; stroke:#FFFFFF; stroke-width:1;}
    .textGithubIDStyle{font-family: "Inter", Sans-Serif;font-weight: 700;font-size: 12px; color: #FFFFFF;}
    .textCurrentAverageStyle{font-family: "Inter", Sans-Serif;font-weight: 700;font-size: 12px; fill: #FFFFFF;}
    .textCurrentStatsNumberStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 9px; fill: #FFFFFF;}
    .textSubtitleStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 12px; color: #646569;}
    .textLabelStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 10px; fill: #FFFFFF; }
    .textLabelSubStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 10px; fill: #FFFFFF; opacity:0.5;}
    .textInfoStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 7px; fill: #FFFFFF; opacity:0.3;}
    .textLangLabelStyle{fill: #FFFFFF; opacity:0.3; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 7px;}
    .textLangStyle{margin-right: 8px; color:  #FFFFFF; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot1{margin-right: 8px; color:  #FFFFFF; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot2{margin-right: 8px; color:  #96979B; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot3{margin-right: 8px; color:  #6F7073; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot4{margin-right: 8px; color:  #4D4E51; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot5{margin-right: 8px; color:  #3D3D41; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot6{margin-right: 8px; color:  #36363A; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangPercent{margin-right: 8px; color: #646569; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px; }
    .langType1{fill: #FFFFFF; }
    .langType2{fill: #6F7073;}
    .langType3{fill: #4D4E51;}
    .langType4{fill: #3D3D41;}
    .langType5{fill: #36363A;}
    .langType6{fill: #2E2F32;}
    ul{line-height: 1.75em; list-style: none; margin: 0; padding: 0;}
    li{display: inline-flex; margin: 0; padding: 0; align-items: left; flex-wrap: nowrap;}
    ]]>
  </style>
  <g id="background">
    <rect id="backgroundBox" width="350" height="144" rx="8" class = "backgroundColor"/>
    <rect x="4.5" y="4.5" width="341" height="135" rx="7.5" style="fill:none;stroke:url(#backgroundInnerLineGradient);stroke-width:0.5;stroke-miterlimit:10;"/>
    <linearGradient id="backgroundInnerLineGradient" gradientUnits="userSpaceOnUse" x1="3.75" y1="100" x2="346.25" y2="100">
      <stop offset="0" style="stop-color:#AE7BFA"/>
      <stop offset="0.5219" style="stop-color:#6489E7"/>
      <stop offset="1" style="stop-color:#78EDFD"/>
    </linearGradient>
  </g>
  <g id="statsBaseLines" opacity="0">
    <polygon id="0p3xBase" class="statsBaseLineStyle" points="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25"/>
    <polygon id="10p4x" class="statsBaseLineStyle" points="278,62 286.67,67 286.67,77 278,82 269.33,77 269.33,67"/>
    <polygon id="20p5x" class="statsBaseLineStyle" points="278,59.5 288.85,65.75 288.85,78.25 278,84.5 267.15,78.25 267.15,65.75"/>
    <polygon id="30p6x" class="statsBaseLineStyle" points="278,57 291.02,64.5 291.02,79.5 278,87 264.99,79.5 264.99,64.5"/>
    <polygon id="40p7x" class="statsBaseLineStyle" points="278,54.5 293.18,63.25 293.18,80.75 278,89.5 262.82,80.75 262.82,63.25"/>
    <polygon id="50p8x" class="statsBaseLineStyle" points="278,52 295.35,62 295.35,82 278,92 260.65,82 260.65,62"/>
    <polygon id="60p9x" class="statsBaseLineStyle" points="278,49.5 297.52,60.75 297.52,83.25 278,94.5 258.48,83.25 258.48,60.75"/>
    <polygon id="70p10x" class="statsBaseLineStyle" points="278,47 299.69,59.5 299.69,84.5 278,97 256.31,84.5 256.31,59.5"/>
    <polygon id="80p11x" class="statsBaseLineStyle" points="278,44.5 301.86,58.25 301.86,85.75 278,99.5 254.15,85.75 254.15,58.25"/>
    <polygon id="90p12x" class="statsBaseLineStyle" points="278,42 304.02,57 304.02,87 278,102 251.98,87 251.98,57"/>
    <polygon id="100p13xFull" class="statsBaseLineStyle" points="278,39.5 306.2,55.75 306.2,88.25 278,104.5 249.81,88.25 249.81,55.75"/>
    <polygon id="110p14xOuter" class="statsBaseLineStyle" points="278,37 308.36,54.5 308.36,89.5 278,107 247.63,89.5 247.63,54.5"/>
  </g>
  <g id="statsBaseIcons" opacity="0">
    <g id="iconType1People">
      <g>
        <defs>
          <rect id="iconType1Box" x="266" y="23" width="12" height="12"/>
        </defs>
        <clipPath id="iconType1Clipper">
          <use xlink:href="#iconType1Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType1Clipper);">
          <path class="statsBaseIconStyle" d="M276.33,30.25l-4.19,2.61v-5.23L276.33,30.25z"/>
          <path class="statsBaseIconStyle" d="M267.57,31.95l3.51-2.19v4.38L267.57,31.95z"/>
          <path class="statsBaseIconStyle" d="M273.54,27.12c0.78,0,1.42-0.63,1.42-1.42c0-0.78-0.63-1.42-1.42-1.42c-0.79,0-1.42,0.63-1.42,1.42C272.12,26.49,272.76,27.12,273.54,27.12z"/>
          <path class="statsBaseIconStyle" d="M269.86,29.24c0.67,0,1.22-0.55,1.22-1.22s-0.55-1.22-1.22-1.22c-0.67,0-1.22,0.55-1.22,1.22S269.19,29.24,269.86,29.24z"/>
        </g>
      </g>
    </g>
    <g id="iconType2Tree">
      <g>
        <defs>
          <rect id="iconType2Box" x="310" y="48" width="12" height="12"/>
        </defs>
        <clipPath id="iconType2Clipper">
          <use xlink:href="#iconType2Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType2Clipper);">
          <path class="statsBaseIconStyle" d="M316,54.86l2.55,4.1h-5.11L316,54.86z"/>
          <path class="statsBaseIconStyle" d="M318.15,56.23c0.73-0.47,1.29-1.16,1.6-1.97c0.3-0.81,0.33-1.7,0.09-2.54c-0.25-0.83-0.76-1.56-1.46-2.08c-0.7-0.52-1.55-0.79-2.42-0.78c-0.87,0.01-1.71,0.3-2.4,0.83s-1.19,1.27-1.42,2.11c-0.23,0.84-0.18,1.73,0.14,2.54c0.32,0.81,0.89,1.49,1.64,1.94l2.13-3.42L318.15,56.23z"/>
        </g>
      </g>
    </g>
    <g id="iconType3Fire">
      <g>
        <defs>
          <rect id="iconType3Box" x="310" y="83.5" width="12" height="12"/>
        </defs>
        <clipPath id="iconType3Clipper">
          <use xlink:href="#iconType3Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType3Clipper);">
          <path class="statsBaseIconStyle" d="M312.99,86.33l6.77,5.09l-3.71,2.98l-3.71-2.98L312.99,86.33z"/>
          <path class="statsBaseIconStyle" d="M315.5,84.31l1.11,1.74l-1.11,0.89l-1.11-0.89L315.5,84.31z"/>
          <path class="statsBaseIconStyle" d="M319.1,85.45l-2.69,2.2l3.34,2.52L319.1,85.45z"/>
        </g>
      </g>
    </g>
    <g id="icontype4Soil">
      <g>
        <defs>
          <rect id="icontype4Box" x="266" y="109" width="12" height="12"/>
        </defs>
        <clipPath id="icontype4Clipper">
          <use xlink:href="#icontype4Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#icontype4Clipper);">
          <path class="statsBaseIconStyle" d="M272.18,116.98c-0.79-0.35-1.55-0.35-2.3,0.12c-0.31,0.2-0.62,0.41-0.92,0.62c-0.15,0.1-0.3,0.21-0.45,0.31c0.41,0.47,0.91,0.86,1.48,1.13c0.56,0.27,1.18,0.43,1.8,0.46c0.63,0.03,1.25-0.07,1.84-0.29c0.59-0.22,1.12-0.56,1.57-0.99c-0.48-0.12-0.95-0.29-1.38-0.52C273.28,117.52,272.74,117.23,272.18,116.98z"/>
          <path class="statsBaseIconStyle" d="M270.26,111.88c0.85,0,1.64,0.25,2.42,0.54c1.25,0.46,2.49,0.97,3.77,1.34c-0.24-0.84-0.7-1.6-1.35-2.18c-0.65-0.59-1.45-0.98-2.31-1.12c-0.86-0.15-1.74-0.05-2.55,0.28s-1.5,0.89-2.01,1.6l0.05-0.02C268.92,112.07,269.57,111.88,270.26,111.88z"/>
          <path class="statsBaseIconStyle" d="M273.67,113.92c-0.88-0.33-1.75-0.71-2.69-0.87c-0.55-0.1-1.12-0.09-1.67,0.05c-0.6,0.16-1.19,0.38-1.75,0.64c-0.33,1.16-0.19,2.4,0.38,3.46c0.12-0.07,0.25-0.15,0.36-0.23c0.51-0.34,0.99-0.72,1.52-1.01c0.56-0.3,1.14-0.42,1.76-0.27c0.7,0.17,1.33,0.52,1.97,0.87c0.76,0.41,1.55,0.75,2.42,0.8c0.42-0.71,0.64-1.52,0.64-2.35c0-0.03,0-0.06,0-0.08c-0.41-0.11-0.81-0.22-1.2-0.36C274.83,114.35,274.25,114.14,273.67,113.92z"/>
        </g>
      </g>
    </g>
    <g id="iconType5Gold">
      <g>
        <defs>
          <rect id="iconType5Box" x="219" y="83.5" width="12" height="12"/>
        </defs>
        <clipPath id="iconType5Clipper">
          <use xlink:href="#iconType5Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType5Clipper);">
          <path class="statsBaseIconStyle" d="M221.19,89.37l3.74-4.86l3.74,4.86l-3.74,4.86L221.19,89.37z"/>
          <path class="statsBaseIconStyle" d="M227.68,92.25l1.06-1.38l1.06,1.38l-1.06,1.38L227.68,92.25z"/>
          <path class="statsBaseIconStyle" d="M220.74,86.47l0.77-1l0.77,1l-0.77,1L220.74,86.47z"/>
        </g>
      </g>
    </g>
    <g id="iconType6Water">
      <g>
        <defs>
          <rect id="iconType6Box" x="219" y="48" width="12" height="12"/>
        </defs>
        <clipPath id="iconType6Clipper">
          <use xlink:href="#iconType6Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType6Clipper);">
          <path class="statsBaseIconStyle" d="M228.07,53.83c0.52,0.18,1.03,0.39,1.53,0.56c0.01-0.13,0.02-0.26,0.02-0.39c0-1.09-0.38-2.14-1.08-2.97s-1.67-1.39-2.74-1.58c-1.07-0.19-2.17,0.01-3.11,0.56c-0.94,0.55-1.66,1.41-2.03,2.43c1.22-0.26,2.37,0.05,3.41,0.87c0.36,0.28,0.68,0.59,1.01,0.91C225.91,53.59,227.08,53.5,228.07,53.83z"/>
          <path class="statsBaseIconStyle" d="M228.35,54.88c-0.84-0.29-1.81-0.39-2.59-0.04c0.07,0.06,0.13,0.11,0.2,0.17c0.87,0.7,1.89,1.18,2.99,1.39c0.2-0.34,0.36-0.7,0.48-1.08C229.07,55.16,228.72,55.01,228.35,54.88z"/>
          <path class="statsBaseIconStyle" d="M223.87,54.26c-1.05-0.83-2.22-1.13-3.45-0.86c-0.13,0.96,0.05,1.93,0.51,2.79c0.46,0.85,1.17,1.54,2.04,1.96c0.87,0.42,1.85,0.57,2.8,0.4c0.95-0.16,1.83-0.62,2.51-1.31c-0.92-0.25-1.78-0.69-2.52-1.29C225.1,55.43,224.54,54.78,223.87,54.26z"/>
        </g>
      </g>
    </g>
  </g>
  <g id="averageContainer" opacity="0">
    <polygon id="averageContainerLine" style="fill:none;stroke:url(#averageContainerLineGradient);stroke-width:1;stroke-miterlimit:10;" points="40,58 55,66.5 55,83.5 40,92 25,83.5 25,66.5 "/>
    <linearGradient id="averageContainerLineGradient" gradientUnits="userSpaceOnUse" x1="24.75" y1="75" x2="55.25" y2="75">
    <stop offset="0" style="stop-color:#AE7BFA"/>
    <stop offset="0.5219" style="stop-color:#6489E7"/>
    <stop offset="1" style="stop-color:#78EDFD"/>
    </linearGradient>
  </g>
  <g id="currentStatsShapeLoading">
    <g id="infiniteLoadingGroup">
      <polygon id="currentStatsShapeLoadingShape1" fill="url(#currentStatsShapeGradient)"/>
      <polygon id="currentStatsShapeLoadingShape2" fill="url(#currentStatsShapeGradient)"/>
      <animate xlink:href="#currentStatsShapeLoadingShape1" attributeName="points" attributeType="XML" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite"  from="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25" to="278,39.5 306.2,55.75 306.2,88.25 278,104.5 249.81,88.25 249.81,55.75"/>
      <animate xlink:href="#currentStatsShapeLoadingShape1" attributeName="opacity" attributeType="XML" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" from="0.5" to="0"/>
      <animate xlink:href="#currentStatsShapeLoadingShape2" attributeName="points" attributeType="XML" dur="2s" begin="0.6s" fill="freeze" repeatCount="indefinite" from="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25" to="278,39.5 306.2,55.75 306.2,88.25 278,104.5 249.81,88.25 249.81,55.75"/>
      <animate xlink:href="#currentStatsShapeLoadingShape2" attributeName="opacity" attributeType="XML" dur="2s" begin="0.6s" fill="freeze" repeatCount="indefinite" from="0.5" to="0"/>
      <linearGradient id="currentStatsShapeGradient" gradientUnits="userSpaceOnUse" x1="250" y1="72" x2="306" y2="72">
        <stop offset="0" style="stop-color:#AE7BFA"/>
        <stop offset="0.5" style="stop-color:#6489E7"/>
        <stop offset="1" style="stop-color:#78EDFD"/>
      </linearGradient>
    </g>
  </g>
  <g id="currentStatsShape" opacity="0">
      <polygon id="currentStats" class="currentStatsShapeStyle" fill="url(#currentStatsShapeGradient)" points="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25"/>
    <linearGradient id="currentStatsShapeGradient" gradientUnits="userSpaceOnUse" x1="250" y1="72" x2="306" y2="72">
      <stop offset="0" style="stop-color:#AE7BFA"/>
      <stop offset="0.5" style="stop-color:#6489E7"/>
      <stop offset="1" style="stop-color:#78EDFD"/>
    </linearGradient>
  </g>
  <!-- Edit svg of currentTierImage -->
  <g id="currentTierImage" opacity="0">
    ${tierSvg}
  </g>
  <g id="currentStatsNumberText" opacity="0">
      <text id="currentStatsNumberTextType1" x="279" y="32" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.people.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType2" x="323" y="57.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.tree.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType3" x="323" y="92.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.fire.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType4" x="279" y="118" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.earth.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType5" x="232" y="92.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.gold.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType6" x="232" y="57.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.water.score * 100,
      )}</text>
  </g>
  <!-- Edit github id (hyochan) @ the text after class="textGithubIDStyle of id="textTitle" -->
  <!-- Edit average points (77) @ the text of id="textAverage" -->
  <!-- Edit tier name (Challenger) @ the text after class="textLabelStyle" of id="textTierLabel" -->
  <g id="SVGtitle">
    <foreignObject x="24" y="22" width="324" height="80">
      <div xmlns="http://www.w3.org/1999/xhtml" class="ellipsis">
        <ul style="line-height: 1em">
          <li >
          <span id="userNameText" class="textGithubIDStyle" opacity="0">${
            stats.userName || login
          }</span>
          </li>
          <li>
          <span id="titleText" class="textSubtitleStyle" opacity="0">github-stats</span>
          </li>
        </ul>
      </div>
    </foreignObject>
  </g>
  <g id="averageText" opacity="0">
    <text id="textAverage" x="40" y="76" class="textCurrentAverageStyle" dominant-baseline="middle" text-anchor="middle">${avgScore}</text>
  </g>
  <g id="textAverageLabel" opacity="0">
    <text x="62" y="72" class="textLabelStyle">Average</text>
    <text x="62" y="86" class="textLabelSubStyle">Points</text>
  </g>
  <g id="textTierLabel" opacity="0">
    <text x="152" y="72" class="textLabelStyle">${tierName}</text>
    <text x="152" y="86" class="textLabelSubStyle">Tier</text>
  </g>
  <g id="doobooText" opacity="0">
    <a href="https://stats.dooboo.io" target="_blank"><text id="textInfo" x="24" y="124" class="textInfoStyle">Designed by hyochan</text></a>
  </g>
  <!-- START of Animation -->
  <!-- Hexagon Base Animation -->
  <animate begin="0.00s" xlink:href="#statsBaseLines" attributeName="opacity" attributeType="XML" dur="0.6s" fill="freeze" from="0" to="1"/>
  <animate begin="0.00s" xlink:href="#currentStatsShape" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
  <!-- Name Animation -->
  <animate begin="0.00s" xlink:href="#SVGtitle" attributeName="opacity" attributeType="XML" dur="1s" fill="freeze" from="0" to="1"/>
  <animate begin="0.00s" xlink:href="#userNameText" attributeName="opacity" attributeType="XML" dur="0.5s" fill="freeze" from="0" to="1"/>
  <animate begin="0.00s" xlink:href="#titleText" attributeName="opacity" attributeType="XML" dur="0.8s" fill="freeze" from="0" to="1"/>
  <!-- Hexagon Morphing Animation -->
  <animate begin="1.50s" xlink:href="#currentStats" attributeName="points" attributeType="XML" dur="0.5s" fill="freeze" to="${peopleAxis} ${treeAxis} ${fireAxis} ${earthAxis} ${goldAxis} ${waterAxis}"/>
  <animate begin="1.60s" xlink:href="#currentStatsShapeLoading" attributeName="opacity" attributeType="XML" dur="0.4s" fill="freeze" from="1" to="0"/>
  <!-- 6 Stats Animation -->
  <animate begin="1.50s" xlink:href="#statsBaseIcons" attributeName="opacity" attributeType="XML" dur="0.2s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#currentStatsNumberText" attributeName="opacity" attributeType="XML" dur="0.2s" fill="freeze" from="0" to="1"/>
  <!-- Avg Animation -->
  <animate begin="1.50s" xlink:href="#averageContainer" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#averageText" attributeName="opacity" attributeType="XML" dur="0.6s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#textAverageLabel" attributeName="opacity" attributeType="XML" dur="0.8s" fill="freeze" from="0" to="1"/>
  <!-- Tier Animation -->
  <animate begin="1.50s" xlink:href="#currentTierImage" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#textTierLabel" attributeName="opacity" attributeType="XML" dur="0.8s" fill="freeze" from="0" to="1"/>
  <!-- stats.dooboo.io Text Animation -->
  <animate begin="1.70s" xlink:href="#doobooText" attributeName="opacity" attributeType="XML" dur="0.5s" fill="freeze" from="0" to="1"/>
  <!-- END of Animation -->
</svg>
`;

export const renderGithubStatsSvgWithLangs = ({
  login,
  tierName,
  avgScore,
  tierSvg,
  stats,
  earthAxis,
  fireAxis,
  goldAxis,
  peopleAxis,
  treeAxis,
  waterAxis,
  languages,
}: GithubStatsSvgType & {
  languages: TopLanguage[];
}): string => {
  const langs = languages.slice(0, 6);
  const totalSize = langs.reduce((pre, val) => pre + val.size, 0);

  type Lang = TopLanguage & {percent: number; startPosX: number};

  const convertedLangs: Lang[] = langs.map((lang, i) => {
    const percent = Math.round((lang.size / totalSize) * 100);

    return {
      name: lang.name,
      size: lang.size,
      percent,
      startPosX: langs.reduce(
        (pre, val, index) =>
          index < i ? pre + Math.round((val.size / totalSize) * 100) * 3 : pre,
        24,
      ),
      color: lang.color,
    };
  });

  const firstConvertedLangs = convertedLangs.slice(0, 3);
  const secondConvertedLangs = convertedLangs.slice(3, 6);

  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 350 208" style="enable-background:new 0 0 350 208;" xml:space="preserve">
  <style type="text/css">
    <![CDATA[
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=block");
    .backgroundColor{fill:#26272D;}
    .backgroundColorLine{stroke:#26272D;}
    .backgroundInnerLineOpacity{opacity:1;}
    .statsBaseLineStyle{fill:none; stroke:#FFFFFF; stroke-width:0.5; opacity:0.2;}
    .statsBaseIconStyle{fill:#FFFFFF; opacity:0.2;}
    .currentStatsShapeStyle{opacity:0.8; stroke:#FFFFFF; stroke-width:1;}
    .currentStatsLoadingStyle{opacity:0.8; stroke:#FFFFFF; stroke-width:1;}
    .textGithubIDStyle{font-family: "Inter", Sans-Serif;font-weight: 700;font-size: 12px; color: #FFFFFF;}
    .textCurrentAverageStyle{font-family: "Inter", Sans-Serif;font-weight: 700;font-size: 12px; fill: #FFFFFF;}
    .textCurrentStatsNumberStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 9px; fill: #FFFFFF;}
    .textSubtitleStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 12px; color: #646569;}
    .textLabelStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 10px; fill: #FFFFFF; }
    .textLabelSubStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 10px; fill: #FFFFFF; opacity:0.5;}
    .textInfoStyle{font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 7px; fill: #FFFFFF; opacity:0.3;}
    .textLangLabelStyle{fill: #FFFFFF; opacity:0.3; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 7px;}
    .textLangStyle{margin-right: 8px; color:  #FFFFFF; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot1{margin-right: 8px; color:  #FFFFFF; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot2{margin-right: 8px; color:  #96979B; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot3{margin-right: 8px; color:  #6F7073; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot4{margin-right: 8px; color:  #4D4E51; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot5{margin-right: 8px; color:  #3D3D41; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangDot6{margin-right: 8px; color:  #36363A; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px;}
    .textLangPercent{margin-right: 8px; color: #646569; font-family: "Inter", Sans-Serif;font-weight: 300;font-size: 14px; }
    .langType1{fill: #FFFFFF; }
    .langType2{fill: #6F7073;}
    .langType3{fill: #4D4E51;}
    .langType4{fill: #3D3D41;}
    .langType5{fill: #36363A;}
    .langType6{fill: #2E2F32;}
    ul{line-height: 1.75em; list-style: none; margin: 0; padding: 0;}
    li{display: inline-flex; margin: 0; padding: 0; align-items: left; flex-wrap: nowrap;}
    ]]>
  </style>
  <g id="background">
    <rect id="backgroundBox" width="350" height="208" rx="8" class = "backgroundColor"/>
    <rect x="4.5" y="4.5" width="341" height="199" rx="7.5" style="fill:none;stroke:url(#backgroundInnerLineGradient);stroke-width:0.5;stroke-miterlimit:10;"/>
    <linearGradient id="backgroundInnerLineGradient" gradientUnits="userSpaceOnUse" x1="3.75" y1="100" x2="346.25" y2="100">
      <stop  offset="0" style="stop-color:#AE7BFA"/>
      <stop  offset="0.5219" style="stop-color:#6489E7"/>
      <stop  offset="1" style="stop-color:#78EDFD"/>
    </linearGradient>
  </g>
  <g id="statsBaseLines" opacity="0">
    <polygon id="0p3xBase" class="statsBaseLineStyle" points="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25"/>
    <polygon id="10p4x" class="statsBaseLineStyle" points="278,62 286.67,67 286.67,77 278,82 269.33,77 269.33,67"/>
    <polygon id="20p5x" class="statsBaseLineStyle" points="278,59.5 288.85,65.75 288.85,78.25 278,84.5 267.15,78.25 267.15,65.75"/>
    <polygon id="30p6x" class="statsBaseLineStyle" points="278,57 291.02,64.5 291.02,79.5 278,87 264.99,79.5 264.99,64.5"/>
    <polygon id="40p7x" class="statsBaseLineStyle" points="278,54.5 293.18,63.25 293.18,80.75 278,89.5 262.82,80.75 262.82,63.25"/>
    <polygon id="50p8x" class="statsBaseLineStyle" points="278,52 295.35,62 295.35,82 278,92 260.65,82 260.65,62"/>
    <polygon id="60p9x" class="statsBaseLineStyle" points="278,49.5 297.52,60.75 297.52,83.25 278,94.5 258.48,83.25 258.48,60.75"/>
    <polygon id="70p10x" class="statsBaseLineStyle" points="278,47 299.69,59.5 299.69,84.5 278,97 256.31,84.5 256.31,59.5"/>
    <polygon id="80p11x" class="statsBaseLineStyle" points="278,44.5 301.86,58.25 301.86,85.75 278,99.5 254.15,85.75 254.15,58.25"/>
    <polygon id="90p12x" class="statsBaseLineStyle" points="278,42 304.02,57 304.02,87 278,102 251.98,87 251.98,57"/>
    <polygon id="100p13xFull" class="statsBaseLineStyle" points="278,39.5 306.2,55.75 306.2,88.25 278,104.5 249.81,88.25 249.81,55.75"/>
    <polygon id="110p14xOuter" class="statsBaseLineStyle" points="278,37 308.36,54.5 308.36,89.5 278,107 247.63,89.5 247.63,54.5"/>
  </g>
  <g id="statsBaseIcons" opacity="0">
    <g id="iconType1People">
      <g>
        <defs>
          <rect id="iconType1Box" x="266" y="23" width="12" height="12"/>
        </defs>
        <clipPath id="iconType1Clipper">
          <use xlink:href="#iconType1Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType1Clipper);">
          <path class="statsBaseIconStyle" d="M276.33,30.25l-4.19,2.61v-5.23L276.33,30.25z"/>
          <path class="statsBaseIconStyle" d="M267.57,31.95l3.51-2.19v4.38L267.57,31.95z"/>
          <path class="statsBaseIconStyle" d="M273.54,27.12c0.78,0,1.42-0.63,1.42-1.42c0-0.78-0.63-1.42-1.42-1.42c-0.79,0-1.42,0.63-1.42,1.42C272.12,26.49,272.76,27.12,273.54,27.12z"/>
          <path class="statsBaseIconStyle" d="M269.86,29.24c0.67,0,1.22-0.55,1.22-1.22s-0.55-1.22-1.22-1.22c-0.67,0-1.22,0.55-1.22,1.22S269.19,29.24,269.86,29.24z"/>
        </g>
      </g>
    </g>
    <g id="iconType2Tree">
      <g>
        <defs>
          <rect id="iconType2Box" x="310" y="48" width="12" height="12"/>
        </defs>
        <clipPath id="iconType2Clipper">
          <use xlink:href="#iconType2Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType2Clipper);">
          <path class="statsBaseIconStyle" d="M316,54.86l2.55,4.1h-5.11L316,54.86z"/>
          <path class="statsBaseIconStyle" d="M318.15,56.23c0.73-0.47,1.29-1.16,1.6-1.97c0.3-0.81,0.33-1.7,0.09-2.54c-0.25-0.83-0.76-1.56-1.46-2.08c-0.7-0.52-1.55-0.79-2.42-0.78c-0.87,0.01-1.71,0.3-2.4,0.83s-1.19,1.27-1.42,2.11c-0.23,0.84-0.18,1.73,0.14,2.54c0.32,0.81,0.89,1.49,1.64,1.94l2.13-3.42L318.15,56.23z"/>
        </g>
      </g>
    </g>
    <g id="iconType3Fire">
      <g>
        <defs>
          <rect id="iconType3Box" x="310" y="83.5" width="12" height="12"/>
        </defs>
        <clipPath id="iconType3Clipper">
          <use xlink:href="#iconType3Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType3Clipper);">
          <path class="statsBaseIconStyle" d="M312.99,86.33l6.77,5.09l-3.71,2.98l-3.71-2.98L312.99,86.33z"/>
          <path class="statsBaseIconStyle" d="M315.5,84.31l1.11,1.74l-1.11,0.89l-1.11-0.89L315.5,84.31z"/>
          <path class="statsBaseIconStyle" d="M319.1,85.45l-2.69,2.2l3.34,2.52L319.1,85.45z"/>
        </g>
      </g>
    </g>
    <g id="icontype4Soil">
      <g>
        <defs>
          <rect id="icontype4Box" x="266" y="109" width="12" height="12"/>
        </defs>
        <clipPath id="icontype4Clipper">
          <use xlink:href="#icontype4Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#icontype4Clipper);">
          <path class="statsBaseIconStyle" d="M272.18,116.98c-0.79-0.35-1.55-0.35-2.3,0.12c-0.31,0.2-0.62,0.41-0.92,0.62c-0.15,0.1-0.3,0.21-0.45,0.31c0.41,0.47,0.91,0.86,1.48,1.13c0.56,0.27,1.18,0.43,1.8,0.46c0.63,0.03,1.25-0.07,1.84-0.29c0.59-0.22,1.12-0.56,1.57-0.99c-0.48-0.12-0.95-0.29-1.38-0.52C273.28,117.52,272.74,117.23,272.18,116.98z"/>
          <path class="statsBaseIconStyle" d="M270.26,111.88c0.85,0,1.64,0.25,2.42,0.54c1.25,0.46,2.49,0.97,3.77,1.34c-0.24-0.84-0.7-1.6-1.35-2.18c-0.65-0.59-1.45-0.98-2.31-1.12c-0.86-0.15-1.74-0.05-2.55,0.28s-1.5,0.89-2.01,1.6l0.05-0.02C268.92,112.07,269.57,111.88,270.26,111.88z"/>
          <path class="statsBaseIconStyle" d="M273.67,113.92c-0.88-0.33-1.75-0.71-2.69-0.87c-0.55-0.1-1.12-0.09-1.67,0.05c-0.6,0.16-1.19,0.38-1.75,0.64c-0.33,1.16-0.19,2.4,0.38,3.46c0.12-0.07,0.25-0.15,0.36-0.23c0.51-0.34,0.99-0.72,1.52-1.01c0.56-0.3,1.14-0.42,1.76-0.27c0.7,0.17,1.33,0.52,1.97,0.87c0.76,0.41,1.55,0.75,2.42,0.8c0.42-0.71,0.64-1.52,0.64-2.35c0-0.03,0-0.06,0-0.08c-0.41-0.11-0.81-0.22-1.2-0.36C274.83,114.35,274.25,114.14,273.67,113.92z"/>
        </g>
      </g>
    </g>
    <g id="iconType5Gold">
      <g>
        <defs>
          <rect id="iconType5Box" x="219" y="83.5" width="12" height="12"/>
        </defs>
        <clipPath id="iconType5Clipper">
          <use xlink:href="#iconType5Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType5Clipper);">
          <path class="statsBaseIconStyle" d="M221.19,89.37l3.74-4.86l3.74,4.86l-3.74,4.86L221.19,89.37z"/>
          <path class="statsBaseIconStyle" d="M227.68,92.25l1.06-1.38l1.06,1.38l-1.06,1.38L227.68,92.25z"/>
          <path class="statsBaseIconStyle" d="M220.74,86.47l0.77-1l0.77,1l-0.77,1L220.74,86.47z"/>
        </g>
      </g>
    </g>
    <g id="iconType6Water">
      <g>
        <defs>
          <rect id="iconType6Box" x="219" y="48" width="12" height="12"/>
        </defs>
        <clipPath id="iconType6Clipper">
          <use xlink:href="#iconType6Box"  style="overflow:visible;"/>
        </clipPath>
        <g style="clip-path:url(#iconType6Clipper);">
          <path class="statsBaseIconStyle" d="M228.07,53.83c0.52,0.18,1.03,0.39,1.53,0.56c0.01-0.13,0.02-0.26,0.02-0.39c0-1.09-0.38-2.14-1.08-2.97s-1.67-1.39-2.74-1.58c-1.07-0.19-2.17,0.01-3.11,0.56c-0.94,0.55-1.66,1.41-2.03,2.43c1.22-0.26,2.37,0.05,3.41,0.87c0.36,0.28,0.68,0.59,1.01,0.91C225.91,53.59,227.08,53.5,228.07,53.83z"/>
          <path class="statsBaseIconStyle" d="M228.35,54.88c-0.84-0.29-1.81-0.39-2.59-0.04c0.07,0.06,0.13,0.11,0.2,0.17c0.87,0.7,1.89,1.18,2.99,1.39c0.2-0.34,0.36-0.7,0.48-1.08C229.07,55.16,228.72,55.01,228.35,54.88z"/>
          <path class="statsBaseIconStyle" d="M223.87,54.26c-1.05-0.83-2.22-1.13-3.45-0.86c-0.13,0.96,0.05,1.93,0.51,2.79c0.46,0.85,1.17,1.54,2.04,1.96c0.87,0.42,1.85,0.57,2.8,0.4c0.95-0.16,1.83-0.62,2.51-1.31c-0.92-0.25-1.78-0.69-2.52-1.29C225.1,55.43,224.54,54.78,223.87,54.26z"/>
        </g>
      </g>
    </g>
  </g>
  <g id="averageContainer" opacity="0">
    <polygon id="averageContainerLine" style="fill:none;stroke:url(#averageContainerLineGradient);stroke-width:1;stroke-miterlimit:10;" points="40,58 55,66.5 55,83.5 40,92 25,83.5 25,66.5 "/>
    <linearGradient id="averageContainerLineGradient" gradientUnits="userSpaceOnUse" x1="24.75" y1="75" x2="55.25" y2="75">
    <stop offset="0" style="stop-color:#AE7BFA"/>
    <stop offset="0.5219" style="stop-color:#6489E7"/>
    <stop offset="1" style="stop-color:#78EDFD"/>
    </linearGradient>
  </g>
  <g id="currentStatsShapeLoading">
    <g id="infiniteLoadingGroup">
      <polygon id="currentStatsShapeLoadingShape1" fill="url(#currentStatsShapeGradient)"/>
      <polygon id="currentStatsShapeLoadingShape2" fill="url(#currentStatsShapeGradient)"/>
      <animate xlink:href="#currentStatsShapeLoadingShape1" attributeName="points" attributeType="XML" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite"  from="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25" to="278,39.5 306.2,55.75 306.2,88.25 278,104.5 249.81,88.25 249.81,55.75"/>
      <animate xlink:href="#currentStatsShapeLoadingShape1" attributeName="opacity" attributeType="XML" dur="2s" begin="0s" fill="freeze" repeatCount="indefinite" from="0.5" to="0"/>
      <animate xlink:href="#currentStatsShapeLoadingShape2" attributeName="points" attributeType="XML" dur="2s" begin="0.6s" fill="freeze" repeatCount="indefinite" from="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25" to="278,39.5 306.2,55.75 306.2,88.25 278,104.5 249.81,88.25 249.81,55.75"/>
      <animate xlink:href="#currentStatsShapeLoadingShape2" attributeName="opacity" attributeType="XML" dur="2s" begin="0.6s" fill="freeze" repeatCount="indefinite" from="0.5" to="0"/>
      <linearGradient id="currentStatsShapeGradient" gradientUnits="userSpaceOnUse" x1="250" y1="72" x2="306" y2="72">
        <stop offset="0" style="stop-color:#AE7BFA"/>
        <stop offset="0.5" style="stop-color:#6489E7"/>
        <stop offset="1" style="stop-color:#78EDFD"/>
      </linearGradient>
    </g>
  </g>
  <g id="currentStatsShape" opacity="0">
      <polygon id="currentStats" class="currentStatsShapeStyle" fill="url(#currentStatsShapeGradient)" points="278,64.5 284.51,68.25 284.51,75.75 278,79.5 271.49,75.75 271.49,68.25"/>
    <linearGradient id="currentStatsShapeGradient" gradientUnits="userSpaceOnUse" x1="250" y1="72" x2="306" y2="72">
      <stop offset="0" style="stop-color:#AE7BFA"/>
      <stop offset="0.5" style="stop-color:#6489E7"/>
      <stop offset="1" style="stop-color:#78EDFD"/>
    </linearGradient>
  </g>
  <!-- Edit svg of currentTierImage -->
  <g id="currentTierImage" opacity="0">
    ${tierSvg}
  </g>
  <g id="currentStatsNumberText" opacity="0">
      <text id="currentStatsNumberTextType1" x="279" y="32" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.people.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType2" x="323" y="57.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.tree.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType3" x="323" y="92.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.fire.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType4" x="279" y="118" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.earth.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType5" x="232" y="92.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.gold.score * 100,
      )}</text>
      <text id="currentStatsNumberTextType6" x="232" y="57.5" class="textCurrentStatsNumberStyle">${Math.round(
        stats.pluginStats.water.score * 100,
      )}</text>
  </g>
  <!-- Edit github id (hyochan) @ the text after class="textGithubIDStyle of id="textTitle" -->
  <!-- Edit average points (77) @ the text of id="textAverage" -->
  <!-- Edit tier name (Challenger) @ the text after class="textLabelStyle" of id="textTierLabel" -->
  <g id="SVGtitle">
    <foreignObject x="24" y="22" width="324" height="80">
      <div xmlns="http://www.w3.org/1999/xhtml" class="ellipsis">
        <ul style="line-height: 1em">
          <li >
          <span id="userNameText" class="textGithubIDStyle" opacity="0">${
            stats.userName || login
          }</span>
          </li>
          <li>
          <span id="titleText" class="textSubtitleStyle" opacity="0">github-stats</span>
          </li>
        </ul>
      </div>
    </foreignObject>
  </g>
  <g id="text">
    <g id="averageText" opacity="0">
      <text id="textAverage" x="40" y="76" class="textCurrentAverageStyle" dominant-baseline="middle" text-anchor="middle">${avgScore}</text>
    </g>
    <g id="textAverageLabel" opacity="0">
      <text x="62" y="72" class="textLabelStyle">Average</text>
      <text x="62" y="86" class="textLabelSubStyle">Points</text>
    </g>
    <g id="textTierLabel" opacity="0">
      <text x="152" y="72" class="textLabelStyle">${tierName}</text>
      <text x="152" y="86" class="textLabelSubStyle">Tier</text>
    </g>
  </g>
  <!-- Edit value of x and width @ langType# -->
  <!-- starting point: 24 -->
  <!-- end point: 324 -->
  <!-- 100% of width = 300 -->
  <g id="mostUsedLanguageLine" clip-path="url(#mostUsedLanguageLineClipper)">
    ${convertedLangs.map((lang, index) => {
      return `<g id="mostUsedLanguageLine${index + 1}" opacity="0">
      <rect class="langType${index + 1}" x="${lang.startPosX}" y="140" width="${
        lang.percent * 3
      }" height="2"/>
    </g>
    `;
    })}
    <defs>
      <clipPath id="mostUsedLanguageLineClipper">
        <rect x="24" y="140" width="300" height="2" rx="2"/>
      </clipPath>
    </defs>
  </g>
  <text id="textLangLabel" class="textLangLabelStyle" x="24" y="132" style="opacity:0.001;">Most Used Language</text>
  <g id="mostUsedLanguageTextGroup" opacity="0">
    <foreignObject x="48" y="300" width="608" height="160" transform="scale(0.5)">
      <div xmlns="http://www.w3.org/1999/xhtml" class="ellipsis">
        <ul>
          ${firstConvertedLangs.map((lang, index) => {
            return `${'\n'}
            <li id="mostUsedLanguageText${index + 1}">
              <span class="textLangDot${index + 1}">●</span>
              <span class="textLangStyle">${lang.name}</span>
              <span class="textLangPercent">${lang.percent}%</span>
            </li>`;
          })}
          ${secondConvertedLangs.map((lang, index) => {
            return `${'\n'}
          <li id="mostUsedLanguageText${index + 4}">
            <span class="textLangDot${index + 4}">●</span>
            <span class="textLangStyle">${lang.name}</span>
            <span class="textLangPercent">${lang.percent}%</span>
          </li>`;
          })}
        </ul>
      </div>
    </foreignObject>
  </g>
  <g id="doobooText" opacity="0">
    <a href="https://stats.dooboo.io" target="_blank"><text id="textInfo" x="326" y="188" class="textInfoStyle" text-anchor="end">Designed by hyochan</text></a>
  </g>
  <!-- START of Animation -->
  <!-- Hexagon Base Animation -->
  <animate begin="0.00s" xlink:href="#statsBaseLines" attributeName="opacity" attributeType="XML" dur="0.6s" fill="freeze" from="0" to="1"/>
  <animate begin="0.00s" xlink:href="#currentStatsShape" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
  <!-- Name Animation -->
  <animate begin="0.00s" xlink:href="#SVGtitle" attributeName="opacity" attributeType="XML" dur="1s" fill="freeze" from="0" to="1"/>
  <animate begin="0.00s" xlink:href="#userNameText" attributeName="opacity" attributeType="XML" dur="0.5s" fill="freeze" from="0" to="1"/>
  <animate begin="0.00s" xlink:href="#titleText" attributeName="opacity" attributeType="XML" dur="0.8s" fill="freeze" from="0" to="1"/>
  <!-- Hexagon Morphing Animation -->
  <animate begin="1.50s" xlink:href="#currentStats" attributeName="points" attributeType="XML" dur="0.5s" fill="freeze" to="${peopleAxis} ${treeAxis} ${fireAxis} ${earthAxis} ${goldAxis} ${waterAxis}"/>
  <animate begin="1.60s" xlink:href="#currentStatsShapeLoading" attributeName="opacity" attributeType="XML" dur="0.4s" fill="freeze" from="1" to="0"/>
  <!-- 6 Stats Animation -->
  <animate begin="1.50s" xlink:href="#statsBaseIcons" attributeName="opacity" attributeType="XML" dur="0.2s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#currentStatsNumberText" attributeName="opacity" attributeType="XML" dur="0.2s" fill="freeze" from="0" to="1"/>
  <!-- Avg Animation -->
  <animate begin="1.50s" xlink:href="#averageContainer" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#averageText" attributeName="opacity" attributeType="XML" dur="0.6s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#textAverageLabel" attributeName="opacity" attributeType="XML" dur="0.8s" fill="freeze" from="0" to="1"/>
  <!-- Tier Animation -->
  <animate begin="1.50s" xlink:href="#currentTierImage" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
  <animate begin="1.50s" xlink:href="#textTierLabel" attributeName="opacity" attributeType="XML" dur="0.8s" fill="freeze" from="0" to="1"/>
  <!-- Language Label Animation -->
  <animate begin="1.60s" xlink:href="#textLangLabel" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <!-- Language Shape Animation -->
  <animate begin="1.60s" xlink:href="#mostUsedLanguageLine1" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <animate begin="1.60s" xlink:href="#mostUsedLanguageLine2" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <animate begin="1.60s" xlink:href="#mostUsedLanguageLine3" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <animate begin="1.60s" xlink:href="#mostUsedLanguageLine4" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <animate begin="1.60s" xlink:href="#mostUsedLanguageLine5" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <animate begin="1.60s" xlink:href="#mostUsedLanguageLine6" attributeName="opacity" attributeType="XML" dur="0.30s" fill="freeze" from="0" to="1"/>
  <!-- Language Text Animation -->
  <animate begin="1.60s" xlink:href="#mostUsedLanguageTextGroup" attributeName="opacity" attributeType="XML" dur="0.60s" fill="freeze" from="0" to="1"/>
  <!-- stats.dooboo.io Text Animation -->
  <animate begin="1.60s" xlink:href="#doobooText" attributeName="opacity" attributeType="XML" dur="0.90s" fill="freeze" from="0" to="1"/>
  <!-- END of Animation -->
  </svg>
  `.replaceAll('>,', '>');
};

export type Grade =
  | 'S'
  | 'A+'
  | 'A'
  | 'A-'
  | 'B+'
  | 'B'
  | 'B-'
  | 'C+'
  | 'C'
  | 'C-';

export const renderTrophySvg = ({
  index,
  title,
  subTitle,
  grade,
  bar,
}: {
  index: number;
  title: string;
  subTitle: string;
  grade: Grade;
  bar: number;
}): string => `<g id="trophySet${index}">
  <svg x="${(index % 5) * 124}" y="${
  index > 4 ? 124 : 0
}" width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="120" height="120" rx="4" class="backgroundColor"/>
<defs>
${
  grade === 'S'
    ? `<linearGradient id="innerLineColorS0${index}" x1="4" y1="4" x2="122.5" y2="6.5" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#B37BFA" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#316BFF" stop-opacity="1"/>
  <stop offset="1" stop-color="#00E0FF" stop-opacity="1"/>
</linearGradient>
<linearGradient id="barColorGradientS0${index}" x1="12" y1="110" x2="112" y2="110" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#B37BFA" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#316BFF" stop-opacity="1"/>
  <stop offset="1" stop-color="#00E0FF" stop-opacity="1"/>
</linearGradient>`
    : grade === 'A+' || grade === 'A' || grade === 'A-'
    ? `<linearGradient id="innerLineColorA0${index}" x1="4" y1="4" x2="122.5" y2="6.5" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#B37BFA" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#316BFF" stop-opacity="1"/>
  <stop offset="1" stop-color="#00E0FF" stop-opacity="1"/>
</linearGradient>
<linearGradient id="barColorGradientA0${index}" x1="12" y1="110" x2="112" y2="110" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#B37BFA" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#316BFF" stop-opacity="1"/>
  <stop offset="1" stop-color="#00E0FF" stop-opacity="1"/>
</linearGradient>`
    : grade === 'B+' || grade === 'B' || grade === 'B-'
    ? `<linearGradient id="innerLineColorB0${index}" x1="4" y1="4" x2="122.5" y2="6.5" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#FFE713" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#F29F23" stop-opacity="1"/>
  <stop offset="1" stop-color="#FF7A00" stop-opacity="1"/>
</linearGradient>
<linearGradient id="barColorGradientB0${index}" x1="12" y1="110" x2="112" y2="110" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#FFE713" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#F29F23" stop-opacity="1"/>
  <stop offset="1" stop-color="#FF7A00" stop-opacity="1"/>
</linearGradient>`
    : `<linearGradient id="innerLineColorC0${index}" x1="4" y1="4" x2="122.5" y2="6.5" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#CFCFCF" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#AEAEAE" stop-opacity="1"/>
  <stop offset="1" stop-color="#716E5E" stop-opacity="1"/>
</linearGradient>
<linearGradient id="barColorGradientC0${index}" x1="12" y1="110" x2="112" y2="110" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#CFCFCF" stop-opacity="1"/>
  <stop offset="0.5" stop-color="#AEAEAE" stop-opacity="1"/>
  <stop offset="1" stop-color="#716E5E" stop-opacity="1"/>
</linearGradient>`
}
${
  grade === 'S'
    ? `<mask id="barClipPathS0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeS0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'A+'
    ? `<mask id="barClipPathA+0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeA+0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'A'
    ? `<mask id="barClipPathA0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeA0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'A-'
    ? `<mask id="barClipPathA-0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
    <rect id="barClipPathShapeA-0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'B+'
    ? `<mask id="barClipPathB+0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeB+0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'B'
    ? `<mask id="barClipPathB0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeB0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'B-'
    ? `<mask id="barClipPathB-0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeB-0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'C+'
    ? `<mask id="barClipPathC+0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeC+0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : grade === 'C'
    ? `<mask id="barClipPathC0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeC0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
    : `<mask id="barClipPathC-0${index}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="110" width="100" height="2">
  <rect id="barClipPathShapeC-0${index}" x="12" y="110" width="0" height="2" rx="1" fill="white"/>
</mask>`
}
  <animate begin="0.00s" xlink:href="#trophySVGBase0${index}" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0.5" to="0"/>
  <animate begin="0.50s" xlink:href="#badgeSubtitleGroup0${index}" attributeName="opacity" attributeType="XML" dur="0.2s" fill="freeze" from="0" to="1"/>
</defs>
      <g id="baseGroup0${index}">
          <!-- Background Inner Line Base -->
          <g id="backgroundInnerLineBase0${index}">
              <rect opacity="0.5" x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#8D8D8D" stroke-width="0.3"/>
          </g>
          <!-- Trophy Base -->
          <g id="trophySVGBase0${index}" opacity="0.5">
              <svg x="42" y="21" width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.9517 8.40472H33.3544L34.2193 4.13527H35.5091C36.6522 4.13527 37.5813 3.20819 37.5813 2.06763C37.5813 0.927081 36.6522 0 35.5091 0H4.1999C3.05377 0 2.1277 0.927081 2.1277 2.06763C2.1277 3.20819 3.05683 4.13527 4.1999 4.13527H5.48968L6.35462 8.40472H3.04155C1.75177 8.40472 0.782906 9.58491 1.03964 10.8475L1.10077 11.1494L3.20048 21.518L3.42664 22.6281C3.61919 23.5796 4.45663 24.2627 5.42855 24.2627H9.56379L10.2423 27.6203C10.8536 30.6364 13.5095 32.8016 16.5903 32.8016H17.0977V39.8157H12.2075C10.7741 39.8157 9.60963 40.9776 9.60963 42.4078C9.60963 43.8381 10.7741 45 12.2075 45H27.4893C28.9227 45 30.0871 43.8381 30.0871 42.4078C30.0871 40.9776 28.9227 39.8157 27.4893 39.8157H22.5991V32.8016H23.1065C26.1903 32.8016 28.8432 30.6333 29.4545 27.6203L30.133 24.2627H34.5555C35.5274 24.2627 36.3649 23.5796 36.5574 22.6281L36.7836 21.518L38.8833 11.1494L38.9444 10.8475C39.2012 9.58491 38.2323 8.40472 36.9425 8.40472H36.9517ZM7.29903 21.3655C6.77029 21.3655 6.31183 20.9935 6.20792 20.4751L4.56055 12.9303C4.45358 12.4028 4.85701 11.9118 5.39493 11.9118H7.0637L8.98002 21.3655H7.29903ZM35.1301 12.9303L33.4827 20.4751C33.3788 20.9935 32.9204 21.3655 32.3916 21.3655H30.732L32.6484 11.9118H34.2988C34.8367 11.9118 35.2401 12.4028 35.1332 12.9303H35.1301Z" fill="url(#paint0_linear_739_1567)"/>
                  <path d="M22.6062 32.8015H17.1039V39.8156H22.6062V32.8015Z" fill="url(#paint1_linear_739_1567)"/>
                  <path d="M27.4955 39.8157H12.2137C10.779 39.8157 9.61584 40.9762 9.61584 42.4078C9.61584 43.8395 10.779 45 12.2137 45H27.4955C28.9302 45 30.0934 43.8395 30.0934 42.4078C30.0934 40.9762 28.9302 39.8157 27.4955 39.8157Z" fill="url(#paint2_linear_739_1567)"/>
                  <path d="M35.5094 0H4.20019C3.05575 0 2.12799 0.925711 2.12799 2.06763C2.12799 3.20956 3.05575 4.13527 4.20019 4.13527H35.5094C36.6538 4.13527 37.5816 3.20956 37.5816 2.06763C37.5816 0.925711 36.6538 0 35.5094 0Z" fill="url(#paint3_linear_739_1567)"/>
                  <path d="M23.1126 32.8016H16.5965C13.5127 32.8016 10.8598 30.6333 10.2485 27.6203L5.48976 4.13525H34.2194L29.4607 27.6203C28.8494 30.6363 26.1934 32.8016 23.1126 32.8016V32.8016Z" fill="url(#paint4_linear_739_1567)"/>
                  <path d="M7.29913 21.3656C6.77038 21.3656 6.31193 20.9936 6.20801 20.4751L4.56064 12.9304C4.45367 12.4028 4.85711 11.9118 5.39502 11.9118H7.06379L6.35471 8.40479H3.04164C1.75186 8.40479 0.782998 9.58498 1.03973 10.8475L1.10086 11.1494L3.20057 21.5181L3.42674 22.6282C3.61929 23.5796 4.45672 24.2627 5.42864 24.2627H9.56388L8.97706 21.3656H7.29607H7.29913Z" fill="url(#paint5_linear_739_1567)"/>
                  <path d="M36.9518 8.40479H33.3545L32.6454 11.9118H34.2958C34.8337 11.9118 35.2372 12.4028 35.1302 12.9304L33.4828 20.4751C33.3789 20.9936 32.9205 21.3656 32.3917 21.3656H30.7321L30.1453 24.2627H34.5678C35.5398 24.2627 36.3772 23.5796 36.5697 22.6282L36.7959 21.5181L38.8956 11.1494L38.9568 10.8475C39.2135 9.58498 38.2446 8.40479 36.9548 8.40479H36.9518Z" fill="url(#paint6_linear_739_1567)"/>
                  <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_1567)">
                  <path d="M36.9517 8.40472H33.3544L34.2193 4.13527H35.5091C36.6522 4.13527 37.5813 3.20819 37.5813 2.06763C37.5813 0.927081 36.6522 0 35.5091 0H4.1999C3.05377 0 2.1277 0.927081 2.1277 2.06763C2.1277 3.20819 3.05683 4.13527 4.1999 4.13527H5.48968L6.35462 8.40472H3.04154C1.75177 8.40472 0.782906 9.58491 1.03964 10.8475L1.10077 11.1494L3.20047 21.518L3.42664 22.6281C3.61919 23.5796 4.45663 24.2627 5.42855 24.2627H9.56379L10.2423 27.6203C10.8536 30.6364 13.5095 32.8016 16.5903 32.8016H17.0977V39.8157H12.2075C10.7741 39.8157 9.60963 40.9776 9.60963 42.4078C9.60963 43.8381 10.7741 45 12.2075 45H27.4892C28.9227 45 30.0871 43.8381 30.0871 42.4078C30.0871 40.9776 28.9227 39.8157 27.4892 39.8157H22.5991V32.8016H23.1065C26.1903 32.8016 28.8432 30.6333 29.4545 27.6203L30.133 24.2627H34.5555C35.5274 24.2627 36.3649 23.5796 36.5574 22.6281L36.7836 21.518L38.8833 11.1494L38.9444 10.8475C39.2012 9.58491 38.2323 8.40472 36.9425 8.40472H36.9517ZM7.29903 21.3655C6.77029 21.3655 6.31183 20.9935 6.20792 20.4751L4.56055 12.9303C4.45358 12.4028 4.85701 11.9118 5.39493 11.9118H7.06369L8.98002 21.3655H7.29903ZM35.1301 12.9303L33.4827 20.4751C33.3788 20.9935 32.9204 21.3655 32.3916 21.3655H30.732L32.6484 11.9118H34.2988C34.8367 11.9118 35.2401 12.4028 35.1332 12.9303H35.1301Z" fill="black" fill-opacity="0.3"/>
                  <path d="M22.6063 32.8015H17.1039V39.8156H22.6063V32.8015Z" fill="url(#paint7_linear_739_1567)" fill-opacity="0.6"/>
                  <path d="M27.4954 39.8157H12.2137C10.7789 39.8157 9.61583 40.9762 9.61583 42.4078C9.61583 43.8395 10.7789 45 12.2137 45H27.4954C28.9302 45 30.0933 43.8395 30.0933 42.4078C30.0933 40.9762 28.9302 39.8157 27.4954 39.8157Z" fill="url(#paint8_linear_739_1567)" fill-opacity="0.5"/>
                  <path d="M35.5094 0H4.20019C3.05575 0 2.12799 0.925711 2.12799 2.06763C2.12799 3.20956 3.05575 4.13527 4.20019 4.13527H35.5094C36.6538 4.13527 37.5816 3.20956 37.5816 2.06763C37.5816 0.925711 36.6538 0 35.5094 0Z" fill="url(#paint9_linear_739_1567)" fill-opacity="0.7"/>
                  <path d="M23.1127 32.8016H16.5965C13.5127 32.8016 10.8598 30.6333 10.2485 27.6203L5.48978 4.13525H34.2194L29.4607 27.6203C28.8494 30.6363 26.1935 32.8016 23.1127 32.8016V32.8016Z" fill="url(#paint10_linear_739_1567)" fill-opacity="0.5"/>
                  <path d="M7.29912 21.3655C6.77038 21.3655 6.31193 20.9934 6.20801 20.475L4.56064 12.9303C4.45367 12.4027 4.8571 11.9117 5.39502 11.9117H7.06379L6.35471 8.40466H3.04164C1.75186 8.40466 0.782998 9.58486 1.03973 10.8474L1.10086 11.1493L3.20057 21.518L3.42674 22.628C3.61929 23.5795 4.45672 24.2626 5.42864 24.2626H9.56388L8.97706 21.3655H7.29607H7.29912Z" fill="url(#paint11_linear_739_1567)" fill-opacity="0.3"/>
                  <path d="M36.9518 8.40466H33.3545L32.6454 11.9117H34.2958C34.8337 11.9117 35.2372 12.4027 35.1302 12.9303L33.4828 20.475C33.3789 20.9934 32.9205 21.3655 32.3917 21.3655H30.7321L30.1453 24.2626H34.5678C35.5398 24.2626 36.3772 23.5795 36.5697 22.628L36.7959 21.518L38.8956 11.1493L38.9568 10.8474C39.2135 9.58486 38.2446 8.40466 36.9548 8.40466H36.9518Z" fill="url(#paint12_linear_739_1567)" fill-opacity="0.3"/>
                  </g>
                  <g opacity="0.1" clip-path="url(#clip1_739_1567)">
                  <path d="M36.9517 8.40472H33.3544L34.2193 4.13527H35.5091C36.6522 4.13527 37.5813 3.20819 37.5813 2.06763C37.5813 0.927081 36.6522 0 35.5091 0H4.1999C3.05377 0 2.1277 0.927081 2.1277 2.06763C2.1277 3.20819 3.05683 4.13527 4.1999 4.13527H5.48968L6.35462 8.40472H3.04154C1.75177 8.40472 0.782906 9.58491 1.03964 10.8475L1.10077 11.1494L3.20047 21.518L3.42664 22.6281C3.61919 23.5796 4.45663 24.2627 5.42855 24.2627H9.56379L10.2423 27.6203C10.8536 30.6364 13.5095 32.8016 16.5903 32.8016H17.0977V39.8157H12.2075C10.7741 39.8157 9.60963 40.9776 9.60963 42.4078C9.60963 43.8381 10.7741 45 12.2075 45H27.4892C28.9227 45 30.0871 43.8381 30.0871 42.4078C30.0871 40.9776 28.9227 39.8157 27.4892 39.8157H22.5991V32.8016H23.1065C26.1903 32.8016 28.8432 30.6333 29.4545 27.6203L30.133 24.2627H34.5555C35.5274 24.2627 36.3649 23.5796 36.5574 22.6281L36.7836 21.518L38.8833 11.1494L38.9444 10.8475C39.2012 9.58491 38.2323 8.40472 36.9425 8.40472H36.9517ZM7.29903 21.3655C6.77029 21.3655 6.31183 20.9935 6.20792 20.4751L4.56055 12.9303C4.45358 12.4028 4.85701 11.9118 5.39493 11.9118H7.06369L8.98002 21.3655H7.29903ZM35.1301 12.9303L33.4827 20.4751C33.3788 20.9935 32.9204 21.3655 32.3916 21.3655H30.732L32.6484 11.9118H34.2988C34.8367 11.9118 35.2401 12.4028 35.1332 12.9303H35.1301Z" fill="white"/>
                  <path d="M22.6063 32.8015H17.1039V39.8156H22.6063V32.8015Z" fill="white"/>
                  <path d="M27.4954 39.8157H12.2137C10.7789 39.8157 9.61583 40.9762 9.61583 42.4078C9.61583 43.8395 10.7789 45 12.2137 45H27.4954C28.9302 45 30.0933 43.8395 30.0933 42.4078C30.0933 40.9762 28.9302 39.8157 27.4954 39.8157Z" fill="white"/>
                  <path d="M35.5094 0H4.20019C3.05575 0 2.12799 0.925711 2.12799 2.06763C2.12799 3.20956 3.05575 4.13527 4.20019 4.13527H35.5094C36.6538 4.13527 37.5816 3.20956 37.5816 2.06763C37.5816 0.925711 36.6538 0 35.5094 0Z" fill="white"/>
                  <path d="M23.1127 32.8016H16.5965C13.5127 32.8016 10.8598 30.6333 10.2485 27.6203L5.48978 4.13525H34.2194L29.4607 27.6203C28.8494 30.6363 26.1935 32.8016 23.1127 32.8016V32.8016Z" fill="white"/>
                  <path d="M7.29912 21.3655C6.77038 21.3655 6.31193 20.9934 6.20801 20.475L4.56064 12.9303C4.45367 12.4027 4.8571 11.9117 5.39502 11.9117H7.06379L6.35471 8.40466H3.04164C1.75186 8.40466 0.782998 9.58486 1.03973 10.8474L1.10086 11.1493L3.20057 21.518L3.42674 22.628C3.61929 23.5795 4.45672 24.2626 5.42864 24.2626H9.56388L8.97706 21.3655H7.29607H7.29912Z" fill="white"/>
                  <path d="M36.9518 8.40466H33.3545L32.6454 11.9117H34.2958C34.8337 11.9117 35.2372 12.4027 35.1302 12.9303L33.4828 20.475C33.3789 20.9934 32.9205 21.3655 32.3917 21.3655H30.7321L30.1453 24.2626H34.5678C35.5398 24.2626 36.3772 23.5795 36.5697 22.628L36.7959 21.518L38.8956 11.1493L38.9568 10.8474C39.2135 9.58486 38.2446 8.40466 36.9548 8.40466H36.9518Z" fill="white"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_739_1567" x1="0.998199" y1="22.9787" x2="38.9859" y2="22.9787" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_739_1567" x1="17.1039" y1="36.3832" x2="22.6062" y2="36.3832" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_739_1567" x1="9.61584" y1="42.463" x2="30.0934" y2="42.463" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_739_1567" x1="2.12799" y1="2.11163" x2="37.5816" y2="2.11163" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_739_1567" x1="5.48976" y1="18.7734" x2="34.2194" y2="18.7734" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint5_linear_739_1567" x1="0.998291" y1="16.5025" x2="9.56388" y2="16.5025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint6_linear_739_1567" x1="30.1453" y1="16.5025" x2="38.9982" y2="16.5025" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CFCFCF" stop-opacity="0.5"/>
                  <stop offset="0.510417" stop-color="#8F8F8F" stop-opacity="0.3"/>
                  <stop offset="1" stop-opacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint7_linear_739_1567" x1="19.8551" y1="32.8015" x2="19.8551" y2="39.8156" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint8_linear_739_1567" x1="19.8546" y1="39.8157" x2="19.8546" y2="45" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint9_linear_739_1567" x1="19.8548" y1="0" x2="19.8548" y2="4.13527" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint10_linear_739_1567" x1="19.8546" y1="4.13525" x2="19.8546" y2="32.8016" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint11_linear_739_1567" x1="7.99879" y1="15.9999" x2="1.99977" y2="16.9995" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint12_linear_739_1567" x1="31.9946" y1="16.4999" x2="37.4937" y2="17.4995" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <clipPath id="clip0_739_1567">
                  <rect width="37.9934" height="45" fill="white" transform="translate(1)"/>
                  </clipPath>
                  <clipPath id="clip1_739_1567">
                  <rect width="37.9934" height="45" fill="white" transform="translate(1)"/>
                  </clipPath>
                  </defs>
              </svg>
          </g>
          <!-- Bar Background Base -->
          <g id="barBackgroundBase0${index}">
              <rect x="12" y="110" width="100" height="2" rx="1" fill="#8D8D8D" fill-opacity="0.3"/>
          </g>
      </g>
      <g id="activeGroup0${index}">
${
  grade === 'S'
    ? `<g id="backgroundInnerLineActiveS0${index}" opacity="0">
  <rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorS0${index})" stroke-width="0.5"/>
  <rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#B7D4FF" stroke-opacity="0.5" stroke-width="0.5"/>
</g>`
    : grade === 'A+'
    ? `<g id="backgroundInnerLineActiveA+0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorA0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#B7D4FF" stroke-opacity="0.5" stroke-width="0.5"/>
</g>`
    : grade === 'A'
    ? `<g id="backgroundInnerLineActiveA0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorA0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#B7D4FF" stroke-opacity="0.5" stroke-width="0.5"/>
</g>`
    : grade === 'A-'
    ? `<g id="backgroundInnerLineActiveA-0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorA0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#B7D4FF" stroke-opacity="0.5" stroke-width="0.5"/>
</g>`
    : grade === 'B+'
    ? `<g id="backgroundInnerLineActiveB+0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorB0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.5"/>
</g>`
    : grade === 'B'
    ? `<g id="backgroundInnerLineActiveB0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorB0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.5"/>
</g>`
    : grade === 'B-'
    ? `<g id="backgroundInnerLineActiveB-0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorB0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.5"/>
</g>`
    : grade === 'C+'
    ? `<g id="backgroundInnerLineActiveC+0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorC0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.5"/>
</g>`
    : grade === 'C'
    ? `<g id="backgroundInnerLineActiveC0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorC0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.5"/>
</g>`
    : `<g id="backgroundInnerLineActiveC-0${index}" opacity="0">
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="url(#innerLineColorC0${index})" stroke-width="0.5"/>
<rect x="4.25" y="4.25" width="115.5" height="115.5" rx="3.75" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.5"/>
</g>`
}
${
  grade === 'S'
    ? `<g id="trophySVGS0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_739_2253)">
      <path d="M13.0349 35.838C13.5413 35.5864 13.5265 35.1338 13.6345 34.7637C14.2262 32.721 15.6766 31.3941 17.4125 30.315C18.2505 29.7934 18.6735 30.1275 18.6097 31.0386C18.4134 33.8623 17.754 36.448 14.813 37.7613C14.2321 38.0206 13.9838 38.4082 14.2998 39.024C14.3371 39.0959 14.3479 39.1862 14.3979 39.2474C16.1456 41.3931 16.7109 44.2809 18.8511 46.1837C19.1514 46.4508 19.3957 46.7937 19.6077 47.1376C19.7431 47.3571 20.0051 47.6213 19.7607 47.9049C19.5851 48.1089 19.2995 48.0574 19.0611 48.0108C16.7187 47.5562 14.4176 47.4931 12.2008 48.58C11.6395 48.8549 11.3088 48.4178 11.1646 48.003C10.25 45.3804 8.51506 43.3639 6.45138 41.5718C6.21293 41.3649 5.90186 41.1075 6.02943 40.7539C6.16681 40.3751 6.57895 40.4587 6.89297 40.4548C9.49145 40.4256 11.9408 40.9861 14.2086 42.2731C14.5491 42.4664 14.8248 42.818 15.4146 42.7539C15.0515 42.1245 14.7502 41.5232 14.3793 40.9686C13.0074 38.921 12.0997 36.7219 11.5963 34.2887C11.0399 31.601 11.1283 28.9823 11.5757 26.3121C12.1635 22.8007 13.5275 19.607 15.495 16.6677C16.5009 15.1651 16.8188 13.3234 18.0013 11.9325C19.536 10.1277 21.481 9.15056 23.9018 9.2137C24.4661 9.22827 24.9243 9.5828 24.417 10.016C23.7134 10.6153 23.4808 11.4254 23.0628 12.1432C21.8911 14.1578 20.1591 15.4506 17.9444 16.0704C16.9797 16.3404 16.3733 16.9028 15.9239 17.6954C14.8699 19.5536 13.7375 21.3816 13.238 23.7643C14.4156 22.893 15.3812 22.1635 16.5097 21.675C17.4792 21.2553 18.4851 21.1582 19.5095 21.0863C19.799 21.0659 20.1022 21.0125 20.2543 21.3467C20.3682 21.5963 20.2651 21.8207 20.1169 22.0266C18.5341 24.2296 16.5784 25.8896 13.713 26.045C12.769 26.0965 12.3873 26.5093 12.2852 27.3514C12.2116 27.9566 12.1096 28.5588 12.0418 29.164C12.0055 29.4894 11.979 29.8837 12.3578 30.0032C12.768 30.1324 12.9005 29.7361 13.0555 29.4592C14.0349 27.7167 15.4882 26.5248 17.3517 25.8002C17.8187 25.6186 18.331 25.4039 18.7431 25.7818C19.1553 26.1606 18.8207 26.6249 18.6558 27.0212C17.6303 29.4845 15.9778 31.299 13.2606 31.9206C12.4295 32.111 12.1488 32.5801 12.3019 33.3232C12.4766 34.1683 12.4815 35.0784 13.0339 35.838H13.0349Z" fill="url(#paint0_linear_739_2253)"/>
      <path d="M13.0349 35.838C13.5413 35.5864 13.5265 35.1338 13.6345 34.7637C14.2262 32.721 15.6766 31.3941 17.4125 30.315C18.2505 29.7934 18.6735 30.1275 18.6097 31.0386C18.4134 33.8623 17.754 36.448 14.813 37.7613C14.2321 38.0206 13.9838 38.4082 14.2998 39.024C14.3371 39.0959 14.3479 39.1862 14.3979 39.2474C16.1456 41.3931 16.7109 44.2809 18.8511 46.1837C19.1514 46.4508 19.3957 46.7937 19.6077 47.1376C19.7431 47.3571 20.0051 47.6213 19.7607 47.9049C19.5851 48.1089 19.2995 48.0574 19.0611 48.0108C16.7187 47.5562 14.4176 47.4931 12.2008 48.58C11.6395 48.8549 11.3088 48.4178 11.1646 48.003C10.25 45.3804 8.51506 43.3639 6.45138 41.5718C6.21293 41.3649 5.90186 41.1075 6.02943 40.7539C6.16681 40.3751 6.57895 40.4587 6.89297 40.4548C9.49145 40.4256 11.9408 40.9861 14.2086 42.2731C14.5491 42.4664 14.8248 42.818 15.4146 42.7539C15.0515 42.1245 14.7502 41.5232 14.3793 40.9686C13.0074 38.921 12.0997 36.7219 11.5963 34.2887C11.0399 31.601 11.1283 28.9823 11.5757 26.3121C12.1635 22.8007 13.5275 19.607 15.495 16.6677C16.5009 15.1651 16.8188 13.3234 18.0013 11.9325C19.536 10.1277 21.481 9.15056 23.9018 9.2137C24.4661 9.22827 24.9243 9.5828 24.417 10.016C23.7134 10.6153 23.4808 11.4254 23.0628 12.1432C21.8911 14.1578 20.1591 15.4506 17.9444 16.0704C16.9797 16.3404 16.3733 16.9028 15.9239 17.6954C14.8699 19.5536 13.7375 21.3816 13.238 23.7643C14.4156 22.893 15.3812 22.1635 16.5097 21.675C17.4792 21.2553 18.4851 21.1582 19.5095 21.0863C19.799 21.0659 20.1022 21.0125 20.2543 21.3467C20.3682 21.5963 20.2651 21.8207 20.1169 22.0266C18.5341 24.2296 16.5784 25.8896 13.713 26.045C12.769 26.0965 12.3873 26.5093 12.2852 27.3514C12.2116 27.9566 12.1096 28.5588 12.0418 29.164C12.0055 29.4894 11.979 29.8837 12.3578 30.0032C12.768 30.1324 12.9005 29.7361 13.0555 29.4592C14.0349 27.7167 15.4882 26.5248 17.3517 25.8002C17.8187 25.6186 18.331 25.4039 18.7431 25.7818C19.1553 26.1606 18.8207 26.6249 18.6558 27.0212C17.6303 29.4845 15.9778 31.299 13.2606 31.9206C12.4295 32.111 12.1488 32.5801 12.3019 33.3232C12.4766 34.1683 12.4815 35.0784 13.0339 35.838H13.0349Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M46.9869 41.7058C46.4001 43.1713 45.5437 43.349 44.4179 42.2391C42.0451 39.903 41.4151 37.1241 42.2423 33.9594C42.4464 33.1785 42.837 33.0425 43.4778 33.4951C43.8948 33.7904 44.303 34.0974 44.9919 34.6005C44.3708 33.2222 44.0293 32.1071 43.9115 30.9522C43.7869 29.7215 44.2697 29.4146 45.4345 30.044C47.2185 31.0085 48.5217 32.4374 49.2321 34.348C49.4529 34.9405 49.6246 35.5505 49.8749 36.3266C50.4666 34.9968 50.6697 33.7671 50.8513 32.5335C50.9464 31.8886 50.6246 31.5418 49.9985 31.4243C47.3215 30.9201 45.6033 29.2242 44.3315 26.9639C44.1029 26.5579 43.8821 26.1314 44.1411 25.706C44.4542 25.1912 44.9487 25.4709 45.3658 25.5788C47.6238 26.1606 49.2125 27.6516 50.5814 29.4631C50.8699 28.8026 50.5686 26.3704 50.184 26.0042C49.8857 25.7196 49.501 25.7827 49.134 25.7643C46.4501 25.6244 44.3845 24.3714 42.782 22.2927C42.5877 22.0402 42.2884 21.8071 42.5063 21.4399C42.678 21.1514 43.0009 21.1893 43.2825 21.1776C45.6111 21.0824 47.5776 22.0004 49.5893 23.5234C49.292 22.3733 48.8945 21.5205 48.4068 20.7017C48.1851 20.3297 47.8485 20.2947 47.4461 20.3481C44.7554 20.7027 42.5524 19.6759 40.6173 17.9343C40.2532 17.607 39.8224 17.2204 39.9696 16.6988C40.1198 16.1655 40.7174 16.3083 41.1393 16.2248C43.7624 15.7061 45.4737 17.2165 47.1115 18.8785C47.2185 18.9873 47.2999 19.1213 47.4638 19.337C47.1233 17.5235 45.6268 15.9101 43.9998 15.4487C42.0009 14.8814 40.368 13.8081 39.218 12.048C38.796 11.4021 38.2622 10.829 37.7902 10.2151C37.5919 9.95774 37.3466 9.67216 37.4977 9.33511C37.6538 8.9864 38.0384 9.01263 38.3642 9.00388C41.155 8.92909 43.4886 10.1112 44.7682 12.4036C46.2333 15.0291 47.978 17.4943 49.2723 20.2189C52.1731 26.3247 52.9179 32.4976 49.9602 38.7899C49.4137 39.9526 48.8592 41.1444 47.9044 42.0808C47.2401 42.7325 47.0232 42.4557 46.9791 41.7C47.8279 40.7083 48.4628 39.5786 49.0918 38.448C49.3381 38.0051 49.5589 37.4679 48.7837 37.3377C47.8132 37.1746 47.0222 36.6743 46.1979 36.1401C47.0448 37.9458 47.1498 39.8088 46.9889 41.7078L46.9869 41.7058Z" fill="url(#paint1_linear_739_2253)"/>
      <path d="M46.9869 41.7058C46.4001 43.1713 45.5437 43.349 44.4179 42.2391C42.0451 39.903 41.4151 37.1241 42.2423 33.9594C42.4464 33.1785 42.837 33.0425 43.4778 33.4951C43.8948 33.7904 44.303 34.0974 44.9919 34.6005C44.3708 33.2222 44.0293 32.1071 43.9115 30.9522C43.7869 29.7215 44.2697 29.4146 45.4345 30.044C47.2185 31.0085 48.5217 32.4374 49.2321 34.348C49.4529 34.9405 49.6246 35.5505 49.8749 36.3266C50.4666 34.9968 50.6697 33.7671 50.8513 32.5335C50.9464 31.8886 50.6246 31.5418 49.9985 31.4243C47.3215 30.9201 45.6033 29.2242 44.3315 26.9639C44.1029 26.5579 43.8821 26.1314 44.1411 25.706C44.4542 25.1912 44.9487 25.4709 45.3658 25.5788C47.6238 26.1606 49.2125 27.6516 50.5814 29.4631C50.8699 28.8026 50.5686 26.3704 50.184 26.0042C49.8857 25.7196 49.501 25.7827 49.134 25.7643C46.4501 25.6244 44.3845 24.3714 42.782 22.2927C42.5877 22.0402 42.2884 21.8071 42.5063 21.4399C42.678 21.1514 43.0009 21.1893 43.2825 21.1776C45.6111 21.0824 47.5776 22.0004 49.5893 23.5234C49.292 22.3733 48.8945 21.5205 48.4068 20.7017C48.1851 20.3297 47.8485 20.2947 47.4461 20.3481C44.7554 20.7027 42.5524 19.6759 40.6173 17.9343C40.2532 17.607 39.8224 17.2204 39.9696 16.6988C40.1198 16.1655 40.7174 16.3083 41.1393 16.2248C43.7624 15.7061 45.4737 17.2165 47.1115 18.8785C47.2185 18.9873 47.2999 19.1213 47.4638 19.337C47.1233 17.5235 45.6268 15.9101 43.9998 15.4487C42.0009 14.8814 40.368 13.8081 39.218 12.048C38.796 11.4021 38.2622 10.829 37.7902 10.2151C37.5919 9.95774 37.3466 9.67216 37.4977 9.33511C37.6538 8.9864 38.0384 9.01263 38.3642 9.00388C41.155 8.92909 43.4886 10.1112 44.7682 12.4036C46.2333 15.0291 47.978 17.4943 49.2723 20.2189C52.1731 26.3247 52.9179 32.4976 49.9602 38.7899C49.4137 39.9526 48.8592 41.1444 47.9044 42.0808C47.2401 42.7325 47.0232 42.4557 46.9791 41.7C47.8279 40.7083 48.4628 39.5786 49.0918 38.448C49.3381 38.0051 49.5589 37.4679 48.7837 37.3377C47.8132 37.1746 47.0222 36.6743 46.1979 36.1401C47.0448 37.9458 47.1498 39.8088 46.9889 41.7078L46.9869 41.7058Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M53.2682 39.5718C53.8324 39.8438 54.2917 39.6019 54.7529 39.5242C55.6017 39.3805 56.4397 39.159 57.3121 39.2251C57.5476 39.2425 57.8459 39.1639 57.9676 39.431C58.0942 39.7097 57.8185 39.869 57.6605 40.0351C56.7302 41.0065 55.7401 41.9176 54.8648 42.9472C53.7402 44.2711 52.8207 45.6903 52.3428 47.358C52.1485 48.0351 51.8286 48.3158 51.0985 48.0671C49.1055 47.3891 47.0575 47.5125 45.0076 47.7223C44.6063 47.7631 44.1284 47.9234 43.8644 47.5309C43.6053 47.1473 44.0391 46.85 44.2285 46.58C46.1184 43.9001 48.5707 41.8632 51.5548 40.4693C52.0975 40.2158 52.2987 40.1527 52.0308 39.3882C51.5362 37.9759 52.0239 36.4995 52.4586 35.0959C53.0729 33.1066 54.2397 31.4466 55.7783 30.0673C56.6468 29.2893 57.0295 29.466 57.1394 30.5986C57.4937 34.2547 56.7165 37.4553 53.2672 39.5708L53.2682 39.5718Z" fill="url(#paint2_linear_739_2253)"/>
      <path d="M53.2682 39.5718C53.8324 39.8438 54.2917 39.6019 54.7529 39.5242C55.6017 39.3805 56.4397 39.159 57.3121 39.2251C57.5476 39.2425 57.8459 39.1639 57.9676 39.431C58.0942 39.7097 57.8185 39.869 57.6605 40.0351C56.7302 41.0065 55.7401 41.9176 54.8648 42.9472C53.7402 44.2711 52.8207 45.6903 52.3428 47.358C52.1485 48.0351 51.8286 48.3158 51.0985 48.0671C49.1055 47.3891 47.0575 47.5125 45.0076 47.7223C44.6063 47.7631 44.1284 47.9234 43.8644 47.5309C43.6053 47.1473 44.0391 46.85 44.2285 46.58C46.1184 43.9001 48.5707 41.8632 51.5548 40.4693C52.0975 40.2158 52.2987 40.1527 52.0308 39.3882C51.5362 37.9759 52.0239 36.4995 52.4586 35.0959C53.0729 33.1066 54.2397 31.4466 55.7783 30.0673C56.6468 29.2893 57.0295 29.466 57.1394 30.5986C57.4937 34.2547 56.7165 37.4553 53.2672 39.5708L53.2682 39.5718Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M21.6664 36.8948C21.7783 39.4407 20.8706 41.5737 19.0365 43.3251C18.0199 44.2964 17.6343 44.1682 17.2447 42.819C16.2791 39.4834 16.9503 36.5898 19.5812 34.2081C20.4113 33.4563 21.2297 33.635 21.478 34.7219C21.6389 35.4242 21.6105 36.1692 21.6664 36.8948V36.8948Z" fill="url(#paint3_linear_739_2253)"/>
      <path d="M21.6664 36.8948C21.7783 39.4407 20.8706 41.5737 19.0365 43.3251C18.0199 44.2964 17.6343 44.1682 17.2447 42.819C16.2791 39.4834 16.9503 36.5898 19.5812 34.2081C20.4113 33.4563 21.2297 33.635 21.478 34.7219C21.6389 35.4242 21.6105 36.1692 21.6664 36.8948V36.8948Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M11.6209 38.6199C11.6523 40.1964 11.1685 40.5266 9.69164 39.8564C7.19718 38.7248 6.36013 36.5276 6.05691 34.0566C5.95485 33.2222 6.02649 32.3548 6.11382 31.5126C6.17368 30.9405 6.5083 30.6268 7.14419 30.9939C9.34229 32.2664 11.5698 36.0517 11.6209 38.618V38.6199Z" fill="url(#paint4_linear_739_2253)"/>
      <path d="M11.6209 38.6199C11.6523 40.1964 11.1685 40.5266 9.69164 39.8564C7.19718 38.7248 6.36013 36.5276 6.05691 34.0566C5.95485 33.2222 6.02649 32.3548 6.11382 31.5126C6.17368 30.9405 6.5083 30.6268 7.14419 30.9939C9.34229 32.2664 11.5698 36.0517 11.6209 38.618V38.6199Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M52.5901 27.9206C52.5155 25.5836 53.3349 23.5555 54.7558 21.7381C55.4633 20.8338 55.8686 20.8804 56.3092 21.878C57.6791 24.9843 56.7812 28.2859 54.0199 30.2956C53.2672 30.8434 52.8462 30.686 52.6951 29.7361C52.5999 29.1397 52.6215 28.5258 52.5901 27.9206Z" fill="url(#paint5_linear_739_2253)"/>
      <path d="M52.5901 27.9206C52.5155 25.5836 53.3349 23.5555 54.7558 21.7381C55.4633 20.8338 55.8686 20.8804 56.3092 21.878C57.6791 24.9843 56.7812 28.2859 54.0199 30.2956C53.2672 30.8434 52.8462 30.686 52.6951 29.7361C52.5999 29.1397 52.6215 28.5258 52.5901 27.9206Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M10.5434 29.5875C10.3962 30.2655 10.878 31.2922 10.1499 31.5845C9.43749 31.8701 8.82025 30.9852 8.21969 30.5287C5.77822 28.6725 5.62612 25.197 6.49555 22.8697C6.84293 21.9392 7.30709 22.1898 7.83502 22.7434C9.66515 24.6638 10.5473 26.9425 10.5424 29.5875H10.5434Z" fill="url(#paint6_linear_739_2253)"/>
      <path d="M10.5434 29.5875C10.3962 30.2655 10.878 31.2922 10.1499 31.5845C9.43749 31.8701 8.82025 30.9852 8.21969 30.5287C5.77822 28.6725 5.62612 25.197 6.49555 22.8697C6.84293 21.9392 7.30709 22.1898 7.83502 22.7434C9.66515 24.6638 10.5473 26.9425 10.5424 29.5875H10.5434Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M54.485 18.3695C54.43 20.2549 53.9413 21.6934 53.0179 22.994C52.5224 23.6915 52.121 23.7342 51.6726 22.9445C50.5186 20.9105 50.7717 17.4943 52.2398 15.6478C52.912 14.8028 53.3467 14.8377 53.8148 15.8411C54.2308 16.7309 54.3996 17.6954 54.485 18.3695Z" fill="url(#paint7_linear_739_2253)"/>
      <path d="M54.485 18.3695C54.43 20.2549 53.9413 21.6934 53.0179 22.994C52.5224 23.6915 52.121 23.7342 51.6726 22.9445C50.5186 20.9105 50.7717 17.4943 52.2398 15.6478C52.912 14.8028 53.3467 14.8377 53.8148 15.8411C54.2308 16.7309 54.3996 17.6954 54.485 18.3695Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M11.7769 20.3569C11.7789 21.5749 11.8181 22.5443 11.3618 23.4642C10.8967 24.4005 10.3295 24.2043 9.89674 23.5477C8.44834 21.3496 7.65349 19.03 8.86146 16.4336C9.30796 15.4749 9.77702 15.404 10.4463 16.2899C11.4079 17.5623 12.0183 18.9572 11.7759 20.3569H11.7769Z" fill="url(#paint8_linear_739_2253)"/>
      <path d="M11.7769 20.3569C11.7789 21.5749 11.8181 22.5443 11.3618 23.4642C10.8967 24.4005 10.3295 24.2043 9.89674 23.5477C8.44834 21.3496 7.65349 19.03 8.86146 16.4336C9.30796 15.4749 9.77702 15.404 10.4463 16.2899C11.4079 17.5623 12.0183 18.9572 11.7759 20.3569H11.7769Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M15.6059 21.1232C15.2183 21.1087 14.6335 21.0912 14.9347 20.4142C15.811 18.4453 18.9198 15.8741 21.2739 16.386C21.741 16.4871 22.3622 16.421 22.5692 16.9329C22.789 17.4778 22.2326 17.7964 21.9196 18.1403C19.6989 20.5725 17.7206 20.927 15.6069 21.1242L15.6059 21.1232Z" fill="url(#paint9_linear_739_2253)"/>
      <path d="M15.6059 21.1232C15.2183 21.1087 14.6335 21.0912 14.9347 20.4142C15.811 18.4453 18.9198 15.8741 21.2739 16.386C21.741 16.4871 22.3622 16.421 22.5692 16.9329C22.789 17.4778 22.2326 17.7964 21.9196 18.1403C19.6989 20.5725 17.7206 20.927 15.6069 21.1242L15.6059 21.1232Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M50.336 15.9198C50.1368 16.422 50.5667 17.5633 49.7561 17.7848C48.9249 18.0121 48.5579 16.9203 48.1949 16.2986C47.1959 14.59 46.5512 12.7707 47.0114 10.7329C47.2391 9.72753 47.6973 9.77124 48.3303 10.3939C49.8248 11.8635 50.3262 13.7061 50.336 15.9198V15.9198Z" fill="url(#paint10_linear_739_2253)"/>
      <path d="M50.336 15.9198C50.1368 16.422 50.5667 17.5633 49.7561 17.7848C48.9249 18.0121 48.5579 16.9203 48.1949 16.2986C47.1959 14.59 46.5512 12.7707 47.0114 10.7329C47.2391 9.72753 47.6973 9.77124 48.3303 10.3939C49.8248 11.8635 50.3262 13.7061 50.336 15.9198V15.9198Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M15.6923 12.3919C15.8091 14.4453 14.9936 16.0228 14.0064 17.5361C13.817 17.8265 13.5943 18.2209 13.1527 18.083C12.8024 17.9732 12.7896 17.5788 12.717 17.269C12.2136 15.1214 12.4609 13.0835 13.6875 11.2146C14.0113 10.7202 14.3813 10.0422 15.0829 10.2453C15.7198 10.4298 15.6324 11.1632 15.6874 11.7159C15.7149 11.9966 15.6923 12.2821 15.6923 12.3919V12.3919Z" fill="url(#paint11_linear_739_2253)"/>
      <path d="M15.6923 12.3919C15.8091 14.4453 14.9936 16.0228 14.0064 17.5361C13.817 17.8265 13.5943 18.2209 13.1527 18.083C12.8024 17.9732 12.7896 17.5788 12.717 17.269C12.2136 15.1214 12.4609 13.0835 13.6875 11.2146C14.0113 10.7202 14.3813 10.0422 15.0829 10.2453C15.7198 10.4298 15.6324 11.1632 15.6874 11.7159C15.7149 11.9966 15.6923 12.2821 15.6923 12.3919V12.3919Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M27.4952 50.7403H26.3446C26.1914 50.7403 26.0677 50.8634 26.0677 51.0144V52.1532C26.0677 52.3049 26.1921 52.4273 26.3446 52.4273H27.4952C27.6483 52.4273 27.7721 52.3042 27.7721 52.1532V51.0144C27.7721 50.8627 27.6477 50.7403 27.4952 50.7403Z" fill="url(#paint12_linear_739_2253)"/>
      <path d="M27.4952 50.7403H26.3446C26.1914 50.7403 26.0677 50.8634 26.0677 51.0144V52.1532C26.0677 52.3049 26.1921 52.4273 26.3446 52.4273H27.4952C27.6483 52.4273 27.7721 52.3042 27.7721 52.1532V51.0144C27.7721 50.8627 27.6477 50.7403 27.4952 50.7403Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M29.5411 50.7403H28.3906C28.2374 50.7403 28.1137 50.8634 28.1137 51.0144V52.1532C28.1137 52.3049 28.2381 52.4273 28.3906 52.4273H29.5411C29.6943 52.4273 29.818 52.3042 29.818 52.1532V51.0144C29.818 50.8627 29.6943 50.7403 29.5411 50.7403Z" fill="url(#paint13_linear_739_2253)"/>
      <path d="M29.5411 50.7403H28.3906C28.2374 50.7403 28.1137 50.8634 28.1137 51.0144V52.1532C28.1137 52.3049 28.2381 52.4273 28.3906 52.4273H29.5411C29.6943 52.4273 29.818 52.3042 29.818 52.1532V51.0144C29.818 50.8627 29.6943 50.7403 29.5411 50.7403Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M31.5865 50.7403H30.436C30.2828 50.7403 30.1591 50.8634 30.1591 51.0144V52.1532C30.1591 52.3049 30.2828 52.4273 30.436 52.4273H31.5865C31.7397 52.4273 31.8634 52.3042 31.8634 52.1532V51.0144C31.8634 50.8627 31.739 50.7403 31.5865 50.7403Z" fill="url(#paint14_linear_739_2253)"/>
      <path d="M31.5865 50.7403H30.436C30.2828 50.7403 30.1591 50.8634 30.1591 51.0144V52.1532C30.1591 52.3049 30.2828 52.4273 30.436 52.4273H31.5865C31.7397 52.4273 31.8634 52.3042 31.8634 52.1532V51.0144C31.8634 50.8627 31.739 50.7403 31.5865 50.7403Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M33.6318 50.7403H32.4812C32.3281 50.7403 32.2043 50.8634 32.2043 51.0144V52.1532C32.2043 52.3049 32.3287 52.4273 32.4812 52.4273H33.6318C33.785 52.4273 33.9087 52.3042 33.9087 52.1532V51.0144C33.9087 50.8627 33.7843 50.7403 33.6318 50.7403Z" fill="url(#paint15_linear_739_2253)"/>
      <path d="M33.6318 50.7403H32.4812C32.3281 50.7403 32.2043 50.8634 32.2043 51.0144V52.1532C32.2043 52.3049 32.3287 52.4273 32.4812 52.4273H33.6318C33.785 52.4273 33.9087 52.3042 33.9087 52.1532V51.0144C33.9087 50.8627 33.7843 50.7403 33.6318 50.7403Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M35.6778 50.7403H34.5272C34.374 50.7403 34.2503 50.8634 34.2503 51.0144V52.1532C34.2503 52.3049 34.3747 52.4273 34.5272 52.4273H35.6778C35.831 52.4273 35.9547 52.3042 35.9547 52.1532V51.0144C35.9547 50.8627 35.8303 50.7403 35.6778 50.7403Z" fill="url(#paint16_linear_739_2253)"/>
      <path d="M35.6778 50.7403H34.5272C34.374 50.7403 34.2503 50.8634 34.2503 51.0144V52.1532C34.2503 52.3049 34.3747 52.4273 34.5272 52.4273H35.6778C35.831 52.4273 35.9547 52.3042 35.9547 52.1532V51.0144C35.9547 50.8627 35.8303 50.7403 35.6778 50.7403Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M31.5865 52.7654H30.436C30.2828 52.7654 30.1591 52.8885 30.1591 53.0395V54.1783C30.1591 54.33 30.2828 54.4524 30.436 54.4524H31.5865C31.7397 54.4524 31.8634 54.3293 31.8634 54.1783V53.0395C31.8634 52.8878 31.739 52.7654 31.5865 52.7654Z" fill="url(#paint17_linear_739_2253)"/>
      <path d="M31.5865 52.7654H30.436C30.2828 52.7654 30.1591 52.8885 30.1591 53.0395V54.1783C30.1591 54.33 30.2828 54.4524 30.436 54.4524H31.5865C31.7397 54.4524 31.8634 54.3293 31.8634 54.1783V53.0395C31.8634 52.8878 31.739 52.7654 31.5865 52.7654Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M33.6318 52.7654H32.4812C32.3281 52.7654 32.2043 52.8885 32.2043 53.0395V54.1783C32.2043 54.33 32.3287 54.4524 32.4812 54.4524H33.6318C33.785 54.4524 33.9087 54.3293 33.9087 54.1783V53.0395C33.9087 52.8878 33.7843 52.7654 33.6318 52.7654Z" fill="url(#paint18_linear_739_2253)"/>
      <path d="M33.6318 52.7654H32.4812C32.3281 52.7654 32.2043 52.8885 32.2043 53.0395V54.1783C32.2043 54.33 32.3287 54.4524 32.4812 54.4524H33.6318C33.785 54.4524 33.9087 54.3293 33.9087 54.1783V53.0395C33.9087 52.8878 33.7843 52.7654 33.6318 52.7654Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M29.5411 52.7654H26.3453C26.1921 52.7654 26.0684 52.8885 26.0684 53.0395V54.1783C26.0684 54.33 26.1927 54.4524 26.3453 54.4524H29.5411C29.6943 54.4524 29.818 54.3293 29.818 54.1783V53.0395C29.818 52.8878 29.6943 52.7654 29.5411 52.7654V52.7654Z" fill="url(#paint19_linear_739_2253)"/>
      <path d="M29.5411 52.7654H26.3453C26.1921 52.7654 26.0684 52.8885 26.0684 53.0395V54.1783C26.0684 54.33 26.1927 54.4524 26.3453 54.4524H29.5411C29.6943 54.4524 29.818 54.3293 29.818 54.1783V53.0395C29.818 52.8878 29.6943 52.7654 29.5411 52.7654V52.7654Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M37.7231 50.7403H36.5726C36.4194 50.7403 36.2957 50.8634 36.2957 51.0144V52.7648H34.5272C34.374 52.7648 34.2503 52.8879 34.2503 53.0389V54.1778C34.2503 54.3294 34.3747 54.4519 34.5272 54.4519H37.7231C37.8763 54.4519 38 54.3288 38 54.1778V51.0144C38 50.8627 37.8763 50.7403 37.7231 50.7403V50.7403Z" fill="url(#paint20_linear_739_2253)"/>
      <path d="M37.7231 50.7403H36.5726C36.4194 50.7403 36.2957 50.8634 36.2957 51.0144V52.7648H34.5272C34.374 52.7648 34.2503 52.8879 34.2503 53.0389V54.1778C34.2503 54.3294 34.3747 54.4519 34.5272 54.4519H37.7231C37.8763 54.4519 38 54.3288 38 54.1778V51.0144C38 50.8627 37.8763 50.7403 37.7231 50.7403V50.7403Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M35.6778 54.79H28.3906C28.2374 54.79 28.1137 54.9124 28.1137 55.0641V56.2029C28.1137 56.3546 28.2381 56.477 28.3906 56.477H35.6778C35.831 56.477 35.9547 56.3539 35.9547 56.2029V55.0641C35.9547 54.9124 35.831 54.79 35.6778 54.79Z" fill="url(#paint21_linear_739_2253)"/>
      <path d="M35.6778 54.79H28.3906C28.2374 54.79 28.1137 54.9124 28.1137 55.0641V56.2029C28.1137 56.3546 28.2381 56.477 28.3906 56.477H35.6778C35.831 56.477 35.9547 56.3539 35.9547 56.2029V55.0641C35.9547 54.9124 35.831 54.79 35.6778 54.79Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M27.4952 54.79H26.3446C26.1914 54.79 26.0677 54.9124 26.0677 55.0641V56.2029C26.0677 56.3546 26.1921 56.477 26.3446 56.477H27.4952C27.6483 56.477 27.7721 56.3539 27.7721 56.2029V55.0641C27.7721 54.9124 27.6477 54.79 27.4952 54.79Z" fill="url(#paint22_linear_739_2253)"/>
      <path d="M27.4952 54.79H26.3446C26.1914 54.79 26.0677 54.9124 26.0677 55.0641V56.2029C26.0677 56.3546 26.1921 56.477 26.3446 56.477H27.4952C27.6483 56.477 27.7721 56.3539 27.7721 56.2029V55.0641C27.7721 54.9124 27.6477 54.79 27.4952 54.79Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M37.7231 54.79H36.5726C36.4194 54.79 36.2957 54.9124 36.2957 55.0641V56.2029C36.2957 56.3546 36.42 56.477 36.5726 56.477H37.7231C37.8763 56.477 38 56.3539 38 56.2029V55.0641C38 54.9124 37.8763 54.79 37.7231 54.79Z" fill="url(#paint23_linear_739_2253)"/>
      <path d="M37.7231 54.79H36.5726C36.4194 54.79 36.2957 54.9124 36.2957 55.0641V56.2029C36.2957 56.3546 36.42 56.477 36.5726 56.477H37.7231C37.8763 56.477 38 56.3539 38 56.2029V55.0641C38 54.9124 37.8763 54.79 37.7231 54.79Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M35.0656 44.4618H33.2865L34.2226 46.7192C34.253 46.793 34.254 46.8766 34.2236 46.9504C34.1942 47.0252 34.1363 47.0844 34.0627 47.1184L33.2433 47.473C33.1697 47.504 33.0873 47.505 33.0127 47.4749C32.9391 47.4448 32.8802 47.3865 32.8508 47.3127L31.9568 45.168L30.5035 46.6483C30.4466 46.7017 30.371 46.7309 30.2935 46.7299C30.215 46.7289 30.1404 46.6969 30.0855 46.6415C30.0305 46.5861 30.0001 46.5113 30.0001 46.4346V39.3011C29.9981 39.2224 30.0285 39.1457 30.0845 39.0894C30.1404 39.033 30.217 39.001 30.2964 39C30.3759 39 30.4525 39.0311 30.5094 39.0874L35.2726 43.9451C35.3295 44.0014 35.3609 44.0772 35.3619 44.1568C35.3619 44.2365 35.3315 44.3122 35.2756 44.3695C35.2196 44.4269 35.1441 44.4599 35.0636 44.4618H35.0656Z" fill="url(#paint24_linear_739_2253)"/>
      <path d="M35.0656 44.4618H33.2865L34.2226 46.7192C34.253 46.793 34.254 46.8766 34.2236 46.9504C34.1942 47.0252 34.1363 47.0844 34.0627 47.1184L33.2433 47.473C33.1697 47.504 33.0873 47.505 33.0127 47.4749C32.9391 47.4448 32.8802 47.3865 32.8508 47.3127L31.9568 45.168L30.5035 46.6483C30.4466 46.7017 30.371 46.7309 30.2935 46.7299C30.215 46.7289 30.1404 46.6969 30.0855 46.6415C30.0305 46.5861 30.0001 46.5113 30.0001 46.4346V39.3011C29.9981 39.2224 30.0285 39.1457 30.0845 39.0894C30.1404 39.033 30.217 39.001 30.2964 39C30.3759 39 30.4525 39.0311 30.5094 39.0874L35.2726 43.9451C35.3295 44.0014 35.3609 44.0772 35.3619 44.1568C35.3619 44.2365 35.3315 44.3122 35.2756 44.3695C35.2196 44.4269 35.1441 44.4599 35.0636 44.4618H35.0656Z" fill="#B7D4FF" fill-opacity="0.5"/>
      </g>
      <circle cx="32" cy="25" r="9" fill="url(#paint25_linear_739_2253)"/>
      <circle cx="32" cy="25" r="9" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M41.5816 58.1833C41.8949 58.1833 42.2072 58.0597 42.4469 57.8133L46.6419 53.4843C47.1194 52.9916 47.1194 52.1922 46.6419 51.6995L42.4469 47.3705C41.9694 46.8778 41.1948 46.8778 40.7173 47.3705C40.2399 47.8632 40.2399 48.6626 40.7173 49.1553L44.0481 52.5924L40.7173 56.0295C40.2399 56.5222 40.2399 57.3216 40.7173 57.8143C40.956 58.0606 41.2693 58.1843 41.5826 58.1843L41.5816 58.1833Z" fill="url(#paint26_linear_739_2253)"/>
      <path d="M41.5816 58.1833C41.8949 58.1833 42.2072 58.0597 42.4469 57.8133L46.6419 53.4843C47.1194 52.9916 47.1194 52.1922 46.6419 51.6995L42.4469 47.3705C41.9694 46.8778 41.1948 46.8778 40.7173 47.3705C40.2399 47.8632 40.2399 48.6626 40.7173 49.1553L44.0481 52.5924L40.7173 56.0295C40.2399 56.5222 40.2399 57.3216 40.7173 57.8143C40.956 58.0606 41.2693 58.1843 41.5826 58.1843L41.5816 58.1833Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M22.4174 58.1833C22.7307 58.1833 23.043 58.0597 23.2827 57.8133C23.7601 57.3206 23.7601 56.5212 23.2827 56.0285L19.9519 52.5914L23.2827 49.1543C23.7601 48.6616 23.7601 47.8622 23.2827 47.3695C22.8052 46.8768 22.0306 46.8768 21.5531 47.3695L17.3581 51.6985C16.8806 52.1912 16.8806 52.9906 17.3581 53.4833L21.5531 57.8123C21.7918 58.0587 22.1051 58.1824 22.4184 58.1824L22.4174 58.1833Z" fill="url(#paint27_linear_739_2253)"/>
      <path d="M22.4174 58.1833C22.7307 58.1833 23.043 58.0597 23.2827 57.8133C23.7601 57.3206 23.7601 56.5212 23.2827 56.0285L19.9519 52.5914L23.2827 49.1543C23.7601 48.6616 23.7601 47.8622 23.2827 47.3695C22.8052 46.8768 22.0306 46.8768 21.5531 47.3695L17.3581 51.6985C16.8806 52.1912 16.8806 52.9906 17.3581 53.4833L21.5531 57.8123C21.7918 58.0587 22.1051 58.1824 22.4184 58.1824L22.4174 58.1833Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <defs>
      <linearGradient id="paint0_linear_739_2253" x1="5.99979" y1="9.21082" x2="25.0016" y2="9.38762" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2253" x1="37.4508" y1="9.00054" x2="52.1282" y2="9.12311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2253" x1="43.784" y1="29.5919" x2="58.2766" y2="29.8105" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2253" x1="16.8254" y1="33.7511" x2="21.7708" y2="33.7973" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2253" x1="6.00681" y1="30.8359" x2="11.7321" y2="30.9037" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2253" x1="52.5854" y1="21.0931" x2="57.0269" y2="21.1332" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2253" x1="6.01242" y1="22.249" x2="10.6549" y2="22.2934" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2253" x1="50.9489" y1="15.0487" x2="54.5544" y2="15.0783" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2253" x1="8.27087" y1="15.6677" x2="11.899" y2="15.6978" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2253" x1="14.8515" y1="16.32" x2="22.7643" y2="16.572" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2253" x1="46.86" y1="9.94781" x2="50.4043" y2="9.97866" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2253" x1="12.4718" y1="10.2083" x2="15.7669" y2="10.2349" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2253" x1="26.0677" y1="50.7403" x2="27.8049" y2="50.7749" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2253" x1="28.1137" y1="50.7403" x2="29.8509" y2="50.7749" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2253" x1="30.1591" y1="50.7403" x2="31.8963" y2="50.7749" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2253" x1="32.2043" y1="50.7403" x2="33.9416" y2="50.7749" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2253" x1="34.2503" y1="50.7403" x2="35.9876" y2="50.7749" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2253" x1="30.1591" y1="52.7654" x2="31.8963" y2="52.7999" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2253" x1="32.2043" y1="52.7654" x2="33.9416" y2="52.7999" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2253" x1="26.0684" y1="52.7654" x2="29.8846" y2="52.9325" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2253" x1="34.2503" y1="50.7403" x2="38.0723" y2="50.8163" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2253" x1="28.1137" y1="54.79" x2="36.0427" y2="55.5159" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2253" x1="26.0677" y1="54.79" x2="27.8049" y2="54.8245" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2253" x1="36.2957" y1="54.79" x2="38.0329" y2="54.8245" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2253" x1="30" y1="39" x2="35.4667" y2="39.068" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2253" x1="23" y1="16" x2="41.3475" y2="16.3614" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2253" x1="47" y1="47.001" x2="40.2294" y2="47.0802" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2253" x1="23.6407" y1="47" x2="16.8701" y2="47.0792" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <clipPath id="clip0_739_2253">
      <rect width="52" height="49" fill="white" transform="translate(6 9)"/>
      </clipPath>
    </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupS0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">S</text>
</g>
<g id="barCurrentS0${index}" mask="url(#barClipPathS0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientS0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#B7D4FF" opacity="0.5"/>
</g>
`
    : grade === 'A+'
    ? `<g id="trophySVGA+0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_739_2285)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2285)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2285)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2285)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2285)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2285)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2285)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2285)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2285)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip1_739_2285)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2285)" fill-opacity="0.6"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint9_linear_739_2285)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2285)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2285)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2285)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2285)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip2_739_2285)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <path d="M13.8297 44.2138C14.0073 43.8455 13.7981 43.5935 13.6955 43.3343C13.1272 41.9053 13.3668 40.5042 13.8794 39.1179C14.1265 38.4483 14.5163 38.4515 14.884 39C16.0246 40.6995 16.7951 42.4686 15.6983 44.5232C15.4816 44.929 15.5118 45.2605 15.9654 45.4719C16.0186 45.4964 16.0648 45.5432 16.1206 45.556C18.0704 46.0059 19.6743 47.4042 21.7406 47.5414C22.0305 47.5607 22.3222 47.6481 22.5958 47.7504C22.7705 47.8157 23.0373 47.8503 23.0236 48.1207C23.0138 48.3151 22.8279 48.4124 22.671 48.4915C21.1318 49.2711 19.7897 50.2559 19.0061 51.8599C18.8075 52.2659 18.4247 52.163 18.1584 51.9902C16.4727 50.8983 14.5874 50.5164 12.6139 50.4086C12.386 50.3962 12.0942 50.3872 12.0102 50.1287C11.9206 49.8515 12.193 49.7163 12.3706 49.5748C13.8415 48.4054 15.4887 47.6389 17.3547 47.3678C17.6349 47.3271 17.9483 47.4056 18.2567 47.1073C17.7701 46.909 17.3313 46.6993 16.8735 46.5471C15.1817 45.9865 13.6878 45.1334 12.321 43.9672C10.8109 42.6793 9.69963 41.1447 8.77059 39.4214C7.54852 37.1555 6.9106 34.7267 6.7302 32.1754C6.63796 30.8711 6.00251 29.6784 6.06069 28.3596C6.13647 26.6482 6.81361 25.2274 8.22402 24.1895C8.55269 23.9475 8.97166 23.9466 8.87414 24.4191C8.73823 25.0734 8.9648 25.6392 9.04453 26.2345C9.26916 27.9047 8.85366 29.4113 7.86385 30.7477C7.43281 31.3299 7.336 31.92 7.43097 32.572C7.65347 34.1007 7.81778 35.6469 8.58957 37.2291C8.87548 36.2092 9.10326 35.3643 9.53093 34.5846C9.89841 33.9149 10.4297 33.4132 10.9828 32.9177C11.1391 32.7776 11.2885 32.6126 11.5236 32.7359C11.6994 32.828 11.7401 33.0018 11.7468 33.1852C11.8202 35.1453 11.4399 36.9609 9.87256 38.3208C9.35633 38.7689 9.32148 39.174 9.6368 39.7002C9.86323 40.0784 10.0721 40.4676 10.3019 40.8432C10.4255 41.0451 10.5853 41.282 10.8546 41.1822C11.1462 41.074 11.046 40.789 11.0118 40.5621C10.7979 39.1326 11.0991 37.8073 11.8418 36.5668C12.0279 36.2559 12.2252 35.906 12.6282 35.939C13.0316 35.9725 13.0465 36.386 13.1281 36.6855C13.6353 38.547 13.4966 40.3162 12.2208 41.8766C11.8306 42.3541 11.8785 42.7465 12.2955 43.1029C12.7702 43.508 13.1767 44.0255 13.8292 44.2142L13.8297 44.2138Z" fill="url(#paint14_linear_739_2285)"/>
      <path d="M13.8297 44.2138C14.0073 43.8455 13.7981 43.5935 13.6955 43.3343C13.1272 41.9053 13.3668 40.5042 13.8794 39.1179C14.1265 38.4483 14.5163 38.4515 14.884 39C16.0246 40.6995 16.7951 42.4686 15.6983 44.5232C15.4816 44.929 15.5118 45.2605 15.9654 45.4719C16.0186 45.4964 16.0648 45.5432 16.1206 45.556C18.0704 46.0059 19.6743 47.4042 21.7406 47.5414C22.0305 47.5607 22.3222 47.6481 22.5958 47.7504C22.7705 47.8157 23.0373 47.8503 23.0236 48.1207C23.0138 48.3151 22.8279 48.4124 22.671 48.4915C21.1318 49.2711 19.7897 50.2559 19.0061 51.8599C18.8075 52.2659 18.4247 52.163 18.1584 51.9902C16.4727 50.8983 14.5874 50.5164 12.6139 50.4086C12.386 50.3962 12.0942 50.3872 12.0102 50.1287C11.9206 49.8515 12.193 49.7163 12.3706 49.5748C13.8415 48.4054 15.4887 47.6389 17.3547 47.3678C17.6349 47.3271 17.9483 47.4056 18.2567 47.1073C17.7701 46.909 17.3313 46.6993 16.8735 46.5471C15.1817 45.9865 13.6878 45.1334 12.321 43.9672C10.8109 42.6793 9.69963 41.1447 8.77059 39.4214C7.54852 37.1555 6.9106 34.7267 6.7302 32.1754C6.63796 30.8711 6.00251 29.6784 6.06069 28.3596C6.13647 26.6482 6.81361 25.2274 8.22402 24.1895C8.55269 23.9475 8.97166 23.9466 8.87414 24.4191C8.73823 25.0734 8.9648 25.6392 9.04453 26.2345C9.26916 27.9047 8.85366 29.4113 7.86385 30.7477C7.43281 31.3299 7.336 31.92 7.43097 32.572C7.65347 34.1007 7.81778 35.6469 8.58957 37.2291C8.87548 36.2092 9.10326 35.3643 9.53093 34.5846C9.89841 33.9149 10.4297 33.4132 10.9828 32.9177C11.1391 32.7776 11.2885 32.6126 11.5236 32.7359C11.6994 32.828 11.7401 33.0018 11.7468 33.1852C11.8202 35.1453 11.4399 36.9609 9.87256 38.3208C9.35633 38.7689 9.32148 39.174 9.6368 39.7002C9.86323 40.0784 10.0721 40.4676 10.3019 40.8432C10.4255 41.0451 10.5853 41.282 10.8546 41.1822C11.1462 41.074 11.046 40.789 11.0118 40.5621C10.7979 39.1326 11.0991 37.8073 11.8418 36.5668C12.0279 36.2559 12.2252 35.906 12.6282 35.939C13.0316 35.9725 13.0465 36.386 13.1281 36.6855C13.6353 38.547 13.4966 40.3162 12.2208 41.8766C11.8306 42.3541 11.8785 42.7465 12.2955 43.1029C12.7702 43.508 13.1767 44.0255 13.8292 44.2142L13.8297 44.2138Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M19.2275 40.9879C20.4208 42.392 20.8487 44.0128 20.5783 45.8265C20.4287 46.8321 20.1516 46.93 19.3306 46.3324C17.2995 44.856 16.3991 42.9059 16.8448 40.3787C16.9854 39.5811 17.532 39.3201 18.1559 39.8307C18.5594 40.1603 18.8736 40.5983 19.2275 40.9879V40.9879Z" fill="url(#paint15_linear_739_2285)"/>
      <path d="M19.2275 40.9879C20.4208 42.392 20.8487 44.0128 20.5783 45.8265C20.4287 46.8321 20.1516 46.93 19.3306 46.3324C17.2995 44.856 16.3991 42.9059 16.8448 40.3787C16.9854 39.5811 17.532 39.3201 18.1559 39.8307C18.5594 40.1603 18.8736 40.5983 19.2275 40.9879V40.9879Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M14.2564 46.4297C14.9737 47.316 14.844 47.7192 13.7033 47.9916C11.7769 48.452 10.3242 47.5687 9.0548 46.2921C8.62638 45.861 8.28249 45.3339 7.95876 44.8142C7.73914 44.461 7.79104 44.1334 8.31703 44.0609C10.1367 43.8124 13.088 44.9858 14.2556 46.4286L14.2564 46.4297Z" fill="url(#paint16_linear_739_2285)"/>
      <path d="M14.2564 46.4297C14.9737 47.316 14.844 47.7192 13.7033 47.9916C11.7769 48.452 10.3242 47.5687 9.0548 46.2921C8.62638 45.861 8.28249 45.3339 7.95876 44.8142C7.73914 44.461 7.79104 44.1334 8.31703 44.0609C10.1367 43.8124 13.088 44.9858 14.2556 46.4286L14.2564 46.4297Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M9.63415 41.7497C9.85087 42.2022 10.5815 42.5747 10.2954 43.0647C10.0153 43.5438 9.27024 43.3123 8.72477 43.3181C6.50714 43.3412 4.8785 41.424 4.34252 39.7094C4.12808 39.0239 4.50431 38.9611 5.0514 39.043C6.94837 39.3277 8.46304 40.2376 9.63359 41.7502L9.63415 41.7497Z" fill="url(#paint17_linear_739_2285)"/>
      <path d="M9.63415 41.7497C9.85087 42.2022 10.5815 42.5747 10.2954 43.0647C10.0153 43.5438 9.27024 43.3123 8.72477 43.3181C6.50714 43.3412 4.8785 41.424 4.34252 39.7094C4.12808 39.0239 4.50431 38.9611 5.0514 39.043C6.94837 39.3277 8.46304 40.2376 9.63359 41.7502L9.63415 41.7497Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M6.24364 35.9316C6.78511 36.6263 7.23757 37.1624 7.38507 37.8901C7.53486 38.6312 7.12393 38.7707 6.58552 38.5878C4.78329 37.9751 3.30039 37.0031 2.83838 34.9846C2.66804 34.2391 2.90444 33.9905 3.67959 34.1995C4.79323 34.4995 5.76055 35.0252 6.24308 35.932L6.24364 35.9316Z" fill="url(#paint18_linear_739_2285)"/>
      <path d="M6.24364 35.9316C6.78511 36.6263 7.23757 37.1624 7.38507 37.8901C7.53486 38.6312 7.12393 38.7707 6.58552 38.5878C4.78329 37.9751 3.30039 37.0031 2.83838 34.9846C2.66804 34.2391 2.90444 33.9905 3.67959 34.1995C4.79323 34.4995 5.76055 35.0252 6.24308 35.932L6.24364 35.9316Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M8.77014 34.6705C8.54234 34.8342 8.20061 35.0836 8.07229 34.5634C7.69925 33.0503 8.33386 30.203 9.90525 29.451C10.2168 29.3014 10.5422 28.9881 10.8875 29.1886C11.2548 29.4023 11.0784 29.831 11.0522 30.1662C10.8631 32.5403 9.89067 33.6204 8.77113 34.6706L8.77014 34.6705Z" fill="url(#paint19_linear_739_2285)"/>
      <path d="M8.77014 34.6705C8.54234 34.8342 8.20061 35.0836 8.07229 34.5634C7.69925 33.0503 8.33386 30.203 9.90525 29.451C10.2168 29.3014 10.5422 28.9881 10.8875 29.1886C11.2548 29.4023 11.0784 29.831 11.0522 30.1662C10.8631 32.5403 9.89067 33.6204 8.77113 34.6706L8.77014 34.6705Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M4.94596 29.6463C5.92358 30.767 6.15771 32.0296 6.26534 33.3317C6.28603 33.5816 6.33378 33.9056 6.02043 34.0227C5.77169 34.1154 5.58946 33.8959 5.41053 33.7512C4.17033 32.7481 3.4075 31.4747 3.27889 29.8634C3.24447 29.4374 3.15496 28.8861 3.64567 28.6908C4.09122 28.5136 4.36668 28.9712 4.64325 29.2624C4.78347 29.4105 4.89727 29.5836 4.94596 29.6463V29.6463Z" fill="url(#paint20_linear_739_2285)"/>
      <path d="M4.94596 29.6463C5.92358 30.767 6.15771 32.0296 6.26534 33.3317C6.28603 33.5816 6.33378 33.9056 6.02043 34.0227C5.77169 34.1154 5.58946 33.8959 5.41053 33.7512C4.17033 32.7481 3.4075 31.4747 3.27889 29.8634C3.24447 29.4374 3.15496 28.8861 3.64567 28.6908C4.09122 28.5136 4.36668 28.9712 4.64325 29.2624C4.78347 29.4105 4.89727 29.5836 4.94596 29.6463V29.6463Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M50.3155 44.2138C50.1379 43.8455 50.3471 43.5935 50.4497 43.3343C51.018 41.9053 50.7784 40.5042 50.2658 39.1179C50.0187 38.4483 49.6289 38.4515 49.2612 39C48.1206 40.6995 47.3501 42.4686 48.4469 44.5232C48.6636 44.929 48.6334 45.2605 48.1798 45.4719C48.1266 45.4964 48.0804 45.5432 48.0246 45.556C46.0748 46.0059 44.4709 47.4042 42.4046 47.5414C42.1147 47.5607 41.823 47.6481 41.5494 47.7504C41.3747 47.8157 41.1079 47.8503 41.1216 48.1207C41.1314 48.3151 41.3173 48.4124 41.4742 48.4915C43.0134 49.2711 44.3555 50.2559 45.1391 51.8599C45.3377 52.2659 45.7205 52.163 45.9868 51.9902C47.6725 50.8983 49.5578 50.5164 51.5313 50.4086C51.7592 50.3962 52.051 50.3872 52.135 50.1287C52.2246 49.8515 51.9522 49.7163 51.7746 49.5748C50.3037 48.4054 48.6565 47.6389 46.7905 47.3678C46.5103 47.3271 46.1969 47.4056 45.8885 47.1073C46.3751 46.909 46.8139 46.6993 47.2717 46.5471C48.9635 45.9865 50.4574 45.1334 51.8242 43.9672C53.3343 42.6793 54.4456 41.1447 55.3746 39.4214C56.5967 37.1555 57.2346 34.7267 57.415 32.1754C57.5072 30.8711 58.1427 29.6784 58.0845 28.3596C58.0087 26.6482 57.3316 25.2274 55.9212 24.1895C55.5925 23.9475 55.1735 23.9466 55.2711 24.4191C55.407 25.0734 55.1804 25.6392 55.1007 26.2345C54.876 27.9047 55.2915 29.4113 56.2814 30.7477C56.7124 31.3299 56.8092 31.92 56.7142 32.572C56.4917 34.1007 56.3274 35.6469 55.5556 37.2291C55.2697 36.2092 55.0419 35.3643 54.6143 34.5846C54.2468 33.9149 53.7155 33.4132 53.1624 32.9177C53.0061 32.7776 52.8567 32.6126 52.6216 32.7359C52.4458 32.828 52.4051 33.0018 52.3984 33.1852C52.325 35.1453 52.7053 36.9609 54.2726 38.3208C54.7889 38.7689 54.8237 39.174 54.5084 39.7002C54.282 40.0784 54.0731 40.4676 53.8433 40.8432C53.7197 41.0451 53.5599 41.282 53.2906 41.1822C52.999 41.074 53.0992 40.789 53.1335 40.5621C53.3473 39.1326 53.0461 37.8073 52.3034 36.5668C52.1173 36.2559 51.92 35.906 51.517 35.939C51.1136 35.9725 51.0987 36.386 51.0171 36.6855C50.5099 38.547 50.6486 40.3162 51.9244 41.8766C52.3146 42.3541 52.2667 42.7465 51.8497 43.1029C51.375 43.508 50.9685 44.0255 50.316 44.2142L50.3155 44.2138Z" fill="url(#paint21_linear_739_2285)"/>
      <path d="M50.3155 44.2138C50.1379 43.8455 50.3471 43.5935 50.4497 43.3343C51.018 41.9053 50.7784 40.5042 50.2658 39.1179C50.0187 38.4483 49.6289 38.4515 49.2612 39C48.1206 40.6995 47.3501 42.4686 48.4469 44.5232C48.6636 44.929 48.6334 45.2605 48.1798 45.4719C48.1266 45.4964 48.0804 45.5432 48.0246 45.556C46.0748 46.0059 44.4709 47.4042 42.4046 47.5414C42.1147 47.5607 41.823 47.6481 41.5494 47.7504C41.3747 47.8157 41.1079 47.8503 41.1216 48.1207C41.1314 48.3151 41.3173 48.4124 41.4742 48.4915C43.0134 49.2711 44.3555 50.2559 45.1391 51.8599C45.3377 52.2659 45.7205 52.163 45.9868 51.9902C47.6725 50.8983 49.5578 50.5164 51.5313 50.4086C51.7592 50.3962 52.051 50.3872 52.135 50.1287C52.2246 49.8515 51.9522 49.7163 51.7746 49.5748C50.3037 48.4054 48.6565 47.6389 46.7905 47.3678C46.5103 47.3271 46.1969 47.4056 45.8885 47.1073C46.3751 46.909 46.8139 46.6993 47.2717 46.5471C48.9635 45.9865 50.4574 45.1334 51.8242 43.9672C53.3343 42.6793 54.4456 41.1447 55.3746 39.4214C56.5967 37.1555 57.2346 34.7267 57.415 32.1754C57.5072 30.8711 58.1427 29.6784 58.0845 28.3596C58.0087 26.6482 57.3316 25.2274 55.9212 24.1895C55.5925 23.9475 55.1735 23.9466 55.2711 24.4191C55.407 25.0734 55.1804 25.6392 55.1007 26.2345C54.876 27.9047 55.2915 29.4113 56.2814 30.7477C56.7124 31.3299 56.8092 31.92 56.7142 32.572C56.4917 34.1007 56.3274 35.6469 55.5556 37.2291C55.2697 36.2092 55.0419 35.3643 54.6143 34.5846C54.2468 33.9149 53.7155 33.4132 53.1624 32.9177C53.0061 32.7776 52.8567 32.6126 52.6216 32.7359C52.4458 32.828 52.4051 33.0018 52.3984 33.1852C52.325 35.1453 52.7053 36.9609 54.2726 38.3208C54.7889 38.7689 54.8237 39.174 54.5084 39.7002C54.282 40.0784 54.0731 40.4676 53.8433 40.8432C53.7197 41.0451 53.5599 41.282 53.2906 41.1822C52.999 41.074 53.0992 40.789 53.1335 40.5621C53.3473 39.1326 53.0461 37.8073 52.3034 36.5668C52.1173 36.2559 51.92 35.906 51.517 35.939C51.1136 35.9725 51.0987 36.386 51.0171 36.6855C50.5099 38.547 50.6486 40.3162 51.9244 41.8766C52.3146 42.3541 52.2667 42.7465 51.8497 43.1029C51.375 43.508 50.9685 44.0255 50.316 44.2142L50.3155 44.2138Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M44.9177 40.9879C43.7245 42.392 43.2965 44.0128 43.5669 45.8265C43.7165 46.8321 43.9936 46.93 44.8146 46.3324C46.8457 44.856 47.7461 42.9059 47.3004 40.3787C47.1598 39.5811 46.6132 39.3201 45.9893 39.8307C45.5858 40.1603 45.2716 40.5983 44.9177 40.9879V40.9879Z" fill="url(#paint22_linear_739_2285)"/>
      <path d="M44.9177 40.9879C43.7245 42.392 43.2965 44.0128 43.5669 45.8265C43.7165 46.8321 43.9936 46.93 44.8146 46.3324C46.8457 44.856 47.7461 42.9059 47.3004 40.3787C47.1598 39.5811 46.6132 39.3201 45.9893 39.8307C45.5858 40.1603 45.2716 40.5983 44.9177 40.9879V40.9879Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M49.8888 46.4297C49.1715 47.316 49.3012 47.7192 50.4419 47.9916C52.3683 48.452 53.821 47.5687 55.0904 46.2921C55.5188 45.861 55.8627 45.3339 56.1864 44.8142C56.4061 44.461 56.3542 44.1334 55.8282 44.0609C54.0085 43.8124 51.0572 44.9858 49.8896 46.4286L49.8888 46.4297Z" fill="url(#paint23_linear_739_2285)"/>
      <path d="M49.8888 46.4297C49.1715 47.316 49.3012 47.7192 50.4419 47.9916C52.3683 48.452 53.821 47.5687 55.0904 46.2921C55.5188 45.861 55.8627 45.3339 56.1864 44.8142C56.4061 44.461 56.3542 44.1334 55.8282 44.0609C54.0085 43.8124 51.0572 44.9858 49.8896 46.4286L49.8888 46.4297Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M54.5111 41.7497C54.2943 42.2022 53.5637 42.5747 53.8498 43.0647C54.1299 43.5438 54.875 43.3123 55.4204 43.3181C57.6381 43.3412 59.2667 41.424 59.8027 39.7094C60.0171 39.0239 59.6409 38.9611 59.0938 39.043C57.1968 39.3277 55.6822 40.2376 54.5116 41.7502L54.5111 41.7497Z" fill="url(#paint24_linear_739_2285)"/>
      <path d="M54.5111 41.7497C54.2943 42.2022 53.5637 42.5747 53.8498 43.0647C54.1299 43.5438 54.875 43.3123 55.4204 43.3181C57.6381 43.3412 59.2667 41.424 59.8027 39.7094C60.0171 39.0239 59.6409 38.9611 59.0938 39.043C57.1968 39.3277 55.6822 40.2376 54.5116 41.7502L54.5111 41.7497Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M57.9016 35.9316C57.3601 36.6263 56.9076 37.1624 56.7601 37.8901C56.6103 38.6312 57.0213 38.7707 57.5597 38.5878C59.3619 37.9751 60.8448 37.0031 61.3068 34.9846C61.4772 34.2391 61.2408 33.9905 60.4656 34.1995C59.352 34.4995 58.3847 35.0252 57.9021 35.932L57.9016 35.9316Z" fill="url(#paint25_linear_739_2285)"/>
      <path d="M57.9016 35.9316C57.3601 36.6263 56.9076 37.1624 56.7601 37.8901C56.6103 38.6312 57.0213 38.7707 57.5597 38.5878C59.3619 37.9751 60.8448 37.0031 61.3068 34.9846C61.4772 34.2391 61.2408 33.9905 60.4656 34.1995C59.352 34.4995 58.3847 35.0252 57.9021 35.932L57.9016 35.9316Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M55.3751 34.6705C55.6029 34.8342 55.9446 35.0836 56.0729 34.5634C56.446 33.0503 55.8113 30.203 54.24 29.451C53.9284 29.3014 53.603 28.9881 53.2577 29.1886C52.8904 29.4023 53.0668 29.831 53.093 30.1662C53.2821 32.5403 54.2545 33.6204 55.3741 34.6706L55.3751 34.6705Z" fill="url(#paint26_linear_739_2285)"/>
      <path d="M55.3751 34.6705C55.6029 34.8342 55.9446 35.0836 56.0729 34.5634C56.446 33.0503 55.8113 30.203 54.24 29.451C53.9284 29.3014 53.603 28.9881 53.2577 29.1886C52.8904 29.4023 53.0668 29.831 53.093 30.1662C53.2821 32.5403 54.2545 33.6204 55.3741 34.6706L55.3751 34.6705Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M59.1992 29.6463C58.2216 30.767 57.9875 32.0296 57.8799 33.3317C57.8592 33.5816 57.8114 33.9056 58.1248 34.0227C58.3735 34.1154 58.5557 33.8959 58.7347 33.7512C59.9749 32.7481 60.7377 31.4747 60.8663 29.8634C60.9007 29.4374 60.9902 28.8861 60.4995 28.6908C60.054 28.5136 59.7785 28.9712 59.502 29.2624C59.3617 29.4105 59.2479 29.5836 59.1992 29.6463V29.6463Z" fill="url(#paint27_linear_739_2285)"/>
      <path d="M59.1992 29.6463C58.2216 30.767 57.9875 32.0296 57.8799 33.3317C57.8592 33.5816 57.8114 33.9056 58.1248 34.0227C58.3735 34.1154 58.5557 33.8959 58.7347 33.7512C59.9749 32.7481 60.7377 31.4747 60.8663 29.8634C60.9007 29.4374 60.9902 28.8861 60.4995 28.6908C60.054 28.5136 59.7785 28.9712 59.502 29.2624C59.3617 29.4105 59.2479 29.5836 59.1992 29.6463V29.6463Z" fill="#B7D4FF" fill-opacity="0.5"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_739_2285" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2285" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2285" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2285" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2285" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2285" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2285" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2285" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2285" x1="31.8578" y1="43.8016" x2="31.8578" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2285" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2285" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2285" x1="31.8578" y1="15.1353" x2="31.8578" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2285" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2285" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2285" x1="-2" y1="32.1296" x2="8.92919" y2="23.8009" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2285" x1="15.0684" y1="41.3402" x2="17.9129" y2="39.1728" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2285" x1="7.59744" y1="44.4753" x2="10.8969" y2="41.9741" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2285" x1="3.79129" y1="39.5693" x2="6.46202" y2="37.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2285" x1="2.16135" y1="34.8092" x2="4.2465" y2="33.217" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2285" x1="6.20853" y1="32.2624" x2="10.8388" y2="28.896" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2285" x1="2.13828" y1="29.828" x2="4.03166" y2="28.3814" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2285" x1="66.1452" y1="32.1296" x2="55.216" y2="23.8009" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2285" x1="49.0768" y1="41.3402" x2="46.2323" y2="39.1728" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2285" x1="56.5478" y1="44.4753" x2="53.2483" y2="41.9741" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2285" x1="60.3539" y1="39.5693" x2="57.6832" y2="37.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2285" x1="61.9839" y1="34.8092" x2="59.8987" y2="33.217" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2285" x1="57.9367" y1="32.2624" x2="53.3064" y2="28.896" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2285" x1="62.0069" y1="29.828" x2="60.1135" y2="28.3814" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <clipPath id="clip0_739_2285">
      <rect width="64" height="64" fill="white"/>
      </clipPath>
      <clipPath id="clip1_739_2285">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip2_739_2285">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
    </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupA+0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">A+</text>
</g>
<g id="barCurrentA+0${index}" mask="url(#barClipPathA+0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientA0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#B7D4FF" opacity="0.5"/>
</g>
`
    : grade === 'A'
    ? `<g id="trophySVGA0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2411)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2411)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2411)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2411)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2411)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2411)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2411)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2411)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_2411)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2411)" fill-opacity="0.6"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="url(#paint9_linear_739_2411)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2411)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4906 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2411)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2411)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3971 32.3655H42.7373L42.1503 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2411)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip1_739_2411)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4906 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3971 32.3655H42.7373L42.1503 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <path d="M15.6518 46.6946C15.7713 46.4468 15.6305 46.2773 15.5615 46.1028C15.1791 45.1413 15.3403 44.1985 15.6852 43.2656C15.8515 42.8151 16.1138 42.8172 16.3612 43.1863C17.1287 44.3299 17.6472 45.5203 16.9092 46.9028C16.7634 47.1759 16.7837 47.3989 17.0889 47.5413C17.1247 47.5577 17.1558 47.5892 17.1933 47.5978C18.5054 47.9006 19.5846 48.8415 20.975 48.9338C21.1701 48.9468 21.3664 49.0056 21.5504 49.0744C21.668 49.1184 21.8476 49.1417 21.8383 49.3236C21.8317 49.4544 21.7066 49.5199 21.6011 49.5731C20.5653 50.0977 19.6623 50.7603 19.1349 51.8397C19.0013 52.1129 18.7438 52.0437 18.5645 51.9274C17.4302 51.1926 16.1616 50.9357 14.8337 50.8631C14.6803 50.8548 14.4839 50.8487 14.4274 50.6748C14.3671 50.4882 14.5504 50.3973 14.6699 50.3021C15.6597 49.5152 16.7681 48.9994 18.0237 48.817C18.2123 48.7896 18.4232 48.8424 18.6307 48.6417C18.3033 48.5082 18.008 48.3671 17.6999 48.2647C16.5616 47.8875 15.5563 47.3134 14.6366 46.5287C13.6204 45.6621 12.8727 44.6295 12.2475 43.4699C11.4252 41.9452 10.9959 40.3108 10.8745 38.5941C10.8125 37.7164 10.3849 36.9138 10.424 36.0264C10.475 34.8748 10.9307 33.9187 11.8797 33.2203C12.1009 33.0575 12.3828 33.0569 12.3172 33.3748C12.2257 33.8151 12.3782 34.1958 12.4318 34.5964C12.583 35.7203 12.3034 36.7341 11.6374 37.6334C11.3473 38.0251 11.2822 38.4222 11.3461 38.8609C11.4958 39.8895 11.6064 40.93 12.1257 41.9947C12.3181 41.3084 12.4714 40.7398 12.7591 40.2152C13.0064 39.7645 13.3639 39.427 13.7361 39.0935C13.8413 38.9993 13.9418 38.8882 14.1 38.9712C14.2183 39.0332 14.2457 39.1501 14.2502 39.2735C14.2996 40.5925 14.0437 41.8142 12.989 42.7292C12.6417 43.0308 12.6182 43.3034 12.8304 43.6575C12.9827 43.912 13.1233 44.1738 13.2779 44.4266C13.3611 44.5624 13.4687 44.7219 13.6499 44.6547C13.846 44.5819 13.7786 44.3901 13.7556 44.2374C13.6117 43.2755 13.8144 42.3837 14.3141 41.549C14.4394 41.3398 14.5721 41.1044 14.8433 41.1265C15.1147 41.1491 15.1247 41.4274 15.1797 41.6289C15.521 42.8815 15.4277 44.072 14.5691 45.122C14.3066 45.4433 14.3388 45.7073 14.6194 45.9471C14.9388 46.2197 15.2124 46.568 15.6514 46.6949L15.6518 46.6946Z" fill="url(#paint14_linear_739_2411)"/>
      <path d="M15.6518 46.6946C15.7713 46.4468 15.6305 46.2773 15.5615 46.1028C15.1791 45.1413 15.3403 44.1985 15.6852 43.2656C15.8515 42.8151 16.1138 42.8172 16.3612 43.1863C17.1287 44.3299 17.6472 45.5203 16.9092 46.9028C16.7634 47.1759 16.7837 47.3989 17.0889 47.5413C17.1247 47.5577 17.1558 47.5892 17.1933 47.5978C18.5054 47.9006 19.5846 48.8415 20.975 48.9338C21.1701 48.9468 21.3664 49.0056 21.5504 49.0744C21.668 49.1184 21.8476 49.1417 21.8383 49.3236C21.8317 49.4544 21.7066 49.5199 21.6011 49.5731C20.5653 50.0977 19.6623 50.7603 19.1349 51.8397C19.0013 52.1129 18.7438 52.0437 18.5645 51.9274C17.4302 51.1926 16.1616 50.9357 14.8337 50.8631C14.6803 50.8548 14.4839 50.8487 14.4274 50.6748C14.3671 50.4882 14.5504 50.3973 14.6699 50.3021C15.6597 49.5152 16.7681 48.9994 18.0237 48.817C18.2123 48.7896 18.4232 48.8424 18.6307 48.6417C18.3033 48.5082 18.008 48.3671 17.6999 48.2647C16.5616 47.8875 15.5563 47.3134 14.6366 46.5287C13.6204 45.6621 12.8727 44.6295 12.2475 43.4699C11.4252 41.9452 10.9959 40.3108 10.8745 38.5941C10.8125 37.7164 10.3849 36.9138 10.424 36.0264C10.475 34.8748 10.9307 33.9187 11.8797 33.2203C12.1009 33.0575 12.3828 33.0569 12.3172 33.3748C12.2257 33.8151 12.3782 34.1958 12.4318 34.5964C12.583 35.7203 12.3034 36.7341 11.6374 37.6334C11.3473 38.0251 11.2822 38.4222 11.3461 38.8609C11.4958 39.8895 11.6064 40.93 12.1257 41.9947C12.3181 41.3084 12.4714 40.7398 12.7591 40.2152C13.0064 39.7645 13.3639 39.427 13.7361 39.0935C13.8413 38.9993 13.9418 38.8882 14.1 38.9712C14.2183 39.0332 14.2457 39.1501 14.2502 39.2735C14.2996 40.5925 14.0437 41.8142 12.989 42.7292C12.6417 43.0308 12.6182 43.3034 12.8304 43.6575C12.9827 43.912 13.1233 44.1738 13.2779 44.4266C13.3611 44.5624 13.4687 44.7219 13.6499 44.6547C13.846 44.5819 13.7786 44.3901 13.7556 44.2374C13.6117 43.2755 13.8144 42.3837 14.3141 41.549C14.4394 41.3398 14.5721 41.1044 14.8433 41.1265C15.1147 41.1491 15.1247 41.4274 15.1797 41.6289C15.521 42.8815 15.4277 44.072 14.5691 45.122C14.3066 45.4433 14.3388 45.7073 14.6194 45.9471C14.9388 46.2197 15.2124 46.568 15.6514 46.6949L15.6518 46.6946Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M19.2839 44.5239C20.0869 45.4688 20.3748 46.5594 20.1929 47.7798C20.0922 48.4565 19.9058 48.5224 19.3533 48.1202C17.9866 47.1268 17.3807 45.8146 17.6806 44.114C17.7752 43.5773 18.143 43.4017 18.5629 43.7452C18.8344 43.9671 19.0458 44.2618 19.2839 44.5239V44.5239Z" fill="url(#paint15_linear_739_2411)"/>
      <path d="M19.2839 44.5239C20.0869 45.4688 20.3748 46.5594 20.1929 47.7798C20.0922 48.4565 19.9058 48.5224 19.3533 48.1202C17.9866 47.1268 17.3807 45.8146 17.6806 44.114C17.7752 43.5773 18.143 43.4017 18.5629 43.7452C18.8344 43.9671 19.0458 44.2618 19.2839 44.5239V44.5239Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M15.9389 48.1857C16.4216 48.7821 16.3343 49.0534 15.5667 49.2368C14.2704 49.5466 13.2929 48.9522 12.4387 48.0932C12.1505 47.803 11.919 47.4483 11.7012 47.0987C11.5534 46.861 11.5884 46.6405 11.9423 46.5918C13.1668 46.4246 15.1527 47.2141 15.9383 48.185L15.9389 48.1857Z" fill="url(#paint16_linear_739_2411)"/>
      <path d="M15.9389 48.1857C16.4216 48.7821 16.3343 49.0534 15.5667 49.2368C14.2704 49.5466 13.2929 48.9522 12.4387 48.0932C12.1505 47.803 11.919 47.4483 11.7012 47.0987C11.5534 46.861 11.5884 46.6405 11.9423 46.5918C13.1668 46.4246 15.1527 47.2141 15.9383 48.185L15.9389 48.1857Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M12.8286 45.0366C12.9744 45.341 13.466 45.5917 13.2735 45.9214C13.085 46.2438 12.5837 46.0881 12.2167 46.0919C10.7244 46.1075 9.62852 44.8174 9.26787 43.6636C9.12357 43.2024 9.37673 43.1601 9.74487 43.2152C11.0213 43.4068 12.0406 44.0191 12.8282 45.0369L12.8286 45.0366Z" fill="url(#paint17_linear_739_2411)"/>
      <path d="M12.8286 45.0366C12.9744 45.341 13.466 45.5917 13.2735 45.9214C13.085 46.2438 12.5837 46.0881 12.2167 46.0919C10.7244 46.1075 9.62852 44.8174 9.26787 43.6636C9.12357 43.2024 9.37673 43.1601 9.74487 43.2152C11.0213 43.4068 12.0406 44.0191 12.8282 45.0369L12.8286 45.0366Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M10.5471 41.1216C10.9115 41.589 11.216 41.9498 11.3152 42.4395C11.416 42.9381 11.1395 43.032 10.7772 42.9089C9.56447 42.4966 8.56663 41.8426 8.25575 40.4844C8.14112 39.9827 8.30019 39.8154 8.82179 39.956C9.57116 40.1579 10.2221 40.5117 10.5468 41.1219L10.5471 41.1216Z" fill="url(#paint18_linear_739_2411)"/>
      <path d="M10.5471 41.1216C10.9115 41.589 11.216 41.9498 11.3152 42.4395C11.416 42.9381 11.1395 43.032 10.7772 42.9089C9.56447 42.4966 8.56663 41.8426 8.25575 40.4844C8.14112 39.9827 8.30019 39.8154 8.82179 39.956C9.57116 40.1579 10.2221 40.5117 10.5468 41.1219L10.5471 41.1216Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M12.2472 40.273C12.0939 40.3831 11.864 40.551 11.7776 40.2009C11.5266 39.1828 11.9536 37.2668 13.011 36.7608C13.2206 36.6601 13.4396 36.4493 13.672 36.5842C13.9191 36.728 13.8004 37.0165 13.7828 37.2421C13.6555 38.8396 13.0012 39.5663 12.2479 40.2731L12.2472 40.273Z" fill="url(#paint19_linear_739_2411)"/>
      <path d="M12.2472 40.273C12.0939 40.3831 11.864 40.551 11.7776 40.2009C11.5266 39.1828 11.9536 37.2668 13.011 36.7608C13.2206 36.6601 13.4396 36.4493 13.672 36.5842C13.9191 36.728 13.8004 37.0165 13.7828 37.2421C13.6555 38.8396 13.0012 39.5663 12.2479 40.2731L12.2472 40.273Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M9.67392 36.8922C10.3318 37.6464 10.4893 38.4959 10.5617 39.3721C10.5757 39.5402 10.6078 39.7583 10.3969 39.8371C10.2296 39.8995 10.1069 39.7518 9.98653 39.6544C9.15201 38.9794 8.6387 38.1226 8.55215 37.0383C8.529 36.7516 8.46876 36.3807 8.79896 36.2492C9.09877 36.1301 9.28413 36.4379 9.47023 36.6339C9.56458 36.7335 9.64116 36.85 9.67392 36.8922V36.8922Z" fill="url(#paint20_linear_739_2411)"/>
      <path d="M9.67392 36.8922C10.3318 37.6464 10.4893 38.4959 10.5617 39.3721C10.5757 39.5402 10.6078 39.7583 10.3969 39.8371C10.2296 39.8995 10.1069 39.7518 9.98653 39.6544C9.15201 38.9794 8.6387 38.1226 8.55215 37.0383C8.529 36.7516 8.46876 36.3807 8.79896 36.2492C9.09877 36.1301 9.28413 36.4379 9.47023 36.6339C9.56458 36.7335 9.64116 36.85 9.67392 36.8922V36.8922Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.3482 46.6946C48.2287 46.4468 48.3695 46.2773 48.4385 46.1028C48.8209 45.1413 48.6597 44.1985 48.3148 43.2656C48.1485 42.8151 47.8862 42.8172 47.6388 43.1863C46.8713 44.3299 46.3528 45.5203 47.0908 46.9028C47.2366 47.1759 47.2163 47.3989 46.9111 47.5413C46.8753 47.5577 46.8442 47.5892 46.8067 47.5978C45.4946 47.9006 44.4154 48.8415 43.025 48.9338C42.8299 48.9468 42.6336 49.0056 42.4496 49.0744C42.332 49.1184 42.1524 49.1417 42.1617 49.3236C42.1683 49.4544 42.2934 49.5199 42.3989 49.5731C43.4347 50.0977 44.3377 50.7603 44.8651 51.8397C44.9987 52.1129 45.2562 52.0437 45.4355 51.9274C46.5698 51.1926 47.8384 50.9357 49.1663 50.8631C49.3197 50.8548 49.5161 50.8487 49.5726 50.6748C49.6329 50.4882 49.4496 50.3973 49.3301 50.3021C48.3403 49.5152 47.2319 48.9994 45.9763 48.817C45.7877 48.7896 45.5768 48.8424 45.3693 48.6417C45.6967 48.5082 45.992 48.3671 46.3001 48.2647C47.4384 47.8875 48.4437 47.3134 49.3634 46.5287C50.3796 45.6621 51.1273 44.6295 51.7525 43.4699C52.5748 41.9452 53.0041 40.3108 53.1255 38.5941C53.1875 37.7164 53.6151 36.9138 53.576 36.0264C53.525 34.8748 53.0693 33.9187 52.1203 33.2203C51.8991 33.0575 51.6172 33.0569 51.6828 33.3748C51.7743 33.8151 51.6218 34.1958 51.5682 34.5964C51.417 35.7203 51.6966 36.7341 52.3626 37.6334C52.6527 38.0251 52.7178 38.4222 52.6539 38.8609C52.5042 39.8895 52.3936 40.93 51.8743 41.9947C51.6819 41.3084 51.5286 40.7398 51.2409 40.2152C50.9936 39.7645 50.6361 39.427 50.2639 39.0935C50.1587 38.9993 50.0582 38.8882 49.9 38.9712C49.7817 39.0332 49.7543 39.1501 49.7498 39.2735C49.7004 40.5925 49.9563 41.8142 51.011 42.7292C51.3583 43.0308 51.3818 43.3034 51.1696 43.6575C51.0173 43.912 50.8767 44.1738 50.7221 44.4266C50.6389 44.5624 50.5313 44.7219 50.3501 44.6547C50.154 44.5819 50.2214 44.3901 50.2444 44.2374C50.3883 43.2755 50.1856 42.3837 49.6859 41.549C49.5606 41.3398 49.4279 41.1044 49.1567 41.1265C48.8853 41.1491 48.8753 41.4274 48.8203 41.6289C48.479 42.8815 48.5723 44.072 49.4309 45.122C49.6934 45.4433 49.6612 45.7073 49.3806 45.9471C49.0612 46.2197 48.7876 46.568 48.3486 46.6949L48.3482 46.6946Z" fill="url(#paint21_linear_739_2411)"/>
      <path d="M48.3482 46.6946C48.2287 46.4468 48.3695 46.2773 48.4385 46.1028C48.8209 45.1413 48.6597 44.1985 48.3148 43.2656C48.1485 42.8151 47.8862 42.8172 47.6388 43.1863C46.8713 44.3299 46.3528 45.5203 47.0908 46.9028C47.2366 47.1759 47.2163 47.3989 46.9111 47.5413C46.8753 47.5577 46.8442 47.5892 46.8067 47.5978C45.4946 47.9006 44.4154 48.8415 43.025 48.9338C42.8299 48.9468 42.6336 49.0056 42.4496 49.0744C42.332 49.1184 42.1524 49.1417 42.1617 49.3236C42.1683 49.4544 42.2934 49.5199 42.3989 49.5731C43.4347 50.0977 44.3377 50.7603 44.8651 51.8397C44.9987 52.1129 45.2562 52.0437 45.4355 51.9274C46.5698 51.1926 47.8384 50.9357 49.1663 50.8631C49.3197 50.8548 49.5161 50.8487 49.5726 50.6748C49.6329 50.4882 49.4496 50.3973 49.3301 50.3021C48.3403 49.5152 47.2319 48.9994 45.9763 48.817C45.7877 48.7896 45.5768 48.8424 45.3693 48.6417C45.6967 48.5082 45.992 48.3671 46.3001 48.2647C47.4384 47.8875 48.4437 47.3134 49.3634 46.5287C50.3796 45.6621 51.1273 44.6295 51.7525 43.4699C52.5748 41.9452 53.0041 40.3108 53.1255 38.5941C53.1875 37.7164 53.6151 36.9138 53.576 36.0264C53.525 34.8748 53.0693 33.9187 52.1203 33.2203C51.8991 33.0575 51.6172 33.0569 51.6828 33.3748C51.7743 33.8151 51.6218 34.1958 51.5682 34.5964C51.417 35.7203 51.6966 36.7341 52.3626 37.6334C52.6527 38.0251 52.7178 38.4222 52.6539 38.8609C52.5042 39.8895 52.3936 40.93 51.8743 41.9947C51.6819 41.3084 51.5286 40.7398 51.2409 40.2152C50.9936 39.7645 50.6361 39.427 50.2639 39.0935C50.1587 38.9993 50.0582 38.8882 49.9 38.9712C49.7817 39.0332 49.7543 39.1501 49.7498 39.2735C49.7004 40.5925 49.9563 41.8142 51.011 42.7292C51.3583 43.0308 51.3818 43.3034 51.1696 43.6575C51.0173 43.912 50.8767 44.1738 50.7221 44.4266C50.6389 44.5624 50.5313 44.7219 50.3501 44.6547C50.154 44.5819 50.2214 44.3901 50.2444 44.2374C50.3883 43.2755 50.1856 42.3837 49.6859 41.549C49.5606 41.3398 49.4279 41.1044 49.1567 41.1265C48.8853 41.1491 48.8753 41.4274 48.8203 41.6289C48.479 42.8815 48.5723 44.072 49.4309 45.122C49.6934 45.4433 49.6612 45.7073 49.3806 45.9471C49.0612 46.2197 48.7876 46.568 48.3486 46.6949L48.3482 46.6946Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M44.7161 44.5239C43.9131 45.4688 43.6252 46.5594 43.8071 47.7798C43.9078 48.4565 44.0942 48.5224 44.6467 48.1202C46.0134 47.1268 46.6193 45.8146 46.3194 44.114C46.2248 43.5773 45.857 43.4017 45.4371 43.7452C45.1656 43.9671 44.9542 44.2618 44.7161 44.5239V44.5239Z" fill="url(#paint22_linear_739_2411)"/>
      <path d="M44.7161 44.5239C43.9131 45.4688 43.6252 46.5594 43.8071 47.7798C43.9078 48.4565 44.0942 48.5224 44.6467 48.1202C46.0134 47.1268 46.6193 45.8146 46.3194 44.114C46.2248 43.5773 45.857 43.4017 45.4371 43.7452C45.1656 43.9671 44.9542 44.2618 44.7161 44.5239V44.5239Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.061 48.1857C47.5784 48.7821 47.6657 49.0534 48.4332 49.2368C49.7295 49.5466 50.7071 48.9522 51.5612 48.0932C51.8495 47.803 52.0809 47.4483 52.2987 47.0987C52.4465 46.861 52.4116 46.6405 52.0577 46.5918C50.8332 46.4246 48.8473 47.2141 48.0616 48.185L48.061 48.1857Z" fill="url(#paint23_linear_739_2411)"/>
      <path d="M48.061 48.1857C47.5784 48.7821 47.6657 49.0534 48.4332 49.2368C49.7295 49.5466 50.7071 48.9522 51.5612 48.0932C51.8495 47.803 52.0809 47.4483 52.2987 47.0987C52.4465 46.861 52.4116 46.6405 52.0577 46.5918C50.8332 46.4246 48.8473 47.2141 48.0616 48.185L48.061 48.1857Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M51.1714 45.0366C51.0255 45.341 50.5339 45.5917 50.7264 45.9214C50.9149 46.2438 51.4163 46.0881 51.7833 46.0919C53.2755 46.1075 54.3714 44.8174 54.7321 43.6636C54.8764 43.2024 54.6232 43.1601 54.2551 43.2152C52.9786 43.4068 51.9594 44.0191 51.1718 45.0369L51.1714 45.0366Z" fill="url(#paint24_linear_739_2411)"/>
      <path d="M51.1714 45.0366C51.0255 45.341 50.5339 45.5917 50.7264 45.9214C50.9149 46.2438 51.4163 46.0881 51.7833 46.0919C53.2755 46.1075 54.3714 44.8174 54.7321 43.6636C54.8764 43.2024 54.6232 43.1601 54.2551 43.2152C52.9786 43.4068 51.9594 44.0191 51.1718 45.0369L51.1714 45.0366Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M53.4529 41.1216C53.0885 41.589 52.7841 41.9498 52.6848 42.4395C52.584 42.9381 52.8605 43.032 53.2228 42.9089C54.4356 42.4966 55.4334 41.8426 55.7443 40.4844C55.8589 39.9827 55.6998 39.8154 55.1782 39.956C54.4289 40.1579 53.778 40.5117 53.4533 41.1219L53.4529 41.1216Z" fill="url(#paint25_linear_739_2411)"/>
      <path d="M53.4529 41.1216C53.0885 41.589 52.7841 41.9498 52.6848 42.4395C52.584 42.9381 52.8605 43.032 53.2228 42.9089C54.4356 42.4966 55.4334 41.8426 55.7443 40.4844C55.8589 39.9827 55.6998 39.8154 55.1782 39.956C54.4289 40.1579 53.778 40.5117 53.4533 41.1219L53.4529 41.1216Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M51.7528 40.273C51.9061 40.3831 52.136 40.551 52.2223 40.2009C52.4734 39.1828 52.0463 37.2668 50.989 36.7608C50.7793 36.6601 50.5604 36.4493 50.328 36.5842C50.0809 36.728 50.1995 37.0165 50.2172 37.2421C50.3444 38.8396 50.9988 39.5663 51.7521 40.2731L51.7528 40.273Z" fill="url(#paint26_linear_739_2411)"/>
      <path d="M51.7528 40.273C51.9061 40.3831 52.136 40.551 52.2223 40.2009C52.4734 39.1828 52.0463 37.2668 50.989 36.7608C50.7793 36.6601 50.5604 36.4493 50.328 36.5842C50.0809 36.728 50.1995 37.0165 50.2172 37.2421C50.3444 38.8396 50.9988 39.5663 51.7521 40.2731L51.7528 40.273Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M54.3261 36.8922C53.6683 37.6464 53.5107 38.4959 53.4383 39.3721C53.4244 39.5402 53.3922 39.7583 53.6031 39.8371C53.7705 39.8995 53.8931 39.7518 54.0135 39.6544C54.848 38.9794 55.3613 38.1226 55.4479 37.0383C55.471 36.7516 55.5313 36.3807 55.2011 36.2492C54.9012 36.1301 54.7159 36.4379 54.5298 36.6339C54.4354 36.7335 54.3589 36.85 54.3261 36.8922V36.8922Z" fill="url(#paint27_linear_739_2411)"/>
      <path d="M54.3261 36.8922C53.6683 37.6464 53.5107 38.4959 53.4383 39.3721C53.4244 39.5402 53.3922 39.7583 53.6031 39.8371C53.7705 39.8995 53.8931 39.7518 54.0135 39.6544C54.848 38.9794 55.3613 38.1226 55.4479 37.0383C55.471 36.7516 55.5313 36.3807 55.2011 36.2492C54.9012 36.1301 54.7159 36.4379 54.5298 36.6339C54.4354 36.7335 54.3589 36.85 54.3261 36.8922V36.8922Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <defs>
      <linearGradient id="paint0_linear_739_2411" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2411" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2411" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2411" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2411" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2411" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2411" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2411" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2411" x1="31.8579" y1="43.8016" x2="31.8579" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2411" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2411" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2411" x1="31.8579" y1="15.1353" x2="31.8579" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2411" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2411" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2411" x1="5" y1="38.5632" x2="12.3542" y2="32.9588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2411" x1="16.4853" y1="44.761" x2="18.3994" y2="43.3026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2411" x1="11.4581" y1="46.8706" x2="13.6783" y2="45.1875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2411" x1="8.89694" y1="43.5693" x2="10.6941" y2="42.2005" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2411" x1="7.80017" y1="40.3663" x2="9.20327" y2="39.2949" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2411" x1="10.5235" y1="38.6526" x2="13.6392" y2="36.3873" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2411" x1="7.78464" y1="37.0145" x2="9.05869" y2="36.0411" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2411" x1="59" y1="38.5632" x2="51.6458" y2="32.9588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2411" x1="47.5147" y1="44.761" x2="45.6006" y2="43.3026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2411" x1="52.5419" y1="46.8706" x2="50.3217" y2="45.1875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2411" x1="55.103" y1="43.5693" x2="53.3059" y2="42.2005" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2411" x1="56.1999" y1="40.3663" x2="54.7968" y2="39.2949" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2411" x1="53.4765" y1="38.6526" x2="50.3608" y2="36.3873" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2411" x1="56.2154" y1="37.0145" x2="54.9413" y2="36.0411" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <clipPath id="clip0_739_2411">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip1_739_2411">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupA0${index}" opacity="0">
    <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">A</text>
</g>
<g id="barCurrentA0${index}" mask="url(#barClipPathA0${index})">
    <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientA0${index})"/>
    <rect x="12" y="110" width="200" height="2" rx="1" fill="#B7D4FF" opacity="0.5"/>
</g>
`
    : grade === 'A-'
    ? `<g id="trophySVGA-0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2453)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2453)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2453)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2453)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2453)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2453)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2453)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2453)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="#B7D4FF" fill-opacity="0.5"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_2453)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2453)" fill-opacity="0.6"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="url(#paint9_linear_739_2453)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2453)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4906 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2453)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2453)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2453)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip1_739_2453)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4906 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_739_2453" x1="13" y1="11" x2="42" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D06BFF"/>
      <stop offset="0.505208" stop-color="#94C5FF"/>
      <stop offset="1" stop-color="#00F0FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2453" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2453" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2453" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2453" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2453" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2453" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2453" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B37BFA"/>
      <stop offset="0.505208" stop-color="#316BFF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      <stop offset="1" stop-color="#00E0FF"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2453" x1="31.8579" y1="43.8016" x2="31.8579" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2453" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2453" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2453" x1="31.8579" y1="15.1353" x2="31.8579" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2453" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2453" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="clip0_739_2453">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip1_739_2453">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
    </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupA-0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">A-</text>
</g>
<g id="barCurrentA-0${index}" mask="url(#barClipPathA-0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientA0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#B7D4FF" opacity="0.5"/>
</g>
`
    : grade === 'B+'
    ? `<g id="trophySVGB+0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_739_2327)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2327)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2327)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white" fill-opacity="0.1"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2327)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="white" fill-opacity="0.1"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2327)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="white" fill-opacity="0.1"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2327)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white" fill-opacity="0.1"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2327)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white" fill-opacity="0.1"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2327)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2327)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="white" fill-opacity="0.1"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip1_739_2327)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3556 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6197 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3046C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2327)" fill-opacity="0.6"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="url(#paint9_linear_739_2327)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2005C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2005 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2327)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2327)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2327)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2327)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip2_739_2327)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3556 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6197 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3046C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2005C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2005 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <path d="M13.8297 44.2138C14.0073 43.8455 13.7981 43.5935 13.6955 43.3343C13.1272 41.9053 13.3668 40.5042 13.8794 39.1179C14.1265 38.4483 14.5163 38.4515 14.884 39C16.0246 40.6995 16.7951 42.4686 15.6983 44.5232C15.4816 44.929 15.5118 45.2605 15.9654 45.4719C16.0186 45.4964 16.0648 45.5432 16.1206 45.556C18.0704 46.0059 19.6743 47.4042 21.7406 47.5414C22.0305 47.5607 22.3222 47.6481 22.5958 47.7504C22.7705 47.8157 23.0373 47.8503 23.0236 48.1207C23.0138 48.3151 22.8279 48.4124 22.671 48.4915C21.1318 49.2711 19.7897 50.2559 19.0061 51.8599C18.8075 52.2659 18.4247 52.163 18.1584 51.9902C16.4727 50.8983 14.5874 50.5164 12.6139 50.4086C12.386 50.3962 12.0942 50.3872 12.0102 50.1287C11.9206 49.8515 12.193 49.7163 12.3706 49.5748C13.8415 48.4054 15.4887 47.6389 17.3547 47.3678C17.6349 47.3271 17.9483 47.4056 18.2567 47.1073C17.7701 46.909 17.3313 46.6993 16.8735 46.5471C15.1817 45.9865 13.6878 45.1334 12.321 43.9672C10.8109 42.6793 9.69963 41.1447 8.77059 39.4214C7.54852 37.1555 6.9106 34.7267 6.7302 32.1754C6.63796 30.8711 6.00251 29.6784 6.06069 28.3596C6.13647 26.6482 6.81361 25.2274 8.22402 24.1895C8.55269 23.9475 8.97166 23.9466 8.87414 24.4191C8.73823 25.0734 8.9648 25.6392 9.04453 26.2345C9.26916 27.9047 8.85366 29.4113 7.86385 30.7477C7.43281 31.3299 7.336 31.92 7.43097 32.572C7.65347 34.1007 7.81778 35.6469 8.58957 37.2291C8.87548 36.2092 9.10326 35.3643 9.53093 34.5846C9.89841 33.9149 10.4297 33.4132 10.9828 32.9177C11.1391 32.7776 11.2885 32.6126 11.5236 32.7359C11.6994 32.828 11.7401 33.0018 11.7468 33.1852C11.8202 35.1453 11.4399 36.9609 9.87256 38.3208C9.35633 38.7689 9.32148 39.174 9.6368 39.7002C9.86323 40.0784 10.0721 40.4676 10.3019 40.8432C10.4255 41.0451 10.5853 41.282 10.8546 41.1822C11.1462 41.074 11.046 40.789 11.0118 40.5621C10.7979 39.1326 11.0991 37.8073 11.8418 36.5668C12.0279 36.2559 12.2252 35.906 12.6282 35.939C13.0316 35.9725 13.0465 36.386 13.1281 36.6855C13.6353 38.547 13.4966 40.3162 12.2208 41.8766C11.8306 42.3541 11.8785 42.7465 12.2955 43.1029C12.7702 43.508 13.1767 44.0255 13.8292 44.2142L13.8297 44.2138Z" fill="url(#paint14_linear_739_2327)"/>
      <path d="M13.8297 44.2138C14.0073 43.8455 13.7981 43.5935 13.6955 43.3343C13.1272 41.9053 13.3668 40.5042 13.8794 39.1179C14.1265 38.4483 14.5163 38.4515 14.884 39C16.0246 40.6995 16.7951 42.4686 15.6983 44.5232C15.4816 44.929 15.5118 45.2605 15.9654 45.4719C16.0186 45.4964 16.0648 45.5432 16.1206 45.556C18.0704 46.0059 19.6743 47.4042 21.7406 47.5414C22.0305 47.5607 22.3222 47.6481 22.5958 47.7504C22.7705 47.8157 23.0373 47.8503 23.0236 48.1207C23.0138 48.3151 22.8279 48.4124 22.671 48.4915C21.1318 49.2711 19.7897 50.2559 19.0061 51.8599C18.8075 52.2659 18.4247 52.163 18.1584 51.9902C16.4727 50.8983 14.5874 50.5164 12.6139 50.4086C12.386 50.3962 12.0942 50.3872 12.0102 50.1287C11.9206 49.8515 12.193 49.7163 12.3706 49.5748C13.8415 48.4054 15.4887 47.6389 17.3547 47.3678C17.6349 47.3271 17.9483 47.4056 18.2567 47.1073C17.7701 46.909 17.3313 46.6993 16.8735 46.5471C15.1817 45.9865 13.6878 45.1334 12.321 43.9672C10.8109 42.6793 9.69963 41.1447 8.77059 39.4214C7.54852 37.1555 6.9106 34.7267 6.7302 32.1754C6.63796 30.8711 6.00251 29.6784 6.06069 28.3596C6.13647 26.6482 6.81361 25.2274 8.22402 24.1895C8.55269 23.9475 8.97166 23.9466 8.87414 24.4191C8.73823 25.0734 8.9648 25.6392 9.04453 26.2345C9.26916 27.9047 8.85366 29.4113 7.86385 30.7477C7.43281 31.3299 7.336 31.92 7.43097 32.572C7.65347 34.1007 7.81778 35.6469 8.58957 37.2291C8.87548 36.2092 9.10326 35.3643 9.53093 34.5846C9.89841 33.9149 10.4297 33.4132 10.9828 32.9177C11.1391 32.7776 11.2885 32.6126 11.5236 32.7359C11.6994 32.828 11.7401 33.0018 11.7468 33.1852C11.8202 35.1453 11.4399 36.9609 9.87256 38.3208C9.35633 38.7689 9.32148 39.174 9.6368 39.7002C9.86323 40.0784 10.0721 40.4676 10.3019 40.8432C10.4255 41.0451 10.5853 41.282 10.8546 41.1822C11.1462 41.074 11.046 40.789 11.0118 40.5621C10.7979 39.1326 11.0991 37.8073 11.8418 36.5668C12.0279 36.2559 12.2252 35.906 12.6282 35.939C13.0316 35.9725 13.0465 36.386 13.1281 36.6855C13.6353 38.547 13.4966 40.3162 12.2208 41.8766C11.8306 42.3541 11.8785 42.7465 12.2955 43.1029C12.7702 43.508 13.1767 44.0255 13.8292 44.2142L13.8297 44.2138Z" fill="white" fill-opacity="0.1"/>
      <path d="M19.2275 40.9879C20.4208 42.392 20.8487 44.0128 20.5783 45.8265C20.4287 46.8321 20.1516 46.93 19.3306 46.3324C17.2995 44.856 16.3991 42.9059 16.8448 40.3787C16.9854 39.5811 17.532 39.3201 18.1559 39.8307C18.5594 40.1603 18.8736 40.5983 19.2275 40.9879V40.9879Z" fill="url(#paint15_linear_739_2327)"/>
      <path d="M19.2275 40.9879C20.4208 42.392 20.8487 44.0128 20.5783 45.8265C20.4287 46.8321 20.1516 46.93 19.3306 46.3324C17.2995 44.856 16.3991 42.9059 16.8448 40.3787C16.9854 39.5811 17.532 39.3201 18.1559 39.8307C18.5594 40.1603 18.8736 40.5983 19.2275 40.9879V40.9879Z" fill="white" fill-opacity="0.1"/>
      <path d="M14.2564 46.4297C14.9737 47.316 14.844 47.7192 13.7033 47.9916C11.7769 48.452 10.3242 47.5687 9.0548 46.2921C8.62638 45.861 8.28249 45.3339 7.95876 44.8142C7.73914 44.461 7.79104 44.1334 8.31703 44.0609C10.1367 43.8124 13.088 44.9858 14.2556 46.4286L14.2564 46.4297Z" fill="url(#paint16_linear_739_2327)"/>
      <path d="M14.2564 46.4297C14.9737 47.316 14.844 47.7192 13.7033 47.9916C11.7769 48.452 10.3242 47.5687 9.0548 46.2921C8.62638 45.861 8.28249 45.3339 7.95876 44.8142C7.73914 44.461 7.79104 44.1334 8.31703 44.0609C10.1367 43.8124 13.088 44.9858 14.2556 46.4286L14.2564 46.4297Z" fill="white" fill-opacity="0.1"/>
      <path d="M9.63415 41.7497C9.85087 42.2022 10.5815 42.5747 10.2954 43.0647C10.0153 43.5438 9.27024 43.3123 8.72477 43.3181C6.50714 43.3412 4.8785 41.424 4.34252 39.7094C4.12808 39.0239 4.50431 38.9611 5.0514 39.043C6.94837 39.3277 8.46304 40.2376 9.63359 41.7502L9.63415 41.7497Z" fill="url(#paint17_linear_739_2327)"/>
      <path d="M9.63415 41.7497C9.85087 42.2022 10.5815 42.5747 10.2954 43.0647C10.0153 43.5438 9.27024 43.3123 8.72477 43.3181C6.50714 43.3412 4.8785 41.424 4.34252 39.7094C4.12808 39.0239 4.50431 38.9611 5.0514 39.043C6.94837 39.3277 8.46304 40.2376 9.63359 41.7502L9.63415 41.7497Z" fill="white" fill-opacity="0.1"/>
      <path d="M6.24364 35.9316C6.78511 36.6263 7.23757 37.1624 7.38507 37.8901C7.53486 38.6312 7.12393 38.7707 6.58552 38.5878C4.78329 37.9751 3.30039 37.0031 2.83838 34.9846C2.66804 34.2391 2.90444 33.9905 3.67959 34.1995C4.79323 34.4995 5.76055 35.0252 6.24308 35.932L6.24364 35.9316Z" fill="url(#paint18_linear_739_2327)"/>
      <path d="M6.24364 35.9316C6.78511 36.6263 7.23757 37.1624 7.38507 37.8901C7.53486 38.6312 7.12393 38.7707 6.58552 38.5878C4.78329 37.9751 3.30039 37.0031 2.83838 34.9846C2.66804 34.2391 2.90444 33.9905 3.67959 34.1995C4.79323 34.4995 5.76055 35.0252 6.24308 35.932L6.24364 35.9316Z" fill="white" fill-opacity="0.1"/>
      <path d="M8.77014 34.6705C8.54234 34.8342 8.20061 35.0836 8.07229 34.5634C7.69925 33.0503 8.33386 30.203 9.90525 29.451C10.2168 29.3014 10.5422 28.9881 10.8875 29.1886C11.2548 29.4023 11.0784 29.831 11.0522 30.1662C10.8631 32.5403 9.89067 33.6204 8.77113 34.6706L8.77014 34.6705Z" fill="url(#paint19_linear_739_2327)"/>
      <path d="M8.77014 34.6705C8.54234 34.8342 8.20061 35.0836 8.07229 34.5634C7.69925 33.0503 8.33386 30.203 9.90525 29.451C10.2168 29.3014 10.5422 28.9881 10.8875 29.1886C11.2548 29.4023 11.0784 29.831 11.0522 30.1662C10.8631 32.5403 9.89067 33.6204 8.77113 34.6706L8.77014 34.6705Z" fill="white" fill-opacity="0.1"/>
      <path d="M4.94596 29.6463C5.92358 30.767 6.15771 32.0296 6.26534 33.3317C6.28603 33.5816 6.33378 33.9056 6.02043 34.0227C5.77169 34.1154 5.58946 33.8959 5.41053 33.7512C4.17033 32.7481 3.4075 31.4747 3.27889 29.8634C3.24447 29.4374 3.15496 28.8861 3.64567 28.6908C4.09122 28.5136 4.36668 28.9712 4.64325 29.2624C4.78347 29.4105 4.89727 29.5836 4.94596 29.6463V29.6463Z" fill="url(#paint20_linear_739_2327)"/>
      <path d="M4.94596 29.6463C5.92358 30.767 6.15771 32.0296 6.26534 33.3317C6.28603 33.5816 6.33378 33.9056 6.02043 34.0227C5.77169 34.1154 5.58946 33.8959 5.41053 33.7512C4.17033 32.7481 3.4075 31.4747 3.27889 29.8634C3.24447 29.4374 3.15496 28.8861 3.64567 28.6908C4.09122 28.5136 4.36668 28.9712 4.64325 29.2624C4.78347 29.4105 4.89727 29.5836 4.94596 29.6463V29.6463Z" fill="white" fill-opacity="0.1"/>
      <path d="M50.3155 44.2138C50.1379 43.8455 50.3471 43.5935 50.4497 43.3343C51.018 41.9053 50.7784 40.5042 50.2658 39.1179C50.0187 38.4483 49.6289 38.4515 49.2612 39C48.1206 40.6995 47.3501 42.4686 48.4469 44.5232C48.6636 44.929 48.6334 45.2605 48.1798 45.4719C48.1266 45.4964 48.0804 45.5432 48.0246 45.556C46.0748 46.0059 44.4709 47.4042 42.4046 47.5414C42.1147 47.5607 41.823 47.6481 41.5494 47.7504C41.3747 47.8157 41.1079 47.8503 41.1216 48.1207C41.1314 48.3151 41.3173 48.4124 41.4742 48.4915C43.0134 49.2711 44.3555 50.2559 45.1391 51.8599C45.3377 52.2659 45.7205 52.163 45.9868 51.9902C47.6725 50.8983 49.5578 50.5164 51.5313 50.4086C51.7592 50.3962 52.051 50.3872 52.135 50.1287C52.2246 49.8515 51.9522 49.7163 51.7746 49.5748C50.3037 48.4054 48.6565 47.6389 46.7905 47.3678C46.5103 47.3271 46.1969 47.4056 45.8885 47.1073C46.3751 46.909 46.8139 46.6993 47.2717 46.5471C48.9635 45.9865 50.4574 45.1334 51.8242 43.9672C53.3343 42.6793 54.4456 41.1447 55.3746 39.4214C56.5967 37.1555 57.2346 34.7267 57.415 32.1754C57.5072 30.8711 58.1427 29.6784 58.0845 28.3596C58.0087 26.6482 57.3316 25.2274 55.9212 24.1895C55.5925 23.9475 55.1735 23.9466 55.2711 24.4191C55.407 25.0734 55.1804 25.6392 55.1007 26.2345C54.876 27.9047 55.2915 29.4113 56.2814 30.7477C56.7124 31.3299 56.8092 31.92 56.7142 32.572C56.4917 34.1007 56.3274 35.6469 55.5556 37.2291C55.2697 36.2092 55.0419 35.3643 54.6143 34.5846C54.2468 33.9149 53.7155 33.4132 53.1624 32.9177C53.0061 32.7776 52.8567 32.6126 52.6216 32.7359C52.4458 32.828 52.4051 33.0018 52.3984 33.1852C52.325 35.1453 52.7053 36.9609 54.2726 38.3208C54.7889 38.7689 54.8237 39.174 54.5084 39.7002C54.282 40.0784 54.0731 40.4676 53.8433 40.8432C53.7197 41.0451 53.5599 41.282 53.2906 41.1822C52.999 41.074 53.0992 40.789 53.1335 40.5621C53.3473 39.1326 53.0461 37.8073 52.3034 36.5668C52.1173 36.2559 51.92 35.906 51.517 35.939C51.1136 35.9725 51.0987 36.386 51.0171 36.6855C50.5099 38.547 50.6486 40.3162 51.9244 41.8766C52.3146 42.3541 52.2667 42.7465 51.8497 43.1029C51.375 43.508 50.9685 44.0255 50.316 44.2142L50.3155 44.2138Z" fill="url(#paint21_linear_739_2327)"/>
      <path d="M50.3155 44.2138C50.1379 43.8455 50.3471 43.5935 50.4497 43.3343C51.018 41.9053 50.7784 40.5042 50.2658 39.1179C50.0187 38.4483 49.6289 38.4515 49.2612 39C48.1206 40.6995 47.3501 42.4686 48.4469 44.5232C48.6636 44.929 48.6334 45.2605 48.1798 45.4719C48.1266 45.4964 48.0804 45.5432 48.0246 45.556C46.0748 46.0059 44.4709 47.4042 42.4046 47.5414C42.1147 47.5607 41.823 47.6481 41.5494 47.7504C41.3747 47.8157 41.1079 47.8503 41.1216 48.1207C41.1314 48.3151 41.3173 48.4124 41.4742 48.4915C43.0134 49.2711 44.3555 50.2559 45.1391 51.8599C45.3377 52.2659 45.7205 52.163 45.9868 51.9902C47.6725 50.8983 49.5578 50.5164 51.5313 50.4086C51.7592 50.3962 52.051 50.3872 52.135 50.1287C52.2246 49.8515 51.9522 49.7163 51.7746 49.5748C50.3037 48.4054 48.6565 47.6389 46.7905 47.3678C46.5103 47.3271 46.1969 47.4056 45.8885 47.1073C46.3751 46.909 46.8139 46.6993 47.2717 46.5471C48.9635 45.9865 50.4574 45.1334 51.8242 43.9672C53.3343 42.6793 54.4456 41.1447 55.3746 39.4214C56.5967 37.1555 57.2346 34.7267 57.415 32.1754C57.5072 30.8711 58.1427 29.6784 58.0845 28.3596C58.0087 26.6482 57.3316 25.2274 55.9212 24.1895C55.5925 23.9475 55.1735 23.9466 55.2711 24.4191C55.407 25.0734 55.1804 25.6392 55.1007 26.2345C54.876 27.9047 55.2915 29.4113 56.2814 30.7477C56.7124 31.3299 56.8092 31.92 56.7142 32.572C56.4917 34.1007 56.3274 35.6469 55.5556 37.2291C55.2697 36.2092 55.0419 35.3643 54.6143 34.5846C54.2468 33.9149 53.7155 33.4132 53.1624 32.9177C53.0061 32.7776 52.8567 32.6126 52.6216 32.7359C52.4458 32.828 52.4051 33.0018 52.3984 33.1852C52.325 35.1453 52.7053 36.9609 54.2726 38.3208C54.7889 38.7689 54.8237 39.174 54.5084 39.7002C54.282 40.0784 54.0731 40.4676 53.8433 40.8432C53.7197 41.0451 53.5599 41.282 53.2906 41.1822C52.999 41.074 53.0992 40.789 53.1335 40.5621C53.3473 39.1326 53.0461 37.8073 52.3034 36.5668C52.1173 36.2559 51.92 35.906 51.517 35.939C51.1136 35.9725 51.0987 36.386 51.0171 36.6855C50.5099 38.547 50.6486 40.3162 51.9244 41.8766C52.3146 42.3541 52.2667 42.7465 51.8497 43.1029C51.375 43.508 50.9685 44.0255 50.316 44.2142L50.3155 44.2138Z" fill="white" fill-opacity="0.1"/>
      <path d="M44.9177 40.9879C43.7245 42.392 43.2965 44.0128 43.5669 45.8265C43.7165 46.8321 43.9936 46.93 44.8146 46.3324C46.8457 44.856 47.7461 42.9059 47.3004 40.3787C47.1598 39.5811 46.6132 39.3201 45.9893 39.8307C45.5858 40.1603 45.2716 40.5983 44.9177 40.9879V40.9879Z" fill="url(#paint22_linear_739_2327)"/>
      <path d="M44.9177 40.9879C43.7245 42.392 43.2965 44.0128 43.5669 45.8265C43.7165 46.8321 43.9936 46.93 44.8146 46.3324C46.8457 44.856 47.7461 42.9059 47.3004 40.3787C47.1598 39.5811 46.6132 39.3201 45.9893 39.8307C45.5858 40.1603 45.2716 40.5983 44.9177 40.9879V40.9879Z" fill="white" fill-opacity="0.1"/>
      <path d="M49.8888 46.4297C49.1715 47.316 49.3012 47.7192 50.4419 47.9916C52.3683 48.452 53.821 47.5687 55.0904 46.2921C55.5188 45.861 55.8627 45.3339 56.1864 44.8142C56.4061 44.461 56.3542 44.1334 55.8282 44.0609C54.0085 43.8124 51.0572 44.9858 49.8896 46.4286L49.8888 46.4297Z" fill="url(#paint23_linear_739_2327)"/>
      <path d="M49.8888 46.4297C49.1715 47.316 49.3012 47.7192 50.4419 47.9916C52.3683 48.452 53.821 47.5687 55.0904 46.2921C55.5188 45.861 55.8627 45.3339 56.1864 44.8142C56.4061 44.461 56.3542 44.1334 55.8282 44.0609C54.0085 43.8124 51.0572 44.9858 49.8896 46.4286L49.8888 46.4297Z" fill="white" fill-opacity="0.1"/>
      <path d="M54.5111 41.7497C54.2943 42.2022 53.5637 42.5747 53.8498 43.0647C54.1299 43.5438 54.875 43.3123 55.4204 43.3181C57.6381 43.3412 59.2667 41.424 59.8027 39.7094C60.0171 39.0239 59.6409 38.9611 59.0938 39.043C57.1968 39.3277 55.6822 40.2376 54.5116 41.7502L54.5111 41.7497Z" fill="url(#paint24_linear_739_2327)"/>
      <path d="M54.5111 41.7497C54.2943 42.2022 53.5637 42.5747 53.8498 43.0647C54.1299 43.5438 54.875 43.3123 55.4204 43.3181C57.6381 43.3412 59.2667 41.424 59.8027 39.7094C60.0171 39.0239 59.6409 38.9611 59.0938 39.043C57.1968 39.3277 55.6822 40.2376 54.5116 41.7502L54.5111 41.7497Z" fill="white" fill-opacity="0.1"/>
      <path d="M57.9016 35.9316C57.3601 36.6263 56.9076 37.1624 56.7601 37.8901C56.6103 38.6312 57.0213 38.7707 57.5597 38.5878C59.3619 37.9751 60.8448 37.0031 61.3068 34.9846C61.4772 34.2391 61.2408 33.9905 60.4656 34.1995C59.352 34.4995 58.3847 35.0252 57.9021 35.932L57.9016 35.9316Z" fill="url(#paint25_linear_739_2327)"/>
      <path d="M57.9016 35.9316C57.3601 36.6263 56.9076 37.1624 56.7601 37.8901C56.6103 38.6312 57.0213 38.7707 57.5597 38.5878C59.3619 37.9751 60.8448 37.0031 61.3068 34.9846C61.4772 34.2391 61.2408 33.9905 60.4656 34.1995C59.352 34.4995 58.3847 35.0252 57.9021 35.932L57.9016 35.9316Z" fill="white" fill-opacity="0.1"/>
      <path d="M55.3751 34.6705C55.6029 34.8342 55.9446 35.0836 56.0729 34.5634C56.446 33.0503 55.8113 30.203 54.24 29.451C53.9284 29.3014 53.603 28.9881 53.2577 29.1886C52.8904 29.4023 53.0668 29.831 53.093 30.1662C53.2821 32.5403 54.2545 33.6204 55.3741 34.6706L55.3751 34.6705Z" fill="url(#paint26_linear_739_2327)"/>
      <path d="M55.3751 34.6705C55.6029 34.8342 55.9446 35.0836 56.0729 34.5634C56.446 33.0503 55.8113 30.203 54.24 29.451C53.9284 29.3014 53.603 28.9881 53.2577 29.1886C52.8904 29.4023 53.0668 29.831 53.093 30.1662C53.2821 32.5403 54.2545 33.6204 55.3741 34.6706L55.3751 34.6705Z" fill="white" fill-opacity="0.1"/>
      <path d="M59.1992 29.6463C58.2216 30.767 57.9875 32.0296 57.8799 33.3317C57.8592 33.5816 57.8114 33.9056 58.1248 34.0227C58.3735 34.1154 58.5557 33.8959 58.7347 33.7512C59.9749 32.7481 60.7377 31.4747 60.8663 29.8634C60.9007 29.4374 60.9902 28.8861 60.4995 28.6908C60.054 28.5136 59.7785 28.9712 59.502 29.2624C59.3617 29.4105 59.2479 29.5836 59.1992 29.6463V29.6463Z" fill="url(#paint27_linear_739_2327)"/>
      <path d="M59.1992 29.6463C58.2216 30.767 57.9875 32.0296 57.8799 33.3317C57.8592 33.5816 57.8114 33.9056 58.1248 34.0227C58.3735 34.1154 58.5557 33.8959 58.7347 33.7512C59.9749 32.7481 60.7377 31.4747 60.8663 29.8634C60.9007 29.4374 60.9902 28.8861 60.4995 28.6908C60.054 28.5136 59.7785 28.9712 59.502 29.2624C59.3617 29.4105 59.2479 29.5836 59.1992 29.6463V29.6463Z" fill="white" fill-opacity="0.1"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_739_2327" x1="13" y1="11" x2="42" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D06BFF"/>
      <stop offset="0.505208" stop-color="#94C5FF"/>
      <stop offset="1" stop-color="#00F0FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2327" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2327" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2327" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2327" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2327" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2327" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2327" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2327" x1="31.8579" y1="43.8016" x2="31.8579" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2327" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2327" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2327" x1="31.8579" y1="15.1353" x2="31.8579" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2327" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2327" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2327" x1="-2" y1="32.1296" x2="8.92919" y2="23.8009" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2327" x1="15.0684" y1="41.3402" x2="17.9129" y2="39.1728" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2327" x1="7.59744" y1="44.4753" x2="10.8969" y2="41.9741" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2327" x1="3.79129" y1="39.5693" x2="6.46202" y2="37.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2327" x1="2.16135" y1="34.8092" x2="4.2465" y2="33.217" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2327" x1="6.20853" y1="32.2624" x2="10.8388" y2="28.896" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2327" x1="2.13828" y1="29.828" x2="4.03166" y2="28.3814" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2327" x1="66.1452" y1="32.1296" x2="55.216" y2="23.8009" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2327" x1="49.0768" y1="41.3402" x2="46.2323" y2="39.1728" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2327" x1="56.5478" y1="44.4753" x2="53.2483" y2="41.9741" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2327" x1="60.3539" y1="39.5693" x2="57.6832" y2="37.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2327" x1="61.9839" y1="34.8092" x2="59.8987" y2="33.217" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2327" x1="57.9367" y1="32.2624" x2="53.3064" y2="28.896" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2327" x1="62.0069" y1="29.828" x2="60.1135" y2="28.3814" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <clipPath id="clip0_739_2327">
      <rect width="64" height="64" fill="white"/>
      </clipPath>
      <clipPath id="clip1_739_2327">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip2_739_2327">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
    </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupB+0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">B+</text>
</g>
<g id="barCurrentB+0${index}" mask="url(#barClipPathB+0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientB0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#FFFFFF" opacity="0.1"/>
</g>
`
    : grade === 'B'
    ? `<g id="trophySVGB0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2479)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2479)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white" fill-opacity="0.1"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2479)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="white" fill-opacity="0.1"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2479)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="white" fill-opacity="0.1"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2479)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white" fill-opacity="0.1"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2479)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white" fill-opacity="0.1"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2479)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2479)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="white" fill-opacity="0.1"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_2479)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3556 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6197 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3046C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2479)" fill-opacity="0.6"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="url(#paint9_linear_739_2479)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2005C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2005 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2479)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2479)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2479)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2479)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip1_739_2479)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3556 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6197 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3046C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2005C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2005 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <path d="M15.6518 46.6946C15.7713 46.4468 15.6305 46.2773 15.5615 46.1028C15.1791 45.1413 15.3403 44.1985 15.6852 43.2656C15.8515 42.8151 16.1138 42.8172 16.3612 43.1863C17.1287 44.3299 17.6472 45.5203 16.9092 46.9028C16.7634 47.1759 16.7837 47.3989 17.0889 47.5413C17.1247 47.5577 17.1558 47.5892 17.1933 47.5978C18.5054 47.9006 19.5846 48.8415 20.975 48.9338C21.1701 48.9468 21.3664 49.0056 21.5504 49.0744C21.668 49.1184 21.8476 49.1417 21.8383 49.3236C21.8317 49.4544 21.7066 49.5199 21.6011 49.5731C20.5653 50.0977 19.6623 50.7603 19.1349 51.8397C19.0013 52.1129 18.7438 52.0437 18.5645 51.9274C17.4302 51.1926 16.1616 50.9357 14.8337 50.8631C14.6803 50.8548 14.4839 50.8487 14.4274 50.6748C14.3671 50.4882 14.5504 50.3973 14.6699 50.3021C15.6597 49.5152 16.7681 48.9994 18.0237 48.817C18.2123 48.7896 18.4232 48.8424 18.6307 48.6417C18.3033 48.5082 18.008 48.3671 17.6999 48.2647C16.5616 47.8875 15.5563 47.3134 14.6366 46.5287C13.6204 45.6621 12.8727 44.6295 12.2475 43.4699C11.4252 41.9452 10.9959 40.3108 10.8745 38.5941C10.8125 37.7164 10.3849 36.9138 10.424 36.0264C10.475 34.8748 10.9307 33.9187 11.8797 33.2203C12.1009 33.0575 12.3828 33.0569 12.3172 33.3748C12.2257 33.8151 12.3782 34.1958 12.4318 34.5964C12.583 35.7203 12.3034 36.7341 11.6374 37.6334C11.3473 38.0251 11.2822 38.4222 11.3461 38.8609C11.4958 39.8895 11.6064 40.93 12.1257 41.9947C12.3181 41.3084 12.4714 40.7398 12.7591 40.2152C13.0064 39.7645 13.3639 39.427 13.7361 39.0935C13.8413 38.9993 13.9418 38.8882 14.1 38.9712C14.2183 39.0332 14.2457 39.1501 14.2502 39.2735C14.2996 40.5925 14.0437 41.8142 12.989 42.7292C12.6417 43.0308 12.6182 43.3034 12.8304 43.6575C12.9827 43.912 13.1233 44.1738 13.2779 44.4266C13.3611 44.5624 13.4687 44.7219 13.6499 44.6547C13.846 44.5819 13.7786 44.3901 13.7556 44.2374C13.6117 43.2755 13.8144 42.3837 14.3141 41.549C14.4394 41.3398 14.5721 41.1044 14.8433 41.1265C15.1147 41.1491 15.1247 41.4274 15.1797 41.6289C15.521 42.8815 15.4277 44.072 14.5691 45.122C14.3066 45.4433 14.3388 45.7073 14.6194 45.9471C14.9388 46.2197 15.2124 46.568 15.6514 46.6949L15.6518 46.6946Z" fill="url(#paint14_linear_739_2479)"/>
      <path d="M15.6518 46.6946C15.7713 46.4468 15.6305 46.2773 15.5615 46.1028C15.1791 45.1413 15.3403 44.1985 15.6852 43.2656C15.8515 42.8151 16.1138 42.8172 16.3612 43.1863C17.1287 44.3299 17.6472 45.5203 16.9092 46.9028C16.7634 47.1759 16.7837 47.3989 17.0889 47.5413C17.1247 47.5577 17.1558 47.5892 17.1933 47.5978C18.5054 47.9006 19.5846 48.8415 20.975 48.9338C21.1701 48.9468 21.3664 49.0056 21.5504 49.0744C21.668 49.1184 21.8476 49.1417 21.8383 49.3236C21.8317 49.4544 21.7066 49.5199 21.6011 49.5731C20.5653 50.0977 19.6623 50.7603 19.1349 51.8397C19.0013 52.1129 18.7438 52.0437 18.5645 51.9274C17.4302 51.1926 16.1616 50.9357 14.8337 50.8631C14.6803 50.8548 14.4839 50.8487 14.4274 50.6748C14.3671 50.4882 14.5504 50.3973 14.6699 50.3021C15.6597 49.5152 16.7681 48.9994 18.0237 48.817C18.2123 48.7896 18.4232 48.8424 18.6307 48.6417C18.3033 48.5082 18.008 48.3671 17.6999 48.2647C16.5616 47.8875 15.5563 47.3134 14.6366 46.5287C13.6204 45.6621 12.8727 44.6295 12.2475 43.4699C11.4252 41.9452 10.9959 40.3108 10.8745 38.5941C10.8125 37.7164 10.3849 36.9138 10.424 36.0264C10.475 34.8748 10.9307 33.9187 11.8797 33.2203C12.1009 33.0575 12.3828 33.0569 12.3172 33.3748C12.2257 33.8151 12.3782 34.1958 12.4318 34.5964C12.583 35.7203 12.3034 36.7341 11.6374 37.6334C11.3473 38.0251 11.2822 38.4222 11.3461 38.8609C11.4958 39.8895 11.6064 40.93 12.1257 41.9947C12.3181 41.3084 12.4714 40.7398 12.7591 40.2152C13.0064 39.7645 13.3639 39.427 13.7361 39.0935C13.8413 38.9993 13.9418 38.8882 14.1 38.9712C14.2183 39.0332 14.2457 39.1501 14.2502 39.2735C14.2996 40.5925 14.0437 41.8142 12.989 42.7292C12.6417 43.0308 12.6182 43.3034 12.8304 43.6575C12.9827 43.912 13.1233 44.1738 13.2779 44.4266C13.3611 44.5624 13.4687 44.7219 13.6499 44.6547C13.846 44.5819 13.7786 44.3901 13.7556 44.2374C13.6117 43.2755 13.8144 42.3837 14.3141 41.549C14.4394 41.3398 14.5721 41.1044 14.8433 41.1265C15.1147 41.1491 15.1247 41.4274 15.1797 41.6289C15.521 42.8815 15.4277 44.072 14.5691 45.122C14.3066 45.4433 14.3388 45.7073 14.6194 45.9471C14.9388 46.2197 15.2124 46.568 15.6514 46.6949L15.6518 46.6946Z" fill="white" fill-opacity="0.1"/>
      <path d="M19.2839 44.5239C20.0869 45.4688 20.3748 46.5594 20.1929 47.7798C20.0922 48.4565 19.9058 48.5224 19.3533 48.1202C17.9866 47.1268 17.3807 45.8146 17.6806 44.114C17.7752 43.5773 18.143 43.4017 18.5629 43.7452C18.8344 43.9671 19.0458 44.2618 19.2839 44.5239V44.5239Z" fill="url(#paint15_linear_739_2479)"/>
      <path d="M19.2839 44.5239C20.0869 45.4688 20.3748 46.5594 20.1929 47.7798C20.0922 48.4565 19.9058 48.5224 19.3533 48.1202C17.9866 47.1268 17.3807 45.8146 17.6806 44.114C17.7752 43.5773 18.143 43.4017 18.5629 43.7452C18.8344 43.9671 19.0458 44.2618 19.2839 44.5239V44.5239Z" fill="white" fill-opacity="0.1"/>
      <path d="M15.9389 48.1857C16.4216 48.7821 16.3343 49.0534 15.5667 49.2368C14.2704 49.5466 13.2929 48.9522 12.4387 48.0932C12.1505 47.803 11.919 47.4483 11.7012 47.0987C11.5534 46.861 11.5884 46.6405 11.9423 46.5918C13.1668 46.4246 15.1527 47.2141 15.9383 48.185L15.9389 48.1857Z" fill="url(#paint16_linear_739_2479)"/>
      <path d="M15.9389 48.1857C16.4216 48.7821 16.3343 49.0534 15.5667 49.2368C14.2704 49.5466 13.2929 48.9522 12.4387 48.0932C12.1505 47.803 11.919 47.4483 11.7012 47.0987C11.5534 46.861 11.5884 46.6405 11.9423 46.5918C13.1668 46.4246 15.1527 47.2141 15.9383 48.185L15.9389 48.1857Z" fill="white" fill-opacity="0.1"/>
      <path d="M12.8286 45.0366C12.9744 45.341 13.4661 45.5917 13.2735 45.9214C13.085 46.2438 12.5837 46.0881 12.2167 46.0919C10.7244 46.1075 9.62853 44.8174 9.26787 43.6636C9.12358 43.2024 9.37674 43.1601 9.74487 43.2152C11.0213 43.4068 12.0406 44.0191 12.8282 45.0369L12.8286 45.0366Z" fill="url(#paint17_linear_739_2479)"/>
      <path d="M12.8286 45.0366C12.9744 45.341 13.4661 45.5917 13.2735 45.9214C13.085 46.2438 12.5837 46.0881 12.2167 46.0919C10.7244 46.1075 9.62853 44.8174 9.26787 43.6636C9.12358 43.2024 9.37674 43.1601 9.74487 43.2152C11.0213 43.4068 12.0406 44.0191 12.8282 45.0369L12.8286 45.0366Z" fill="white" fill-opacity="0.1"/>
      <path d="M10.5471 41.1216C10.9115 41.589 11.2159 41.9498 11.3152 42.4395C11.416 42.9381 11.1395 43.032 10.7772 42.9089C9.56446 42.4966 8.56662 41.8426 8.25574 40.4844C8.14112 39.9827 8.30019 39.8154 8.82178 39.956C9.57115 40.1579 10.2221 40.5117 10.5468 41.1219L10.5471 41.1216Z" fill="url(#paint18_linear_739_2479)"/>
      <path d="M10.5471 41.1216C10.9115 41.589 11.2159 41.9498 11.3152 42.4395C11.416 42.9381 11.1395 43.032 10.7772 42.9089C9.56446 42.4966 8.56662 41.8426 8.25574 40.4844C8.14112 39.9827 8.30019 39.8154 8.82178 39.956C9.57115 40.1579 10.2221 40.5117 10.5468 41.1219L10.5471 41.1216Z" fill="white" fill-opacity="0.1"/>
      <path d="M12.2472 40.273C12.0939 40.3831 11.864 40.551 11.7776 40.2009C11.5266 39.1828 11.9536 37.2668 13.011 36.7608C13.2206 36.6601 13.4396 36.4493 13.672 36.5842C13.9191 36.728 13.8004 37.0165 13.7828 37.2421C13.6555 38.8396 13.0012 39.5663 12.2479 40.2731L12.2472 40.273Z" fill="url(#paint19_linear_739_2479)"/>
      <path d="M12.2472 40.273C12.0939 40.3831 11.864 40.551 11.7776 40.2009C11.5266 39.1828 11.9536 37.2668 13.011 36.7608C13.2206 36.6601 13.4396 36.4493 13.672 36.5842C13.9191 36.728 13.8004 37.0165 13.7828 37.2421C13.6555 38.8396 13.0012 39.5663 12.2479 40.2731L12.2472 40.273Z" fill="white" fill-opacity="0.1"/>
      <path d="M9.67393 36.8922C10.3318 37.6464 10.4893 38.4959 10.5617 39.3721C10.5757 39.5402 10.6078 39.7583 10.3969 39.8371C10.2296 39.8995 10.1069 39.7518 9.98653 39.6544C9.15201 38.9794 8.6387 38.1226 8.55216 37.0383C8.529 36.7516 8.46876 36.3807 8.79897 36.2492C9.09877 36.1301 9.28413 36.4379 9.47023 36.6339C9.56459 36.7335 9.64116 36.85 9.67393 36.8922V36.8922Z" fill="url(#paint20_linear_739_2479)"/>
      <path d="M9.67393 36.8922C10.3318 37.6464 10.4893 38.4959 10.5617 39.3721C10.5757 39.5402 10.6078 39.7583 10.3969 39.8371C10.2296 39.8995 10.1069 39.7518 9.98653 39.6544C9.15201 38.9794 8.6387 38.1226 8.55216 37.0383C8.529 36.7516 8.46876 36.3807 8.79897 36.2492C9.09877 36.1301 9.28413 36.4379 9.47023 36.6339C9.56459 36.7335 9.64116 36.85 9.67393 36.8922V36.8922Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.3482 46.6946C48.2287 46.4468 48.3695 46.2773 48.4385 46.1028C48.8209 45.1413 48.6597 44.1985 48.3148 43.2656C48.1485 42.8151 47.8862 42.8172 47.6388 43.1863C46.8713 44.3299 46.3528 45.5203 47.0908 46.9028C47.2366 47.1759 47.2163 47.3989 46.9111 47.5413C46.8753 47.5577 46.8442 47.5892 46.8067 47.5978C45.4946 47.9006 44.4154 48.8415 43.025 48.9338C42.8299 48.9468 42.6336 49.0056 42.4496 49.0744C42.332 49.1184 42.1524 49.1417 42.1617 49.3236C42.1683 49.4544 42.2934 49.5199 42.3989 49.5731C43.4347 50.0977 44.3377 50.7603 44.8651 51.8397C44.9987 52.1129 45.2562 52.0437 45.4355 51.9274C46.5698 51.1926 47.8384 50.9357 49.1663 50.8631C49.3197 50.8548 49.5161 50.8487 49.5726 50.6748C49.6329 50.4882 49.4496 50.3973 49.3301 50.3021C48.3403 49.5152 47.2319 48.9994 45.9763 48.817C45.7877 48.7896 45.5768 48.8424 45.3693 48.6417C45.6967 48.5082 45.992 48.3671 46.3001 48.2647C47.4384 47.8875 48.4437 47.3134 49.3634 46.5287C50.3796 45.6621 51.1273 44.6295 51.7525 43.4699C52.5748 41.9452 53.0041 40.3108 53.1255 38.5941C53.1875 37.7164 53.6151 36.9138 53.576 36.0264C53.525 34.8748 53.0693 33.9187 52.1203 33.2203C51.8991 33.0575 51.6172 33.0569 51.6828 33.3748C51.7743 33.8151 51.6218 34.1958 51.5682 34.5964C51.417 35.7203 51.6966 36.7341 52.3626 37.6334C52.6527 38.0251 52.7178 38.4222 52.6539 38.8609C52.5042 39.8895 52.3936 40.93 51.8743 41.9947C51.6819 41.3084 51.5286 40.7398 51.2409 40.2152C50.9936 39.7645 50.6361 39.427 50.2639 39.0935C50.1587 38.9993 50.0582 38.8882 49.9 38.9712C49.7817 39.0332 49.7543 39.1501 49.7498 39.2735C49.7004 40.5925 49.9563 41.8142 51.011 42.7292C51.3583 43.0308 51.3818 43.3034 51.1696 43.6575C51.0173 43.912 50.8767 44.1738 50.7221 44.4266C50.6389 44.5624 50.5313 44.7219 50.3501 44.6547C50.154 44.5819 50.2214 44.3901 50.2444 44.2374C50.3883 43.2755 50.1856 42.3837 49.6859 41.549C49.5606 41.3398 49.4279 41.1044 49.1567 41.1265C48.8853 41.1491 48.8753 41.4274 48.8203 41.6289C48.479 42.8815 48.5723 44.072 49.4309 45.122C49.6934 45.4433 49.6612 45.7073 49.3806 45.9471C49.0612 46.2197 48.7876 46.568 48.3486 46.6949L48.3482 46.6946Z" fill="url(#paint21_linear_739_2479)"/>
      <path d="M48.3482 46.6946C48.2287 46.4468 48.3695 46.2773 48.4385 46.1028C48.8209 45.1413 48.6597 44.1985 48.3148 43.2656C48.1485 42.8151 47.8862 42.8172 47.6388 43.1863C46.8713 44.3299 46.3528 45.5203 47.0908 46.9028C47.2366 47.1759 47.2163 47.3989 46.9111 47.5413C46.8753 47.5577 46.8442 47.5892 46.8067 47.5978C45.4946 47.9006 44.4154 48.8415 43.025 48.9338C42.8299 48.9468 42.6336 49.0056 42.4496 49.0744C42.332 49.1184 42.1524 49.1417 42.1617 49.3236C42.1683 49.4544 42.2934 49.5199 42.3989 49.5731C43.4347 50.0977 44.3377 50.7603 44.8651 51.8397C44.9987 52.1129 45.2562 52.0437 45.4355 51.9274C46.5698 51.1926 47.8384 50.9357 49.1663 50.8631C49.3197 50.8548 49.5161 50.8487 49.5726 50.6748C49.6329 50.4882 49.4496 50.3973 49.3301 50.3021C48.3403 49.5152 47.2319 48.9994 45.9763 48.817C45.7877 48.7896 45.5768 48.8424 45.3693 48.6417C45.6967 48.5082 45.992 48.3671 46.3001 48.2647C47.4384 47.8875 48.4437 47.3134 49.3634 46.5287C50.3796 45.6621 51.1273 44.6295 51.7525 43.4699C52.5748 41.9452 53.0041 40.3108 53.1255 38.5941C53.1875 37.7164 53.6151 36.9138 53.576 36.0264C53.525 34.8748 53.0693 33.9187 52.1203 33.2203C51.8991 33.0575 51.6172 33.0569 51.6828 33.3748C51.7743 33.8151 51.6218 34.1958 51.5682 34.5964C51.417 35.7203 51.6966 36.7341 52.3626 37.6334C52.6527 38.0251 52.7178 38.4222 52.6539 38.8609C52.5042 39.8895 52.3936 40.93 51.8743 41.9947C51.6819 41.3084 51.5286 40.7398 51.2409 40.2152C50.9936 39.7645 50.6361 39.427 50.2639 39.0935C50.1587 38.9993 50.0582 38.8882 49.9 38.9712C49.7817 39.0332 49.7543 39.1501 49.7498 39.2735C49.7004 40.5925 49.9563 41.8142 51.011 42.7292C51.3583 43.0308 51.3818 43.3034 51.1696 43.6575C51.0173 43.912 50.8767 44.1738 50.7221 44.4266C50.6389 44.5624 50.5313 44.7219 50.3501 44.6547C50.154 44.5819 50.2214 44.3901 50.2444 44.2374C50.3883 43.2755 50.1856 42.3837 49.6859 41.549C49.5606 41.3398 49.4279 41.1044 49.1567 41.1265C48.8853 41.1491 48.8753 41.4274 48.8203 41.6289C48.479 42.8815 48.5723 44.072 49.4309 45.122C49.6934 45.4433 49.6612 45.7073 49.3806 45.9471C49.0612 46.2197 48.7876 46.568 48.3486 46.6949L48.3482 46.6946Z" fill="white" fill-opacity="0.1"/>
      <path d="M44.7161 44.5239C43.9131 45.4688 43.6252 46.5594 43.8071 47.7798C43.9078 48.4565 44.0942 48.5224 44.6467 48.1202C46.0134 47.1268 46.6193 45.8146 46.3194 44.114C46.2248 43.5773 45.857 43.4017 45.4371 43.7452C45.1656 43.9671 44.9542 44.2618 44.7161 44.5239V44.5239Z" fill="url(#paint22_linear_739_2479)"/>
      <path d="M44.7161 44.5239C43.9131 45.4688 43.6252 46.5594 43.8071 47.7798C43.9078 48.4565 44.0942 48.5224 44.6467 48.1202C46.0134 47.1268 46.6193 45.8146 46.3194 44.114C46.2248 43.5773 45.857 43.4017 45.4371 43.7452C45.1656 43.9671 44.9542 44.2618 44.7161 44.5239V44.5239Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.0611 48.1857C47.5784 48.7821 47.6657 49.0534 48.4332 49.2368C49.7295 49.5466 50.7071 48.9522 51.5612 48.0932C51.8495 47.803 52.0809 47.4483 52.2987 47.0987C52.4465 46.861 52.4116 46.6405 52.0577 46.5918C50.8332 46.4246 48.8473 47.2141 48.0616 48.185L48.0611 48.1857Z" fill="url(#paint23_linear_739_2479)"/>
      <path d="M48.0611 48.1857C47.5784 48.7821 47.6657 49.0534 48.4332 49.2368C49.7295 49.5466 50.7071 48.9522 51.5612 48.0932C51.8495 47.803 52.0809 47.4483 52.2987 47.0987C52.4465 46.861 52.4116 46.6405 52.0577 46.5918C50.8332 46.4246 48.8473 47.2141 48.0616 48.185L48.0611 48.1857Z" fill="white" fill-opacity="0.1"/>
      <path d="M51.1714 45.0366C51.0255 45.341 50.5339 45.5917 50.7264 45.9214C50.9149 46.2438 51.4163 46.0881 51.7833 46.0919C53.2755 46.1075 54.3714 44.8174 54.7321 43.6636C54.8764 43.2024 54.6232 43.1601 54.2551 43.2152C52.9786 43.4068 51.9594 44.0191 51.1718 45.0369L51.1714 45.0366Z" fill="url(#paint24_linear_739_2479)"/>
      <path d="M51.1714 45.0366C51.0255 45.341 50.5339 45.5917 50.7264 45.9214C50.9149 46.2438 51.4163 46.0881 51.7833 46.0919C53.2755 46.1075 54.3714 44.8174 54.7321 43.6636C54.8764 43.2024 54.6232 43.1601 54.2551 43.2152C52.9786 43.4068 51.9594 44.0191 51.1718 45.0369L51.1714 45.0366Z" fill="white" fill-opacity="0.1"/>
      <path d="M53.4529 41.1216C53.0885 41.589 52.7841 41.9498 52.6848 42.4395C52.584 42.9381 52.8605 43.032 53.2228 42.9089C54.4356 42.4966 55.4334 41.8426 55.7443 40.4844C55.8589 39.9827 55.6998 39.8154 55.1782 39.956C54.4289 40.1579 53.778 40.5117 53.4533 41.1219L53.4529 41.1216Z" fill="url(#paint25_linear_739_2479)"/>
      <path d="M53.4529 41.1216C53.0885 41.589 52.7841 41.9498 52.6848 42.4395C52.584 42.9381 52.8605 43.032 53.2228 42.9089C54.4356 42.4966 55.4334 41.8426 55.7443 40.4844C55.8589 39.9827 55.6998 39.8154 55.1782 39.956C54.4289 40.1579 53.778 40.5117 53.4533 41.1219L53.4529 41.1216Z" fill="white" fill-opacity="0.1"/>
      <path d="M51.7528 40.273C51.9061 40.3831 52.136 40.551 52.2223 40.2009C52.4734 39.1828 52.0463 37.2668 50.989 36.7608C50.7793 36.6601 50.5604 36.4493 50.328 36.5842C50.0809 36.728 50.1996 37.0165 50.2172 37.2421C50.3444 38.8396 50.9988 39.5663 51.7521 40.2731L51.7528 40.273Z" fill="url(#paint26_linear_739_2479)"/>
      <path d="M51.7528 40.273C51.9061 40.3831 52.136 40.551 52.2223 40.2009C52.4734 39.1828 52.0463 37.2668 50.989 36.7608C50.7793 36.6601 50.5604 36.4493 50.328 36.5842C50.0809 36.728 50.1996 37.0165 50.2172 37.2421C50.3444 38.8396 50.9988 39.5663 51.7521 40.2731L51.7528 40.273Z" fill="white" fill-opacity="0.1"/>
      <path d="M54.3261 36.8922C53.6683 37.6464 53.5107 38.4959 53.4383 39.3721C53.4244 39.5402 53.3922 39.7583 53.6031 39.8371C53.7705 39.8995 53.8931 39.7518 54.0135 39.6544C54.848 38.9794 55.3613 38.1226 55.4479 37.0383C55.471 36.7516 55.5313 36.3807 55.2011 36.2492C54.9013 36.1301 54.7159 36.4379 54.5298 36.6339C54.4354 36.7335 54.3589 36.85 54.3261 36.8922V36.8922Z" fill="url(#paint27_linear_739_2479)"/>
      <path d="M54.3261 36.8922C53.6683 37.6464 53.5107 38.4959 53.4383 39.3721C53.4244 39.5402 53.3922 39.7583 53.6031 39.8371C53.7705 39.8995 53.8931 39.7518 54.0135 39.6544C54.848 38.9794 55.3613 38.1226 55.4479 37.0383C55.471 36.7516 55.5313 36.3807 55.2011 36.2492C54.9013 36.1301 54.7159 36.4379 54.5298 36.6339C54.4354 36.7335 54.3589 36.85 54.3261 36.8922V36.8922Z" fill="white" fill-opacity="0.1"/>
      <defs>
      <linearGradient id="paint0_linear_739_2479" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2479" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2479" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2479" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2479" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2479" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2479" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2479" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2479" x1="31.8579" y1="43.8016" x2="31.8579" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2479" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2479" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2479" x1="31.8579" y1="15.1353" x2="31.8579" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2479" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2479" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2479" x1="5" y1="38.5632" x2="12.3542" y2="32.9588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2479" x1="16.4853" y1="44.761" x2="18.3994" y2="43.3026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2479" x1="11.4581" y1="46.8706" x2="13.6783" y2="45.1875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2479" x1="8.89695" y1="43.5693" x2="10.6941" y2="42.2005" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2479" x1="7.80016" y1="40.3663" x2="9.20326" y2="39.2949" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2479" x1="10.5235" y1="38.6526" x2="13.6392" y2="36.3873" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2479" x1="7.78464" y1="37.0145" x2="9.0587" y2="36.0411" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2479" x1="59" y1="38.5632" x2="51.6458" y2="32.9588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2479" x1="47.5147" y1="44.761" x2="45.6006" y2="43.3026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2479" x1="52.5419" y1="46.8706" x2="50.3217" y2="45.1875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2479" x1="55.103" y1="43.5693" x2="53.3059" y2="42.2005" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2479" x1="56.1999" y1="40.3663" x2="54.7968" y2="39.2949" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2479" x1="53.4765" y1="38.6526" x2="50.3608" y2="36.3873" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2479" x1="56.2154" y1="37.0145" x2="54.9413" y2="36.0411" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <clipPath id="clip0_739_2479">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip1_739_2479">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
    </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupB0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">B</text>
</g>
<g id="barCurrentB0${index}" mask="url(#barClipPathB0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientB0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#FFFFFF" opacity="0.1"/>
</g>
`
    : grade === 'B-'
    ? `<g id="trophySVGB-0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2563)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2563)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white" fill-opacity="0.1"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2563)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="white" fill-opacity="0.1"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2563)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="white" fill-opacity="0.1"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2563)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white" fill-opacity="0.1"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2563)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white" fill-opacity="0.1"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2563)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="white" fill-opacity="0.1"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2563)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="white" fill-opacity="0.1"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_2563)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2563)" fill-opacity="0.6"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="url(#paint9_linear_739_2563)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2005C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2005 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2563)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2563)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2563)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3971 32.3655H42.7373L42.1503 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2563)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip1_739_2563)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2005C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2005 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3971 32.3655H42.7373L42.1503 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_739_2563" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2563" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2563" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2563" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2563" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2563" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2563" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2563" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE713"/>
      <stop offset="0.505208" stop-color="#F29F23"/>
      <stop offset="1" stop-color="#FF7A00"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2563" x1="31.8579" y1="43.8016" x2="31.8579" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2563" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2563" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2563" x1="31.8579" y1="15.1353" x2="31.8579" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2563" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2563" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="clip0_739_2563">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip1_739_2563">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupB-0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">B-</text>
</g>
<g id="barCurrentB-0${index}" mask="url(#barClipPathB-0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientB0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#FFFFFF" opacity="0.1"/>
</g>
`
    : grade === 'C+'
    ? `<g id="trophySVGC+0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_739_2369)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2369)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2369)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.1"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2369)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="black" fill-opacity="0.1"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2369)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="black" fill-opacity="0.1"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2369)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="black" fill-opacity="0.1"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2369)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="black" fill-opacity="0.1"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2369)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2369)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="black" fill-opacity="0.1"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip1_739_2369)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2369)" fill-opacity="0.6"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="url(#paint9_linear_739_2369)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2369)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4906 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2369)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2369)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3971 32.3655H42.7373L42.1503 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2369)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip2_739_2369)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5 50.8157H24.2157C22.7806 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7806 56 24.2157 56H39.5C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4906 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3971 32.3655H42.7373L42.1503 35.2627H46.5736C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <path d="M13.8297 44.2138C14.0073 43.8455 13.7981 43.5935 13.6955 43.3343C13.1272 41.9053 13.3668 40.5042 13.8794 39.1179C14.1265 38.4483 14.5163 38.4515 14.884 39C16.0246 40.6995 16.7951 42.4686 15.6983 44.5232C15.4816 44.929 15.5118 45.2605 15.9654 45.4719C16.0186 45.4964 16.0648 45.5432 16.1206 45.556C18.0704 46.0059 19.6743 47.4042 21.7406 47.5414C22.0305 47.5607 22.3222 47.6481 22.5958 47.7504C22.7705 47.8157 23.0373 47.8503 23.0236 48.1207C23.0138 48.3151 22.8279 48.4124 22.671 48.4915C21.1318 49.2711 19.7897 50.2559 19.0061 51.8599C18.8075 52.2659 18.4247 52.163 18.1584 51.9902C16.4727 50.8983 14.5874 50.5164 12.6139 50.4086C12.386 50.3962 12.0942 50.3872 12.0102 50.1287C11.9206 49.8515 12.193 49.7163 12.3706 49.5748C13.8415 48.4054 15.4887 47.6389 17.3547 47.3678C17.6349 47.3271 17.9483 47.4056 18.2567 47.1073C17.7701 46.909 17.3313 46.6993 16.8735 46.5471C15.1817 45.9865 13.6878 45.1334 12.321 43.9672C10.8109 42.6793 9.69963 41.1447 8.77059 39.4214C7.54852 37.1555 6.9106 34.7267 6.7302 32.1754C6.63796 30.8711 6.00251 29.6784 6.06069 28.3596C6.13647 26.6482 6.81361 25.2274 8.22402 24.1895C8.55269 23.9475 8.97166 23.9466 8.87414 24.4191C8.73823 25.0734 8.9648 25.6392 9.04453 26.2345C9.26916 27.9047 8.85366 29.4113 7.86385 30.7477C7.43281 31.3299 7.336 31.92 7.43097 32.572C7.65347 34.1007 7.81778 35.6469 8.58957 37.2291C8.87548 36.2092 9.10326 35.3643 9.53093 34.5846C9.89841 33.9149 10.4297 33.4132 10.9828 32.9177C11.1391 32.7776 11.2885 32.6126 11.5236 32.7359C11.6994 32.828 11.7401 33.0018 11.7468 33.1852C11.8202 35.1453 11.4399 36.9609 9.87256 38.3208C9.35633 38.7689 9.32148 39.174 9.6368 39.7002C9.86323 40.0784 10.0721 40.4676 10.3019 40.8432C10.4255 41.0451 10.5853 41.282 10.8546 41.1822C11.1462 41.074 11.046 40.789 11.0118 40.5621C10.7979 39.1326 11.0991 37.8073 11.8418 36.5668C12.0279 36.2559 12.2252 35.906 12.6282 35.939C13.0316 35.9725 13.0465 36.386 13.1281 36.6855C13.6353 38.547 13.4966 40.3162 12.2208 41.8766C11.8306 42.3541 11.8785 42.7465 12.2955 43.1029C12.7702 43.508 13.1767 44.0255 13.8292 44.2142L13.8297 44.2138Z" fill="url(#paint14_linear_739_2369)"/>
      <path d="M13.8297 44.2138C14.0073 43.8455 13.7981 43.5935 13.6955 43.3343C13.1272 41.9053 13.3668 40.5042 13.8794 39.1179C14.1265 38.4483 14.5163 38.4515 14.884 39C16.0246 40.6995 16.7951 42.4686 15.6983 44.5232C15.4816 44.929 15.5118 45.2605 15.9654 45.4719C16.0186 45.4964 16.0648 45.5432 16.1206 45.556C18.0704 46.0059 19.6743 47.4042 21.7406 47.5414C22.0305 47.5607 22.3222 47.6481 22.5958 47.7504C22.7705 47.8157 23.0373 47.8503 23.0236 48.1207C23.0138 48.3151 22.8279 48.4124 22.671 48.4915C21.1318 49.2711 19.7897 50.2559 19.0061 51.8599C18.8075 52.2659 18.4247 52.163 18.1584 51.9902C16.4727 50.8983 14.5874 50.5164 12.6139 50.4086C12.386 50.3962 12.0942 50.3872 12.0102 50.1287C11.9206 49.8515 12.193 49.7163 12.3706 49.5748C13.8415 48.4054 15.4887 47.6389 17.3547 47.3678C17.6349 47.3271 17.9483 47.4056 18.2567 47.1073C17.7701 46.909 17.3313 46.6993 16.8735 46.5471C15.1817 45.9865 13.6878 45.1334 12.321 43.9672C10.8109 42.6793 9.69963 41.1447 8.77059 39.4214C7.54852 37.1555 6.9106 34.7267 6.7302 32.1754C6.63796 30.8711 6.00251 29.6784 6.06069 28.3596C6.13647 26.6482 6.81361 25.2274 8.22402 24.1895C8.55269 23.9475 8.97166 23.9466 8.87414 24.4191C8.73823 25.0734 8.9648 25.6392 9.04453 26.2345C9.26916 27.9047 8.85366 29.4113 7.86385 30.7477C7.43281 31.3299 7.336 31.92 7.43097 32.572C7.65347 34.1007 7.81778 35.6469 8.58957 37.2291C8.87548 36.2092 9.10326 35.3643 9.53093 34.5846C9.89841 33.9149 10.4297 33.4132 10.9828 32.9177C11.1391 32.7776 11.2885 32.6126 11.5236 32.7359C11.6994 32.828 11.7401 33.0018 11.7468 33.1852C11.8202 35.1453 11.4399 36.9609 9.87256 38.3208C9.35633 38.7689 9.32148 39.174 9.6368 39.7002C9.86323 40.0784 10.0721 40.4676 10.3019 40.8432C10.4255 41.0451 10.5853 41.282 10.8546 41.1822C11.1462 41.074 11.046 40.789 11.0118 40.5621C10.7979 39.1326 11.0991 37.8073 11.8418 36.5668C12.0279 36.2559 12.2252 35.906 12.6282 35.939C13.0316 35.9725 13.0465 36.386 13.1281 36.6855C13.6353 38.547 13.4966 40.3162 12.2208 41.8766C11.8306 42.3541 11.8785 42.7465 12.2955 43.1029C12.7702 43.508 13.1767 44.0255 13.8292 44.2142L13.8297 44.2138Z" fill="black" fill-opacity="0.1"/>
      <path d="M19.2275 40.9879C20.4208 42.392 20.8487 44.0128 20.5783 45.8265C20.4287 46.8321 20.1516 46.93 19.3306 46.3324C17.2995 44.856 16.3991 42.9059 16.8448 40.3787C16.9854 39.5811 17.532 39.3201 18.1559 39.8307C18.5594 40.1603 18.8736 40.5983 19.2275 40.9879V40.9879Z" fill="url(#paint15_linear_739_2369)"/>
      <path d="M19.2275 40.9879C20.4208 42.392 20.8487 44.0128 20.5783 45.8265C20.4287 46.8321 20.1516 46.93 19.3306 46.3324C17.2995 44.856 16.3991 42.9059 16.8448 40.3787C16.9854 39.5811 17.532 39.3201 18.1559 39.8307C18.5594 40.1603 18.8736 40.5983 19.2275 40.9879V40.9879Z" fill="black" fill-opacity="0.1"/>
      <path d="M14.2564 46.4297C14.9737 47.316 14.844 47.7192 13.7033 47.9916C11.7769 48.452 10.3242 47.5687 9.0548 46.2921C8.62638 45.861 8.28249 45.3339 7.95876 44.8142C7.73914 44.461 7.79104 44.1334 8.31703 44.0609C10.1367 43.8124 13.088 44.9858 14.2556 46.4286L14.2564 46.4297Z" fill="url(#paint16_linear_739_2369)"/>
      <path d="M14.2564 46.4297C14.9737 47.316 14.844 47.7192 13.7033 47.9916C11.7769 48.452 10.3242 47.5687 9.0548 46.2921C8.62638 45.861 8.28249 45.3339 7.95876 44.8142C7.73914 44.461 7.79104 44.1334 8.31703 44.0609C10.1367 43.8124 13.088 44.9858 14.2556 46.4286L14.2564 46.4297Z" fill="black" fill-opacity="0.1"/>
      <path d="M9.63415 41.7497C9.85087 42.2022 10.5815 42.5747 10.2954 43.0647C10.0153 43.5438 9.27024 43.3123 8.72477 43.3181C6.50714 43.3412 4.8785 41.424 4.34252 39.7094C4.12808 39.0239 4.50431 38.9611 5.0514 39.043C6.94837 39.3277 8.46304 40.2376 9.63359 41.7502L9.63415 41.7497Z" fill="url(#paint17_linear_739_2369)"/>
      <path d="M9.63415 41.7497C9.85087 42.2022 10.5815 42.5747 10.2954 43.0647C10.0153 43.5438 9.27024 43.3123 8.72477 43.3181C6.50714 43.3412 4.8785 41.424 4.34252 39.7094C4.12808 39.0239 4.50431 38.9611 5.0514 39.043C6.94837 39.3277 8.46304 40.2376 9.63359 41.7502L9.63415 41.7497Z" fill="black" fill-opacity="0.1"/>
      <path d="M6.24364 35.9316C6.78511 36.6263 7.23757 37.1624 7.38507 37.8901C7.53486 38.6312 7.12393 38.7707 6.58552 38.5878C4.78329 37.9751 3.30039 37.0031 2.83838 34.9846C2.66804 34.2391 2.90444 33.9905 3.67959 34.1995C4.79323 34.4995 5.76055 35.0252 6.24308 35.932L6.24364 35.9316Z" fill="url(#paint18_linear_739_2369)"/>
      <path d="M6.24364 35.9316C6.78511 36.6263 7.23757 37.1624 7.38507 37.8901C7.53486 38.6312 7.12393 38.7707 6.58552 38.5878C4.78329 37.9751 3.30039 37.0031 2.83838 34.9846C2.66804 34.2391 2.90444 33.9905 3.67959 34.1995C4.79323 34.4995 5.76055 35.0252 6.24308 35.932L6.24364 35.9316Z" fill="black" fill-opacity="0.1"/>
      <path d="M8.77014 34.6705C8.54234 34.8342 8.20061 35.0836 8.07229 34.5634C7.69925 33.0503 8.33386 30.203 9.90525 29.451C10.2168 29.3014 10.5422 28.9881 10.8875 29.1886C11.2548 29.4023 11.0784 29.831 11.0522 30.1662C10.8631 32.5403 9.89067 33.6204 8.77113 34.6706L8.77014 34.6705Z" fill="url(#paint19_linear_739_2369)"/>
      <path d="M8.77014 34.6705C8.54234 34.8342 8.20061 35.0836 8.07229 34.5634C7.69925 33.0503 8.33386 30.203 9.90525 29.451C10.2168 29.3014 10.5422 28.9881 10.8875 29.1886C11.2548 29.4023 11.0784 29.831 11.0522 30.1662C10.8631 32.5403 9.89067 33.6204 8.77113 34.6706L8.77014 34.6705Z" fill="black" fill-opacity="0.1"/>
      <path d="M4.94596 29.6463C5.92358 30.767 6.15771 32.0296 6.26534 33.3317C6.28603 33.5816 6.33378 33.9056 6.02043 34.0227C5.77169 34.1154 5.58946 33.8959 5.41053 33.7512C4.17033 32.7481 3.4075 31.4747 3.27889 29.8634C3.24447 29.4374 3.15496 28.8861 3.64567 28.6908C4.09122 28.5136 4.36668 28.9712 4.64325 29.2624C4.78347 29.4105 4.89727 29.5836 4.94596 29.6463V29.6463Z" fill="url(#paint20_linear_739_2369)"/>
      <path d="M4.94596 29.6463C5.92358 30.767 6.15771 32.0296 6.26534 33.3317C6.28603 33.5816 6.33378 33.9056 6.02043 34.0227C5.77169 34.1154 5.58946 33.8959 5.41053 33.7512C4.17033 32.7481 3.4075 31.4747 3.27889 29.8634C3.24447 29.4374 3.15496 28.8861 3.64567 28.6908C4.09122 28.5136 4.36668 28.9712 4.64325 29.2624C4.78347 29.4105 4.89727 29.5836 4.94596 29.6463V29.6463Z" fill="black" fill-opacity="0.1"/>
      <path d="M50.3155 44.2138C50.1379 43.8455 50.3471 43.5935 50.4497 43.3343C51.018 41.9053 50.7784 40.5042 50.2658 39.1179C50.0187 38.4483 49.6289 38.4515 49.2612 39C48.1206 40.6995 47.3501 42.4686 48.4469 44.5232C48.6636 44.929 48.6334 45.2605 48.1798 45.4719C48.1266 45.4964 48.0804 45.5432 48.0246 45.556C46.0748 46.0059 44.4709 47.4042 42.4046 47.5414C42.1147 47.5607 41.823 47.6481 41.5494 47.7504C41.3747 47.8157 41.1079 47.8503 41.1216 48.1207C41.1314 48.3151 41.3173 48.4124 41.4742 48.4915C43.0134 49.2711 44.3555 50.2559 45.1391 51.8599C45.3377 52.2659 45.7205 52.163 45.9868 51.9902C47.6725 50.8983 49.5578 50.5164 51.5313 50.4086C51.7592 50.3962 52.051 50.3872 52.135 50.1287C52.2246 49.8515 51.9522 49.7163 51.7746 49.5748C50.3037 48.4054 48.6565 47.6389 46.7905 47.3678C46.5103 47.3271 46.1969 47.4056 45.8885 47.1073C46.3751 46.909 46.8139 46.6993 47.2717 46.5471C48.9635 45.9865 50.4574 45.1334 51.8242 43.9672C53.3343 42.6793 54.4456 41.1447 55.3746 39.4214C56.5967 37.1555 57.2346 34.7267 57.415 32.1754C57.5072 30.8711 58.1427 29.6784 58.0845 28.3596C58.0087 26.6482 57.3316 25.2274 55.9212 24.1895C55.5925 23.9475 55.1735 23.9466 55.2711 24.4191C55.407 25.0734 55.1804 25.6392 55.1007 26.2345C54.876 27.9047 55.2915 29.4113 56.2814 30.7477C56.7124 31.3299 56.8092 31.92 56.7142 32.572C56.4917 34.1007 56.3274 35.6469 55.5556 37.2291C55.2697 36.2092 55.0419 35.3643 54.6143 34.5846C54.2468 33.9149 53.7155 33.4132 53.1624 32.9177C53.0061 32.7776 52.8567 32.6126 52.6216 32.7359C52.4458 32.828 52.4051 33.0018 52.3984 33.1852C52.325 35.1453 52.7053 36.9609 54.2726 38.3208C54.7889 38.7689 54.8237 39.174 54.5084 39.7002C54.282 40.0784 54.0731 40.4676 53.8433 40.8432C53.7197 41.0451 53.5599 41.282 53.2906 41.1822C52.999 41.074 53.0992 40.789 53.1335 40.5621C53.3473 39.1326 53.0461 37.8073 52.3034 36.5668C52.1173 36.2559 51.92 35.906 51.517 35.939C51.1136 35.9725 51.0987 36.386 51.0171 36.6855C50.5099 38.547 50.6486 40.3162 51.9244 41.8766C52.3146 42.3541 52.2667 42.7465 51.8497 43.1029C51.375 43.508 50.9685 44.0255 50.316 44.2142L50.3155 44.2138Z" fill="url(#paint21_linear_739_2369)"/>
      <path d="M50.3155 44.2138C50.1379 43.8455 50.3471 43.5935 50.4497 43.3343C51.018 41.9053 50.7784 40.5042 50.2658 39.1179C50.0187 38.4483 49.6289 38.4515 49.2612 39C48.1206 40.6995 47.3501 42.4686 48.4469 44.5232C48.6636 44.929 48.6334 45.2605 48.1798 45.4719C48.1266 45.4964 48.0804 45.5432 48.0246 45.556C46.0748 46.0059 44.4709 47.4042 42.4046 47.5414C42.1147 47.5607 41.823 47.6481 41.5494 47.7504C41.3747 47.8157 41.1079 47.8503 41.1216 48.1207C41.1314 48.3151 41.3173 48.4124 41.4742 48.4915C43.0134 49.2711 44.3555 50.2559 45.1391 51.8599C45.3377 52.2659 45.7205 52.163 45.9868 51.9902C47.6725 50.8983 49.5578 50.5164 51.5313 50.4086C51.7592 50.3962 52.051 50.3872 52.135 50.1287C52.2246 49.8515 51.9522 49.7163 51.7746 49.5748C50.3037 48.4054 48.6565 47.6389 46.7905 47.3678C46.5103 47.3271 46.1969 47.4056 45.8885 47.1073C46.3751 46.909 46.8139 46.6993 47.2717 46.5471C48.9635 45.9865 50.4574 45.1334 51.8242 43.9672C53.3343 42.6793 54.4456 41.1447 55.3746 39.4214C56.5967 37.1555 57.2346 34.7267 57.415 32.1754C57.5072 30.8711 58.1427 29.6784 58.0845 28.3596C58.0087 26.6482 57.3316 25.2274 55.9212 24.1895C55.5925 23.9475 55.1735 23.9466 55.2711 24.4191C55.407 25.0734 55.1804 25.6392 55.1007 26.2345C54.876 27.9047 55.2915 29.4113 56.2814 30.7477C56.7124 31.3299 56.8092 31.92 56.7142 32.572C56.4917 34.1007 56.3274 35.6469 55.5556 37.2291C55.2697 36.2092 55.0419 35.3643 54.6143 34.5846C54.2468 33.9149 53.7155 33.4132 53.1624 32.9177C53.0061 32.7776 52.8567 32.6126 52.6216 32.7359C52.4458 32.828 52.4051 33.0018 52.3984 33.1852C52.325 35.1453 52.7053 36.9609 54.2726 38.3208C54.7889 38.7689 54.8237 39.174 54.5084 39.7002C54.282 40.0784 54.0731 40.4676 53.8433 40.8432C53.7197 41.0451 53.5599 41.282 53.2906 41.1822C52.999 41.074 53.0992 40.789 53.1335 40.5621C53.3473 39.1326 53.0461 37.8073 52.3034 36.5668C52.1173 36.2559 51.92 35.906 51.517 35.939C51.1136 35.9725 51.0987 36.386 51.0171 36.6855C50.5099 38.547 50.6486 40.3162 51.9244 41.8766C52.3146 42.3541 52.2667 42.7465 51.8497 43.1029C51.375 43.508 50.9685 44.0255 50.316 44.2142L50.3155 44.2138Z" fill="black" fill-opacity="0.1"/>
      <path d="M44.9177 40.9879C43.7245 42.392 43.2965 44.0128 43.5669 45.8265C43.7165 46.8321 43.9936 46.93 44.8146 46.3324C46.8457 44.856 47.7461 42.9059 47.3004 40.3787C47.1598 39.5811 46.6132 39.3201 45.9893 39.8307C45.5858 40.1603 45.2716 40.5983 44.9177 40.9879V40.9879Z" fill="url(#paint22_linear_739_2369)"/>
      <path d="M44.9177 40.9879C43.7245 42.392 43.2965 44.0128 43.5669 45.8265C43.7165 46.8321 43.9936 46.93 44.8146 46.3324C46.8457 44.856 47.7461 42.9059 47.3004 40.3787C47.1598 39.5811 46.6132 39.3201 45.9893 39.8307C45.5858 40.1603 45.2716 40.5983 44.9177 40.9879V40.9879Z" fill="black" fill-opacity="0.1"/>
      <path d="M49.8888 46.4297C49.1715 47.316 49.3012 47.7192 50.4419 47.9916C52.3683 48.452 53.821 47.5687 55.0904 46.2921C55.5188 45.861 55.8627 45.3339 56.1864 44.8142C56.4061 44.461 56.3542 44.1334 55.8282 44.0609C54.0085 43.8124 51.0572 44.9858 49.8896 46.4286L49.8888 46.4297Z" fill="url(#paint23_linear_739_2369)"/>
      <path d="M49.8888 46.4297C49.1715 47.316 49.3012 47.7192 50.4419 47.9916C52.3683 48.452 53.821 47.5687 55.0904 46.2921C55.5188 45.861 55.8627 45.3339 56.1864 44.8142C56.4061 44.461 56.3542 44.1334 55.8282 44.0609C54.0085 43.8124 51.0572 44.9858 49.8896 46.4286L49.8888 46.4297Z" fill="black" fill-opacity="0.1"/>
      <path d="M54.5111 41.7497C54.2943 42.2022 53.5637 42.5747 53.8498 43.0647C54.1299 43.5438 54.875 43.3123 55.4204 43.3181C57.6381 43.3412 59.2667 41.424 59.8027 39.7094C60.0171 39.0239 59.6409 38.9611 59.0938 39.043C57.1968 39.3277 55.6822 40.2376 54.5116 41.7502L54.5111 41.7497Z" fill="url(#paint24_linear_739_2369)"/>
      <path d="M54.5111 41.7497C54.2943 42.2022 53.5637 42.5747 53.8498 43.0647C54.1299 43.5438 54.875 43.3123 55.4204 43.3181C57.6381 43.3412 59.2667 41.424 59.8027 39.7094C60.0171 39.0239 59.6409 38.9611 59.0938 39.043C57.1968 39.3277 55.6822 40.2376 54.5116 41.7502L54.5111 41.7497Z" fill="black" fill-opacity="0.1"/>
      <path d="M57.9016 35.9316C57.3601 36.6263 56.9076 37.1624 56.7601 37.8901C56.6103 38.6312 57.0213 38.7707 57.5597 38.5878C59.3619 37.9751 60.8448 37.0031 61.3068 34.9846C61.4772 34.2391 61.2408 33.9905 60.4656 34.1995C59.352 34.4995 58.3847 35.0252 57.9021 35.932L57.9016 35.9316Z" fill="url(#paint25_linear_739_2369)"/>
      <path d="M57.9016 35.9316C57.3601 36.6263 56.9076 37.1624 56.7601 37.8901C56.6103 38.6312 57.0213 38.7707 57.5597 38.5878C59.3619 37.9751 60.8448 37.0031 61.3068 34.9846C61.4772 34.2391 61.2408 33.9905 60.4656 34.1995C59.352 34.4995 58.3847 35.0252 57.9021 35.932L57.9016 35.9316Z" fill="black" fill-opacity="0.1"/>
      <path d="M55.3751 34.6705C55.6029 34.8342 55.9446 35.0836 56.0729 34.5634C56.446 33.0503 55.8113 30.203 54.24 29.451C53.9284 29.3014 53.603 28.9881 53.2577 29.1886C52.8904 29.4023 53.0668 29.831 53.093 30.1662C53.2821 32.5403 54.2545 33.6204 55.3741 34.6706L55.3751 34.6705Z" fill="url(#paint26_linear_739_2369)"/>
      <path d="M55.3751 34.6705C55.6029 34.8342 55.9446 35.0836 56.0729 34.5634C56.446 33.0503 55.8113 30.203 54.24 29.451C53.9284 29.3014 53.603 28.9881 53.2577 29.1886C52.8904 29.4023 53.0668 29.831 53.093 30.1662C53.2821 32.5403 54.2545 33.6204 55.3741 34.6706L55.3751 34.6705Z" fill="black" fill-opacity="0.1"/>
      <path d="M59.1992 29.6463C58.2216 30.767 57.9875 32.0296 57.8799 33.3317C57.8592 33.5816 57.8114 33.9056 58.1248 34.0227C58.3735 34.1154 58.5557 33.8959 58.7347 33.7512C59.9749 32.7481 60.7377 31.4747 60.8663 29.8634C60.9007 29.4374 60.9902 28.8861 60.4995 28.6908C60.054 28.5136 59.7785 28.9712 59.502 29.2624C59.3617 29.4105 59.2479 29.5836 59.1992 29.6463V29.6463Z" fill="url(#paint27_linear_739_2369)"/>
      <path d="M59.1992 29.6463C58.2216 30.767 57.9875 32.0296 57.8799 33.3317C57.8592 33.5816 57.8114 33.9056 58.1248 34.0227C58.3735 34.1154 58.5557 33.8959 58.7347 33.7512C59.9749 32.7481 60.7377 31.4747 60.8663 29.8634C60.9007 29.4374 60.9902 28.8861 60.4995 28.6908C60.054 28.5136 59.7785 28.9712 59.502 29.2624C59.3617 29.4105 59.2479 29.5836 59.1992 29.6463V29.6463Z" fill="black" fill-opacity="0.1"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_739_2369" x1="13" y1="11" x2="42" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D06BFF"/>
      <stop offset="0.505208" stop-color="#94C5FF"/>
      <stop offset="1" stop-color="#00F0FF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2369" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2369" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2369" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2369" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2369" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2369" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2369" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2369" x1="31.8579" y1="43.8016" x2="31.8579" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2369" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2369" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2369" x1="31.8579" y1="15.1353" x2="31.8579" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2369" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2369" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2369" x1="-2" y1="32.1296" x2="8.92919" y2="23.8009" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2369" x1="15.0684" y1="41.3402" x2="17.9129" y2="39.1728" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2369" x1="7.59744" y1="44.4753" x2="10.8969" y2="41.9741" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2369" x1="3.79129" y1="39.5693" x2="6.46202" y2="37.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2369" x1="2.16135" y1="34.8092" x2="4.2465" y2="33.217" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2369" x1="6.20853" y1="32.2624" x2="10.8388" y2="28.896" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2369" x1="2.13828" y1="29.828" x2="4.03166" y2="28.3814" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2369" x1="66.1452" y1="32.1296" x2="55.216" y2="23.8009" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2369" x1="49.0768" y1="41.3402" x2="46.2323" y2="39.1728" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2369" x1="56.5478" y1="44.4753" x2="53.2483" y2="41.9741" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2369" x1="60.3539" y1="39.5693" x2="57.6832" y2="37.535" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2369" x1="61.9839" y1="34.8092" x2="59.8987" y2="33.217" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2369" x1="57.9367" y1="32.2624" x2="53.3064" y2="28.896" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2369" x1="62.0069" y1="29.828" x2="60.1135" y2="28.3814" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <clipPath id="clip0_739_2369">
      <rect width="64" height="64" fill="white"/>
      </clipPath>
      <clipPath id="clip1_739_2369">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip2_739_2369">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupC+0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">C+</text>
</g>
<g id="barCurrentC+0${index}" mask="url(#barClipPathC+0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientC0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#000000" opacity="0.1"/>
</g>
`
    : grade === 'C'
    ? `<g id="trophySVGC0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2521)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2521)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.1"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2521)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="black" fill-opacity="0.1"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2521)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="black" fill-opacity="0.1"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2521)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="black" fill-opacity="0.1"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2521)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="black" fill-opacity="0.1"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2521)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2521)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="black" fill-opacity="0.1"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_2521)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2521)" fill-opacity="0.6"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint9_linear_739_2521)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2521)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2521)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2521)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2521)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip1_739_2521)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <path d="M15.6518 46.6946C15.7713 46.4468 15.6305 46.2773 15.5615 46.1028C15.1791 45.1413 15.3403 44.1985 15.6852 43.2656C15.8515 42.8151 16.1138 42.8172 16.3612 43.1863C17.1287 44.3299 17.6472 45.5203 16.9092 46.9028C16.7634 47.1759 16.7837 47.3989 17.0889 47.5413C17.1247 47.5577 17.1558 47.5892 17.1933 47.5978C18.5054 47.9006 19.5846 48.8415 20.975 48.9338C21.1701 48.9468 21.3664 49.0056 21.5504 49.0744C21.668 49.1184 21.8476 49.1417 21.8383 49.3236C21.8317 49.4544 21.7066 49.5199 21.6011 49.5731C20.5653 50.0977 19.6623 50.7603 19.1349 51.8397C19.0013 52.1129 18.7438 52.0437 18.5645 51.9274C17.4302 51.1926 16.1616 50.9357 14.8337 50.8631C14.6803 50.8548 14.4839 50.8487 14.4274 50.6748C14.3671 50.4882 14.5504 50.3973 14.6699 50.3021C15.6597 49.5152 16.7681 48.9994 18.0237 48.817C18.2123 48.7896 18.4232 48.8424 18.6307 48.6417C18.3033 48.5082 18.008 48.3671 17.6999 48.2647C16.5616 47.8875 15.5563 47.3134 14.6366 46.5287C13.6204 45.6621 12.8727 44.6295 12.2475 43.4699C11.4252 41.9452 10.9959 40.3108 10.8745 38.5941C10.8125 37.7164 10.3849 36.9138 10.424 36.0264C10.475 34.8748 10.9307 33.9187 11.8797 33.2203C12.1009 33.0575 12.3828 33.0569 12.3172 33.3748C12.2257 33.8151 12.3782 34.1958 12.4318 34.5964C12.583 35.7203 12.3034 36.7341 11.6374 37.6334C11.3473 38.0251 11.2822 38.4222 11.3461 38.8609C11.4958 39.8895 11.6064 40.93 12.1257 41.9947C12.3181 41.3084 12.4714 40.7398 12.7591 40.2152C13.0064 39.7645 13.3639 39.427 13.7361 39.0935C13.8413 38.9993 13.9418 38.8882 14.1 38.9712C14.2183 39.0332 14.2457 39.1501 14.2502 39.2735C14.2996 40.5925 14.0437 41.8142 12.989 42.7292C12.6417 43.0308 12.6182 43.3034 12.8304 43.6575C12.9827 43.912 13.1233 44.1738 13.2779 44.4266C13.3611 44.5624 13.4687 44.7219 13.6499 44.6547C13.846 44.5819 13.7786 44.3901 13.7556 44.2374C13.6117 43.2755 13.8144 42.3837 14.3141 41.549C14.4394 41.3398 14.5721 41.1044 14.8433 41.1265C15.1147 41.1491 15.1247 41.4274 15.1797 41.6289C15.521 42.8815 15.4277 44.072 14.5691 45.122C14.3066 45.4433 14.3388 45.7073 14.6194 45.9471C14.9388 46.2197 15.2124 46.568 15.6514 46.6949L15.6518 46.6946Z" fill="url(#paint14_linear_739_2521)"/>
      <path d="M15.6518 46.6946C15.7713 46.4468 15.6305 46.2773 15.5615 46.1028C15.1791 45.1413 15.3403 44.1985 15.6852 43.2656C15.8515 42.8151 16.1138 42.8172 16.3612 43.1863C17.1287 44.3299 17.6472 45.5203 16.9092 46.9028C16.7634 47.1759 16.7837 47.3989 17.0889 47.5413C17.1247 47.5577 17.1558 47.5892 17.1933 47.5978C18.5054 47.9006 19.5846 48.8415 20.975 48.9338C21.1701 48.9468 21.3664 49.0056 21.5504 49.0744C21.668 49.1184 21.8476 49.1417 21.8383 49.3236C21.8317 49.4544 21.7066 49.5199 21.6011 49.5731C20.5653 50.0977 19.6623 50.7603 19.1349 51.8397C19.0013 52.1129 18.7438 52.0437 18.5645 51.9274C17.4302 51.1926 16.1616 50.9357 14.8337 50.8631C14.6803 50.8548 14.4839 50.8487 14.4274 50.6748C14.3671 50.4882 14.5504 50.3973 14.6699 50.3021C15.6597 49.5152 16.7681 48.9994 18.0237 48.817C18.2123 48.7896 18.4232 48.8424 18.6307 48.6417C18.3033 48.5082 18.008 48.3671 17.6999 48.2647C16.5616 47.8875 15.5563 47.3134 14.6366 46.5287C13.6204 45.6621 12.8727 44.6295 12.2475 43.4699C11.4252 41.9452 10.9959 40.3108 10.8745 38.5941C10.8125 37.7164 10.3849 36.9138 10.424 36.0264C10.475 34.8748 10.9307 33.9187 11.8797 33.2203C12.1009 33.0575 12.3828 33.0569 12.3172 33.3748C12.2257 33.8151 12.3782 34.1958 12.4318 34.5964C12.583 35.7203 12.3034 36.7341 11.6374 37.6334C11.3473 38.0251 11.2822 38.4222 11.3461 38.8609C11.4958 39.8895 11.6064 40.93 12.1257 41.9947C12.3181 41.3084 12.4714 40.7398 12.7591 40.2152C13.0064 39.7645 13.3639 39.427 13.7361 39.0935C13.8413 38.9993 13.9418 38.8882 14.1 38.9712C14.2183 39.0332 14.2457 39.1501 14.2502 39.2735C14.2996 40.5925 14.0437 41.8142 12.989 42.7292C12.6417 43.0308 12.6182 43.3034 12.8304 43.6575C12.9827 43.912 13.1233 44.1738 13.2779 44.4266C13.3611 44.5624 13.4687 44.7219 13.6499 44.6547C13.846 44.5819 13.7786 44.3901 13.7556 44.2374C13.6117 43.2755 13.8144 42.3837 14.3141 41.549C14.4394 41.3398 14.5721 41.1044 14.8433 41.1265C15.1147 41.1491 15.1247 41.4274 15.1797 41.6289C15.521 42.8815 15.4277 44.072 14.5691 45.122C14.3066 45.4433 14.3388 45.7073 14.6194 45.9471C14.9388 46.2197 15.2124 46.568 15.6514 46.6949L15.6518 46.6946Z" fill="black" fill-opacity="0.1"/>
      <path d="M19.2839 44.5239C20.0869 45.4688 20.3749 46.5594 20.1929 47.7798C20.0922 48.4565 19.9058 48.5224 19.3533 48.1202C17.9866 47.1268 17.3807 45.8146 17.6807 44.114C17.7752 43.5773 18.143 43.4017 18.5629 43.7452C18.8344 43.9671 19.0458 44.2618 19.2839 44.5239V44.5239Z" fill="url(#paint15_linear_739_2521)"/>
      <path d="M19.2839 44.5239C20.0869 45.4688 20.3749 46.5594 20.1929 47.7798C20.0922 48.4565 19.9058 48.5224 19.3533 48.1202C17.9866 47.1268 17.3807 45.8146 17.6807 44.114C17.7752 43.5773 18.143 43.4017 18.5629 43.7452C18.8344 43.9671 19.0458 44.2618 19.2839 44.5239V44.5239Z" fill="black" fill-opacity="0.1"/>
      <path d="M15.9389 48.1857C16.4216 48.7821 16.3343 49.0534 15.5667 49.2368C14.2704 49.5466 13.2929 48.9522 12.4387 48.0932C12.1504 47.803 11.919 47.4483 11.7012 47.0987C11.5534 46.861 11.5883 46.6405 11.9423 46.5918C13.1667 46.4246 15.1526 47.2141 15.9383 48.185L15.9389 48.1857Z" fill="url(#paint16_linear_739_2521)"/>
      <path d="M15.9389 48.1857C16.4216 48.7821 16.3343 49.0534 15.5667 49.2368C14.2704 49.5466 13.2929 48.9522 12.4387 48.0932C12.1504 47.803 11.919 47.4483 11.7012 47.0987C11.5534 46.861 11.5883 46.6405 11.9423 46.5918C13.1667 46.4246 15.1526 47.2141 15.9383 48.185L15.9389 48.1857Z" fill="black" fill-opacity="0.1"/>
      <path d="M12.8286 45.0366C12.9744 45.341 13.466 45.5917 13.2735 45.9214C13.085 46.2438 12.5837 46.0881 12.2167 46.0919C10.7244 46.1075 9.62852 44.8174 9.26787 43.6636C9.12357 43.2024 9.37673 43.1601 9.74487 43.2152C11.0213 43.4068 12.0406 44.0191 12.8282 45.0369L12.8286 45.0366Z" fill="url(#paint17_linear_739_2521)"/>
      <path d="M12.8286 45.0366C12.9744 45.341 13.466 45.5917 13.2735 45.9214C13.085 46.2438 12.5837 46.0881 12.2167 46.0919C10.7244 46.1075 9.62852 44.8174 9.26787 43.6636C9.12357 43.2024 9.37673 43.1601 9.74487 43.2152C11.0213 43.4068 12.0406 44.0191 12.8282 45.0369L12.8286 45.0366Z" fill="black" fill-opacity="0.1"/>
      <path d="M10.5471 41.1216C10.9115 41.589 11.216 41.9498 11.3152 42.4395C11.416 42.9381 11.1395 43.032 10.7772 42.9089C9.56447 42.4966 8.56663 41.8426 8.25575 40.4844C8.14112 39.9827 8.30019 39.8154 8.82179 39.956C9.57116 40.1579 10.2221 40.5117 10.5468 41.1219L10.5471 41.1216Z" fill="url(#paint18_linear_739_2521)"/>
      <path d="M10.5471 41.1216C10.9115 41.589 11.216 41.9498 11.3152 42.4395C11.416 42.9381 11.1395 43.032 10.7772 42.9089C9.56447 42.4966 8.56663 41.8426 8.25575 40.4844C8.14112 39.9827 8.30019 39.8154 8.82179 39.956C9.57116 40.1579 10.2221 40.5117 10.5468 41.1219L10.5471 41.1216Z" fill="black" fill-opacity="0.1"/>
      <path d="M12.2472 40.273C12.0939 40.3831 11.864 40.551 11.7776 40.2009C11.5266 39.1828 11.9536 37.2668 13.011 36.7608C13.2207 36.6601 13.4396 36.4493 13.672 36.5842C13.9191 36.728 13.8004 37.0165 13.7828 37.2421C13.6555 38.8396 13.0012 39.5663 12.2479 40.2731L12.2472 40.273Z" fill="url(#paint19_linear_739_2521)"/>
      <path d="M12.2472 40.273C12.0939 40.3831 11.864 40.551 11.7776 40.2009C11.5266 39.1828 11.9536 37.2668 13.011 36.7608C13.2207 36.6601 13.4396 36.4493 13.672 36.5842C13.9191 36.728 13.8004 37.0165 13.7828 37.2421C13.6555 38.8396 13.0012 39.5663 12.2479 40.2731L12.2472 40.273Z" fill="black" fill-opacity="0.1"/>
      <path d="M9.67392 36.8922C10.3318 37.6464 10.4893 38.4959 10.5617 39.3721C10.5757 39.5402 10.6078 39.7583 10.3969 39.8371C10.2296 39.8995 10.1069 39.7518 9.98653 39.6544C9.15201 38.9794 8.6387 38.1226 8.55215 37.0383C8.529 36.7516 8.46876 36.3807 8.79896 36.2492C9.09877 36.1301 9.28413 36.4379 9.47023 36.6339C9.56458 36.7335 9.64116 36.85 9.67392 36.8922V36.8922Z" fill="url(#paint20_linear_739_2521)"/>
      <path d="M9.67392 36.8922C10.3318 37.6464 10.4893 38.4959 10.5617 39.3721C10.5757 39.5402 10.6078 39.7583 10.3969 39.8371C10.2296 39.8995 10.1069 39.7518 9.98653 39.6544C9.15201 38.9794 8.6387 38.1226 8.55215 37.0383C8.529 36.7516 8.46876 36.3807 8.79896 36.2492C9.09877 36.1301 9.28413 36.4379 9.47023 36.6339C9.56458 36.7335 9.64116 36.85 9.67392 36.8922V36.8922Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.3482 46.6946C48.2287 46.4468 48.3695 46.2773 48.4385 46.1028C48.8209 45.1413 48.6597 44.1985 48.3148 43.2656C48.1485 42.8151 47.8862 42.8172 47.6388 43.1863C46.8713 44.3299 46.3528 45.5203 47.0908 46.9028C47.2366 47.1759 47.2163 47.3989 46.9111 47.5413C46.8753 47.5577 46.8442 47.5892 46.8067 47.5978C45.4946 47.9006 44.4154 48.8415 43.025 48.9338C42.8299 48.9468 42.6336 49.0056 42.4496 49.0744C42.332 49.1184 42.1524 49.1417 42.1617 49.3236C42.1683 49.4544 42.2934 49.5199 42.3989 49.5731C43.4347 50.0977 44.3377 50.7603 44.8651 51.8397C44.9987 52.1129 45.2562 52.0437 45.4355 51.9274C46.5698 51.1926 47.8384 50.9357 49.1663 50.8631C49.3197 50.8548 49.5161 50.8487 49.5726 50.6748C49.6329 50.4882 49.4496 50.3973 49.3301 50.3021C48.3403 49.5152 47.2319 48.9994 45.9763 48.817C45.7877 48.7896 45.5768 48.8424 45.3693 48.6417C45.6967 48.5082 45.992 48.3671 46.3001 48.2647C47.4384 47.8875 48.4437 47.3134 49.3634 46.5287C50.3796 45.6621 51.1273 44.6295 51.7525 43.4699C52.5748 41.9452 53.0041 40.3108 53.1255 38.5941C53.1875 37.7164 53.6151 36.9138 53.576 36.0264C53.525 34.8748 53.0693 33.9187 52.1203 33.2203C51.8991 33.0575 51.6172 33.0569 51.6828 33.3748C51.7743 33.8151 51.6218 34.1958 51.5682 34.5964C51.417 35.7203 51.6966 36.7341 52.3626 37.6334C52.6527 38.0251 52.7178 38.4222 52.6539 38.8609C52.5042 39.8895 52.3936 40.93 51.8743 41.9947C51.6819 41.3084 51.5286 40.7398 51.2409 40.2152C50.9936 39.7645 50.6361 39.427 50.2639 39.0935C50.1587 38.9993 50.0582 38.8882 49.9 38.9712C49.7817 39.0332 49.7543 39.1501 49.7498 39.2735C49.7004 40.5925 49.9563 41.8142 51.011 42.7292C51.3583 43.0308 51.3818 43.3034 51.1696 43.6575C51.0173 43.912 50.8767 44.1738 50.7221 44.4266C50.6389 44.5624 50.5313 44.7219 50.3501 44.6547C50.154 44.5819 50.2214 44.3901 50.2444 44.2374C50.3883 43.2755 50.1856 42.3837 49.6859 41.549C49.5606 41.3398 49.4279 41.1044 49.1567 41.1265C48.8853 41.1491 48.8753 41.4274 48.8203 41.6289C48.479 42.8815 48.5723 44.072 49.4309 45.122C49.6934 45.4433 49.6612 45.7073 49.3806 45.9471C49.0612 46.2197 48.7876 46.568 48.3486 46.6949L48.3482 46.6946Z" fill="url(#paint21_linear_739_2521)"/>
      <path d="M48.3482 46.6946C48.2287 46.4468 48.3695 46.2773 48.4385 46.1028C48.8209 45.1413 48.6597 44.1985 48.3148 43.2656C48.1485 42.8151 47.8862 42.8172 47.6388 43.1863C46.8713 44.3299 46.3528 45.5203 47.0908 46.9028C47.2366 47.1759 47.2163 47.3989 46.9111 47.5413C46.8753 47.5577 46.8442 47.5892 46.8067 47.5978C45.4946 47.9006 44.4154 48.8415 43.025 48.9338C42.8299 48.9468 42.6336 49.0056 42.4496 49.0744C42.332 49.1184 42.1524 49.1417 42.1617 49.3236C42.1683 49.4544 42.2934 49.5199 42.3989 49.5731C43.4347 50.0977 44.3377 50.7603 44.8651 51.8397C44.9987 52.1129 45.2562 52.0437 45.4355 51.9274C46.5698 51.1926 47.8384 50.9357 49.1663 50.8631C49.3197 50.8548 49.5161 50.8487 49.5726 50.6748C49.6329 50.4882 49.4496 50.3973 49.3301 50.3021C48.3403 49.5152 47.2319 48.9994 45.9763 48.817C45.7877 48.7896 45.5768 48.8424 45.3693 48.6417C45.6967 48.5082 45.992 48.3671 46.3001 48.2647C47.4384 47.8875 48.4437 47.3134 49.3634 46.5287C50.3796 45.6621 51.1273 44.6295 51.7525 43.4699C52.5748 41.9452 53.0041 40.3108 53.1255 38.5941C53.1875 37.7164 53.6151 36.9138 53.576 36.0264C53.525 34.8748 53.0693 33.9187 52.1203 33.2203C51.8991 33.0575 51.6172 33.0569 51.6828 33.3748C51.7743 33.8151 51.6218 34.1958 51.5682 34.5964C51.417 35.7203 51.6966 36.7341 52.3626 37.6334C52.6527 38.0251 52.7178 38.4222 52.6539 38.8609C52.5042 39.8895 52.3936 40.93 51.8743 41.9947C51.6819 41.3084 51.5286 40.7398 51.2409 40.2152C50.9936 39.7645 50.6361 39.427 50.2639 39.0935C50.1587 38.9993 50.0582 38.8882 49.9 38.9712C49.7817 39.0332 49.7543 39.1501 49.7498 39.2735C49.7004 40.5925 49.9563 41.8142 51.011 42.7292C51.3583 43.0308 51.3818 43.3034 51.1696 43.6575C51.0173 43.912 50.8767 44.1738 50.7221 44.4266C50.6389 44.5624 50.5313 44.7219 50.3501 44.6547C50.154 44.5819 50.2214 44.3901 50.2444 44.2374C50.3883 43.2755 50.1856 42.3837 49.6859 41.549C49.5606 41.3398 49.4279 41.1044 49.1567 41.1265C48.8853 41.1491 48.8753 41.4274 48.8203 41.6289C48.479 42.8815 48.5723 44.072 49.4309 45.122C49.6934 45.4433 49.6612 45.7073 49.3806 45.9471C49.0612 46.2197 48.7876 46.568 48.3486 46.6949L48.3482 46.6946Z" fill="black" fill-opacity="0.1"/>
      <path d="M44.7161 44.5239C43.9131 45.4688 43.6251 46.5594 43.8071 47.7798C43.9078 48.4565 44.0942 48.5224 44.6467 48.1202C46.0134 47.1268 46.6193 45.8146 46.3193 44.114C46.2248 43.5773 45.857 43.4017 45.4371 43.7452C45.1656 43.9671 44.9542 44.2618 44.7161 44.5239V44.5239Z" fill="url(#paint22_linear_739_2521)"/>
      <path d="M44.7161 44.5239C43.9131 45.4688 43.6251 46.5594 43.8071 47.7798C43.9078 48.4565 44.0942 48.5224 44.6467 48.1202C46.0134 47.1268 46.6193 45.8146 46.3193 44.114C46.2248 43.5773 45.857 43.4017 45.4371 43.7452C45.1656 43.9671 44.9542 44.2618 44.7161 44.5239V44.5239Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.061 48.1857C47.5784 48.7821 47.6657 49.0534 48.4332 49.2368C49.7295 49.5466 50.7071 48.9522 51.5612 48.0932C51.8495 47.803 52.0809 47.4483 52.2987 47.0987C52.4465 46.861 52.4116 46.6405 52.0577 46.5918C50.8332 46.4246 48.8473 47.2141 48.0616 48.185L48.061 48.1857Z" fill="url(#paint23_linear_739_2521)"/>
      <path d="M48.061 48.1857C47.5784 48.7821 47.6657 49.0534 48.4332 49.2368C49.7295 49.5466 50.7071 48.9522 51.5612 48.0932C51.8495 47.803 52.0809 47.4483 52.2987 47.0987C52.4465 46.861 52.4116 46.6405 52.0577 46.5918C50.8332 46.4246 48.8473 47.2141 48.0616 48.185L48.061 48.1857Z" fill="black" fill-opacity="0.1"/>
      <path d="M51.1714 45.0366C51.0255 45.341 50.5339 45.5917 50.7264 45.9214C50.9149 46.2438 51.4163 46.0881 51.7833 46.0919C53.2755 46.1075 54.3714 44.8174 54.7321 43.6636C54.8764 43.2024 54.6232 43.1601 54.2551 43.2152C52.9786 43.4068 51.9594 44.0191 51.1718 45.0369L51.1714 45.0366Z" fill="url(#paint24_linear_739_2521)"/>
      <path d="M51.1714 45.0366C51.0255 45.341 50.5339 45.5917 50.7264 45.9214C50.9149 46.2438 51.4163 46.0881 51.7833 46.0919C53.2755 46.1075 54.3714 44.8174 54.7321 43.6636C54.8764 43.2024 54.6232 43.1601 54.2551 43.2152C52.9786 43.4068 51.9594 44.0191 51.1718 45.0369L51.1714 45.0366Z" fill="black" fill-opacity="0.1"/>
      <path d="M53.4529 41.1216C53.0885 41.589 52.7841 41.9498 52.6848 42.4395C52.584 42.9381 52.8605 43.032 53.2228 42.9089C54.4356 42.4966 55.4334 41.8426 55.7443 40.4844C55.8589 39.9827 55.6998 39.8154 55.1782 39.956C54.4289 40.1579 53.778 40.5117 53.4533 41.1219L53.4529 41.1216Z" fill="url(#paint25_linear_739_2521)"/>
      <path d="M53.4529 41.1216C53.0885 41.589 52.7841 41.9498 52.6848 42.4395C52.584 42.9381 52.8605 43.032 53.2228 42.9089C54.4356 42.4966 55.4334 41.8426 55.7443 40.4844C55.8589 39.9827 55.6998 39.8154 55.1782 39.956C54.4289 40.1579 53.778 40.5117 53.4533 41.1219L53.4529 41.1216Z" fill="black" fill-opacity="0.1"/>
      <path d="M51.7528 40.273C51.9061 40.3831 52.136 40.551 52.2223 40.2009C52.4734 39.1828 52.0463 37.2668 50.989 36.7608C50.7793 36.6601 50.5604 36.4493 50.328 36.5842C50.0809 36.728 50.1995 37.0165 50.2172 37.2421C50.3444 38.8396 50.9988 39.5663 51.7521 40.2731L51.7528 40.273Z" fill="url(#paint26_linear_739_2521)"/>
      <path d="M51.7528 40.273C51.9061 40.3831 52.136 40.551 52.2223 40.2009C52.4734 39.1828 52.0463 37.2668 50.989 36.7608C50.7793 36.6601 50.5604 36.4493 50.328 36.5842C50.0809 36.728 50.1995 37.0165 50.2172 37.2421C50.3444 38.8396 50.9988 39.5663 51.7521 40.2731L51.7528 40.273Z" fill="black" fill-opacity="0.1"/>
      <path d="M54.3261 36.8922C53.6683 37.6464 53.5107 38.4959 53.4383 39.3721C53.4244 39.5402 53.3922 39.7583 53.6031 39.8371C53.7705 39.8995 53.8931 39.7518 54.0135 39.6544C54.848 38.9794 55.3613 38.1226 55.4479 37.0383C55.471 36.7516 55.5313 36.3807 55.2011 36.2492C54.9013 36.1301 54.7159 36.4379 54.5298 36.6339C54.4354 36.7335 54.3589 36.85 54.3261 36.8922V36.8922Z" fill="url(#paint27_linear_739_2521)"/>
      <path d="M54.3261 36.8922C53.6683 37.6464 53.5107 38.4959 53.4383 39.3721C53.4244 39.5402 53.3922 39.7583 53.6031 39.8371C53.7705 39.8995 53.8931 39.7518 54.0135 39.6544C54.848 38.9794 55.3613 38.1226 55.4479 37.0383C55.471 36.7516 55.5313 36.3807 55.2011 36.2492C54.9013 36.1301 54.7159 36.4379 54.5298 36.6339C54.4354 36.7335 54.3589 36.85 54.3261 36.8922V36.8922Z" fill="black" fill-opacity="0.1"/>
      <defs>
      <linearGradient id="paint0_linear_739_2521" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2521" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2521" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2521" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2521" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2521" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2521" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2521" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2521" x1="31.8578" y1="43.8016" x2="31.8578" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2521" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2521" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2521" x1="31.8578" y1="15.1353" x2="31.8578" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2521" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2521" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint14_linear_739_2521" x1="5" y1="38.5632" x2="12.3542" y2="32.9588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint15_linear_739_2521" x1="16.4853" y1="44.761" x2="18.3994" y2="43.3026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint16_linear_739_2521" x1="11.4581" y1="46.8706" x2="13.6782" y2="45.1875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint17_linear_739_2521" x1="8.89694" y1="43.5693" x2="10.6941" y2="42.2005" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint18_linear_739_2521" x1="7.80017" y1="40.3663" x2="9.20327" y2="39.2949" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint19_linear_739_2521" x1="10.5235" y1="38.6526" x2="13.6392" y2="36.3873" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint20_linear_739_2521" x1="7.78464" y1="37.0145" x2="9.05869" y2="36.0411" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint21_linear_739_2521" x1="59" y1="38.5632" x2="51.6458" y2="32.9588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint22_linear_739_2521" x1="47.5147" y1="44.761" x2="45.6006" y2="43.3026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint23_linear_739_2521" x1="52.5419" y1="46.8706" x2="50.3217" y2="45.1875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint24_linear_739_2521" x1="55.103" y1="43.5693" x2="53.3059" y2="42.2005" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint25_linear_739_2521" x1="56.1999" y1="40.3663" x2="54.7968" y2="39.2949" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint26_linear_739_2521" x1="53.4765" y1="38.6526" x2="50.3608" y2="36.3873" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint27_linear_739_2521" x1="56.2154" y1="37.0145" x2="54.9413" y2="36.0411" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <clipPath id="clip0_739_2521">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip1_739_2521">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupC0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">C</text>
</g>
<g id="barCurrentC0${index}" mask="url(#barClipPathC0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientC0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#000000" opacity="0.1"/>
</g>
`
    : `<g id="trophySVGC-0${index}" opacity="0">
  <svg x="30" y="10" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint0_linear_739_2589)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="url(#paint1_linear_739_2589)"/>
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.1"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="url(#paint2_linear_739_2589)"/>
      <path d="M34.609 43.8015H29.1067V50.8156H34.609V43.8015Z" fill="black" fill-opacity="0.1"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint3_linear_739_2589)"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="black" fill-opacity="0.1"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint4_linear_739_2589)"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="black" fill-opacity="0.1"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint5_linear_739_2589)"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6363 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="black" fill-opacity="0.1"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="url(#paint6_linear_739_2589)"/>
      <path d="M19.3002 32.3656C18.7714 32.3656 18.3128 31.9936 18.2089 31.4751L16.5613 23.9304C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4048H15.042C13.752 19.4048 12.783 20.585 13.0397 21.8475L13.1009 22.1494L15.2009 32.5181L15.4272 33.6282C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3656H19.2972H19.3002Z" fill="black" fill-opacity="0.1"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="url(#paint7_linear_739_2589)"/>
      <path d="M48.958 19.4048H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9304L45.4885 31.4751C45.3845 31.9936 44.926 32.3656 44.3972 32.3656H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6282L48.8021 32.5181L50.9022 22.1494L50.9633 21.8475C51.2201 20.585 50.2511 19.4048 48.9611 19.4048H48.958Z" fill="black" fill-opacity="0.1"/>
      <g style="mix-blend-mode:hard-light" opacity="0.3" clip-path="url(#clip0_739_2589)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="black" fill-opacity="0.3"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="url(#paint8_linear_739_2589)" fill-opacity="0.6"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="url(#paint9_linear_739_2589)" fill-opacity="0.5"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="url(#paint10_linear_739_2589)" fill-opacity="0.7"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="url(#paint11_linear_739_2589)" fill-opacity="0.5"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="url(#paint12_linear_739_2589)" fill-opacity="0.3"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="url(#paint13_linear_739_2589)" fill-opacity="0.3"/>
      </g>
      <g style="mix-blend-mode:hard-light" opacity="0.2" clip-path="url(#clip1_739_2589)">
      <path d="M48.9579 19.4047H45.36L46.2251 15.1353H47.5151C48.6583 15.1353 49.5876 14.2082 49.5876 13.0676C49.5876 11.9271 48.6583 11 47.5151 11H16.2005C15.0541 11 14.1279 11.9271 14.1279 13.0676C14.1279 14.2082 15.0572 15.1353 16.2005 15.1353H17.4905L18.3555 19.4047H15.0419C13.7519 19.4047 12.7829 20.5849 13.0396 21.8475L13.1008 22.1494L15.2009 32.518L15.4271 33.6281C15.6196 34.5796 16.4572 35.2627 17.4293 35.2627H21.5653L22.2439 38.6203C22.8553 41.6364 25.5117 43.8016 28.593 43.8016H29.1005V50.8157H24.2095C22.7758 50.8157 21.6111 51.9776 21.6111 53.4078C21.6111 54.8381 22.7758 56 24.2095 56H39.4938C40.9275 56 42.0922 54.8381 42.0922 53.4078C42.0922 51.9776 40.9275 50.8157 39.4938 50.8157H34.6028V43.8016H35.1103C38.1947 43.8016 40.848 41.6333 41.4594 38.6203L42.138 35.2627H46.5613C47.5334 35.2627 48.371 34.5796 48.5636 33.6281L48.7898 32.518L50.8899 22.1494L50.951 21.8475C51.2078 20.5849 50.2387 19.4047 48.9487 19.4047H48.9579ZM19.3001 32.3655C18.7713 32.3655 18.3128 31.9935 18.2088 31.4751L16.5612 23.9303C16.4542 23.4028 16.8577 22.9118 17.3957 22.9118H19.0647L20.9814 32.3655H19.3001ZM47.136 23.9303L45.4884 31.4751C45.3844 31.9935 44.9259 32.3655 44.3971 32.3655H42.7372L44.6538 22.9118H46.3045C46.8426 22.9118 47.2461 23.4028 47.1391 23.9303H47.136Z" fill="white"/>
      <path d="M34.609 43.8016H29.1067V50.8157H34.609V43.8016Z" fill="white"/>
      <path d="M39.5001 50.8157H24.2157C22.7807 50.8157 21.6173 51.9762 21.6173 53.4078C21.6173 54.8395 22.7807 56 24.2157 56H39.5001C40.9351 56 42.0984 54.8395 42.0984 53.4078C42.0984 51.9762 40.9351 50.8157 39.5001 50.8157Z" fill="white"/>
      <path d="M47.5152 11H16.2006C15.0559 11 14.128 11.9257 14.128 13.0676C14.128 14.2096 15.0559 15.1353 16.2006 15.1353H47.5152C48.6598 15.1353 49.5877 14.2096 49.5877 13.0676C49.5877 11.9257 48.6598 11 47.5152 11Z" fill="white"/>
      <path d="M35.1165 43.8016H28.5992C25.5148 43.8016 22.8615 41.6333 22.2501 38.6203L17.4905 15.1353H46.2252L41.4656 38.6203C40.8542 41.6364 38.1978 43.8016 35.1165 43.8016V43.8016Z" fill="white"/>
      <path d="M19.3002 32.3655C18.7714 32.3655 18.3128 31.9935 18.2089 31.4751L16.5613 23.9303C16.4543 23.4028 16.8578 22.9118 17.3958 22.9118H19.0648L18.3556 19.4047H15.042C13.752 19.4047 12.783 20.5849 13.0397 21.8475L13.1009 22.1494L15.2009 32.518L15.4272 33.6281C15.6197 34.5796 16.4573 35.2627 17.4294 35.2627H21.5654L20.9784 32.3655H19.2972H19.3002Z" fill="white"/>
      <path d="M48.958 19.4047H45.3601L44.6509 22.9118H46.3016C46.8396 22.9118 47.2431 23.4028 47.1361 23.9303L45.4885 31.4751C45.3845 31.9935 44.926 32.3655 44.3972 32.3655H42.7373L42.1504 35.2627H46.5737C47.5457 35.2627 48.3833 34.5796 48.5759 33.6281L48.8021 32.518L50.9022 22.1494L50.9633 21.8475C51.2201 20.5849 50.2511 19.4047 48.9611 19.4047H48.958Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_739_2589" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint1_linear_739_2589" x1="12.9982" y1="11" x2="51.7302" y2="11.6442" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint2_linear_739_2589" x1="29.1067" y1="43.8015" x2="34.7161" y2="43.8882" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint3_linear_739_2589" x1="21.6173" y1="50.8157" x2="42.3761" y2="52.4311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint4_linear_739_2589" x1="14.128" y1="11" x2="49.2832" y2="16.9382" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint5_linear_739_2589" x1="17.4905" y1="15.1353" x2="46.7798" y2="15.7136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint6_linear_739_2589" x1="12.9983" y1="19.4048" x2="21.7331" y2="19.4977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint7_linear_739_2589" x1="42.1504" y1="19.4048" x2="51.1781" y2="19.5041" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EFEFEF"/>
      <stop offset="0.505208" stop-color="#D5D5D5"/>
      <stop offset="1" stop-color="#8A8673"/>
      </linearGradient>
      <linearGradient id="paint8_linear_739_2589" x1="31.8578" y1="43.8016" x2="31.8578" y2="50.8157" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint9_linear_739_2589" x1="31.8579" y1="50.8157" x2="31.8579" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint10_linear_739_2589" x1="31.8579" y1="11" x2="31.8579" y2="15.1353" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint11_linear_739_2589" x1="31.8578" y1="15.1353" x2="31.8578" y2="43.8016" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint12_linear_739_2589" x1="20" y1="26.9999" x2="14" y2="27.9999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint13_linear_739_2589" x1="44" y1="27.4999" x2="49.5" y2="28.4999" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="clip0_739_2589">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      <clipPath id="clip1_739_2589">
      <rect width="38" height="45" fill="white" transform="translate(13 11)"/>
      </clipPath>
      </defs>
  </svg>
</g>
<g id ="badgeGradeTextGroupC-0${index}" opacity="0">
  <text id="badgeTitle" x="62" y="36" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" letter-spacing="-0.5px" fill="#FFFFFF">C-</text>
</g>
<g id="barCurrentC-0${index}" mask="url(#barClipPathC-0${index})">
  <rect x="12" y="110" width="100" height="2" rx="1" fill="url(#barColorGradientC0${index})"/>
  <rect x="12" y="110" width="200" height="2" rx="1" fill="#000000" opacity="0.1"/>
</g>
`
}
      </g>
      <g id="editTitleTextGroup0${index}">
${
  grade === 'S'
    ? `<g id ="badgeTitleTextGroupS0${index}" opacity="0">
  <text id="badgeTitleS0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B7D4FF">${title}</text>
</g>`
    : grade === 'A+'
    ? `<g id ="badgeTitleTextGroupA+0${index}" opacity="0">
  <text id="badgeTitleA+0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B7D4FF">${title}</text>
</g>`
    : grade === 'A'
    ? `<g id ="badgeTitleTextGroupA0${index}" opacity="0">
  <text id="badgeTitleA0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B7D4FF">${title}</text>
</g>`
    : grade === 'A-'
    ? `<g id ="badgeTitleTextGroupA-0${index}" opacity="0">
  <text id="badgeTitleA-0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B7D4FF">${title}</text>
</g>`
    : grade === 'B+'
    ? `<g id ="badgeTitleTextGroupB+0${index}" opacity="0">
<text id="badgeTitleB+0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#F4A93A">${title}</text>
</g>`
    : grade === 'B'
    ? `<g id ="badgeTitleTextGroupB0${index}" opacity="0">
<text id="badgeTitleB0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#F4A93A">${title}</text>
</g>`
    : grade === 'B-'
    ? `<g id ="badgeTitleTextGroupB-0${index}" opacity="0">
<text id="badgeTitleB-0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#F4A93A">${title}</text>
</g>`
    : grade === 'C+'
    ? `<g id ="badgeTitleTextGroupC+0${index}" opacity="0">
<text id="badgeTitleC+0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B8B8B8">${title}</text>
</g>`
    : grade === 'C'
    ? `<g id ="badgeTitleTextGroupC0${index}" opacity="0">
<text id="badgeTitleC0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B8B8B8">${title}</text>
</g>`
    : `<g id ="badgeTitleTextGroupC-0${index}" opacity="0">
<text id="badgeTitleC-0${index}" x="62" y="82" font-family="Inter, Sans-Serif" font-weight="700" font-size="11px" dominant-baseline="middle" text-anchor="middle" fill="#B8B8B8">${title}</text>
</g>`
}
      </g>
      <g id="editSubtitleTextGroup0${index}">
          <g id="badgeSubtitleGroup0${index}" opacity="0">
              <text id="badgeSubtitle0${index}" x="62" y="93.5" font-family="Inter, Sans-Serif" font-weight="400" font-size="9px" dominant-baseline="middle" text-anchor="middle" fill="white" fill-opacity="0.3">${subTitle}</text>
          </g>
      </g>
      <defs>
          <animate begin="0.30s" xlink:href="#backgroundInnerLineActive${grade}0${index}" attributeName="opacity" attributeType="XML" dur="1s" fill="freeze" from="0" to="1"/>
          <animate begin="0.20s" xlink:href="#trophySVG${grade}0${index}" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
          <animate begin="0.20s" xlink:href="#badgeGradeTextGroup${grade}0${index}" attributeName="opacity" attributeType="XML" dur="0.3s" fill="freeze" from="0" to="1"/>
          <animate begin="0.40s" xlink:href="#badgeTitleTextGroup${grade}0${index}" attributeName="opacity" attributeType="XML" dur="0.2s" fill="freeze" from="0" to="1"/>
      </defs>
      <defs>
          <animate begin="0.70s" xlink:href="#barClipPathShape${grade}0${index}" attributeName="width" attributeType="XML" dur="0.4s" fill="freeze" from="0" to="${bar}"/>
      </defs>
  </svg>
</g>`;
