export type SeoProps = {
    title: string;
    description: string;
    canonical?: string;
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      images?: Array<{ url: string; alt: string }>;
      locale?: string;
      type?: string;
    };
    twitter?: {
      card?: string;
      site?: string;
      handle?: string;
    }
  };
  
  export const defaultSeo: SeoProps = {
    title: 'Next.js Template',
    description: 'A comprehensive Next.js project template with TypeScript and Tailwind CSS',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://your-domain.com',
      siteName: 'Next.js Template',
      images: [
        {
          url: 'https://your-domain.com/og-image.jpg',
          alt: 'Next.js Template',
        },
      ],
    },
    twitter: {
      handle: '@yourusername',
      site: '@yourusername',
      card: 'summary_large_image',
    },
  };