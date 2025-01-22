# 构建LingmoDE (WIP)
## 使用自动`lingmo-build`脚本 (仅适用于Debian)
此处假设[PowerShell](https://github.com/PowerShell/PowerShell)已经安装。
```console
# apt-get update -y
# apt-get upgrade -y
# apt-get install -y sudo equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++ --no-install-recommends
$ git clone https://github.com/LingmoOS/lingmo-build
$ cd lingmo-build
$ pwsh -c "./build.ps1" # build from tag
$ pwsh -c "./build.ps1 -BuildFromGit" # build from git
```
## 手动
*TODO*
