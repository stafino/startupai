import React from 'react'
import TypeformEmbed from '../src/components/TypeformEmbed';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App with Typeform</h1>
      <TypeformEmbed formId="gmVBkKMl" />
    </div>
  );
}

<Link href="/responses">
  <a>View Responses</a>
</Link>