// src/app/page.tsx (Server Component)
import { getSettings } from "@/actions/settings";

export default async function Home() {
  const settings = await getSettings();

  return (
    <div>
      <h1 style={{ color: settings.primaryColor }}>{settings.heroTitle}</h1>
      <p>{settings.heroSubtitle}</p>
      <a href={settings.github}>GitHub</a>
    </div>
  );
}