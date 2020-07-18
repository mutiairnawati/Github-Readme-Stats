<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="Github Readme Stats" /> 
 <h2 align="center">GitHub Readme Stats</h2>
 <p align="center">Get dynamically generated GitHub stats on your readmes!</p>
</p>
<p align="center">
    <a href="https://github.com/mutiairnawati/github-readme-stats/actions">
      <img alt="Tests Passing" src="https://github.com/mutiairnawati/github-readme-stats/workflows/Test/badge.svg" />
    </a>
    <a href="https://github.com/mutiairnawati/github-readme-stats/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/mutiairnawati/github-readme-stats?color=0088ff" />
    </a>
    <a href="https://github.com/mutiairnawati/github-readme-stats/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mutiairnawati/github-readme-stats?color=0088ff" />
    </a>
  </p>

  <p align="center">
    <a href="#demo">View Demo</a>
    ·
    <a href="https://github.com/mutiairnawati/github-readme-stats/issues">Report Bug</a>
    ·
    <a href="https://github.com/mutiairnawati/github-readme-stats/issues">Request Feature</a>
  </p>
</p>
<p align="center">Loved the project? Please consider <a href="https://www.paypal.me/mutiairnawati">donating</a> to help it improve!

# Features

- [GitHub Stats Card](#github-stats-card)
- [GitHub Extra Pins](#github-extra-pins)
- [Customization](#customization)
- [Deploy Yourself](#deploy-on-your-own-vercel-instance)

# GitHub Stats Card

Copy paste this into your markdown content, and that's it. Simple!

Change the `?username=` value to your GitHub's username.

```md
[![Mutia's github stats](https://github-readme-stats.vercel.app/api?username=mutiairnawati)](https://github.com/mutiairnawati/github-readme-stats)
```

_Note: Ranks are calculated based on user's stats, see [src/calculateRank.js](./src/calculateRank.js)_

# Github-Readme-Stats
How to Show my Star

Copy paste this into your markdown content, and that's it. Simple!

Change the ?username= value to your GitHub's username.

[![Mutia's github stats](https://github-readme-stats.vercel.app/api?username=mutiairnawati)](https://github.com/mutiairnawati/github-readme-stats)
Note: Ranks are calculated based on user's stats, see src/calculateRank.js

Hiding individual stats
To hide any specific stats, you can pass a query parameter ?hide= with an array of items you wanna hide.

Options: &hide=["stars","prs","issues","contribs"]

![Mutia's github stats](https://github-readme-stats.vercel.app/api?username=mutiairnawati&hide=["contribs","prs"])
Showing icons
To enable icons, you can pass show_icons=true in the query param, like so:

![Mutia's github stats](https://github-readme-stats.vercel.app/api?username=mutiairnawati&show_icons=true)

Customization
You can customize the appearance of your Stats Card or Repo Card however you want with URL params.

Customization Options:

| Option      | type      | description                          | Stats Card (default) | Repo Card (default) |
| ----------- | --------- | ------------------------------------ | -------------------- | ------------------- |
| title_color | hex color | title color                          | 2f80ed               | 2f80ed              |
| text_color  | hex color | body color                           | 333                  | 333                 |
| icon_color  | hex color | icon color                           | 4c71f2               | 586069              |
| bg_color    | hex color | card bg color                        | FFFEFE               | FFFEFE              |
| line_height | number    | control the line-height between text | 30                   | N/A                 |
| hide_rank   | boolean   | hides the ranking                    | false                | N/A                 |
| hide_title  | boolean   | hides the stats title                | false                | N/A                 |
| hide_border | boolean   | hides the stats card border          | false                | N/A                 |
| show_owner  | boolean   | shows owner name in repo card        | N/A                  | false               |
| show_icons  | boolean   | shows icons                          | false                | N/A                 |
<p>
You can also customize the cards to be compatible with dark mode
![Mutia's github stats](https://github-readme-stats.vercel.app/api?username=mutiairnawati&show_icons=true&title_color=fff&icon_color=79ff97&text_color=9f9f9f&bg_color=151515)
GitHub Extra Pins
GitHub extra pins allow you to pin more than 6 repositories in your profile using a GitHub readme profile.

Yey! You are no longer limited to 6 pinned repositories.

Usage
Copy-paste this code into your readme and change the links.

Endpoint: api/pin?username=mutiairnawati&repo=github-readme-stats

![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=mutiairnawati&repo=github-readme-stats)
