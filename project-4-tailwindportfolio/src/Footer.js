import React from 'react'

const Footer = () => {
  return (
    <div className="container p-8 mx-auto font-dmSans pt-0">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <p className="text-gray">Ghaitsa Maulidina Shofa - 2021</p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://twitter.com/stuchive"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:opacity-75 underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/GhaitsaDina"
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:opacity-75 underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer
