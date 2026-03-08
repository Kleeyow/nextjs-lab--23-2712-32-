'use client';

import { useEffect, useState } from "react";

export default function SlowData() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Artificial delay to simulate slow loading
    const timer = setTimeout(() => setData("Here is the slow data!"), 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!data) return <p>Loading slow data...</p>;
  return <p>{data}</p>;
}