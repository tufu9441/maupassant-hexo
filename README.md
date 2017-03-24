# Maupassant

forked and modified from [maupassant-hexo](https://github.com/tufu9441/maupassant-hexo).

Maupassant is a theme originated from a Typecho theme, now available in your Hexo blog. In this version, implement layout separate function of every page.

[Preview](http://www.jiangyu.me)｜[中文文档](https://www.haomwei.com/technology/maupassant-hexo.html)


![](./source/img/hexo.png)

## Installation
Install theme and renderers:

```shell
$ git clone https://github.com/NathanJiang/hexo-theme-Maupassant.git
$ npm install hexo-renderer-jade --save
$ npm install hexo-renderer-sass --save
```

Then change your `theme` setting in `_config.yml` to `maupassant`.

## Configuration
Default config:

```YAML
menu:
  - page: home
    directory: .
    icon: fa-home
  - page: archive
    directory: archives/
    icon: fa-archive
  - page: tags
    directory: tags/
    icon: fa-tags
  - page: about
    directory: about/
    icon: fa-user

widgets:
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

## Features
#### Logo
You can set a **favicon.ico** for your website, please put it into  `source` folder of hexo directory, recommended size: 32px*32px.

You can add a website logo for apple devices, please put an image named **apple-touch-icon.png** into `source` folder of hexo directory, recommended size: 114px*114px.

#### Abstract
You can control the abstract of a post shown at index, by either filling a `description:` item in `front-matter` of the `post.md`, or just inserting a `<!--more-->` before your hidden content.

#### Page
Create folders inlcuding `index.md` in `source` folder to add pages, and add a `layout: [custom]` in `front-matter` of `index.md`. If you want to render your own cumston style, add a line in the `layout/layout.jade`:
```YAML
else if page.layout="[custom]"
  include [custom]
## before the following line
else if is_post()
  include post
```
add a [custom].jade in `layout` folder, the render rule is as followed:

| path                           |page.layout  | is_home | is_tags | is_archive | is_category | is_post | is_page |
| -------------------------------|:-----------:|:-------:|--------:|:----------:|------------:|:-------:|:-------:|
| root/                          |      -      |    1    |    0    |     0      |      0      |    0    |    0    | 
| root/tags/[tag]/               |      -      |    0    |    1    |     0      |      0      |    0    |    0    | 
| root/tags/                     |    tags*    |    0    |    0    |     0      |      0      |    0    |    1    |
| root/archives/[archive]/       |      -      |    0    |    0    |     1      |      0      |    0    |    0    |
| root/archives/                 |  archives*  |    0    |    0    |     0      |      0      |    0    |    1    |
| root/categories/[category]/    |      -      |    0    |    0    |     0      |      1      |    0    |    0    |
| root/categories/               | categories* |    0    |    0    |     0      |      0      |    0    |    1    |
| root/[custom]/                 |   [cumtom]  |    0    |    0    |     0      |      0      |    0    |    1    |
| file in source/_posts          |     post    |    0    |    0    |     0      |      0      |    1    |    0    |

\*The ["root/tags/", "root/archives/", "root/categories/"] is the special version of root/[custom]. 
\*The page.layout attr of "root/[custom]/" is set in the file - source/[custom]/index.md > layout: "[custom]"
 
Before render the template, every url has the attrs in the table. Then, the render rule is based on the following sentences.

#### Table of Contents
TOC in a post can be enabled by adding a `toc: true` item in `front-matter`.

#### Syntax Highlighting
Highlighted code showcase is supported, please set the `highlight` option in `_config.yml` of hexo directory like this:

```YAML
highlight:
  enable: true
  auto_detect: true
  line_number: true
  tab_replace:
```

#### CodeBlock
In the post if you would like to use math equation, add `mathjax: true` in the `front-matter`. For example:

```YAML
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

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
Thank [tufu9441](https://www.haomwei.com) for his original version.
.
## Maupassant on other version:
+ Forked source: https://github.com/tufu9441/maupassant-hexo
+ Typecho：https://github.com/pagecho/maupassant/
+ Octopress：https://github.com/pagecho/mewpassant/
+ Farbox：https://github.com/pagecho/Maupassant-farbox/
+ Wordpress：https://github.com/iMuFeng/maupassant/
+ Ghost: https://github.com/LjxPrime/maupassant/
