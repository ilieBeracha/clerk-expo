# Environment Setup

To run this app, you need to create a `.env.local` file in the root directory with the following variables:

```
# Clerk Configuration
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

# Supabase Configuration (if using Supabase)
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Getting Your Keys:

### Clerk
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Select your application
3. Find your Publishable Key in the API Keys section

### Supabase (Optional)
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Go to Settings > API
4. Copy your Project URL and anon key

## Important Notes:
- In React Native/Expo, environment variables must be prefixed with `EXPO_PUBLIC_` to be accessible
- Never commit your `.env.local` file to version control
- The app will work without Supabase if you're only using authentication
