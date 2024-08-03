export const sitedata = {
    title: 'ChordsCo - Get Simplified Guitar, Ukulele & Piano chords',
    author: 'ChordsCo',
    headerTitle: 'ChordsCo',
    description:
      'Learn popular and lesser known songs on guitar, ukulele and piano. Get accurate and easy-to-follow chords notations.',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: 'https://www.chordsco.com',
    siteLogo: '/static/images/logo.png',
    image: '/static/images/avatar.png',
    socialBanner: '/static/images/twitter-card.png',
    email: 'chordscoweb@gmail.com',
    github: 'https://github.com/chordsco',
    twitter: 'https://twitter.com/chordscoweb',
    facebook: 'https://www.facebook.com/people/Chordsco/100093518165830/',
    youtube: 'https://www.youtube.com/@chordsco',
    linkedin: 'https://www.linkedin.com/company/chordsco/',
    instagram: 'https://www.instagram.com/chordsco/',
    locale: 'en-US',
    analytics: {
      // If you want to use an analytics provider you have to add it to the
      // content security policy in the `next.config.js` file.
      // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
      // umamiAnalytics: {
      //   // We use an env variable for this site to avoid other users cloning our analytics ID
      //   umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // },
      // plausibleAnalytics: {
      //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-chords.vercel.app
      // },
      // simpleAnalytics: {},
      // posthogAnalytics: {
      //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
      // },
      googleAnalytics: {
        googleAnalyticsId: 'G-ET5ETH2G4N', // e.g. G-XXXXXXX
      },
    },
    newsletter: {
      // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
      // Please add your .env file and modify it according to your selection
      provider: 'buttondown',
    }
}