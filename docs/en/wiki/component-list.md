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
  A collection of KWin plugins tailored for LingmoOS, enhancing window management and desktop experience,which is a necessary component of LingmoOS.
  
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

  **Description:**  
  A KWin plugin for LingmoOS that adds rounded corners to application windows, enhancing the visual aesthetics of the desktop environment.  

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

  **Load & Unload:**  
  - To activate the effect:  

    ```bash  
    sh ../tools/load.sh  
    ```  

  - To uninstall the effect:  

    ```bash  
    sh ../tools/unload.sh  
    sudo make uninstall  
    ```  

  **Auto-install After KWin Update:**  
  After each KWin update, the plugin may become incompatible. To automate reinstallation:  

  ```bash  
  sh ../tools/install-autorun-test.sh  
  ```  

  This adds a desktop file to the autorun directory, ensuring the plugin is rebuilt and reinstalled if necessary.  

  **Tips:**  
  - **Disable Conflicting Native Window Outline:**  
    To avoid visual glitches with Breeze window decorations:  
    - Go to `System settings -> Themes -> Window Decorations -> Breeze -> Edit icon -> Shadows and Outline tab -> Outline intensity (Off)`.  

  - **Add Shadow to Windows Without Decoration (e.g., Steam):**  
    Use the following steps:  
    1. In `System settings -> Window management -> Window rules -> Appearance & Fixes`:  
       - Add `[steam]` and set `No titlebar` and frame to `No`.  
    2. In `System settings -> Application Style -> Window decoration -> Breeze theme setting -> Window specific overrides`:  
       - Add `[steam]` and set `Hide Window title bar` to `Yes`.  

  - **Add Debug Messages:**  
    For troubleshooting, enable debug logs during build:  

    ```bash  
    cmake .. -DCMAKE_BUILD_TYPE=Debug  
    cmake --build . -j  
    ```  

    View debug messages with:  

    ```bash  
    journalctl -f | grep kwin  
    ```  

    Or use colorful logs:  

    ```bash  
    sh ../tools/show-kwin-logs.sh  
    ```  

## Basic Components

