import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {datadogRum} from "@datadog/browser-rum";

const container = document.getElementById('root');
const root = createRoot(container!);

datadogRum.init({
    applicationId: 'bd3472ea-efc2-45e1-8dff-be4cea9429b3',
    clientToken: 'pub7216f8a2d1091e263c95c1205882474e',
    site: 'datad0g.com' as never,
    service: 'ionic-web-app',
    env: 'dev',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
    sessionPersistence: 'local-storage',
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
    beforeSend: (event) => {
        console.log("Datadog sending event:", event);
        return true;
    }
});

datadogRum.startSessionReplayRecording();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);