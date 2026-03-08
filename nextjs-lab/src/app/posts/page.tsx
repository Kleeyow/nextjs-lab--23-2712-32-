'use client';

import { Suspense } from "react";
import SlowData from "./SlowData";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      
      {/* Suspense boundary */}
      <Suspense fallback={<p>Loading slowly...</p>}>
        <SlowData />
      </Suspense>
    </div>
  );
}