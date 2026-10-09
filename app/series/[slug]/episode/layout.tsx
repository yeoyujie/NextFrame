import type { ReactNode } from "react";
import { EpisodeSidebar } from "@/components/episode-sidebar";

export default function EpisodeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="watch-shell">
      <div className="watch-layout">
        {children}
        <EpisodeSidebar />
      </div>
    </main>
  );
}
