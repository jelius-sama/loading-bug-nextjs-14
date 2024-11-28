import type { Metadata, ServerRuntime } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import Footer from "@/components/footer";

export const runtime: ServerRuntime = "edge"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next.js Bug",
    template: `%s - Next.js Bug`
  },
  description: "Generated by create next app",
  icons: '/favicon.ico'
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' m-4'}>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Links:</p>
          <Link className="text-blue-400 hover:underline" href={'/'}>Go to home page</Link>
          <Link className="text-blue-400 hover:underline" href={'/artist'}>Go to artist page</Link>
          <Link className="text-blue-400 hover:underline" href={'/artist/art'}>Go to art page</Link>
        </div>

        <div className="mt-10 mb-1">
          <p>Observe this section:</p>
        </div>

        <main className="border border-[white] p-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
