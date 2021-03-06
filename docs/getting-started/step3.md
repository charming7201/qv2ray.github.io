---
title: 向 Qv2ray 中添加节点
---

# 向 Qv2ray 中添加节点

Qv2ray 支持多种导入配置的方式。为了让您快速上手，我们选择了这些最常见的使用场景。

## 通过分享链接导入

> 分享链接通常长这样：
> * `vmess://eyJ2Ijoi`...
> * `ss://NjNlMDAx`...

按照以下步骤导入它们：

1. 单击主窗口中的 **导入** 按钮，或通过[链接](qv2ray://open/import/link)和[二维码](qv2ray://open/import/qr)导入。
2. 在 **导入文件** 对话框中，选择导入 **链接**
3. 粘贴你的分享链接到 **分享链接** 文本框
4. 点击 **导入** 按钮完成

:::tip 批量导入

您可以一次导入多个分享链接。确保每条分享链接独占一行。

:::

:::warning 损坏的链接

一些损坏/不支持的分享链接可能无法导入，但是没关系。详细的错误将显示在右边。此外，它不会停止批量导入中的其他条目。

:::

## 通过订阅地址导入

> 订阅链接通常是这样的：`https://some-airport.com/links/yjyyodk?sub=3`

1. 点击主窗口的 **分组** 按钮，打开 **组编辑器**。
2. 点击 **组编辑器** 窗口左下角的 **添加分组** 图标按钮，创建一个新的分组。
3. 在 **分组列表** 中点击你刚刚创建的新分组，右侧会显示该分组的详情。
4. 在右侧切换到 **订阅设置** 面板，并完成下列设置：
   1. 编辑 **分组名称** 以命名分组。
   2. 勾选 **该分组是一个订阅**。
   3. 填写订阅信息：
      - **订阅地址**: 使用上面提到的订阅链接。
      - **订阅类型**: 如果默认值不生效，你可以换成另一个。
   4. 可选地完成订阅设置:
      - **更新间隔**: Qv2ray 将在订阅需要更新时提醒你更新订阅。根据实际情况填写即可。
      - **导入过滤**: 若配置此项，可选择性地导入符合某些条件的节点。
5. 点击 **更新订阅**，等待订阅完成。
6. 点击 **OK** 应用设置并关闭窗口。

:::tip 提醒
通过系统代理更新的时候，如果你的订阅上游遇到连接问题（例如: DNS 记录污染，IP 封锁 / 服务器等），你可以尝试运行 **使用系统代理设置更新订阅** 选项。 然而，最好尽快通知上游，以永久解决这个问题。
:::

## 手动输入节点信息

1. 单击主窗口左下角的**新建**
2. 填写节点的名字或留空，也可以完成配置后再进行重命名
3. 点击**手动输入** -> **打开连接编辑器**
4. 填写出站的**标签**，这个名字会出现在日志里，也可以留空
5. 填写地址 (域名) 和端口，选择代理协议的**类型**
6. 可选的设置**其他设置**
7. 完善你的**出站设置**和**流设置**
8. 点击 **OK** 保存配置

## 已有配置文件导入

如果你已经是手动跑 v2ray-core 的 OG 玩家，你可以将现有配置导入。在高级 -> 选择路径，或是打开 Json 编辑器以粘贴你的配置内容。
