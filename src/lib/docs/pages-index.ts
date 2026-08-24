import { DocPage } from "./types";
import { getting_startedPages } from "./pages/getting-started";
import { tabs_workspacePages } from "./pages/tabs-workspace";
import { privacy_securityPages } from "./pages/privacy-security";
import { mediaPages } from "./pages/media";
import { quick_toolsPages } from "./pages/quick-tools";
import { extensionsPages } from "./pages/extensions";
import { aiPages } from "./pages/ai";
import { home_searchPages } from "./pages/home-search";
import { customizationPages } from "./pages/customization";
import { developerPages } from "./pages/developer";
import { api_referencePages } from "./pages/api-reference";
import { resourcesPages } from "./pages/resources";

export const ALL_PAGES: DocPage[] = [
  ...getting_startedPages,
  ...tabs_workspacePages,
  ...privacy_securityPages,
  ...mediaPages,
  ...quick_toolsPages,
  ...extensionsPages,
  ...aiPages,
  ...home_searchPages,
  ...customizationPages,
  ...developerPages,
  ...api_referencePages,
  ...resourcesPages,
];

const PAGE_MAP: Record<string, DocPage> = Object.fromEntries(
  ALL_PAGES.map((page) => [page.path, page])
);

export function getDocPage(path: string): DocPage | undefined {
  return PAGE_MAP[path];
}