- **lingmo-calculator**  
  - Path: `shell/BasicComponents/Calculator`  
  - Revision: `refs/tags/0.6.3`  
  - URL: [https://github.com/LingmoOS/lingmo-calculator](https://github.com/LingmoOS/lingmo-calculator)  

  **Description:**  
  A simple and intuitive calculator application for LingmoOS, designed for basic arithmetic operations with a clean and user-friendly interface.  

  **Dependencies:**  
  - **Ubuntu/Debian:**  

    ```bash  
    sudo apt-get install cmake gcc qtbase5-dev qtdeclarative5-dev qml-module-qtquick2 qml-module-qtquick-controls2  
    ```  

  - **Arch Linux:**  

    ```bash  
    sudo pacman -S cmake gcc qt5-base qt5-declarative qt5-quickcontrols2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

- **lingmo-cursor-themes**  
  - Path: `shell/BasicComponents/Cursor`  
  - URL: [https://github.com/LingmoOS/lingmo-cursor-themes](https://github.com/LingmoOS/lingmo-cursor-themes)  

  **Description:**  
  A collection of cursor themes for LingmoOS, forked from the popular Bibata Cursor project. These themes provide a modern, customizable, and visually appealing cursor experience for users.  

  **Dependencies:**  
  - **Build Tools:**  
    - Python 3.7 or higher  
    - `clickgen>=2.1.8` (install via `pip install clickgen`)  
    - `yarn`  

  **Installation:**  
  - **Linux (X11/Wayland):**  

    ```bash  
    tar -xvf Bibata.tar.gz
    sudo mv Bibata-* /usr/share/icons/
    ```  

  **Build from Source:**  

  ```bash  
  git clone https://github.com/ful1e5/Bibata_Cursor  
  cd Bibata_Cursor  
  yarn install  
  yarn generate  
  ```  

  **Customization:**  
  - **Colors:**  
    Use `cbmp` to customize base, outline, and background colors:  

    ```bash  
    npx cbmp -d 'svg/modern' -o 'bitmaps/Bibata-Hacker' -bc '#00FE00' -oc '#000000'  
    ```  

  - **Sizes:**  
    Use `ctgen` to build cursors with custom sizes:  

    ```bash  
    ctgen build.toml -s 16 -p windows -d 'bitmaps/Bibata-Modern-Ice' -n 'Bibata-Modern-Ice' -c 'White and rounded edge Bibata cursors with size 16'  
    ```  

  **Variants:**  
  - **Normal:**  
    - Bibata Original Amber: Yellowish with sharp edges.  
    - Bibata Modern Amber: Yellowish with rounded edges.  
    - Bibata Original Classic: Black with sharp edges.  
    - Bibata Modern Classic: Black with rounded edges.  
    - Bibata Original Ice: White with sharp edges.  
    - Bibata Modern Ice: White with rounded edges.  
  - **Right-Hand:**  
    - Bibata Original Amber Right: Yellowish with sharp edges (right-handed).  
    - Bibata Modern Amber Right: Yellowish with rounded edges (right-handed).  
    - Bibata Original Classic Right: Black with sharp edges (right-handed).  
    - Bibata Modern Classic Right: Black with rounded edges (right-handed).  
    - Bibata Original Ice Right: White with sharp edges (right-handed).  
    - Bibata Modern Ice Right: White with rounded edges (right-handed).  

  **Cursor Sizes:**  
  - **Xcursor Sizes:** 16, 20, 22, 24, 28, 32, 40, 48, 56, 64, 72, 80, 88, 96.  
  - **Windows Cursor Sizes:** 16x16 (Small), 24x24 (Regular), 32x32 (Large), 48x48 (Extra Large).  

  **Notes:**  
  - For troubleshooting or customization, refer to the [Bibata Cursor documentation](https://github.com/ful1e5/Bibata_Cursor).  
  - Test cursor behavior using tools like [Cursor-Test](https://cursor-test.netlify.app/) or [Mozilla CSS Cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).  
  - For package installations, check the [Bibata Cursor Release Page](https://github.com/ful1e5/Bibata_Cursor/releases) or platform-specific repositories (e.g., AUR for Arch Linux).

- **lingmo-dock**  
  - Path: `shell/BasicComponents/DockPanel`  
  - Revision: `helium_dev`  
  - URL: [https://github.com/LingmoOS/lingmo-dock](https://github.com/LingmoOS/lingmo-dock)  

  **Description:**  
  The LingmoOS application dock provides a sleek and functional panel for quick access to frequently used applications, enhancing the desktop experience with intuitive navigation.  

  **Dependencies:**  
  - **Arch Linux:**  

    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 kwindowsystem  
    ```  

  - **Ubuntu/Debian:**  

    ```bash  
    sudo apt install gcc cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libkf5windowsystem-dev  
    ```  

  - **Additional Dependencies:**  
    - LingmoUI  
    - liblingmo  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-gtk-themes**  
  - Path: `shell/BasicComponents/GtkStyle`  
  - URL: [https://github.com/LingmoOS/lingmo-gtk-themes](https://github.com/LingmoOS/lingmo-gtk-themes)  

  **Description:**  
  A collection of GTK themes designed for LingmoOS, providing a consistent and visually appealing look across applications. These themes enhance the user interface by offering modern and customizable styling options.  

  **Dependencies:**  
  - **Build Tools:**  
    - `cmake`  
    - `gcc`  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-grub-config**  
  - Path: `shell/BasicComponents/GrubBoot`  
  - URL: [https://github.com/LingmoOS/lingmo-grub-config](https://github.com/LingmoOS/lingmo-grub-config)

- **lingmo-systemicons**  
  - Path: `shell/BasicComponents/Icons`  
  - URL: [https://github.com/LingmoOS/lingmo-systemicons](https://github.com/LingmoOS/lingmo-systemicons)

- **lingmo-launcher**  
  - Path: `shell/BasicComponents/Launcher`  
  - URL: [https://github.com/LingmoOS/lingmo-launcher](https://github.com/LingmoOS/lingmo-launcher)  

  **Description:**  
  A full-screen application launcher for LingmoOS, designed to provide quick and intuitive access to installed applications, enhancing productivity and user experience.  

  **Dependencies:**  
  - **Arch Linux/Manjaro:**  

    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 kwindowsystem  
    ```  

  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install gcc cmake qtbase5-dev qml-module-qtquick-controls2 qml-module-org-kde-kwindowsystem qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev libkf5windowsystem-dev  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-ocr**  
  - Path: `shell/BasicComponents/OCRServer`  
  - Revision: `refs/tags/v1.2.4`  
  - URL: [https://github.com/LingmoOS/lingmo-ocr](https://github.com/LingmoOS/lingmo-ocr)  

  **Description:**  
  An OCR (Optical Character Recognition) server developed for LingmoOS, designed to accurately recognize text from images and support multiple languages.

  **Dependencies:**  
  - **Ubuntu/Debian:**  

    ```bash  
    sudo apt-get install equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++  
    ```  

  - **Arch Linux:**  

    ```bash  
    sudo pacman -S base-devel cmake  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..
  make
  sudo make install
  ```  

- **lingmo-sddm-theme**  
  - Path: `shell/BasicComponents/LoginManagerStyle`  
  - Revision: `refs/tags/2.7.0`  
  - URL: [https://github.com/LingmoOS/lingmo-sddm-theme](https://github.com/LingmoOS/lingmo-sddm-theme)  

  **Description:**  
  A modern and visually appealing SDDM (Simple Desktop Display Manager) theme designed specifically for LingmoOS, providing a seamless and elegant login experience.  

  **Dependencies:**  
  - **Ubuntu/Debian:**  

    ```bash  
    sudo apt install build-essential cmake extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools  
    ```  

  - **Arch Linux:**  

    ```bash  
    sudo pacman -S base-devel cmake extra-cmake-modules qt5-base qt5-declarative qt5-quickcontrols2 qt5-tools  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

- **lingmo-settings**  
  - Path: `shell/BasicComponents/Settings`  
  - Revision: `helium`  
  - URL: [https://github.com/LingmoOS/lingmo-settings](https://github.com/LingmoOS/lingmo-settings)  

  **Description:**  
  The system settings application for LingmoOS, providing a centralized interface for configuring system preferences. It utilizes LingmoUI as the interface style, offering a modern and user-friendly experience.  

  **Dependencies:**  
  - **Arch/Manjaro:**  

    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 freetype2 fontconfig networkmanager-qt modemmanager-qt  
    ```  

  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install cmake debhelper extra-cmake-modules libicu-dev libcrypt-dev libfreetype6-dev libfontconfig1-dev libkf5networkmanagerqt-dev libkf5config-dev modemmanager-qt-dev qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools qml-module-qtquick-controls2 qml-module-qtquick2 qml-module-qtquick-layouts qml-module-qt-labs-platform qml-module-qt-labs-settings qml-module-qtqml qml-module-qtquick-window2 qml-module-qtquick-shapes qml-module-qtquick-dialogs qml-module-qtquick-particles2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-statusbar**  
  - Path: `shell/BasicComponents/StatusBar`  
  - Revision: `refs/tags/2.0.1`  
  - URL: [https://github.com/LingmoOS/lingmo-statusbar](https://github.com/LingmoOS/lingmo-statusbar)  

  **Description:**  
  The status bar at the top of the LingmoOS desktop displays the current status of the system, including time, system tray, and other essential information. It provides a clean and intuitive interface for monitoring system activities.  

  **Dependencies:**  
  - **Ubuntu/Debian:**  

    ```bash  
    sudo apt install libkf5windowsystem-dev
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-screenshots**  
  - Path: `shell/BasicComponents/ScreenShots`  
  - URL: [https://github.com/LingmoOS/lingmo-screenshots](https://github.com/LingmoOS/lingmo-screenshots)  

  **Description:**  
  A screenshot tool for LingmoOS, designed to capture and save screen images with ease. It provides a simple and intuitive interface for taking full-screen, window, or region-based screenshots.  

  **Dependencies:**  
  - **Arch/Manjaro:**  

    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2  
    ```  

  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools qml-module-qtquick-controls2 qml-module-qtquick2 qml-module-qtquick-layouts qml-module-qt-labs-platform qml-module-qt-labs-settings qml-module-qtqml qml-module-qtquick-window2 qml-module-qtquick-shapes qml-module-qtquick-dialogs qml-module-qtquick-particles2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-screenlocker**  
  - Path: `shell/BasicComponents/ScreenLocker`  
  - URL: [https://github.com/LingmoOS/lingmo-screenlocker](https://github.com/LingmoOS/lingmo-screenlocker)  

  **Description:**  
  A screen locker for LingmoOS, designed to secure the system by locking the screen when inactive. It integrates with the system's authentication mechanisms and provides a seamless locking experience.  

  **Third-Party Code:**  
  - **kcheckpass:** Used for authentication.  

  **Dependencies:**  
  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install libpam0g-dev libx11-dev cmake extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev  
    ```  

  - **Arch Linux:**  

    ```bash  
    sudo pacman -S pam libx11 extra-cmake-modules qt5-base qt5-declarative qt5-quickcontrols2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- [**lingmo-terminal**](lingmo-terminal.md)
  - Path: `shell/BasicComponents/Terminal`  
  - URL: [https://github.com/LingmoOS/lingmo-terminal](https://github.com/LingmoOS/lingmo-terminal)  

  **Description:**  
  A terminal emulator for LingmoOS, using LingmoUI as the interface style to provide a modern and user-friendly terminal experience.  

  **Third-Party Code:**  
  - [**qmltermwidget**](https://github.com/Swordfish90/qmltermwidget)

  **Dependencies:**  
  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev  
    ```  

  **Build and Install:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

- **lingmo-texteditor**  
  - Path: `shell/BasicComponents/Texteditor`  
  - URL: [https://github.com/LingmoOS/lingmo-texteditor](https://github.com/LingmoOS/lingmo-texteditor)  

  **Description:**  
  An elegant and lightweight text editor for LingmoOS, designed for simplicity and ease of use while providing essential text editing features.  

  **Dependencies:**  
  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends
    ```  

  **Build:**  

  ```bash  
    mkdir build  
    cd build  
    cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
    make
    sudo make install  
  ```  

- **lingmo-updator**  
  - Path: `shell/BasicComponents/UpdateTool`  
  - URL: [https://github.com/LingmoOS/lingmo-updator](https://github.com/LingmoOS/lingmo-updator)  

  **Description:**  
  The official system update tool for LingmoOS, designed to provide a seamless and user-friendly experience for managing system updates.  

  **Dependencies:**  
  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install cmake libqapt-dev
    ```  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

- **lingmo-videoplayer**  
  - Path: `shell/BasicComponents/VideoPlayer`  
  - URL: [https://github.com/LingmoOS/lingmo-videoplayer](https://github.com/LingmoOS/lingmo-videoplayer)  

  **Description:**  
  An open-source video player for LingmoOS, built using Qt/QML and libmpv, providing a smooth and feature-rich video playback experience.  

  **Third-Party Code:**  
  - [**haruna:**](https://invent.kde.org/multimedia/haruna)

  **Dependencies:**  
  - **Debian/Ubuntu:**  

    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libmpv-dev
    ```  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make
  sudo make install  
  ```  

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
