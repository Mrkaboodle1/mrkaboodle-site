import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // === Old WordPress URL redirects (301 permanent) ===
      // Preserve SEO juice from the previous site by sending old URLs to the
      // closest equivalent on the new site.

      // Default WordPress placeholder
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/sample-page/", destination: "/", permanent: true },

      // Privacy
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy", permanent: true },

      // Booking page (was /contact/ in the old site)
      { source: "/contact", destination: "/book", permanent: true },
      { source: "/contact/", destination: "/book", permanent: true },

      // Workshop pages
      { source: "/workshops", destination: "/services/circus-workshops", permanent: true },
      { source: "/workshops/", destination: "/services/circus-workshops", permanent: true },
      { source: "/circus-workshops", destination: "/services/circus-workshops", permanent: true },
      { source: "/circus-workshops/", destination: "/services/circus-workshops", permanent: true },
      { source: "/balloon-workshops", destination: "/services/balloon-twisting", permanent: true },
      { source: "/balloon-workshops/", destination: "/services/balloon-twisting", permanent: true },
      { source: "/corporate-workshops", destination: "/services/circus-workshops", permanent: true },
      { source: "/corporate-workshops/", destination: "/services/circus-workshops", permanent: true },

      // Circus show variants
      { source: "/mr-kaboodle-circus-show", destination: "/services/circus-show", permanent: true },
      { source: "/mr-kaboodle-circus-show/", destination: "/services/circus-show", permanent: true },
      { source: "/3peat", destination: "/services/circus-show", permanent: true },
      { source: "/3peat/", destination: "/services/circus-show", permanent: true },
      { source: "/the-juggling-amigos", destination: "/services/circus-show", permanent: true },
      { source: "/the-juggling-amigos/", destination: "/services/circus-show", permanent: true },
      { source: "/kit-kaboodles-kitchen", destination: "/services/circus-show", permanent: true },
      { source: "/kit-kaboodles-kitchen/", destination: "/services/circus-show", permanent: true },

      // Balloon show variants
      { source: "/big-party-balloon-show", destination: "/services/big-balloon-show", permanent: true },
      { source: "/big-party-balloon-show/", destination: "/services/big-balloon-show", permanent: true },
      { source: "/balloon-twister", destination: "/services/balloon-twisting", permanent: true },
      { source: "/balloon-twister/", destination: "/services/balloon-twisting", permanent: true },

      // Other pages
      { source: "/party-ideas", destination: "/services", permanent: true },
      { source: "/party-ideas/", destination: "/services", permanent: true },
      { source: "/ebook", destination: "/services", permanent: true },
      { source: "/ebook/", destination: "/services", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      // Allow Next/Image to serve images that may still live on the old WP host
      // during the cutover (in case any internal references slip through).
      { protocol: "https", hostname: "www.mrkaboodle.com.au" },
      { protocol: "https", hostname: "mrkaboodle.com.au" },
    ],
  },
};

export default nextConfig;
