/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

// const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  //   assetPrefix: isProduction ? "/" : undefined,
  basePath: "",
    images: {
      unoptimized: true,
    },
  //   images: {
  //     loader: "akamai",
  //     path: "",
  //   },

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

export default config;
