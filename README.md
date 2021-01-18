# Maupassant

[![Build Status](https://travis-ci.org/tufu9441/maupassant-hexo.svg?branch=master)](https://travis-ci.org/tufu9441/maupassant-hexo)   [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tufu9441/maupassant-hexo/blob/master/LICENSE)

> 大道至简

[Preview](https://www.haomwei.com)｜[中文文档](https://www.haomwei.com/technology/maupassant-hexo.html)

A simple Hexo template with great performance on different devices, ported from a Typecho theme by [Cho](https://github.com/pagecho/maupassant/), forked and modified from [icylogic](https://github.com/icylogic/maupassant-hexo/).

![template preview](http://ooo.0o0.ooo/2015/10/24/562b5be12177e.jpg
 "Maupassant template preview")

## Installation
Install theme and renderers:

```shell
$ git clone https://github.com/tufu9441/maupassant-hexo.git themes/maupassant
$ npm install hexo-renderer-pug --save
$ npm install hexo-renderer-sass --save
```

Then change your `theme` setting in `_config.yml` to `maupassant`.

## Configuration
Default config:

```YAML
disqus:
  enable: false ## If you want to use Disqus comment system, please set the value to true.
  shortname: ## Your disqus_shortname, e.g. username
  api: ## You can visit Disqus comments in China mainland without barriers using Disqus API, e.g. https://disqus.skk.moe/disqus/
  apikey: ## Your API key obtained in Disqus API Application, e.g. yk00ZB1fjYGRkrCrDDRYDUjpp26GJWJiJRZQZ5SY0r3th5FMW6pnSzQMnWH7ua7r
  admin: ## Username of your Disqus moderator, e.g. username
  admin_label: ## The text of Disqus moderator badge, e.g. Mod
uyan: ## Your uyan_id. e.g. 1234567
livere: ## Your livere data-uid, e.g. MTAyMC8zMDAxOC78NTgz
changyan: ## Your changyan appid, e.g. cyrALsXc8
changyan_conf: ## Your changyan conf, e.g. prod_d8a508c2825ab57eeb43e7c69bba0e8b
gitalk: ## See: https://github.com/gitalk/gitalk
  enable: false ## If you want to use Gitment comment system please set the value to true.
  owner: ## Your GitHub ID, e.g. username
  repo: ## The repository to store your comments, make sure you're the repo's owner, e.g. gitalk.github.io
  client_id: ## GitHub client ID, e.g. 75752dafe7907a897619
  client_secret: ## GitHub client secret, e.g. ec2fb9054972c891289640354993b662f4cccc50
  admin: ## Github repo owner and collaborators, only these guys can initialize github issues.
valine: ## See: https://valine.js.org
  enable: false ## If you want to use Valine comment system, please set the value to true.
  appid: ## Your LeanCloud application App ID, e.g. pRBBL2JR4N7kLEGojrF0MsSs-gzGzoHsz
  appkey: ## Your LeanCloud application App Key, e.g. tjczHpDfhjYDSYddzymYK1JJ
  notify: false ## Mail notifier, see https://github.com/xCss/Valine/wiki/Valine-评论系统中的邮件提醒设置
  verify: false ## Validation code.
  placeholder: Just so so ## Comment box placeholders.
  avatar: "mm" ## Gravatar type, see https://github.com/xCss/Valine/wiki/avatar-setting-for-valine
  pageSize: 10 ## Number of comments per page.
  guest_info: nick,mail,link ## Attributes of reviewers.
minivaline: ## See: https://github.com/MiniValine/MiniValine
  enable: false ## If you want to use MiniValine comment system, please set the value to true.
  appId: ## Your LeanCloud application App ID, e.g. pRBBL2JR4N7kLEGojrF0MsSs-gzGzoHsz
  appKey: ## Your LeanCloud application App Key, e.g. tjczHpDfhjYDSYddzymYK1JJ
  placeholder: Write a Comment ## Comment box placeholder.
  adminEmailMd5: ## The MD5 of Admin Email to show Admin Flag.
  math: true ## Support MathJax.
  md: true ## Support Markdown.
  # MiniValine's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en  | zh-CN | (and many more)
  # More i18n info: https://github.com/MiniValine/minivaline-i18n
  lang:
utterances: ## See: https://utteranc.es
  enable: false ## If you want to use Utterances comment system, please set the value to true.
  repo: ## The repository utterances will connect to, e.g. tufu9441/comments
  identifier: title ## The mapping between blog posts and GitHub issues.
  theme: github-light ## Choose an Utterances theme which matches your blog.

google_search: true ## Use Google search, true/false.
baidu_search: false ## Use Baidu search, true/false.
swiftype: ## Your swiftype_key, e.g. m7b11ZrsT8Me7gzApciT
self_search: false ## Use a jQuery-based local search engine, true/false.
google_analytics: ## Your Google Analytics tracking id, e.g. UA-42425684-2
baidu_analytics: ## Your Baidu Analytics tracking id, e.g. 8006843039519956000
fancybox: true ## If you want to use fancybox please set the value to true.
show_category_count: false ## If you want to show the count of categories in the sidebar widget please set the value to true.
toc_number: true ## If you want to add list number to toc please set the value to true.
shareto: false ## If you want to use the share button please set the value to true, and you must have hexo-helper-qrcode installed.
busuanzi: false ## If you want to use Busuanzi page views please set the value to true.
wordcount: false ## If you want to display the word counter and the reading time expected to spend of each post please set the value to true, and you must have hexo-wordcount installed.
widgets_on_small_screens: false ## Set to true to enable widgets on small screens.
canvas_nest:
  enable: false ## If you want to use dynamic background please set the value to true, you can also fill the following parameters to customize the dynamic effect, or just leave them blank to keep the default effect.
  color: ## RGB value of the color, e.g. "100,99,98"
  opacity: ## Transparency of lines, e.g. "0.7"
  zIndex: ## The z-index property of the background, e.g. "-1"
  count: ## Quantity of lines, e.g. "150"
donate:
  enable: false ## If you want to display the donate button after each post, please set the value to true and fill the following items on your need. You can also enable donate button in a page by adding a "donate: true" item to the front-matter.
  github: ## GitHub URL, e.g. https://github.com/Kaiyuan/donate-page
  alipay_qr: ## Path of Alipay QRcode image, e.g. /img/AliPayQR.png
  wechat_qr: ## Path of Wechat QRcode image, e.g. /img/WeChatQR.png
  btc_qr: ## Path of Bitcoin QRcode image, e.g. /img/BTCQR.png
  btc_key: ## Bitcoin key, e.g. 1KuK5eK2BLsqpsFVXXSBG5wbSAwZVadt6L
  paypal_url: ## Paypal URL, e.g. https://www.paypal.me/tufu9441
post_copyright:
  enable: false ## If you want to display the copyright info after each post, please set the value to true and fill the following items on your need.
  author: ## Your author name, e.g. tufu9441
  copyright_text: ## Your copyright text, e.g. The author owns the copyright, please indicate the source reproduced.
love: false ## If you want the peach heart to appear when you click anywhere, set the value to true.
plantuml: ## Using PlantUML to generate UML diagram, must install hexo-filter-plantuml (https://github.com/miao1007/hexo-filter-plantuml).
  render: "PlantUMLServer" ##  Local or PlantUMLServer.
  outputFormat: "svg" ## common options: svg/png
copycode: true ## If you want to enable one-click copy of the code blocks, set the value to true.
dark: false ## If you want to use the dark mode theme, set the value to true. Note: This feature is not complete, please open an issue if you have any problem.
totop: true ## If you want to use the rocketship button to return to the top, set the value to true.
external_css: false ## If you want to load an external CSS file, set the value to true and create a file named "external.css" in the source/css folder.

menu:
  - page: home
    directory: .
    icon: fa-home
  - page: archive
    directory: archives/
    icon: fa-archive
  - page: about
    directory: about/
    icon: fa-user
  - page: rss
    directory: atom.xml
    icon: fa-rss

widgets: ## Six widgets in sidebar provided: search, category, tag, recent_posts, recent_comments and links.
  - search
  - category
  - tag
  - recent_posts
  - recent_comments
  - links

links:
  - title: site-name1
    url: http://www.example1.com/
  - title: site-name2
    url: http://www.example2.com/
  - title: site-name3
    url: http://www.example3.com/
    attributes: # Add your additional attributes to the link here
      rel: me

timeline:
  - num: 1
    word: 2014/06/12-Start
  - num: 2
    word: 2014/11/29-XXX
  - num: 3
    word: 2015/02/18-DDD
  - num: 4
    word: More

# Static files
js: js
css: css

# Theme version
version: 1.0.0
```
- disqus - [Disqus](https://disqus.com) comment system, integrated with [DisqusJS](https://github.com/SukkaW/DisqusJS) API.
- uyan - [Uyan](http://www.uyan.cc) id
- livere - [LiveRe](https://livere.com) data-uid
- changyan - [Changyan](http://changyan.kuaizhan.com) appid
- gitalk - [Gitalk](https://github.com/gitalk/gitalk) comment system
- valine - [Valine](https://valine.js.org) comment system
- minivaline - [MiniValine](https://github.com/MiniValine/MiniValine) comment system
- utterances - [Utterances](https://utteranc.es) comment system
- google_search - Default search engine
- baidu_search - Search engine for users in China
- swiftype - [Swiftype Search](https://swiftype.com) key
- self_search - A jQuery-based [local search engine](http://hahack.com/codes/local-search-engine-for-hexo), with the dependency on the plugin [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
- google_analytics - [Google Analytics](https://www.google.com/analytics/) tracking id
- baidu_analytics - [Baidu Analytics](http://tongji.baidu.com) tracking id
- fancybox - Enable [Fancybox](http://fancyapps.com/fancybox/)
- show_category_count - Show the count of categories in the sidebar widget
- toc_number - Show the list number of toc
- shareto - Enable share button, with the dependency on the plugin [hexo-helper-qrcode](https://github.com/yscoder/hexo-helper-qrcode)
- busuanzi - Enable [Busuanzi](http://busuanzi.ibruce.info) page views
- wordcount - Enable [hexo-wordcount](https://github.com/willin/hexo-wordcount) of each post
- widgets_on_small_screens - Show the widgets at the bottom of small screens
- canvas_nest - Enable [canvas-nest.js](https://github.com/hustcc/canvas-nest.js/blob/master/README-zh.md) dynamic background
- donate - Enable donate button after each post
- post_copyright - Enable copyright info after each post
- love - Enable peach heart when clicking anywhere
- plantuml - Enable PlantUML to generate UML diagram
- copycode - Enable one-click copy of code blocks
- dark - Enable the dark mode of the theme
- totop - Enable the rocketship to-top button
- external_css - Enable loading an external CSS file
- menu - Customize your menu of pages here, just follow the format of existied items. Don't forget to create corresponding folders inlcuding `index.md` in `source` folder to ensure the pages will correctly display. [FontAwesome](http://fontawesome.io) icon fonts have been integrated, and you can choose other icons which you like [here](http://fontawesome.io/icons/) and use them according to the instruction.
- widgets - Choose and arrange the widgets in sidebar here.
- links - Edit your blogroll here.
- timeline - Show a timeline of the website by setting `layout: timeline` of a page.
- Static files - Static files directory, for convenience of CDN usage.
- Theme version - For automatic refresh of static files on CDN.

## Features
#### Logo
You can set a **favicon.ico** for your website, please put it into  `source` folder of hexo directory, recommended size: 32px*32px.

You can add a website logo for apple devices, please put an image named **apple-touch-icon.png** into `source` folder of hexo directory, recommended size: 114px*114px.

#### Abstract
You can control the abstract of a post shown at index, by either filling a `description:` item in `front-matter` of the `post.md`, or just inserting a `<!--more-->` before your hidden content.

#### Page
Create folders inlcuding `index.md` in `source` folder to add pages, and add a `layout: page` in `front-matter` of `index.md`. A tagcloud page can be enabled by setting `layout: tagcloud` of a page. If you need a single column page without sidebar, just set `layout: single-column` instead of `layout: page`.

#### Table of Contents
TOC in a post can be enabled by adding a `toc: true` item in `front-matter`.

#### Comments
Comment feature of each post and page can be enabled (default) and disabled by adding a `comments: true` or a `comments: false` in `front-matter`. This could be useful when you want comment feature for a guestbook page, but don't want comment feature for a about page.

#### Syntax Highlighting
Highlighted code showcase is supported, please set the `highlight` option in `_config.yml` of hexo directory like this:

```YAML
highlight:
  enable: true
  auto_detect: true
  line_number: true
  tab_replace:
```

#### Math Equation
Add
```YAML
mathjax: true
```
in Hexo's `_config.yml`.

In the post which you would like to use math equation, add `mathjax: true` in the `front-matter`. For example:

```YAML
title: Test Math
date: 2016-04-05 14:16:00
categories: math
mathjax: true
---
```
The default math delimiters are `$$...$$` and `\\[...\\]` for displayed mathematics,
and `$...$` and `\\(...\\)` for in-line mathematics.

However, if your post contains dollar signs (`$`), and they appear often in non-mathematical parts, in other words, you want to use `$` as dollar sign not inline math delimiter, please add

```YAML
mathjax2: true
```
in Hexo's `_config.yml` instead of `mathjax: true`. Correspondingly, add `mathjax2: true` to the `front-matter` of the post in which
you would like to use math equation.

See the [example](http://zhongpu.info/2016/05/06/Mathjax%20and%20Hexo/).

#### Languages
Seven languages are available for this theme currently: Simplified Chinese (zh-CN), Traditional Chinese (zh-TW), English (en), French (fr-FR), German (de-DE), Korean (ko) and Spanish (es-ES). Contributions of translating to other languages will be highly appreciated.

## Solutions
- Check whether your Terminal's current directory is in hexo's root directory which contains `source/`, `themes/`, etc.

- If you have any trouble in using this theme, please feel free to open an [issue](https://github.com/tufu9441/maupassant-hexo/issues).

## Browser Support
![Imgur](http://i.imgur.com/iO9L5ty.png)

## Contributing
All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.

## Acknowledgements
Thanks for all the [contributors](https://github.com/tufu9441/maupassant-hexo/graphs/contributors) of this theme.
.
## Maupassant on other platforms:
+ Typecho：https://github.com/pagecho/maupassant/
+ Octopress：https://github.com/pagecho/mewpassant/
+ Farbox：https://github.com/pagecho/Maupassant-farbox/
+ Wordpress：https://github.com/iMuFeng/maupassant/
+ Ghost: https://github.com/LjxPrime/maupassant/
+ Hugo: https://github.com/rujews/maupassant-hugo/
