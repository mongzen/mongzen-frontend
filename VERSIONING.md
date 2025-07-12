# Versioning Strategy

This project follows [Semantic Versioning (SemVer)](https://semver.org/) best practices for all releases.

## 📋 Version Format

```text
MAJOR.MINOR.PATCH (e.g., 1.2.3)
```

## 🔢 Version Increment Rules

### Automatic Version Bumping

The GitHub Actions workflow automatically determines version bumps based on commit messages:

### 🚨 Major Version Bump (X.0.0)

Triggered when commit message contains:

- `[major]`
- `[breaking]`
- `BREAKING CHANGE`

```bash
# Examples
git commit -m "feat: new authentication system [breaking]"
git commit -m "[major] Complete UI redesign"
git commit -m "BREAKING CHANGE: Remove deprecated API endpoints"
```

### ✨ Minor Version Bump (X.Y.0)

Triggered when commit message contains:

- `[minor]`
- `[feature]`
- `feat:`

```bash
# Examples
git commit -m "feat: Add new dashboard component"
git commit -m "[feature] Implement dark mode toggle"
git commit -m "[minor] Add user profile management"
```

### 🔧 Patch Version Bump (X.Y.Z)

Default behavior for all other commits:

- Bug fixes
- Documentation updates
- Performance improvements
- Refactoring

```bash
# Examples
git commit -m "fix: Resolve login button alignment issue"
git commit -m "docs: Update deployment guide"
git commit -m "perf: Optimize image loading"
```

## 🏷️ Release Tags

All releases are tagged with the format `v{version}`:

- `v1.0.0` - Major release
- `v1.1.0` - Minor release
- `v1.1.1` - Patch release

## 📝 Release Notes

Each release automatically includes:

- **Changelog**: All commits since the last release
- **Deployment URL**: Production deployment link
- **Build Information**: GitHub Actions run details
- **Deployment Metadata**: Environment, branch, and author info

## 🎯 Best Practices

### 1. **Use Conventional Commits**

```bash
<type>(<scope>): <description>

# Types:
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style changes
refactor: Code refactoring
test:     Adding tests
chore:    Maintenance tasks
```

### 2. **Version Bump Examples**

```bash
# Patch (1.0.0 → 1.0.1)
git commit -m "fix: Resolve header layout issue"

# Minor (1.0.1 → 1.1.0)
git commit -m "feat: Add user settings page"

# Major (1.1.0 → 2.0.0)
git commit -m "feat: New authentication system [breaking]"
```

### 3. **Release Planning**

- **Patch releases**: Bug fixes, small improvements
- **Minor releases**: New features, enhancements
- **Major releases**: Breaking changes, major rewrites

## 🔄 Manual Version Control

If you need to manually set a version, you can:

1. **Create a Git tag**:

   ```bash
   git tag v1.2.3
   git push origin v1.2.3
   ```

2. **Use commit message override**:

   ```bash
   git commit -m "feat: New feature [version:1.2.3]"
   ```

## 📊 Version History

You can view all versions in:

- **GitHub Releases**: <https://github.com/your-repo/releases>
- **Git Tags**: `git tag -l`
- **Package.json**: Check the version field

## 🔍 Troubleshooting

### Version Not Incrementing

- Check if the commit message follows the pattern
- Verify the latest release exists on GitHub
- Check GitHub Actions logs for version generation

### Wrong Version Generated

- Review your commit message format
- Check if there are multiple version bump indicators
- Verify the base version in GitHub releases

### Release Creation Failed

- Ensure GitHub token has proper permissions
- Check if the tag already exists
- Verify the release notes generation succeeded

## 📚 References

- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Releases API](https://docs.github.com/en/rest/releases)
