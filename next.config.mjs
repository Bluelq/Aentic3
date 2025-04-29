/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Automation page rewrites
      {
        source: '/services/automation.html',
        destination: '/services/automation',
      },
      {
        source: '/services/automation',
        destination: '/services/automation',
      },
      {
        source: '/workflow-automation.htm',
        destination: '/services/automation',
      },
      {
        source: '/automation',
        destination: '/services/automation',
      },
      // Predictive Analytics page rewrites
      {
        source: '/services/predictive-analytics.html',
        destination: '/services/predictive-analytics',
      },
      {
        source: '/predictive-analytics.html',
        destination: '/services/predictive-analytics',
      },
      {
        source: '/predictive-analytics',
        destination: '/services/predictive-analytics',
      },
      // Personalized Experiences page rewrites
      {
        source: '/services/personalized-experiences.html',
        destination: '/services/personalized-experiences',
      },
      {
        source: '/personalized-experiences.html',
        destination: '/services/personalized-experiences',
      },
      {
        source: '/personalized-experiences',
        destination: '/services/personalized-experiences',
      },
      // NLP page rewrites
      {
        source: '/services/nlp.html',
        destination: '/services/nlp',
      },
      {
        source: '/nlp.html',
        destination: '/services/nlp',
      },
      {
        source: '/nlp',
        destination: '/services/nlp',
      },
      // Computer Vision page rewrites
      {
        source: '/services/computer-vision.html',
        destination: '/services/computer-vision',
      },
      {
        source: '/computer-vision.html',
        destination: '/services/computer-vision',
      },
      {
        source: '/computer-vision',
        destination: '/services/computer-vision',
      }
    ];
  },
};

export default nextConfig;
