import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { AccountIcon, BagIcon, HeartIcon, ShieldCheck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in to your KATTREND account to manage orders, saved searches, and your wishlist.",
};

const panels = [
  { icon: BagIcon, title: "Orders", body: "Track current orders and revisit past purchases." },
  { icon: HeartIcon, title: "Wishlist", body: "The pieces you've saved, in one place." },
  { icon: ShieldCheck, title: "Authentication", body: "Certificates and provenance for your collection." },
  { icon: AccountIcon, title: "Saved Searches", body: "Get notified when matching pieces arrive." },
];

export default function AccountPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client Account"
        title={<>The Maison, Yours</>}
        description="Sign in to manage orders, saved searches, authentication certificates, and your wishlist."
        align="center"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Account" }]}
      />

      <section className="pb-s7">
        <div className="wrap grid gap-s5 lg:grid-cols-[1fr_1.1fr] lg:gap-s7">
          {/* Sign in */}
          <Reveal className="border border-mist bg-paper p-s5">
            <h2 className="font-display text-display-sm font-light">Sign In</h2>
            <div className="mt-s4 space-y-s3">
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Password" type="password" placeholder="••••••••" />
              <button className="btn btn-solid w-full">Sign In</button>
              <p className="text-center text-[11px] text-ash">
                <span className="link-underline cursor-pointer text-graphite">
                  Forgotten your password?
                </span>
              </p>
            </div>
          </Reveal>

          {/* Register */}
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <span className="eyebrow kicker mb-s3">New to KATTREND</span>
            <h2 className="font-display text-display-sm font-light">Create an Account</h2>
            <p className="mt-s3 max-w-[44ch] text-[14px] leading-relaxed text-graphite">
              Join the maison for private previews of limited editions, early access to resale
              drops, white-glove order tracking, and a wishlist that follows you across devices.
            </p>
            <div className="mt-s4 space-y-s3">
              <Field label="Full name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <button className="btn btn-outline w-full">Create Account</button>
            </div>
          </Reveal>
        </div>

        {/* Dashboard preview */}
        <div className="wrap mt-s7">
          <Reveal className="mb-s4">
            <span className="eyebrow kicker">Once You&apos;re In</span>
          </Reveal>
          <div className="grid gap-s3 sm:grid-cols-2 lg:grid-cols-4">
            {panels.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full border border-mist bg-paper p-s4">
                  <p.icon className="h-6 w-6 text-champagne-deep" />
                  <h3 className="mt-s3 font-display text-[1.4rem] font-light">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-graphite">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[10px] uppercase tracking-luxe text-ash">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-mist bg-transparent py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-silver focus:border-ink"
      />
    </div>
  );
}
