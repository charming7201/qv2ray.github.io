---
title: 关于 Wayland 的一些说明
---

# 关于 Wayland 的一些说明

**注意：本章节仅仅涉及到 GNU/Linux 系统**

## 运行

Qv2ray 是原生的 Qt5/C++ 程序，，能够完整地支持 Wayland 显示协议。不过，若要使 Qv2ray 运行在 Wayland 协议下，你需要一个 Wayland 会话（比如 Gnome 会话、KDE Wayland 会话、Sway 等），同时还需要安装 Qt5 的 Wayland 支持（包名一般是 `qt5-wayland` 或 `qtwayland5`）。

如果一切就绪，那么你可以试着通过 Wayland 显示协议运行 Qv2ray 了。

### Gnome 环境

Gnome 环境下的 Qt5 程序默认使用 Xorg 协议运行于 Xwayland 上（Xorg 在 Wayland 下的后备模式）。因此，如果要让 Qv2ray 运行在 Wayland 显示协议下你需要运行如下命令：

```bash
QT_QPA_PLATFORM=wayland qv2ray
```

运行效果如下：
[![Qv2ray On Wayland in Gnome Session](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

你可以将 `QT_QPA_PLATFORM=wayland` 添加到 Qv2ray 的 desktop 文件，这样 Qv2ray 就可以在启动的时候就使用 Wayland 显示协议了。

### KDE Plasma Wayland 会话

理论上默认就走 Wayland 显示协议，但是尚未验证过。指定 Qv2ray 走 Wayland 显示协议的方法同上。

### Sway

未曾测试过，欢迎有使用经验的人作出贡献。指定 Qv2ray 走 Wayland 显示协议的方法同上。

## 疑难排查

### 无法运行于 Wayland

你可能在使用基于 Xorg 的桌面会话，或者你没有安装 Qt5 的 Wayland 组件。或者，你静态编译了 Qv2ray，但是未加入 Qt5 的 Wayland 组件。

### 运行在 Wayland 显示协议下能否加快翻墙速度？

不能，谢谢。

### Gnome 下没有托盘图标

Gnome 桌面本就不支持托盘图标。Ubuntu 做了个[扩展](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/)来支持了一个基于 DBus 通讯的 Gnome 托盘扩展。目前测试的结果是此扩展能在 Arch Linux 下显示运行于 Wayland 的 Qv2ray 的托盘，但是在 Ubuntu 定制的 Ubuntu Wayland 会话下可能无法显示。此为上游的问题，本项目无法处理。


