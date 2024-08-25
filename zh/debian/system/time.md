---
prev: false
next: false
---
# 日期和时间
:::warning 声明
本页面正在施工中，部分内容还不完善，仅供参考，有不足之处敬请指出

欢迎在我们的GitHub仓库提交pr以添加内容或修正不足
:::
系统中通常存在两种时间：软件时间和硬件时间。一个操作系统通过如下内容确定时间：时间数值、时间标准、时区和夏令时调节(中国已废止)。本文分别介绍各个部分的定义及如何设置他们.

大部分操作系统的时间管理包括如下方面：
- 启动时根据硬件时钟设置系统时间
- 运行时通过时间同步联网校正时间
- 关机时根据系统时间设置硬件时间

## 时间标准
时间表示有两个标准：localtime 和 UTC(Coordinated Universal Time) 。localtime 标准则依赖于当前时区。UTC 是与时区无关的全球时间标准。尽管概念上有差别，UTC 和 GMT (格林威治时间) 是一样的。

硬件所使用的时间标准由操作系统设定，Windows 默认使用 localtime，。使用 Linux 时，最好将硬件时钟设置为 UTC 标准，并在所有操作系统中使用。这样 Linux 系统就可以自动调整夏令时设置，而如果使用 localtime 标准那么系统时间不会根据夏令时自动调整。 

