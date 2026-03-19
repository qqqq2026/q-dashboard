# Design OS v1

## Purpose
A repeatable system for designing 20–30 products fast without rebuilding taste, structure, or logic from scratch.

## Core Rule
Unique value, standardized structure.

## Outcome
Every new product should move through the same sequence:
1. Problem extraction
2. Product shape
3. Screen system
4. Interaction rules
5. Build handoff
6. Review against checklist

---

## 1. Design Principles

### 1.1 Primary Standards
- Apple-clean
- Minimal enterprise
- Finance-grade trust
- Ultra-polished
- Hidden operator density

### 1.2 What good design must feel like
- Fast
- Calm
- Competent
- Expensive
- Reliable
- Low-friction
- High-control when needed

### 1.3 What we avoid
- Playful startup fluff
- Empty dashboards
- Decorative clutter
- Too many clicks
- Settings-first UX
- AI-looking interfaces
- Lock-in feeling
- "Try premium" bait patterns

---

## 2. Product Modes

Every product should evaluate whether it needs these two modes:

### 2.1 Autopilot Mode
- One switch
- Minimum human touchpoints
- Defaults do the heavy lifting
- Output routes automatically

### 2.2 Operator Mode
- Manual inspection
- Overrides
- Tweaks
- Templates
- Rules
- Logs
- Recovery controls

Rule: calm default, deep control underneath.

---

## 3. Standard Screen Types

### 3.1 Home / Control Surface
Purpose:
- show current status
- show the main action
- show recent outputs
- show what needs attention

Default blocks:
- Hero action block
- System status / automation state
- Recent activity
- Output destinations
- Exceptions / review queue

### 3.2 Intake / Capture Screen
Purpose:
- define or receive the input
- make starting frictionless

Default blocks:
- Input source
- Primary action button
- Context detection
- Optional quick controls

### 3.3 Processing / Live State Screen
Purpose:
- reassure, not distract
- show progress without noise

Default blocks:
- Current stage
- Confidence / status
- Estimated completion
- Minimal intervention actions

### 3.4 Result / Output Screen
Purpose:
- show usable result immediately
- prioritize actionability

Default blocks:
- Polished summary/result
- Action items
- Destination routing
- Alternate formats
- Search / save / push

### 3.5 Settings / Rules Screen
Purpose:
- configure behavior without poisoning the main UX

Default blocks:
- Automation level
- Style presets
- Integrations
- Routing rules
- Privacy / storage / retention

### 3.6 Review / Exception Screen
Purpose:
- catch edge cases and failures cleanly

Default blocks:
- Failed items
- Needs approval
- Manual retry
- Edit then route
- Audit trail

---

## 4. Interaction Rules

### 4.1 Default interaction philosophy
- Fewer clicks
- Better defaults
- Visible consequence
- Hide complexity until needed

### 4.2 Click budget
For most products:
- core task should begin in 1 click
- common workflow should complete in 0–3 clicks
- repeated tasks should move toward zero-touch

### 4.3 Automation rule
If an action is repeated more than 3 times, it should become:
- a default
- a template
- a rule
- an automation

---

## 5. Component Rules

### 5.1 Buttons
- One obvious primary action per screen
- Secondary actions visually quieter
- Dangerous actions isolated

### 5.2 Cards
Use cards only when they improve scan speed. No wallpaper cards.

### 5.3 Tables
Only when comparison matters. Otherwise use structured blocks.

### 5.4 Toggles
Use toggles only for state changes with clear consequences.
Examples:
- Autopilot on/off
- Sync on/off
- Private/local only on/off

### 5.5 Status labels
Must answer one of:
- healthy?
- waiting?
- needs review?
- failed?
- sent?

---

## 6. Trust Rules

A product should earn trust in under 10 seconds.

Trust signals:
- clear hierarchy
- sparse but useful language
- visible reliability
- predictable outputs
- no AI jargon on primary surfaces
- no unexplained states

Never show:
- chain-of-thought
- prompt sludge
- model names unless relevant
- internal complexity by default

---

## 7. Reverse Prompt Product Questions

Use these questions before UI drafting:
1. What is the exact pain moment?
2. What does success feel like in 30 seconds?
3. What is hated in current tools?
4. What should the product assume automatically?
5. What interface style creates instant trust?
6. Where is the magic moment?
7. What output is valuable enough for weekly use?
8. What should stay hidden unless requested?
9. Who is the first buyer really?
10. What makes this 10x better than adjacent tools?

---

## 8. Product Evaluation Checklist

Before build, score each concept 1–5:
- Clarity
- Speed to first value
- Trust
- Automation leverage
- Operator control
- Revenue relevance
- Reusability across products
- Technical simplicity
- Low ongoing cost
- Distinctiveness

Anything below 35/50 needs redesign.

---

## 9. Reusable Product Templates

We should build reusable shells for:
- Dashboard product
- Capture-to-output product
- Workflow automation product
- Review queue product
- AI assistant/operator product
- Marketplace/listing product
- Internal ops tool

---

## 10. Next System Layers

After Design OS:
1. Product OS
2. Decision OS
3. Component library
4. Prompt-to-UI briefing format
5. Build handoff template

---

## 11. First Application Candidate
Meeting Output Engine
- ideal for applying Autopilot + Operator dual-mode
- clear intake → processing → output flow
- strong routing/integration layer
- strong reuse value across future products
