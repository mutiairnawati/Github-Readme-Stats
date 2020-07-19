const { kFormatter, encodeHTML, fallbackColor } = require("../src/utils");
const {
  kFormatter,
  encodeHTML,
  fallbackColor,
  FlexLayout,
} = require("../src/utils");
const icons = require("./icons");

const renderRepoCard = (repo, options = {}) => {
@@ -42,6 +47,31 @@ const renderRepoCard = (repo, options = {}) => {
    `
    : "";

  const svgLanguage = `
    <g transform="translate(30, 100)">
      <circle data-testid="lang-color" cx="0" cy="-5" r="6" fill="${langColor}" />
      <text data-testid="lang" class="gray" x="15">${langName}</text>
    </g>
  `;

  const svgStars =
    stargazers.totalCount > 0 &&
    `
    <svg class="icon" y="-12" viewBox="0 0 16 16" version="1.1" width="16" height="16">
      ${icons.star}
    </svg>
    <text data-testid="stargazers" class="gray" x="25">${totalStars}</text>
  `;

  const svgForks =
    totalForks > 0 &&
    `
    <svg class="icon" y="-12" viewBox="0 0 16 16" version="1.1" width="16" height="16">
      ${icons.fork}
    </svg>
    <text data-testid="forkcount" class="gray" x="25">${totalForks}</text>
  `;

  return `
    <svg version="1.1" width="400" height="${height}" viewBox="0 0 400 ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
@@ -62,28 +92,12 @@ const renderRepoCard = (repo, options = {}) => {
      <text x="50" y="38" class="header">${header}</text>
      <text class="description" x="25" y="70">${encodeHTML(desc)}</text>
      
      <g transform="translate(30, 100)">
        <circle data-testid="lang-color" cx="0" cy="-5" r="6" fill="${langColor}" />
        <text data-testid="lang" class="gray" x="15">${langName}</text>
      ${svgLanguage}
      
      <g transform="translate(${155 - shiftText}, 100)">
        ${FlexLayout({ items: [svgStars, svgForks], gap: 65 }).join("")}
      </g>
      ${(stargazers.totalCount > 0) ? `
        <g transform="translate(${155 - shiftText}, 100)">
          <svg class="icon" y="-12" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            ${icons.star}
          </svg>
          <text data-testid="stargazers" class="gray" x="25">${totalStars}</text>
        </g>
      ` : ''}
      ${(totalForks > 0) ? `
        <g transform="translate(${stargazers.totalCount === 0 ? 155 - shiftText : 220 - shiftText}, 100)">
          <svg class="icon" y="-12" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            ${icons.fork}
          </svg>
          <text data-testid="forkcount" class="gray" x="25">${totalForks}</text>
        </g>
      ` : ''}
    </svg>
  `;
};
