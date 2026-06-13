# Graph Report - /Users/alihamza/CursorCode Projects/Personal-Portfolio  (2026-06-13)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 92 nodes · 90 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ffc439df`
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `compilerOptions` - 14 edges
3. `scripts` - 5 edges
4. `App()` - 2 edges
5. `graphify` - 2 edges
6. `private` - 1 edges
7. `dev` - 1 edges
8. `build` - 1 edges
9. `lint` - 1 edges
10. `preview` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

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
Cohesion: 0.18
Nodes (7): name, private, type, version, buildCommand, framework, outputDirectory

### Community 5 - "Node TypeScript Config"
Cohesion: 0.33
Nodes (3): App(), CharacterModel, MainContainer

### Community 6 - "App TypeScript Config"
Cohesion: 0.29
Nodes (4): include, files, include, references

### Community 7 - "Project Dependencies"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **71 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+66 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `WebGL Character Rendering` to `App Bootstrapping & Loading`?**
  _High betweenness centrality (0.264) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Build Toolchain & Manifests` to `App TypeScript Config`?**
  _High betweenness centrality (0.264) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Work Portfolio Showcase` to `App TypeScript Config`?**
  _High betweenness centrality (0.232) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _71 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `WebGL Character Rendering` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Build Toolchain & Manifests` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Work Portfolio Showcase` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._