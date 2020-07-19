<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="Github Readme Stats" /> 
 <h2 align="center">GitHub Readme Stats</h2>
 <p align="center">Get dynamically generated GitHub stats on your readmes!</p>
</p>
<p align="center">
    <a href="https://github.com/mutiairnawati/Github-readme-stats/actions">
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

# Github-Readme-Stats
How to Show my Rank

Copy paste this into your markdown content, and that's it. Simple!

Change the ?username= value to your GitHub's username.

[![Mutia's github stats](https://Github-readme-stats.vercel.app/api?username=mutiairnawati)](https://github.com/mutiairnawati/Github-readme-stats)
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

## :sparkling_heart: Support the project

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can use this service for free.

However, if you are using this project and happy with it or just want to encourage me to continue creating stuff, there are few ways you can do it :-

- Giving proper credit when you use github-readme-stats on your readme, linking back to it :D
- Starring and sharing the project :rocket:
- [![paypal.me/mutiairnawati](https://ionicabizau.github.io/badges/paypal.svg)](https://www.paypal.me/mutiairnawati) - You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:

Thanks! :heart:
