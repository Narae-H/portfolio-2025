    import Link from 'next/link';

    export default function NotFound() {
      return (
        <div className="flex flex-col w-full items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
          <p className="text-lg mb-6">Could not find requested resource</p>
          <Link href="/" className="px-4 py-2 bg-base-bg text-base-text rounded hover:bg-base-hover-bg">Return Home</Link>
        </div>
      );
    }