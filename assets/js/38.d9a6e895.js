(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{413:function(a,v,t){"use strict";t.r(v);var s=t(17),r=Object(s.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"配置-v2ray-核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-v2ray-核心"}},[a._v("#")]),a._v(" 配置 V2Ray 核心")]),a._v(" "),t("p",[a._v("在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 V2Ray 核心完成一些必要的配置。")]),a._v(" "),t("h2",{attrs:{id:"下载-v2ray-核心文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载-v2ray-核心文件"}},[a._v("#")]),a._v(" 下载 V2Ray 核心文件")]),a._v(" "),t("p",[a._v("由于社区政策等原因，Qv2ray 本身并 "),t("strong",[a._v("不包含")]),a._v(" V2Ray 核心可执行文件。这些核心文件来自一个叫做 "),t("code",[a._v("v2ray-core")]),a._v(" 的项目，需要用户手动下载安装到指定位置。")]),a._v(" "),t("p",[t("strong",[a._v("阅读 "),t("a",{attrs:{href:"https://www.v2fly.org/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("V2Fly 官方指南"),t("OutboundLink")],1),a._v("获取详细信息。")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("手动管理 vs 自动管理")]),a._v(" "),t("p",[a._v("如果你正在使用的发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装是最好的选择，因为系统可以自动处理 V2Ray 核心的更新。例如，对于 Arch Linux 用户而言，安装 "),t("code",[a._v("v2ray")]),a._v(" 软件包就足够了。对于其他情形，请接着阅读下面的说明。")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("给 Windows 10 ARM64 用户的建议")]),a._v(" "),t("p",[a._v("从 V2Ray Core 4.27 起，V2Ray 项目组为 Windows 10 提供了基于 ARM32（ armv7 ）的内核，建议 Windows 10 ARM64 用户使用该版本的内核以获取更好的性能表现。")])]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("擦亮眼睛")]),a._v(" "),t("p",[a._v("如果你在 "),t("code",[a._v("x86_64")]),a._v("（"),t("code",[a._v("amd64")]),a._v("）平台上运行 Qv2ray，请不要下载 "),t("code",[a._v("v2ray-linux-arm64.zip")]),a._v("。明确地说，"),t("code",[a._v("arm64")]),a._v(" 和 "),t("code",[a._v("amd64")]),a._v(" 是完全不同的 CPU 架构。请确保你不会这样做。")])]),a._v(" "),t("h3",{attrs:{id:"通过软件包管理器下载核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过软件包管理器下载核心"}},[a._v("#")]),a._v(" 通过软件包管理器下载核心")]),a._v(" "),t("h4",{attrs:{id:"homebrew-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-macos"}},[a._v("#")]),a._v(" Homebrew（macOS）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" v2ray\n")])])]),t("p",[a._v("使用 Homebrew 安装 V2Ray 的可执行文件位于 "),t("code",[a._v("/usr/local/bin/v2ray")]),a._v("，资源文件位于 "),t("code",[a._v("/usr/local/share/v2ray")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"scoop-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoop-windows"}},[a._v("#")]),a._v(" Scoop (Windows)")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("非中国大陆网络用户注意")]),a._v(" "),t("p",[a._v("本节使用了 "),t("a",{attrs:{href:"https://doc.fastgit.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("FastGit"),t("OutboundLink")],1),a._v(" 加速 GitHub 访问，以为中国大陆用户提供更好的访问体验。")]),a._v(" "),t("p",[a._v("若您并非中国大陆网络用户，或不需要对 GitHub 加速访问，请参考英文版的此部分操作。")])]),a._v(" "),t("div",{staticClass:"language-pwsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 如果尚未添加 mochi bucket\nscoop bucket add mochi https://hub.fastgit.org/Qv2ray/mochi\nscoop install mochi/qv2ray\n")])])]),t("p",[a._v("使用 Scoop 安装 V2Ray 的可执行文件位于 "),t("code",[a._v("<用户目录>\\scoop\\apps\\v2ray\\current\\v2ray.exe")]),a._v("，资源文件位于 "),t("code",[a._v("<用户目录>\\scoop\\apps\\v2ray\\current")]),a._v(".")]),a._v(" "),t("h4",{attrs:{id:"chocolatey-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chocolatey-windows"}},[a._v("#")]),a._v(" Chocolatey（Windows）")]),a._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("choco install v2ray\n")])])]),t("p",[a._v("该软件将安装到 "),t("code",[a._v("X:\\tools\\v2ray\\")]),a._v("（"),t("strong",[a._v("X")]),a._v("为你的系统盘盘符）。")]),a._v(" "),t("h4",{attrs:{id:"debian、ubuntu-与其它基于-debian-的衍生版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debian、ubuntu-与其它基于-debian-的衍生版"}},[a._v("#")]),a._v(" Debian、Ubuntu 与其它基于 Debian 的衍生版")]),a._v(" "),t("p",[a._v("请参阅 "),t("a",{attrs:{href:"https://apt.v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://apt.v2fly.org"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"arch-及其衍生版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arch-及其衍生版"}},[a._v("#")]),a._v(" Arch 及其衍生版")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S v2ray\n")])])]),t("p",[a._v("其二进制将被安装到 "),t("code",[a._v("/usr/bin/v2ray")]),a._v("，资源文件位于 "),t("code",[a._v("/usr/share/v2ray/")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"v2ray-官方安装脚本-使用了-systemd-的-linux-发行版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-官方安装脚本-使用了-systemd-的-linux-发行版"}},[a._v("#")]),a._v(" V2Ray 官方安装脚本（使用了 Systemd 的 Linux 发行版）")]),a._v(" "),t("p",[a._v("请参阅 "),t("a",{attrs:{href:"https://github.com/v2fly/fhs-install-v2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/v2fly/fhs-install-v2ray"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("虽然此脚本主要是把 V2Ray 安装为服务端，但是作为客户端使用也是没问题的。在 Qv2ray 中使用则建议关掉它的服务端服务：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl disable v2ray --now\n")])])]),t("h3",{attrs:{id:"手动下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动下载"}},[a._v("#")]),a._v(" 手动下载")]),a._v(" "),t("p",[t("strong",[a._v("下载链接：")]),a._v(" "),t("a",{attrs:{href:"https://hub.fastgit.org/v2fly/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://hub.fastgit.org/v2fly/v2ray-core/releases"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("将下载到的核心文件解压缩到一个固定的位置。默认情况下，我们建议将文件提取到 "),t("code",[a._v("$QV2RAY_CONFIG_PATH/vcore")]),a._v(" 中，其中 "),t("code",[a._v("$QV2RAY_CONFIG_PATH")]),a._v(" 是 Qv2ray 存储其数据的目录。")]),a._v(" "),t("p",[a._v("目录 "),t("code",[a._v("vcore")]),a._v(" 可以在下面的任一位置：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("./config/")]),a._v(" （在 Qv2ray 可执行文件旁边的 "),t("code",[a._v("config")]),a._v(" 子文件夹内，建议 Windows 用户使用）")]),a._v(" "),t("li",[t("code",[a._v("~/.qv2ray/")]),a._v("（在 home 文件夹的独立目录中）")]),a._v(" "),t("li",[t("code",[a._v("~/.config/qv2ray/")]),a._v(" （标准 XDG 配置路径）")])]),a._v(" "),t("p",[a._v("之后，请确保这些文件直接存在于 "),t("code",[a._v("vcore")]),a._v(" 目录中：")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("v2ray")]),a._v(" 或 "),t("code",[a._v("v2ray.exe")]),a._v("：核心可执行文件")]),a._v(" "),t("li",[t("code",[a._v("v2ctl")]),a._v(" 或 "),t("code",[a._v("v2ctl.exe")]),a._v("：核心控制程序")]),a._v(" "),t("li",[t("code",[a._v("geoip.dat")]),a._v("：IP 规则数据库")]),a._v(" "),t("li",[t("code",[a._v("geosite.dat")]),a._v("：域名规则数据库")])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("对于 Linux / macOS 用户的温馨提示")]),a._v(" "),t("p",[a._v("您应该始终为 "),t("code",[a._v("v2ray")]),a._v(" 和 "),t("code",[a._v("v2ctl")]),a._v(" 授予"),t("strong",[a._v("可执行权限")]),a._v("。这通常通过对这些文件执行 "),t("code",[a._v("chmod +x")]),a._v(" 来完成。")])]),a._v(" "),t("h2",{attrs:{id:"配置-qv2ray-使用核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-qv2ray-使用核心"}},[a._v("#")]),a._v(" 配置 Qv2ray 使用核心")]),a._v(" "),t("p",[a._v("打开 Qv2ray 并进入"),t("strong",[a._v("首选项")]),a._v("窗口。在 "),t("strong",[t("a",{attrs:{href:"qv2ray://open/preference/kernel"}},[a._v("内核设置")])]),a._v(" 中，进行如下配置：")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("核心可执行文件路径")]),a._v("：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 "),t("code",[a._v("v2ray.exe")]),a._v(" 的完整路径，也可以是 Linux / macOS 上的 "),t("code",[a._v("v2ray")]),a._v(" 可执行文件的完整路径。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("V2Ray 资源目录")]),a._v("：将其设置为 "),t("code",[a._v("geoip.dat")]),a._v(" 和 "),t("code",[a._v("geosite.dat")]),a._v(" 所在的位置。")])])]),a._v(" "),t("p",[a._v("配置完成后，你可以点击 "),t("strong",[a._v("检查 V2Ray 核心设置")]),a._v(" 按钮来验证你的 V2Ray 核心设置。 重复尝试，直到你通过了检查。")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("严禁套娃！")]),a._v(" "),t("p",[a._v("永远不要把 "),t("strong",[a._v("核心可执行文件路径")]),a._v(" 指向 "),t("strong",[a._v("Qv2ray 程序本体")]),a._v("！\n好在 Qv2ray 本身是单例模式运行的，你不会因此而引发 fork 炸弹。\n一定要注意，V2Ray 核心可执行文件是 "),t("code",[a._v("v2ray")]),a._v(" 、 "),t("code",[a._v("v2ray.exe")]),a._v(" 或者 "),t("code",[a._v("wv2ray.exe")]),a._v("，而不是 "),t("code",[a._v("qv2ray")]),a._v(" 或 "),t("code",[a._v("qv2ray.exe")]),a._v("、"),t("code",[a._v("v2rayN.exe")]),a._v(" 等名称！")])])])}),[],!1,null,null,null);v.default=r.exports}}]);