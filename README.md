# PeakAgent Insights UI

A modern, responsive React application for displaying AI-powered trading recommendations. Built with TypeScript, Vite, Tailwind CSS, and Shadcn UI components.

## 🚀 Features

- **Real-time Trading Recommendations**: Fetches and displays the latest AI-generated trading signals from the PeakAgent backend API.
- **Modern UI**: Clean, professional design with dark/light mode support, skeleton loading states, and smooth animations.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Type-Safe**: Full TypeScript implementation for better developer experience and reliability.
- **Efficient Data Fetching**: Uses React Query (TanStack Query) for caching, background refetching, and error handling.
- **Accessible**: Built with accessibility in mind using Shadcn UI components.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Data Fetching**: TanStack React Query
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
peakagent-assignment-ui/
├── public/
│   └── vite.svg                 # Vite logo asset
├── src/
│   ├── assets/
│   │   └── react.svg            # React logo asset
│   ├── components/
│   │   ├── ui/                  # Reusable UI components (Shadcn)
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── skeleton.tsx
│   │   ├── ErrorState.tsx       # Error display component
│   │   ├── LoadingSkeleton.tsx  # Loading state component
│   │   ├── RecommendationDetails.tsx  # Details card component
│   │   └── RecommendationOverview.tsx # Main recommendation component
│   ├── lib/
│   │   ├── recommendationUtils.tsx  # Utility functions for recommendations
│   │   └── utils.ts             # General utility functions (cn helper)
│   ├── App.css                  # Component-specific styles (minimal)
│   ├── App.tsx                  # Main application component
│   ├── index.css                # Global styles and Tailwind imports
│   ├── main.tsx                 # Application entry point
│   └── vite-env.d.ts            # Vite environment types
├── bun.lock                     # Bun lockfile
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Project dependencies and scripts
├── README.md                    # This file
├── tsconfig.app.json            # TypeScript config for app code
├── tsconfig.json                # Base TypeScript config
├── tsconfig.node.json           # TypeScript config for build tools
└── vite.config.ts               # Vite configuration
```

## 🏗️ Architecture Overview

### Component Structure
- **App.tsx**: Main orchestrator component that handles data fetching with React Query and renders the appropriate state (loading, error, or data).
- **LoadingSkeleton.tsx**: Displays animated skeleton placeholders during data loading.
- **ErrorState.tsx**: Shows error messages with retry functionality.
- **RecommendationOverview.tsx**: Renders the main recommendation card with symbol, percentage change, and AI analysis.
- **RecommendationDetails.tsx**: Displays metadata about the recommendation (model, dates, etc.).

### Data Flow
1. App component uses `useQuery` to fetch data from the backend API.
2. React Query handles caching, loading states, and error handling.
3. Based on query state, appropriate components are rendered.
4. Utility functions in `recommendationUtils.tsx` provide formatting and styling helpers.

### Styling Approach
- **Tailwind CSS v4**: Utility-first CSS with custom design tokens defined in `index.css`.
- **Shadcn UI**: Pre-built, accessible components that integrate seamlessly with Tailwind.
- **Custom Tokens**: Blue-themed color palette with light/dark mode support.

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18 or higher
- **Bun**: For package management (recommended) or npm/yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ameya051/peakagent-assignment-ui.git
   cd peakagent-assignment-ui
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
bun run build
# or
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

## 📋 Available Scripts

- `dev`: Start the development server with hot reload
- `build`: Build the project for production
- `lint`: Run ESLint to check code quality
- `preview`: Preview the production build locally

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory with the following variable:

```env
VITE_API_BASE_URL=https://peakagent-assignment-production.up.railway.app/api
```

This allows you to easily change the API endpoint for different environments (development, staging, production).

To change the API endpoint, simply update the `VITE_API_BASE_URL` in your `.env` file.

### Tailwind Customization
Design tokens are defined in `src/index.css`. Modify the CSS custom properties to customize colors, spacing, etc.

### TypeScript Configuration
- `tsconfig.json`: Base configuration
- `tsconfig.app.json`: App-specific settings
- `tsconfig.node.json`: Build tool settings

## 🎨 UI/UX Features

- **Skeleton Loading**: Smooth loading experience with animated placeholders
- **Error Handling**: User-friendly error states with retry options
- **Responsive Grid**: Adapts to different screen sizes
- **Glass Header**: Sticky header with backdrop blur effect
- **Gradient Accents**: Subtle background gradients for visual appeal
- **Color-Coded Recommendations**: Buy (green), Sell (red), Hold (yellow)


### Data Structure
```typescript
interface RecommendationData {
  id: number;
  symbol: string;
  recommendation: "buy" | "sell" | "hold";
  change_percent: number;
  rationale: string;
  model_name: string;
  window_days: number;
  trade_date: string;
  created_at: string;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and ensure tests pass
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a pull request

## 📄 License

This project is part of the PeakAgent assignment and is intended for educational purposes.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TanStack Query](https://tanstack.com/query/) for efficient data fetching
- [Vite](https://vitejs.dev/) for the fast build tool
