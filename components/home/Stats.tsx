import React from 'react';

interface Stat {
  number: string;
  description: string;
}

const stats: Stat[] = [
  { number: '437M', description: 'cyber-attacks stopped' },
  { number: '106M', description: 'unique malicious URLs blocked' },
  { number: '112M', description: 'unique malicious objects neutralized' },
];

const Stats: React.FC = () => (
  <section className="text-center p-8 bg-accent1 mt-50 h-80 flex flex-col justify-around">
    <h2 className="text-4xl font-bold text-primary mb-2">Your trust in us has been well placed.</h2>
    <p className="text-text mb-8">Last year’s stats say it all</p>
    <div className="flex justify-around space-x-8">
      {stats.map((stat, index) => (
        <div key={index} className="w-1/3">
          <p className="text-5xl font-bold text-highlight mb-2">{stat.number}</p>
          <p className="text-text">{stat.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
