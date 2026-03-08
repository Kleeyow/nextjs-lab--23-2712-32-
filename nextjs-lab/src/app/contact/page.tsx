'use client';

import { revalidatePath } from "next/cache";

export default function ContactPage() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({ name, email, message });
    revalidatePath("/contact");
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" className="border p-2 rounded w-full"/>
      <input type="email" name="email" placeholder="Email" className="border p-2 rounded w-full"/>
      <textarea name="message" placeholder="Message" className="border p-2 rounded w-full"/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}