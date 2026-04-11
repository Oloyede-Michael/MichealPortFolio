# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite. Featuring smooth animations, a responsive design, and a beautiful user experience.

## ✨ Features

- **Smooth Animations**: Powered by GSAP and ScrollTrigger for stunning scroll-based animations
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Dark Mode Support**: Theme switching with next-themes
- **Modern UI Components**: Built with Radix UI and Shadcn/ui components
- **Loading Screen**: Engaging loading animation before content appears
- **Accessibility**: Accessible components and keyboard navigation
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool & dev server
- **Tailwind CSS** 3.4.19 - Utility-first CSS framework
- **GSAP** 3.14.2 - Animation library

### UI & Components
- **Radix UI** - Headless UI components
- **Shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Additional Libraries
- **Recharts** 2.15.4 - Data visualization
- **Embla Carousel** - Carousel component
- **Sonner** - Toast notifications
- **next-themes** - Theme management

## 📁 Project Structure

```
PortFolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CursorGlow.tsx       # Custom cursor glow effect
│   │   │   └── ui/                  # Shadcn/ui components
│   │   ├── sections/
│   │   │   ├── LoadingScreen.tsx    # Initial loading animation
│   │   │   ├── Navigation.tsx       # Navigation bar
│   │   │   ├── Hero.tsx             # Hero section
│   │   │   ├── About.tsx            # About section
│   │   │   ├── Projects.tsx         # Projects showcase
│   │   │   ├── Skills.tsx           # Skills section
│   │   │   ├── Contact.tsx          # Contact form
│   │   │   └── Footer.tsx           # Footer
│   │   ├── hooks/
│   │   │   └── use-mobile.ts        # Mobile detection hook
│   │   ├── lib/
│   │   │   └── utils.ts             # Utility functions
│   │   ├── App.tsx                  # Main app component
│   │   ├── main.tsx                 # Entry point
│   │   ├── App.css                  # App styles
│   │   └── index.css                # Global styles
│   ├── public/                      # Static assets
│   ├── package.json
│   ├── vite.config.ts               # Vite configuration
│   ├── tailwind.config.js           # Tailwind configuration
│   ├── tsconfig.json                # TypeScript configuration
│   └── eslint.config.js             # ESLint configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PortFolio
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

Features:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deployment.

## 🔍 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production with TypeScript compilation |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## 📝 Linting

Check code quality and style consistency:

```bash
npm run lint
```

## 🎨 Customization

### Colors & Styling
- **Tailwind CSS**: Modify `tailwind.config.js` for color schemes and custom utilities
- **Global Styles**: Update `src/index.css` for global styling
- **Component Styles**: Edit `src/App.css` for app-specific styles

### Content
- **Sections**: Edit files in `src/sections/` to customize portfolio content
- **Components**: Modify components in `src/components/` and `src/components/ui/`

### Animations
- **GSAP Animations**: Adjust animation timings and effects in section components
- **Scroll Triggers**: Configure scroll-based animations as needed

## 🌐 Deployment

### Vercel (Recommended)

The project includes a `vercel.json` configuration file for easy deployment to Vercel:

```bash
npm install -g vercel
vercel
```

### Other Platforms

The production build can be deployed to any static hosting service:
- **Netlify**: Connect your repository directly
- **GitHub Pages**: Deploy the `dist/` folder
- **Any CDN**: Upload the `dist/` folder contents

## 📚 Components Documentation

### UI Components
Shadcn/ui components are located in `src/components/ui/` and include:
- Accordion, Alert, Avatar, Badge
- Button, Card, Carousel, Checkbox
- Dialog, Drawer, Dropdown Menu
- Form, Input, Popover, Select
- Slider, Switch, Tabs, Tooltip
- And many more...

Each component is fully typed and customizable.

### Custom Hooks
- **use-mobile.ts**: Detects if the viewport is mobile-sized for responsive behavior

### Utilities
- **utils.ts**: Contains helper functions like `cn()` for conditional class names

## 🔧 Configuration Files

- **vite.config.ts**: Vite bundler configuration
- **tailwind.config.js**: Tailwind CSS customization
- **tsconfig.app.json**: TypeScript configuration for application code
- **tsconfig.node.json**: TypeScript configuration for build tools
- **eslint.config.js**: ESLint rules and configuration
- **postcss.config.js**: PostCSS plugins (for Tailwind)

## 💡 Tips

- Use `@gsap/react` hooks for React components requiring animations
- Leverage Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) for responsive design
- Use Shadcn/ui components as building blocks for consistency
- Keep components in `src/components/ui/` for reusability

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with improvements.

---

**Built with ❤️ by Mikkycode**
