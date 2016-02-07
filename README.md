# Maupassant

[![Build Status](https://travis-ci.org/tufu9441/maupassant-hexo.svg?branch=master)](https://travis-ci.org/tufu9441/maupassant-hexo)   [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tufu9441/maupassant-hexo/blob/master/LICENSE)

> 大道至简

[Preview](https://www.haomwei.com)｜[中文文档](https://www.haomwei.com/technology/maupassant-hexo.html)

A simple Hexo template with great performance on different devices, ported from a Typecho theme by [Cho](https://github.com/pagecho/maupassant/), forked and modified from [icylogic](https://github.com/icylogic/maupassant-hexo/).

![template preview](http://ooo.0o0.ooo/2015/10/24/562b5be12177e.jpg
 "Maupassant template preview")

## Installation
Install theme and renderers:

```
git clone https://github.com/tufu9441/maupassant-hexo.git themes/maupassant
npm install hexo-renderer-sass --save
npm install hexo-renderer-jade --save
```

Then change your `theme` setting in `_config.yml` to `maupassant`.

## Configuration
Default config:

```
fancybox: true ## If you want to use fancybox please set the value to true
duoshuo: ## Your duoshuo_shortname, e.g. username
disqus: ## Your disqus_shortname, e.g. username
google_search: true ## Use Google search, true/false
baidu_search: ## Use Baidu search, true/false
swiftype: ## Your swiftype_key, e.g. m7b11ZrsT8Me7gzApciT
tinysou: ## Your tinysou_key, e.g. 4ac092ad8d749fdc6293
google_analytics: ## Your Google Analytics tracking id, e.g. UA-42425684-2
baidu_analytics: ## Your Baidu Analytics tracking id, e.g. 8006843039519956000

menu:
  - page: home
    directory: .
    icon: icon-home
  - page: archive
    directory: archives/
    icon: icon-archive
  - page: about
    directory: about/
    icon: icon-about
  - page: rss
    directory: atom.xml
    icon: icon-rss
    
widgets: ## Six widgets in sidebar provided: search, category, tag, recent_posts, rencent_comments and links.
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
    
# Static files
js: js
css: css

# Theme version
version: 0.0.0
```
- fancybox - Enable [Fancybox](http://fancyapps.com/fancybox/)
- duoshuo - [Duoshuo](http://duoshuo.com) shortname
- disqus - [Disqus](https://disqus.com) shortname
- google_search - Default search engine
- baidu_search - Search engine for users in China
- swiftype - [Swiftype Search](https://swiftype.com) key
- tinysou - [Tiny Search](http://tinysou.com) key
- google_analytics - [Google Analytics](https://www.google.com/analytics/) tracking id
- baidu_analytics - [Baidu Analytics](http://tongji.baidu.com) tracking id
- menu - Customize your menu of pages here, just follow the format of existied items. Don't forget to create corresponding folders inlcuding `index.md` in `source` folder to ensure the pages will correctly display. [IcoMoon](https://icomoon.io) icon fonts have been integrated, and you can choose other icons you like [here](https://icomoon.io/app/#/select) and use them according to the  [instruction](https://icomoon.io/#docs)
- widgets - Choose and arrange the widgets in sidebar here
- links - Edit your blogroll here
- Static files - Static files directory, for convenience of CDN usage
- Theme version - For automatic refresh of static files on CDN

## Features
#### Logo
You can set a **favicon.ico** for your website, please put it into  `source` folder of hexo directory, recommended size: 32px*32px.

You can add a website logo for apple devices, please put an image named **apple-touch-icon.png** into `source` folder of hexo directory, recommended size: 114px*114px.

#### Abstract
You can control the abstract of a post shown at index, by either filling a `description:` item in `front-matter` of the `post.md`, or just inserting a `<!--more-->` before your hidden content.

#### Table of Contents
TOC in a post can be enabled by adding a `toc: true` item in `front-matter`.

#### Comments
Comment feature of each post and page can be enabled (default) and disabled by adding a `comments: true` or a `comments: false` in `front-matter`. This could be useful when you want comment feature for a guestbook page, but don't want comment feature for a about page.

#### Syntax Highlighting
Highlighted code showcase is supported, please set the `highlight` option in `_config.yml` of hexo directory like this:

```
highlight:
  enable: true
  auto_detect: true
  line_number: true
  tab_replace:
```

#### Languages
Five languages are available for this theme currently: Simplified Chinese (zh-CN), Traditional Chinese (zh-TW), English (en), German (de-DE) and Spanish (es-ES). Contributions of translating to other languages will be highly appreciated.

## Solutions
- Check whether your Terminal's current directory is in hexo's root directory which contains `source/`, `themes/`, etc.

- If you have any trouble in using this theme, please feel free to open an [issue](https://github.com/tufu9441/maupassant-hexo/issues).

## Contributing
All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.

## Acknowledgements
Thank [JamesPan](http://blog.jamespan.me) for his help to improve this theme
.
## Maupassant on other platforms:
+ Typecho：https://github.com/pagecho/maupassant/
+ Octopress：https://github.com/pagecho/mewpassant/
+ Farbox：https://github.com/pagecho/Maupassant-farbox/
+ Wordpress：https://github.com/iMuFeng/maupassant/
+ Ghost: https://github.com/LjxPrime/maupassant/
