(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{"3RQo":function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),c=a("dEAq"),r=a("ZpkN");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u8f6f\u4ef6\u5305\u7ba1\u7406"},t.a.createElement(c["AnchorLink"],{to:"#\u8f6f\u4ef6\u5305\u7ba1\u7406","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"\u8f6f\u4ef6\u5305\u7ba1\u7406"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u8f6f\u4ef6\u5305\u7ba1\u7406",t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"yum")," \u57fa\u4e8e RPM \u7684\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668"),t.a.createElement("li",null,t.a.createElement("code",null,"apt-get")," Debian Linux \u53d1\u884c\u7248\u4e2d\u7684 APT \u8f6f\u4ef6\u5305\u7ba1\u7406\u5de5\u5177"),t.a.createElement("li",null,t.a.createElement("code",null,"rpm"))))),t.a.createElement("h2",{id:"rpm"},t.a.createElement(c["AnchorLink"],{to:"#rpm","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"rpm"),t.a.createElement(r["a"],{code:"# \u5b89\u88c5 your-package.rpm \u5305\nrpm -ivh your-package.rpm\n\n# \u67e5\u8be2\u5f53\u524d\u7cfb\u7edf\u5b89\u88c5\u7684\u6240\u6709\u8f6f\u4ef6\u5305\nrpm -qa\n\n# \u5206\u5c4f\u663e\u793a\nrpm -qa | more\n\n# \u5378\u8f7d\u8f6f\u4ef6\u5305 vim-enhanced\nrpm -e vim-enhanced\n",lang:"bash"}),t.a.createElement("h2",{id:"yum"},t.a.createElement(c["AnchorLink"],{to:"#yum","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"yum"),t.a.createElement("p",null,"\u5e38\u7528\u9009\u9879\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"install"),"\uff1a\u5b89\u88c5\u8f6f\u4ef6\u5305"),t.a.createElement("li",null,t.a.createElement("code",null,"remove"),"\uff1a\u5378\u8f7d\u8f6f\u4ef6\u5305"),t.a.createElement("li",null,t.a.createElement("code",null,"list | grouplist"),"\uff1a\u67e5\u770b\u8f6f\u4ef6\u5305"),t.a.createElement("li",null,t.a.createElement("code",null,"update"),"\uff1a\u5347\u7ea7\u8f6f\u4ef6\u5305")),t.a.createElement("p",null,"\u5047\u5b9a\u4f60\u7528\u7684\u662f CentOS\uff0c\u5219\u5305\u7ba1\u7406\u5de5\u5177\u5c31\u662f ",t.a.createElement("code",null,"yum"),"\u3002 \u5982\u679c\u4f60\u7684\u7cfb\u7edf\u6ca1\u6709 ",t.a.createElement("code",null,"wget")," \u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u3002"),t.a.createElement(r["a"],{code:"# \u4f7f\u7528 yum \u5b89\u88c5 wget \u547d\u4ee4\u4f9d\u8d56\u5305\nyum install wget -y\n",lang:"bash"}),t.a.createElement("p",null,t.a.createElement("code",null,"yum")," \u914d\u7f6e\u6587\u4ef6\uff1a",t.a.createElement("code",null,"/etc/yum.repos.d/CentOS-Base.repo")),t.a.createElement("p",null,"\u56fd\u5185\u5f00\u6e90\u955c\u50cf\uff1a",t.a.createElement(c["Link"],{to:"https://developer.aliyun.com/mirror/"},"\u963f\u91cc\u4e91\u5b98\u65b9\u955c\u50cf\u7ad9")),t.a.createElement("h2",{id:"man"},t.a.createElement(c["AnchorLink"],{to:"#man","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"man"),t.a.createElement("p",null,t.a.createElement("code",null,"man"),"\uff08",t.a.createElement("code",null,"manual")," \u7684\u7f29\u5199\uff09\u662f Linux \u4e0b\u7684\u5e2e\u52a9\u547d\u4ee4\uff0c\u901a\u8fc7 ",t.a.createElement("code",null,"man")," \u6307\u4ee4\u53ef\u4ee5\u67e5\u770b Linux \u4e2d\u7684\u6307\u4ee4\u5e2e\u52a9\u3001\u914d\u7f6e\u6587\u4ef6\u5e2e\u52a9\u548c\u7f16\u7a0b\u5e2e\u52a9\u7b49\u4fe1\u606f\u3002"),t.a.createElement(r["a"],{code:"# \u67e5\u770b ls \u547d\u4ee4\u7684\u5e2e\u52a9\u8bf4\u660e\nman ls\n\n# \u67e5\u770b cd \u547d\u4ee4\u7684\u5e2e\u52a9\u8bf4\u660e\nman cd\n",lang:"bash"}),t.a.createElement("h2",{id:"help"},t.a.createElement(c["AnchorLink"],{to:"#help","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"help"),t.a.createElement(r["a"],{code:"# \u5185\u90e8\u547d\u4ee4\u4f7f\u7528 help \u5e2e\u52a9\uff0c\u67e5\u770b cd \u547d\u4ee4\u7684\u5e2e\u52a9\nhelp cd\n\n# \u5916\u90e8\u547d\u4ee4\u4f7f\u7528 help \u5e2e\u52a9\uff0c\u67e5\u770b ls \u547d\u4ee4\u7684\u5e2e\u52a9\nls --help\n",lang:"bash"}),t.a.createElement("h2",{id:"info"},t.a.createElement(c["AnchorLink"],{to:"#info","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"info"),t.a.createElement("p",null,"info \u5e2e\u52a9\u6bd4 help \u66f4\u8be6\u7ec6\uff0c\u4f5c\u4e3a help \u7684\u8865\u5145"),t.a.createElement(r["a"],{code:"# \u67e5\u770b cd \u547d\u4ee4\u7684\u8be6\u7ec6\u5e2e\u52a9\u4fe1\u606f\ninfo cd\n",lang:"bash"}),t.a.createElement("h2",{id:"grub"},t.a.createElement(c["AnchorLink"],{to:"#grub","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:["icon","icon-link"]})),"grub"),t.a.createElement("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a"),t.a.createElement(r["a"],{code:"/etc/default/grub\n\n/etc/grub.d/\n\n/boot/grub2/grub.cfg\n\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n\ngrub2-set-default 1\n",lang:"unknown"}),t.a.createElement("p",null,"\u4f7f\u7528\u5355\u7528\u6237\u8fdb\u5165\u7cfb\u7edf\uff08\u5fd8\u8bb0 root \u5bc6\u7801\uff09")))}}}]);