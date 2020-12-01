# The News Desk :newspaper:

The news desk is an aggregator app, which finds news articles from newsAPI.com, The Guardian and The new York times and then displays them per category page.

## Overview

This is a student project to improve my skills with React and Next JS. I designed this app as I keenly follow the news and wanted to build something that pulls from a number of sources but also displays in a pleasing manner.

It is built to be lightweight and quick.

The actual UI borrows heavily from the Guardian website but as I am trying to become a developer as opposed to a designer, I believed this a fair pay off - allowing me to focus more on the technical implementation as I had a ’design template’ to work from.

Post are fetched from the APIs via getStaticProps in the relevant page - the whole site is then triggered to rebuild at 4am GMT every day. So we have a balance between super fast loading when accessed by the user but also the news feed is refreshed daily with up to date news.

I hope you like it!

[Checkout the demo](https://calendar-geckos-05.herokuapp.com/)

## Tech stack

- React v17.0.1
- Next v10.0.1
- Next CSS modules
- Deployed with Vercel

## Setup :hammer_and_wrench:

To run the app locally, clone the repo and install the app using:

```
  $ git clone https://github.com/jondhill333/the-news-desk
  $ cd the-news-desk
  $ npm install
  $ npm run dev
```

## Contributors :sparkler:

This project is designed and developed by the [JonHill](https://github.com/jondhill333).

## Contributing

Thanks for your interest in contributing! There are many ways to contribute to this project. Please see below for a wishlist.

Wishlist:

- Add extra news source API's to get wider ranging content
- Improved SEO
- Implement Searchbar - so users can search for all news under a certain search term
- "Leave feedback" widget or section

## License

This project is open source and available under the MIT License
