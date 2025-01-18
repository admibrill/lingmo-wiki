# Getting Started with Lingmo OS Development

Welcome to the developer documentation for Lingmo OS! This guide provide you with the necessary tools and resources to get started with Lingmo OS development.

## Get source code

We use the [repo](https://source.android.com/setup/develop/repo) tool to manage the source code. Of course, you can clone every component separately, but it's recommended to get all the source code at once.

### Clone the LingmoOS Repository

```bash
git clone https://github.com/LingmoOS/LingmoOS.git
```

### Set Up the Repo Tool

```bash
mkdir -p ~/bin
cp -v LingmoOS/repo ~/bin/
chmod a+x ~/bin/repo
echo 'export PATH="$PATH:$HOME/bin"' >> ~/.bashrc
source ~/.bashrc
```

### Create a Build Directory

```bash
mkdir -p workdir
cd workdir
```

### Initialize the Repo

```bash
repo init -u https://github.com/LingmoOS/manifest.git -m manifest.xml
```

### Sync the Code

```bash
repo sync
```

## Component Guides

For a comprehensive list of Lingmo OS components, including core components, basic components, libraries, plugins, system, and tools, please refer to the [Component List](component-list.md).

This list provides detailed information on each component, including their paths and corresponding GitHub repositories. It is maintained separately for ease of updates and readability.

## Contributing to Lingmo OS

### Contribution Workflow

1. **Fork the Repository**: Start by forking the component repository on GitHub.
2. **Create a Feature Branch**: Develop your changes in a new branch.
3. **Make Changes**: Implement the desired features or fixes.
4. **Write Tests**: Ensure your changes are tested thoroughly.
5. **Commit Changes**: Commit your changes with clear and descriptive messages.
6. **Push Changes**: Push your branch to your forked repository.
7. **Create a Pull Request**: Submit a pull request to the original repository.
8. **Review and Merge**: Wait for the maintainers to review your pull request and merge it into the main branch.

### Code of Conduct

Please review our [Code of Conduct](code-of-conduct.md) to understand the standards of behavior expected in our community. By participating, you agree to abide by these guidelines.

---

Thank you for choosing Lingmo OS for your development journey! If you encounter any issues, please refer to the [faq](faq.md) or reach out to our community for support.
