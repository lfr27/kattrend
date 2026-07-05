import { ShieldCheck, Certificate, Truck, Leaf, Lock } from "@/components/ui/icons";

const items = [
  { icon: ShieldCheck, label: "Authentication Guarantee" },
  //{ icon: Certificate, label: "Certified Pre-Owned" },
  { icon: Truck, label: "Free shipping after 2.500 kr" },
  { icon: Leaf, label: "shipping all denmark" },
  { icon: Lock, label: "Secure Checkout" },
];

export function TrustBar() {
  // Duplicate the set for a seamless marquee loop
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-mist bg-ivory py-4">
      <div className="flex w-max animate-marquee items-center gap-s5 px-s5">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2.5 text-[11px] uppercase tracking-luxe text-graphite"
          >
            <item.icon className="h-4 w-4 text-champagne-deep" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
