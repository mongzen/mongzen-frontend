# VS Code Setup Guide

This project is configured to automatically format code on save using Prettier. Here's how to set up your VS Code environment for the best development experience.

## Required Extensions

The following VS Code extensions are recommended and will be suggested when you open the project:

1. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
2. **TypeScript and JavaScript Language Features** (`ms-vscode.vscode-typescript-next`)
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
4. **ESLint** (`ms-vscode.vscode-eslint`)

## Auto-formatting Configuration

The project includes VS Code workspace settings (`.vscode/settings.json`) that enable:

- **Format on Save**: Automatically formats files when you save them
- **Prettier as Default Formatter**: Uses Prettier for all supported file types
- **ESLint Auto-fix**: Automatically fixes ESLint issues on save
- **Consistent Indentation**: 2 spaces, no tabs

## Supported File Types

Auto-formatting is enabled for:

- TypeScript (`.ts`, `.tsx`)
- JavaScript (`.js`, `.jsx`)
- JSON (`.json`)
- CSS (`.css`)
- SCSS (`.scss`)
- HTML (`.html`)
- Markdown (`.md`)

## Prettier Configuration

The project uses the following Prettier settings (`.prettierrc`):

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf"
}
```

## Manual Formatting

If you need to format files manually, you can use:

```bash
# Format all files
npm run format

# Check formatting without changing files
npx prettier --check src/

# Format specific files
npx prettier --write src/components/layout/Header.tsx
```

## Setup Instructions

1. **Install VS Code Extensions**:
   - Open the project in VS Code
   - When prompted, install the recommended extensions
   - Or install them manually from the Extensions panel

2. **Verify Settings**:
   - Open any `.tsx` or `.ts` file
   - Make a small change and save (`Cmd+S` or `Ctrl+S`)
   - The file should automatically format

3. **Check Prettier is Working**:
   - Look for "Prettier" in the VS Code status bar
   - It should show as the active formatter

## Troubleshooting

### Format on Save Not Working?

1. Check that Prettier extension is installed and enabled
2. Verify the file type is supported
3. Check that `.prettierrc` file exists in the project root
4. Try reloading VS Code (`Cmd+Shift+P` → "Developer: Reload Window")

### Formatting Conflicts?

1. Make sure only Prettier is set as the default formatter
2. Check for conflicting extensions
3. Verify ESLint and Prettier rules don't conflict

### File Not Formatting?

1. Check if the file is ignored in `.prettierignore`
2. Verify the file extension is supported
3. Try formatting manually with `Shift+Alt+F` (or `Shift+Option+F` on Mac)

## Additional Features

The VS Code configuration also includes:

- **Debug Configurations**: Ready-to-use debug setups for Next.js
- **TypeScript Settings**: Optimized for the project structure
- **Auto-import Suggestions**: Intelligent import suggestions

## Commands

- `Cmd+Shift+P` (or `Ctrl+Shift+P`) → "Format Document" - Manual format
- `Cmd+S` (or `Ctrl+S`) - Save and auto-format
- `Shift+Alt+F` (or `Shift+Option+F`) - Format document shortcut
