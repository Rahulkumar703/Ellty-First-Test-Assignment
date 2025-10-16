# Custom Checkbox & Button Demo

A React + TypeScript + Vite demo showcasing custom UI components with Tailwind CSS styling.

## ✨ Features

- **Custom Checkbox Component** - Fully accessible checkbox with custom styling using CSS modules and Tailwind utilities
- **Custom Button Component** - Styled button component with hover/active states
- **Interactive List** - "Select All" functionality with individual item toggles
- **Disabled States** - Proper handling of disabled checkboxes and visual feedback

## 🚀 Quick Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🧱 Components

### Checkbox (`src/components/checkbox/`)

- Uses hidden native `<input>` for accessibility
- Custom visual styling with Tailwind CSS
- CSS modules for component-scoped styles
- Check icon using Lucide React icons
- Supports all standard input props (`checked`, `disabled`, `onChange`, etc.)

### Button (`src/components/button.tsx`)

- Styled with Tailwind utilities
- Hover and active state animations
- Accepts all standard button HTML attributes

### ListItem (`src/components/list-item.tsx`)

- Combines checkbox with label text
- Proper `htmlFor` linking for accessibility
- Disabled state styling

## 🎨 Styling

- **Tailwind CSS 4.x** with custom color variables
- **CSS Modules** for component-specific styles
- **Montserrat Font** from Google Fonts
- Custom color palette defined in `src/index.css`

## 📁 Project Structure

```
src/
├── components/
│   ├── checkbox/
│   │   ├── index.tsx          # Main checkbox component
│   │   └── checkbox.module.css # Component styles
│   ├── button.tsx             # Custom button
│   ├── list-item.tsx          # List item with checkbox
│   └── separator.tsx          # Visual separator
├── App.tsx                    # Main demo application
└── index.css                  # Global styles & variables
```

## 🎯 Demo

The demo shows a page selection interface with:

- "All Pages" toggle that selects/deselects all items
- Individual page checkboxes
- Disabled state examples
- Responsive design with card-style container

---

Built with React 19, TypeScript, Vite, and Tailwind CSS.
