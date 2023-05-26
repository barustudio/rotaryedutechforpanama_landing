import App from './App.svelte';
import './lib/GoogleAnalyticsTag.svelte';
import './lib/GoogleAnalytics.svelte';

const app = new App({
  target: document.getElementById('app'),
})

export default app;
