import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

export const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between pt-6">
      <Head>
        <title>Neosyn - FE Boilerplate</title>
        <meta
          name="description"
          content="Neosyn FE boilerplate for new projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="font-bold">Neosyn - FE Boilerplate</h1>

        <ul className="mt-3 flex flex-col items-center space-y-2">
          <li className="rounded-md border border-gray-700 py-2 px-3">
            <a href="https://github.com/vercel/next.js">Next.js</a>
          </li>
          <li className="rounded-md border border-gray-700 py-2 px-3">
            <a href="https://github.com/tailwindlabs/tailwindcss">
              TailwindCSS
            </a>
          </li>
          <li className="rounded-md border border-gray-700 py-2 px-3">
            <a href="https://github.com/storybookjs/storybook">Storybook</a>
          </li>
          <li className="rounded-md border border-gray-700 py-2 px-3">
            Testing stories using{' '}
            <a href="https://github.com/facebook/jest">Jest</a>
          </li>
          <li className="rounded-md border border-gray-700 py-2 px-3">
            Code formatting using{' '}
            <a href="https://github.com/prettier/prettier">Prettier</a>
          </li>
          <li className="rounded-md border border-gray-700 py-2 px-3">
            Git Hooks using{' '}
            <a href="https://github.com/typicode/husky">Husky</a> +{' '}
            <a href="https://github.com/okonet/lint-staged">lint-staged</a>
          </li>
          <li className="rounded-md border border-gray-700 py-2 px-3">
            Mock RESTFul and GraphQL API calls inside stories using{' '}
            <a href="https://github.com/mswjs/msw">MSW</a>
          </li>
        </ul>
      </main>

      <footer className="flex justify-center py-5">
        <Image
          src="/neosyn-logo.svg"
          alt="logo"
          objectFit="cover"
          height={80}
          width={250}
        />
      </footer>
    </div>
  );
};
