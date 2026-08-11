import { profile, uiCopy } from '../data/content';

export default function Footer({ lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} {profile.name}. {uiCopy[lang].languages}
      </p>
    </footer>
  );
}
