import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-gutter text-center">
      <span className="font-display text-[8rem] font-light leading-none text-mist">404</span>
      <h1 className="mt-s2 font-display text-display-sm font-light text-ink">
        This page has wandered off
      </h1>
      <p className="mt-s3 max-w-[42ch] text-[14px] leading-relaxed text-graphite">
        Like a cat at dusk, the page you sought is nowhere to be found. Let us guide you back to
        familiar ground.
      </p>
      <div className="mt-s4 flex gap-s2">
        <Link href="/" className="btn btn-solid">
          Return Home
        </Link>
        <Link href="/collections" className="btn btn-outline">
          Browse Collection
        </Link>
      </div>
    </div>
  );
}
