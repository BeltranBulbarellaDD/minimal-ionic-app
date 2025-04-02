import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'minimal-ionic-app',
  webDir: 'dist',
  plugins: {
    Http: {
      enabled: true
    }
  }
};

export default config;
