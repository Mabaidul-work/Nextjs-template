import { z } from 'zod';

const envSchema = z.object({
  // App
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string().url().min(1),
  
  // API
  NEXT_PUBLIC_API_URL: z.string().url().min(1).optional(),
  
  // Optional values based on features you're using
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
});

// Function to validate environment variables
function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues
        .filter(issue => issue.code === 'invalid_type' && issue.received === 'undefined')
        .map(issue => issue.path.join('.'));
      
      if (missingVars.length) {
        console.error('❌ Missing required environment variables:', missingVars);
      }
      
      throw new Error('Invalid environment variables');
    }
  }
}

// Export validated environment variables
export const env = validateEnv();