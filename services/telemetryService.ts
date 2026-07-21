export interface TelemetryEvent {
  name: string;
  category?: string;
  label?: string;
  value?: number;
  params?: Record<string, any>;
}

export const telemetryService = {
  logError(error: Error | string, context?: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Telemetry Error]:', error, context);
    }
  },

  trackEvent(event: TelemetryEvent) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Telemetry Event]:', event);
    }
  },

  logApiFailure(endpoint: string, status: number, message: string) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Telemetry API Failure]: ${status} ${endpoint} - ${message}`);
    }
  },

  trackPageView(url: string) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Telemetry PageView]:', url);
    }
  },
};