## 硬件时钟
:::tip
更多有关硬件时钟设置，参考[hwlock manual page](https://manpages.debian.org/man/8/hwclock)
:::

硬件时钟（即实时时钟 CMOS 时钟）仅能保存：年、月、日、时、分、秒这些时间数值，无法保存时间标准（UTC 或 localtime）。在2016年及以后的 UEFI 固件上支持保存是否使用夏令时。 

### 读取硬件时钟
```sh
hwclock --show
```

### 将系统时钟设置到硬件时钟
下面命令将系统时钟设置到硬件时钟，同时会创建或更新`/etc/adjtime`。
```sh
hwclock --systohc
```

## 系统时钟
系统时钟（即软件时间）与硬件时间分别维护，保存了时间、时区和夏令时设置。Linux 内核保存为自 UTC 时间 1970 年1月1日经过的秒数。初始系统时钟是从硬件时间计算得来，计算时会考虑`/etc/adjtime`的设置。系统启动之后，系统时钟与硬件时钟独立运行，Linux 通过时钟中断计数维护系统时钟。 

### 读取系统时间配置
终端运行以下命令以获取系统时间以及相关配置：
```sh
timedatectl
```
输出如下
```sh
# timedatectl
               Local time: Sat 2024-08-24 21:14:59 CST
           Universal time: Sat 2024-08-24 13:14:59 UTC
                 RTC time: Sat 2024-08-24 13:14:59    
                Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: no                         
              NTP service: inactive                   
          RTC in local TZ: no
```
当然也可以通过直接读取`/etc/adjtime`来获得系统时间配置
```sh
sudo cat /etc/adjtime
```

### 设置系统时间
系统时间可以通过`date`命令设置，也可使用`timedatectl`进行管理。当然，lingmoOS在控制中心中提供了使用GUI程序设置系统时间的方式。

#### 使用timedatectl
设置系统时间的本地时间： 
```sh
timedatectl set-time "yyyy-MM-dd hh:mm:ss"
```
例如：
```sh
timedatectl set-time "2009-11-25 11:45:14"
```
这个命令设置时间为2009年11月25日11时45分14秒。

#### 使用date命令
:::tip
`date`属于较为老旧的设施，一般更建议使用`timedatectl`，或使用GUI程序进行配置。
:::

以下命令可设置系统日期和时间：
```sh
date MMDDhhmmYYYY #设置日期时间
date --set yyyy-MM-dd #仅设置日期
date --set hh:mm:ss #仅设置时间
```
当直接使用`date`手动设置系统时间时，所需的时间格式根据POSIX规范必须是`月日时分年`（如上所示），但是，当使用`--set`参数时，date接受多种格式的日期和时间。上面的—`--set`参数示例在ISO 8601标准的扩展格式中指定为`YYYY-MM-DD`和`HH:MM:SS`（使用24小时制，不足位补0）。

#### 使用系统设置
lingmoOS在系统的“设置”应用中提供了相关的页面来配置系统时间。

## 多系统时间
如果机器上安装多个操作系统，硬件使用的是本地时间，可能多个操作系统都进行夏令时调整，导致时间错乱。计算机在多个时区切换时，也会出现问题。 所以建议多系统用户统一使用 UTC 时间。

### LingmoOS的时间方案配置
通过`timedatectl`可以查看设置系统时间. 终端键入以下命令查看系统当前硬件时钟的时间标准：
```sh
timedatectl | grep local
```
一般情况下，Linux系统当前硬件时钟的时间标准是UTC
若返回结果不是UTC而是localtime，以下命令硬件时间设置成 UTC：
```sh
timedatectl set-local-rtc 0
```
上述命令会自动配置或生成`/etc/adjtime`，无需单独设置。

系统启动装入 rtc 驱动时可能会根据系统时钟设置硬件时钟。是否设置依赖于平台、内核版本和内核编译选项。如果进行了设置，此时会假定硬件时钟为 UTC 标准，`/sys/class/rtc/rtcN/hctosys`N的值会设置为1。

配置后 systemd 会根据`/etc/adjtime`重新设置。所以使用当地时间作为硬件时钟时，可能在启动过程中导致系统时间反复变更。所以从 systemd 216 版本开始，如果 RTC 设置为本地时间， systemd 不会将时间回写，因为这样会引起 windows 时间错乱。systemd 也不会将当前时区信息传递给内核，这意味着 FAT 时间戳将统一按 UTC 时间处理。

### Windows下的时间方案配置
Windows 一般使用 RTC 作为地方时。Windows 其实也能处理 UTC，需要修改注册表。建议让 Windows 使用 UTC，而非让 Linux 使用地方时。Windows 使用 UTC 后，请记得禁用 Windows 的时间同步功能，以防 Windows 错误设置硬件时间。可以在 Linux 下使用 NTP 服务实现时间同步（lingmoOS已默认配置）。

使用 regedit ，新建如下 DWORD 值，并将其值设为十六进制的 1。
```txt
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation\RealTimeIsUniversal
```
也可以用管理员权限启动命令行来完成：
```powershell
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v
RealTimeIsUniversal /d 1 /t REG_DWORD /f
```
或者，创建 utc.reg 文件，写入以下内容，并双击运行以将其内容导入到注册表：
```txt
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation]
"RealTimeIsUniversal"=dword:00000001
```
如果 Windows 要求根据夏令时更新时钟，可以允许。时钟仍然是 UTC，仅是显示时间会改变。

设置时间标准后需要重新设置硬件时间和系统时间。 

如果你有时间偏移问题，重新安装tzdata包 并再次设置你的时区:
```sh
timedatectl set-timezone Asia/Shanghai
```

#### 一些历史遗留问题
对于较老的Windows，由于Windows的bug，以上方法并不管用。详情如下：

- 对于64位Windows 7和较老的Windows 10，有一个错误使得我们必须使用十六进制值为1的QWORD值而不是DWORD值。这个错误在新版本中已经修复，现在只需DWORD值即可。
- 在Vista SP2之前，有一个bug使得从挂起或休眠状态恢复后时钟被重置为本地时间。
- 对于XP和更早的版本的Windows，有一个与夏令时相关的bug。[参见](https://mskb.pkisolutions.com/kb/2687252)
- 对于更老版本的Windows，您可能想要阅读[https://www.cl.cam.ac.uk/~mgk25/mswish/ut-rtc.html](https://www.cl.cam.ac.uk/~mgk25/mswish/ut-rtc.html)。该功能甚至没有文档记录，也没有官方支持。

对于这些Windows版本，我们还是建议使用localtime作为硬件时间。

## 时区
在LingmoOS安装时已经要求配置了正确的时区，若您前往了不同的地区，可以通过以下方式配置时区。

以下是timedatectl有关时区的用法：
```sh
timedatectl status #检查当前时区
timedatectl list-timezones #显示可用时区
timedatectl set-timezone <Zone>/<SubZone> #修改时区
```

当然，LingmoOS也在“设置”应用里提供了图形化检查和设置时区的方法。

:::warning 一些值得注意的点
- 我们中国人更熟悉的时区是“北京时间”，但是不建议将时区设置为`Asia/Beijing`，而应当设置为`Asia/Shanghai`，这是因为`Asia/Beijing`并不是中国的IANA时区标识符，虽然LingmoOS采取了一些措施来规避可能的危害，但这并不能避免一些第三方应用因读取了错误的时区而导致混乱。
- 使用`timedatectl`或使用LingmoOS“设置”应用修改时区时会创建一个`/etc/localtime`软链接，指向`/usr/share/zoneinfo/`中的时区文件，手动创建时（例如 chroot 中无法执行 timedatectl）此链接请确保是相对链接而不是绝对链接。
:::

### 基于地理位置设置时区
要根据IP地址位置自动设置时区，可以使用地理位置API来检索时区，并将输出传递给`timedatectl set-timezone`以进行自动设置，例如`curl https://ipapi.co/timezone | timedatectl set-timezone`。以下是一些提供免费或部分免费服务的地理ip api（有的可能需要魔法）：
- [Abstract IP geolocation API](https://www.abstractapi.com/ip-geolocation-api)
- [FreegeoIP](https://freegeoip.app/)
- [IP-api](https://ip-api.com/)
- [IPAPI](https://ipapi.co/)
- [Ipdata](https://ipdata.co/)
- [Ipstack](https://ipstack.com/)
- [TimezoneApi](https://timezoneapi.io/)

### 每次联网时获得时区
创建一个 NetworkManager dispatcher script：
```sh
vi /etc/NetworkManager/dispatcher.d/09-timezone
```
然后按`i`键在vim中插入以下内容（`<url-to-your-ip-api>`为api的地址）
```sh
#!/bin/bash
case "$2" in
    up)
        timedatectl set-timezone "$(curl --fail <url-to-your-ip-api>)"
    ;;
esac
```
输入`:wq`保存，重启。

## 时间偏移
最能代表“真实时间”的是[国际原子时](https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E5%8E%9F%E5%AD%90%E6%97%B6)，所有的时钟都是有误差的。电子时钟的时间是不准的，但是一般有固定的偏移。这种于基值的差称为“时间偏移”。用`hwclock`设置硬件时间时，会计算每天偏移的秒数。偏移值是原硬件时间与新设置硬件时间的差，并且考虑上次硬件时间设置时的偏移。新的偏移值会在设置时钟时写到文件`/etc/adjtime`。

如果硬件时间值与原值的差小于 24 小时，偏移量不会重新计算，因为时间过短，无法精确设置偏移。

如果硬件时钟总是过快或过慢，可能是计算了错误的偏移值。硬件时钟设置错误或者时间标准与其他操作系统不一致导致。删除文件`/etc/adjtime`可以删除偏移值，然后设置正确的硬件时钟和系统时钟，并检查时间标准是否设置正确。 