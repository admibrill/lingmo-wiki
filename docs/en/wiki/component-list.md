# Lingmo OS Developer Documentation Index

This index provides a structured overview of the components of Lingmo OS, organized into categories for easy navigation. Each component is linked to its corresponding GitHub repository and includes its path from the manifest.xml.

## Core Components

- **lingmo-appmotor**
  - Path: `shell/CoreComponents/Appmotor`
  - URL: [https://github.com/LingmoOS/lingmo-appmotor](https://github.com/LingmoOS/lingmo-appmotor)
  
  **Description:**  
  Enhances application launch speed in Lingmo OS by preloading libraries and caching resources using a daemon (applauncherd). It improves performance by enabling shared resources among applications.
  
  **Dependencies:**  
  For Debian/Ubuntu:

  ```bash
  sudo apt install cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libsystemd-dev libcap-dev libdbus-1-dev
  ```
  
  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```
  
  **Note:**  
  Applications must be compiled as position-independent executables (PIE) or shared libraries with an exported `main()` function.

- **lingmo-core**
  - Path: `shell/CoreComponents/CoreServer`
  - Revision: `refs/tags/2.0.2`
  - URL: [https://github.com/LingmoOS/lingmo-core](https://github.com/LingmoOS/lingmo-core)
  
  **Description:**  
  Core system backend responsible for managing system sessions and providing essential services in Lingmo OS.

  **Dependencies:**  
  For Arch:

  ```bash
  sudo pacman -S extra-cmake-modules pkgconf qt5-base qt5-quickcontrols2 qt5-x11extras qt5-tools\
    kwindowsystem polkit polkit-qt5 xorg-server-devel xf86-input-libinput xf86-input-synaptics
  ```

  For Ubuntu:

  ```bash
  sudo apt install libpolkit-agent-1-dev libpolkit-qt5-1-dev libsm-dev libxtst-dev\
    libxcb-randr0-dev libxcb-shape0-dev libxcb-xfixes0-dev libxcb-composite0-dev libxcb-damage0-dev libxcb-image0-dev libxcb-util0-dev libkf5idletime-dev
  ```

  For Debian:

  ```bash
  sudo apt install extra-cmake-modules pkg-config xserver-xorg-input-libinput-dev libx11-xcb-dev libxcb1-dev libxcb-randr0-dev\
    libxcb-keysyms1-dev libxcursor-dev libxcb-xfixes0-dev libxcb-damage0-dev libxcb-composite0-dev libxcb-shm0-dev libxcb-util-dev\
    libxcb-image0-dev libxcb-dpms0-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-ewmh-dev libxcb-glx0-dev libxcb-record0-dev xserver-xorg-dev\
    xserver-xorg-input-synaptics-dev libxtst-dev libsm-dev libpolkit-qt5-1-dev libpolkit-agent-1-dev libkf5windowsystem-dev libkf5globalaccel-dev\
    libkf5coreaddons-dev libkf5idletime-dev libqt5x11extras5-dev qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools
  ```

  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```

  **Note:**  
  Installing the numerous xcb packages can be cumbersome; consider creating a script to automate the installation process.

- **lingmo-daemon**
  - Path: `shell/CoreComponents/Daemon`
  - URL: [https://github.com/LingmoOS/lingmo-daemon](https://github.com/LingmoOS/lingmo-daemon)
  
  **Description:**
  LingmoOS backend.
  
  **Dependencies:**
  For Debian/Ubuntu:

  ```bash
  sudo apt install cmake libqapt-dev
  ```
  
  **Build Instructions:**

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```

- [**lingmo-filemanager**](lingmo-filemanager.md)
  - Path: `shell/CoreComponents/Filemanager`
  - Revision: `dev`
  - URL: [https://github.com/LingmoOS/lingmo-filemanager](https://github.com/LingmoOS/lingmo-filemanager)
  
  **Description:**  
  Lingmo File Manager is a simple, beautiful file manager that retains the classic PC interactive design, offering a familiar and intuitive experience for users.

  **Dependencies:**  
  - **Ubuntu:**

    ```bash
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends
    sudo mk-build-deps -i -t "apt-get --yes" -r
    ```

  - **Debian:**

    ```bash
    sudo apt install build-essential cmake extra-cmake-modules libkf5kio-dev libkf5solid-dev libkf5windowsystem-dev libkf5config-dev qtbase5-dev qtbase5-private-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools
    ```

  - **ArchLinux:**

    ```bash
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 taglib kio
    ```
  
  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```
  
  **Notes:**  
  - The 'mk-build-deps' command might require the 'devscripts' package.

- **lingmo-kwin-plugins**
  - Path: `shell/CoreComponents/KWinPlugins`
  - URL: [https://github.com/LingmoOS/lingmo-kwin-plugins](https://github.com/LingmoOS/lingmo-kwin-plugins)
  
  **Description:**  
  A collection of KWin plugins tailored for LingmoOS, enhancing window management and desktop experience.
  
  **Dependencies:**  
  - **Arch Linux:**

    ```bash
    sudo pacman -S extra-cmake-modules qt5-base qt5-declarative kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin
    ```

  - **Ubuntu/Debian:**

    ```bash
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin
    ```
  
  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake ..
  make
  sudo make install
  ```

- **lingmo-kwin-plugins-roundedwindow**  
  - Path: `shell/CoreComponents/KWinRoundedWindow`  
  - Revision: `refs/tags/1.0.2`  
  - URL: [https://github.com/LingmoOS/lingmo-kwin-plugins-roundedwindow](https://github.com/LingmoOS/lingmo-kwin-plugins-roundedwindow)

## Basic Components

- **lingmo-calculator**  
  - Path: `shell/BasicComponents/Calculator`  
  - Revision: `refs/tags/0.6.3`  
  - URL: [https://github.com/LingmoOS/lingmo-calculator](https://github.com/LingmoOS/lingmo-calculator)

- **lingmo-cursor-themes**  
  - Path: `shell/BasicComponents/Cursor`  
  - URL: [https://github.com/LingmoOS/lingmo-cursor-themes](https://github.com/LingmoOS/lingmo-cursor-themes)

- **lingmo-dock**  
  - Path: `shell/BasicComponents/DockPanel`  
  - Revision: `helium_dev`  
  - URL: [https://github.com/LingmoOS/lingmo-dock](https://github.com/LingmoOS/lingmo-dock)

- **lingmo-gtk-themes**  
  - Path: `shell/BasicComponents/GtkStyle`  
  - URL: [https://github.com/LingmoOS/lingmo-gtk-themes](https://github.com/LingmoOS/lingmo-gtk-themes)

- **lingmo-grub-config**  
  - Path: `shell/BasicComponents/GrubBoot`  
  - URL: [https://github.com/LingmoOS/lingmo-grub-config](https://github.com/LingmoOS/lingmo-grub-config)

- **lingmo-systemicons**  
  - Path: `shell/BasicComponents/Icons`  
  - URL: [https://github.com/LingmoOS/lingmo-systemicons](https://github.com/LingmoOS/lingmo-systemicons)

- **lingmo-launcher**  
  - Path: `shell/BasicComponents/Launcher`  
  - URL: [https://github.com/LingmoOS/lingmo-launcher](https://github.com/LingmoOS/lingmo-launcher)

- **lingmo-ocr**  
  - Path: `shell/BasicComponents/OCRServer`  
  - URL: [https://github.com/LingmoOS/lingmo-ocr](https://github.com/LingmoOS/lingmo-ocr)

- **lingmo-sddm-theme**  
  - Path: `shell/BasicComponents/LoginManagerStyle`  
  - Revision: `refs/tags/2.7.0`  
  - URL: [https://github.com/LingmoOS/lingmo-sddm-theme](https://github.com/LingmoOS/lingmo-sddm-theme)

- **lingmo-settings**  
  - Path: `shell/BasicComponents/Settings`  
  - Revision: `helium`  
  - URL: [https://github.com/LingmoOS/lingmo-settings](https://github.com/LingmoOS/lingmo-settings)

- **lingmo-statusbar**  
  - Path: `shell/BasicComponents/StatusBar`  
  - Revision: `refs/tags/2.0.1`  
  - URL: [https://github.com/LingmoOS/lingmo-statusbar](https://github.com/LingmoOS/lingmo-statusbar)

- **lingmo-screenshots**  
  - Path: `shell/BasicComponents/ScreenShots`  
  - URL: [https://github.com/LingmoOS/lingmo-screenshots](https://github.com/LingmoOS/lingmo-screenshots)

- **lingmo-screenlocker**  
  - Path: `shell/BasicComponents/ScreenLocker`  
  - URL: [https://github.com/LingmoOS/lingmo-screenlocker](https://github.com/LingmoOS/lingmo-screenlocker)

- **lingmo-terminal**  
  - Path: `shell/BasicComponents/Terminal`  
  - URL: [https://github.com/LingmoOS/lingmo-terminal](https://github.com/LingmoOS/lingmo-terminal)

- **lingmo-texteditor**  
  - Path: `shell/BasicComponents/Texteditor`  
  - URL: [https://github.com/LingmoOS/lingmo-texteditor](https://github.com/LingmoOS/lingmo-texteditor)

- **lingmo-updator**  
  - Path: `shell/BasicComponents/UpdateTool`  
  - URL: [https://github.com/LingmoOS/lingmo-updator](https://github.com/LingmoOS/lingmo-updator)

- **lingmo-videoplayer**  
  - Path: `shell/BasicComponents/VideoPlayer`  
  - URL: [https://github.com/LingmoOS/lingmo-videoplayer](https://github.com/LingmoOS/lingmo-videoplayer)

- **lingmo-wallpapers**  
  - Path: `shell/BasicComponents/Wallpapers`  
  - URL: [https://github.com/LingmoOS/lingmo-wallpapers](https://github.com/LingmoOS/lingmo-wallpapers)

## Libraries

- **lib_lingmo**  
  - Path: `lib/SystemLibrary`  
  - Revision: `qt5`  
  - URL: [https://github.com/LingmoOS/lib_lingmo](https://github.com/LingmoOS/lib_lingmo)

- **LingmoUI**  
  - Path: `lib/SystemUI_Library`  
  - Revision: `refs/tags/2.3.0`  
  - URL: [https://github.com/LingmoOS/LingmoUI](https://github.com/LingmoOS/LingmoUI)

- **lingmo-qt-plugins**  
  - Path: `lib/SystemLibrary_Qt`  
  - URL: [https://github.com/LingmoOS/lingmo-qt-plugins](https://github.com/LingmoOS/lingmo-qt-plugins)

- **libqtxdg**  
  - Path: `lib/SystemLibrary_QtXdg`  
  - Remote: nebula  
  - URL: [https://nebula.lingmo.org/lingmo-os/libqtxdg](https://nebula.lingmo.org/lingmo-os/libqtxdg)

## Plugins

- **lingmo-kwin-plugins**  
  - Path: `shell/CoreComponents/KWinPlugins`  
  - URL: [https://github.com/LingmoOS/lingmo-kwin-plugins](https://github.com/LingmoOS/lingmo-kwin-plugins)

## System

- **linux**  
  - Path: `kernel`  
  - URL: [https://github.com/LingmoOS/linux](https://github.com/LingmoOS/linux)

- **linux-package**  
  - Path: `kernel/debian`  
  - URL: [https://github.com/LingmoOS/linux-package](https://github.com/LingmoOS/linux-package)

- **lingmo-base-common**  
  - Path: `init`  
  - URL: [https://github.com/LingmoOS/lingmo-base-common](https://github.com/LingmoOS/lingmo-base-common)

- **lingmo-live**  
  - Path: `system/installer`  
  - Revision: `helium`  
  - URL: [https://github.com/LingmoOS/lingmo-live](https://github.com/LingmoOS/lingmo-live)

- **lingmo-first-setup**  
  - Path: `guide`  
  - URL: [https://github.com/LingmoOS/lingmo-first-setup](https://github.com/LingmoOS/lingmo-first-setup)

## Tools

- **LingmoOS**  
  - Path: `build`  
  - URL: [https://github.com/LingmoOS/LingmoOS](https://github.com/LingmoOS/LingmoOS)

- **manifest**  
  - Path: `tools`  
  - URL: [https://github.com/LingmoOS/manifest](https://github.com/LingmoOS/manifest)
