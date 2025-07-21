let userConfig = undefined;

try {
  // Try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // Ignore if none found
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Required for static export (Hostinger compatible)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // ✅ For image support on static sites
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Merge user config if it exists
if (userConfig) {
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
