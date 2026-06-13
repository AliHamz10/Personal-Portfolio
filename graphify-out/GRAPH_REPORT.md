# Graph Report - Personal-Portfolio  (2026-06-13)

## Corpus Check
- 15 files · ~2,163 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 127 nodes · 126 edges · 12 communities (10 shown, 2 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5dfa7e7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_WebGL Character Rendering|WebGL Character Rendering]]
- [[_COMMUNITY_Build Toolchain & Manifests|Build Toolchain & Manifests]]
- [[_COMMUNITY_Work Portfolio Showcase|Work Portfolio Showcase]]
- [[_COMMUNITY_Layout & Professional History|Layout & Professional History]]
- [[_COMMUNITY_App Bootstrapping & Loading|App Bootstrapping & Loading]]
- [[_COMMUNITY_Node TypeScript Config|Node TypeScript Config]]
- [[_COMMUNITY_App TypeScript Config|App TypeScript Config]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_3D Tech Stack Sphere|3D Tech Stack Sphere]]
- [[_COMMUNITY_Font & Scroll Typography FX|Font & Scroll Typography FX]]
- [[_COMMUNITY_CodeMind Project Showcase|CodeMind Project Showcase]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `compilerOptions` - 14 edges
3. `Personal Portfolio` - 14 edges
4. `scripts` - 5 edges
5. `📱 Pages` - 5 edges
6. `🎨 Customization` - 4 edges
7. `🔧 Development` - 4 edges
8. `App()` - 2 edges
9. `HoverLink()` - 2 edges
10. `graphify` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (12 total, 2 thin omitted)

### Community 0 - "WebGL Character Rendering"
Cohesion: 0.12
Nodes (16): dependencies, gsap, @gsap/react, react, react-dom, react-fast-marquee, react-icons, @react-three/cannon (+8 more)

### Community 1 - "Build Toolchain & Manifests"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleDetection, moduleResolution (+8 more)

### Community 2 - "Work Portfolio Showcase"
Cohesion: 0.14
Nodes (14): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+6 more)

### Community 3 - "Layout & Professional History"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (+4 more)

### Community 4 - "App Bootstrapping & Loading"
Cohesion: 0.12
Nodes (12): name, private, scripts, build, dev, lint, preview, type (+4 more)

### Community 6 - "App TypeScript Config"
Cohesion: 0.29
Nodes (4): include, files, include, references

### Community 7 - "Project Dependencies"
Cohesion: 0.11
Nodes (19): Adding New Pages, Adding New Projects, 📱 Browser Support, Colors, Content, 🤝 Contributing, 🎨 Customization, 🎨 Design System (+11 more)

### Community 10 - "Font & Scroll Typography FX"
Cohesion: 0.18
Nodes (6): ButtonProps, HoverLink(), HoverLinkProps, LoaderProps, Option, SelectProps

### Community 11 - "CodeMind Project Showcase"
Cohesion: 0.40
Nodes (5): About Page (`pages/about.html`), Contact Page (`pages/contact.html`), Homepage (`index.html`), 📱 Pages, Projects Page (`pages/projects.html`)

## Knowledge Gaps
- **95 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+90 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `WebGL Character Rendering` to `App Bootstrapping & Loading`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Build Toolchain & Manifests` to `App TypeScript Config`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Work Portfolio Showcase` to `App TypeScript Config`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _95 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `WebGL Character Rendering` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Build Toolchain & Manifests` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Work Portfolio Showcase` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._