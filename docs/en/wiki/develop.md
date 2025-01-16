# Getting Started

## Prerequisites

- **Operating System:** Debian GNU/Linux 12 (Bookworm), 13 (Trixie), or later.
- **Disk Space:** At least 50GB of free space.
- **Processor:** Multi-core multi-threaded processor.
- **Memory:** Minimum of 8GB RAM.

## Tool Preparation

   1. **Clone the Main Repository**

      ```bash
      git clone https://github.com/LingmoOS/LingmoOS.git
      ```

   2. **Set Up the Repo Tool**

      ```bash
      mkdir -p ~/bin
      cp -v LingmoOS/repo ~/bin/
      chmod a+x ~/bin/repo
      echo 'export PATH="$PATH:$HOME/bin"' >> ~/.bashrc
      source ~/.bashrc
      ```

## Initialize the Repository

   1. **Create a Build Directory**

      ```bash
      mkdir -p workdir
      cd workdir
      ```

   2. **Initialize Repo**

      ```bash
      repo init -u https://github.com/LingmoOS/manifest.git -m manifest.xml
      ```

## Synchronize the Code

   ```bash
   repo sync
   ```

## Verification

   To ensure everything is set up correctly, you can check if the repo tool is functioning:

   ```bash
   repo --version
   ```

   This should display the version of the repo tool, confirming that it's properly installed.
