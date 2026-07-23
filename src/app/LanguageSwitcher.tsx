// Language switcher — a single small flag showing the CURRENT page's language,
// which links to the other locale. Reading English you see the UK flag; click
// it and you land on the Danish page, now showing the Danish flag. It's a plain
// <a>, so it needs no JavaScript, renders in the server HTML, and is crawlable.
import { localePath, type Dictionary, type Locale } from "./i18n";

export default function LanguageSwitcher({
  current,
  dict,
}: {
  current: Locale;
  dict: Dictionary["switcher"];
}) {
  const target: Locale = current === "da" ? "en" : "da";
  const href = localePath(target);
  const flag = current === "da" ? "/dk.png" : "/uk.png"; // the flag of the page you're on
  const label = target === "da" ? dict.toDanish : dict.toEnglish;

  return (
    <a
      className="lang"
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={label}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={flag} alt="" width={22} height={22} />
    </a>
  );
}
