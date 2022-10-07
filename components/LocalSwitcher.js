import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header/Header.module.scss"

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a className={styles.language}>
                {locale === "en" ? "En" : locale === "ar" ? "ع" : null}
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}