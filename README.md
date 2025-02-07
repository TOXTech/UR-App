# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



emoto-pollution-monitor/
├── app/                          # File-based routing directory
│   ├── _layout.tsx              # Root layout with navigation setup and font loading
│   ├── index.tsx                # Initial route - redirects based on auth state
│   │
│   ├── (auth)/                  # Authentication group
│   │   ├── _layout.tsx          # Auth layout with styling
│   │   ├── welcome.tsx          # Welcome/landing page
│   │   ├── login.tsx            # Login screen
│   │   └── signup.tsx           # Signup screen
│   │
│   └── (app)/                   # Main app group
│       ├── _layout.tsx          # Tab navigation layout
│       │
│       ├── dashboard/           # Dashboard routes
│       │   ├── _layout.tsx      # Dashboard stack layout
│       │   ├── index.tsx        # Main dashboard screen
│       │   └── [id].tsx         # Personal dashboard with dynamic polluter ID
│       │
│       ├── tracking/            # Tracking routes
│       │   ├── _layout.tsx      # Tracking stack layout
│       │   └── index.tsx        # Map tracking screen
│       │
│       └── charts/              # Charts routes
│           ├── _layout.tsx      # Charts stack layout
│           └── index.tsx        # Data visualization screen
│
├── src/
│   ├── components/              # Reusable components
│   │   ├── auth/               # Authentication components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   ├── AuthButton.tsx
│   │   │   └── PasswordInput.tsx
│   │   │
│   │   ├── dashboard/          # Dashboard components
│   │   │   ├── Header.tsx      # Dashboard header with hamburger
│   │   │   ├── MotorcyclistSummary.tsx
│   │   │   ├── ActivePollutersList.tsx
│   │   │   ├── InactivePollutersList.tsx
│   │   │   └── GlobalMetrics.tsx
│   │   │
│   │   ├── tracking/           # Tracking components
│   │   │   ├── MapView.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── MotorcycleMarker.tsx
│   │   │
│   │   ├── charts/             # Chart components
│   │   │   ├── BarChart.tsx
│   │   │   ├── TrendChart.tsx
│   │   │   ├── SpeedometerGauge.tsx
│   │   │   ├── DateFilter.tsx
│   │   │   └── ChartContainer.tsx
│   │   │
│   │   └── shared/             # Shared components
│   │       ├── GradientButton.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── SafeAreaWrapper.tsx
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useAuth.ts          # Authentication hooks
│   │   ├── useAppwrite.ts      # Appwrite client hooks
│   │   ├── usePollution.ts     # Pollution data hooks
│   │   ├── useRealtime.ts      # Real-time data hooks
│   │   └── useLocation.ts      # Location tracking hooks
│   │
│   ├── services/               # API and service integrations
│   │   ├── appwrite/
│   │   │   ├── client.ts       # Appwrite client configuration
│   │   │   ├── auth.ts         # Authentication services
│   │   │   ├── database.ts     # Database services
│   │   │   ├── storage.ts      # Storage services
│   │   │   ├── functions.ts    # Cloud functions
│   │   │   └── realtime.ts     # Realtime services
│   │   │
│   │   └── api/
│   │       └── pollution.ts    # Pollution API services
│   │
│   ├── store/                  # State management
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── pollutionSlice.ts
│   │   │   └── uiSlice.ts
│   │   └── index.ts           # Store configuration
│   │
│   ├── types/                  # TypeScript type definitions
│   │   ├── navigation.ts       # Navigation types
│   │   ├── pollution.ts        # Pollution data types
│   │   ├── user.ts            # User related types
│   │   └── appwrite.ts        # Appwrite related types
│   │
│   └── utils/                  # Utility functions
│       ├── formatters.ts       # Data formatting utilities
│       ├── validation.ts       # Form validation utilities
│       ├── constants.ts        # App constants
│       ├── colors.ts          # Color constants
│       └── helpers.ts         # General helper functions
│
├── assets/                     # Static assets
│   ├── fonts/
│   │   └── ProtestGuerrilla-Regular.ttf
│   │
│   ├── images/
│   │   ├── logo.png
│   │   └── welcome-bg.png
│   │
│   └── icons/
│       ├── motorcycle.svg
│       ├── dashboard.svg
│       ├── tracking.svg
│       └── charts.svg
│
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
├── tailwind.config.js          # TailwindCSS configuration
├── app.d.ts                    # Type declarations
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies