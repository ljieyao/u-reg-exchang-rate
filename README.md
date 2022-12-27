This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, setup your environment file and enter your API Key for API Layer:

```bash
cp env.example .env && nano .env
```

Then, run the development server:

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

To check the storybook, run the following:

```bash
npm run storybook
#or
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## Atomic Design

This project is developed following [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), the UI design files are placed in `stories` folder categorized by `atoms`, `molecules`, `organisms`, `particles`, `templates`, and `pages`. Some of them are not there as it is not necessary yet at the moment

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
