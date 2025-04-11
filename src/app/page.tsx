import React from 'react';

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-primary-500 to-secondary-500">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-5">
          Nextjs Template
        </h1>
        <p className="text-lg text-center text-white">
          A comprehensive Next.js project template with TypeScript, Tailwind
          CSS, ESLint and more.
        </p>
      </div>
    </section>
  );
}
