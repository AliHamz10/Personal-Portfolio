# Graph Report - .  (2026-06-13)

## Corpus Check
- Large corpus: 59 files · ~1,463,397 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 251 nodes · 369 edges · 22 communities (20 shown, 2 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

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
- [[_COMMUNITY_Customs Bond Project|Customs Bond Project]]
- [[_COMMUNITY_Font & Scroll Typography FX|Font & Scroll Typography FX]]
- [[_COMMUNITY_CodeMind Project Showcase|CodeMind Project Showcase]]
- [[_COMMUNITY_MindScribe Project Showcase|MindScribe Project Showcase]]
- [[_COMMUNITY_Portfolio Hero & Roles|Portfolio Hero & Roles]]
- [[_COMMUNITY_Radix E-Commerce Project|Radix E-Commerce Project]]
- [[_COMMUNITY_Sapphire CRM Project|Sapphire CRM Project]]
- [[_COMMUNITY_What I Do Section|What I Do Section]]
- [[_COMMUNITY_AI Tooling & Agent Docs|AI Tooling & Agent Docs]]
- [[_COMMUNITY_Solidx Page Builder Project|Solidx Page Builder Project]]
- [[_COMMUNITY_GSAP SplitText Typings|GSAP SplitText Typings]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `compilerOptions` - 14 edges
3. `Scene()` - 13 edges
4. `MainContainer()` - 9 edges
5. `About()` - 8 edges
6. `Navbar()` - 8 edges
7. `End-to-End Automation Pipeline` - 8 edges
8. `App()` - 7 edges
9. `Career()` - 7 edges
10. `Contact()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Axiom Wealth Management UI Screenshot` --semantically_similar_to--> `projects`  [INFERRED] [semantically similar]
  public/images/Maxlife.png → src/components/Work.tsx
- `projects` --references--> `CodeMind Landing Page Screenshot`  [INFERRED]
  src/components/Work.tsx → public/images/project1.png
- `projects` --references--> `finprep / Cyllene UI Screenshot`  [INFERRED]
  src/components/Work.tsx → public/images/project2.png
- `projects` --references--> `CodeMind Landing Page Screenshot`  [INFERRED]
  src/components/Work.tsx → public/images/Screenshot 2026-04-01 at 8.17.39 AM.png
- `projects` --references--> `MindScribe Landing Page Screenshot`  [INFERRED]
  src/components/Work.tsx → public/images/Screenshot 2026-04-01 at 8.19.58 AM.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Ali Hamza Professional Profile Presentation** — components_about_about, components_career_career, components_contact_contact [INFERRED 0.85]
- **TypeScript Compilation Configuration Hierarchy** — tsconfig, tsconfig_app, tsconfig_node [EXTRACTED 0.95]
- **Project Build & Toolchain Configuration** — eslint_config, package, tsconfig, vercel, vite_config [INFERRED 0.85]
- **Three.js Interactive Character Model Flow** — character_index_charactermodel, character_scene_scene, utils_character_setcharacter, utils_lighting_setlighting, utils_animationutils_setanimations, utils_mouseutils_handleheadrotation, utils_resizeutils_handleresize [EXTRACTED 1.00]
- **GSAP SplitText Animation Effects** — utils_initialfx_initialfx, utils_splittext_setsplittext, types_gsap_splittext_splittext [EXTRACTED 1.00]
- **Application Loading Experience Flow** — context_loadingprovider_loadingprovider, context_loadingprovider_useloading, character_scene_scene [EXTRACTED 1.00]
- **Axiom Wealth Management UI Layout Design** — images_maxlife_hero_banner, images_maxlife_featured_portfolios_grid, images_maxlife_navigation_structure [EXTRACTED 1.00]
- **Bond Cancellation Automation Pipeline Steps** — images_bond_manifest_ingest, images_bond_validation_engine, images_bond_customs_classification, images_bond_bond_status_check, images_bond_cancellation_approval, images_bond_request_reporting [EXTRACTED 1.00]
- **Landing Page Hero Section Layout** — images_preview1_avatar, images_preview1_profile, images_preview1_roles, images_preview1_navigation [INFERRED 0.85]
- **CodeMind Landing Page Structure** — images_project1_screenshot, images_project1_codemind, images_project1_hero_section, images_project1_clerk_auth, images_project1_dark_mode_design, images_project1_interactive_preview [INFERRED 0.85]
- **Visual Site Builder and Data Mapping Flow** — images_radix_page_editor, images_radix_workflow_editor, images_radix_admin_panel [INFERRED 0.85]
- **Sapphire CRM Platform Interfaces** — images_sapphire_crm_dashboard, images_sapphire_client_company_management, images_sapphire_regulatory_guidelines_reports [EXTRACTED 1.00]

## Communities (22 total, 2 thin omitted)

### Community 0 - "WebGL Character Rendering"
Cohesion: 0.16
Nodes (19): CharacterModel(), Scene(), setProgress(), eyebrowBoneNames, typingBoneNames, createBoneAction(), filterAnimationTracks(), setAnimations() (+11 more)

### Community 1 - "Build Toolchain & Manifests"
Cohesion: 0.07
Nodes (24): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (+16 more)

### Community 2 - "Work Portfolio Showcase"
Cohesion: 0.10
Nodes (24): projects, Work(), Props, WorkImage(), Axiom Wealth Management UI Screenshot, Cookie Consent Compliance Component, Featured Portfolios Card Grid Pattern, Aspiration Wealth Fund Hero Banner Pattern (+16 more)

### Community 3 - "Layout & Professional History"
Cohesion: 0.18
Nodes (14): About(), Career(), Contact(), Cursor(), HoverLinks(), Landing(), MainContainer(), TechStack (+6 more)

### Community 4 - "App Bootstrapping & Loading"
Cohesion: 0.18
Nodes (12): Loading(), LoadingContext, LoadingProvider(), LoadingType, useLoading(), CanvasBaseScene(), WebGLResizeFix(), App() (+4 more)

### Community 5 - "Node TypeScript Config"
Cohesion: 0.11
Nodes (17): files, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution (+9 more)

### Community 6 - "App TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleDetection, moduleResolution (+9 more)

### Community 7 - "Project Dependencies"
Cohesion: 0.12
Nodes (16): dependencies, gsap, @gsap/react, react, react-dom, react-fast-marquee, react-icons, @react-three/cannon (+8 more)

### Community 8 - "3D Tech Stack Sphere"
Cohesion: 0.25
Nodes (10): imageUrls, Pointer(), PointerProps, SphereGeo(), sphereGeometry, SphereProps, spheres, TechStack() (+2 more)

### Community 9 - "Customs Bond Project"
Cohesion: 0.39
Nodes (9): End-to-End Automation Pipeline, Bond Status Check Stage, Cancellation Approval Stage, Customs Classification Stage, Customs and Regulatory Documents, Manifest Ingest Stage, Bond Cancellation Automation Mockup, Request and Reporting Stage (+1 more)

### Community 10 - "Font & Scroll Typography FX"
Cohesion: 0.39
Nodes (6): initialFX(), LoopText(), ParaElement, setSplitText(), waitForFonts(), Webfont Synchronization

### Community 11 - "CodeMind Project Showcase"
Cohesion: 0.40
Nodes (6): Clerk Authentication, CodeMind AI Code Reviewer, Dark Grid Design Pattern, CodeMind Hero Section, Interactive Code Editor Preview, CodeMind Landing Page Screenshot

### Community 12 - "MindScribe Project Showcase"
Cohesion: 0.40
Nodes (6): AI Notepad, Start Writing CTA Button, Hero Section, MindScribe Landing Page Screenshot, MindScribe, Minimalist UI Design

### Community 13 - "Portfolio Hero & Roles"
Cohesion: 0.60
Nodes (5): 3D Character Avatar, Portfolio Homepage Hero Section Preview, Minimalist Header and Social Media Navigation links, Akash Malhotra Professional Profile, Co-Founder and Business Technology Specialist Roles

### Community 14 - "Radix E-Commerce Project"
Cohesion: 0.50
Nodes (5): Radix Admin Panel UI, Radix Dynamic E-Commerce Platform, Radix Page Editor UI, Radix Platform Presentation Showcase, Radix Workflow Editor UI

### Community 15 - "Sapphire CRM Project"
Cohesion: 0.60
Nodes (5): Client Company Management Interface, Sapphire CRM Dashboard, Sapphire CRM Platform Showcase Image, End-to-End Licensing Lifecycle Pipeline, Regulatory Guidelines and Reports Interface

### Community 16 - "What I Do Section"
Cohesion: 0.83
Nodes (3): handleClick(), sections, WhatIDo()

### Community 18 - "Solidx Page Builder Project"
Cohesion: 1.00
Nodes (3): Solidx Showcase Image, Radix E-Commerce Platform Storefront, Solid Starters Web Page Builder

## Knowledge Gaps
- **95 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+90 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `projects` connect `Work Portfolio Showcase` to `CodeMind Project Showcase`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `Loading()` connect `App Bootstrapping & Loading` to `Font & Scroll Typography FX`, `Layout & Professional History`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `Cursor()` connect `Layout & Professional History` to `App Bootstrapping & Loading`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _100 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Build Toolchain & Manifests` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Work Portfolio Showcase` be split into smaller, more focused modules?**
  _Cohesion score 0.10153846153846154 - nodes in this community are weakly interconnected._
- **Should `Node TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._