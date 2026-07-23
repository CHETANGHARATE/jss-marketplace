import { MetadataRoute } from 'next';
import { envConfig } from '../config/env';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/vendor/', '/account/', '/checkout/'],
    },
    sitemap: `${envConfig.appUrl}/sitemap.xml`,
  };
}
