# Meeting Output Engine — Visual Draft v1

## Product Positioning
Not a meeting recorder.
A post-meeting execution system.

## Core Promise
Record once. Everything else happens automatically.

## UX Modes
- **Autopilot Mode** — zero/one-touch workflow
- **Operator Mode** — inspect, tweak, override, save rules

---

# 1. Home Screen

## Goal
Make the product feel instantly reliable, calm, and ready.

## Layout

### Top bar
- Product name / workspace name
- Current mode toggle: `Autopilot | Operator`
- Search
- Settings
- Profile / workspace

### Hero block
**Primary action:** `Start meeting capture`

Secondary actions:
- Upload recording
- Connect calendar
- Test integrations

Micro-status under hero:
- Local processing active
- Calendar connected / not connected
- Email drafts connected / not connected
- Last successful output time

### Block 1 — Upcoming meetings
- next 3–5 events
- each row shows:
  - title
  - time
  - source calendar
  - quick action: `Arm auto-capture`
  - status chip: idle / armed / captured / summarized

### Block 2 — Recent outputs
Each card shows:
- meeting title
- summary preview
- generated outputs
- routed destinations
- last modified time

Quick actions:
- Open summary
- Open email draft
- Open calendar note
- Search transcript

### Block 3 — Exceptions / review queue
Visible only if needed.
Examples:
- audio weak
- summary needs review
- route failed
- integration disconnected

---

# 2. Meeting Capture Screen

## Goal
Capture should feel immediate and frictionless.

## Layout

### Main block
Large centered state:
- Ready to capture
- Capturing now
- Processing
- Complete

### Primary control
- giant button: `Start capture`
- while active: `Stop capture`

### Context panel
Auto-detected context:
- meeting title
- start time
- calendar source
- participants if available
- source device

### Compact controls
- Language: auto / EN / DE / NL
- Input source: mic / system / both
- Style preset: Default / founder / sales / formal / concise
- Route preset: Calendar / email draft / both / custom

Rule: this section stays compact in Autopilot Mode, expanded in Operator Mode.

---

# 3. Processing Screen

## Goal
Reassure without clutter.

## Layout

### Vertical stage timeline
1. Audio captured
2. Transcribing
3. Structuring notes
4. Generating summary
5. Extracting actions
6. Routing outputs

### Live info panel
- duration
- language detected
- speaker confidence
- estimated completion

### Optional expandable drawer
- transcript preview
- warnings
- fallback used
- retry options

Autopilot default: collapsed.
Operator mode: visible.

---

# 4. Result Screen

## Goal
This is the magic moment.
The result must already look usable, not technical.

## Layout

### Header
- meeting title
- date/time
- source
- status: completed / routed / draft ready

### Main result block
**Polished meeting summary**
Styled like a human wrote it.
No AI sludge.

Subsections:
- Context
- Key decisions
- Important discussion points
- Open issues
- Next actions

### Output tabs
- Summary
- Email draft
- Calendar note
- Transcript
- Searchable memory

### Right-side action rail
- Send to email draft
- Attach to calendar event
- Copy summary
- Save as template style
- Push to CRM
- Create tasks

### Style switcher
At top of result area:
- Founder
- Formal
- Sales
- Internal ops
- Concise

Changing style should re-render output instantly if possible.

---

# 5. Transcript / Search Screen

## Goal
Make raw material powerful but not noisy.

## Layout

### Search bar
Search all meetings and transcripts.

### Filters
- person
- company
- date
- language
- action items
- unresolved topics

### Result list
Each hit shows:
- matched sentence/snippet
- meeting title
- timestamp
- linked summary

### Transcript view
- clean transcript
- optional speaker labels
- optional timestamps
- highlight search hits

Default behavior: speaker labels and timestamps hidden until asked.

---

# 6. Autopilot Mode Screen

## Goal
One switch. No babysitting.

## Layout

### Main switch
`Autopilot: ON/OFF`

### What happens automatically block
- detects meetings from calendar
- captures with chosen source
- transcribes locally
- writes summary in selected style
- drafts follow-up email
- attaches note to calendar

### Safety controls
- require review for external emails
- auto-route internal notes only
- private/local-only processing
- retention duration

This screen should feel like mission control, but simple.

---

# 7. Operator Mode Screen

## Goal
Full manual control without poisoning the default UX.

## Layout

### Panels
- Capture settings
- Prompt/style rules
- Routing logic
- Integrations
- Logs
- Failed jobs
- Template library

### Manual actions
- regenerate summary
- switch style
- retry transcription
- reroute output
- export raw files
- compare two versions

---

# 8. Integrations Screen

## Goal
Make routing tangible and trustworthy.

## Layout

### Integration cards
- Calendar
- Email
- Tasks
- CRM
- Notes
- Local storage / backup

Each card shows:
- connected status
- last sync
- default action
- edit rules

### Routing rules builder
Examples:
- internal meeting → calendar note only
- sales call → email draft + CRM note
- strategy session → summary + tasks + searchable memory

---

# 9. Settings Screen

## Sections
- Languages
- Privacy / local-only mode
- Default summary style
- Automation defaults
- Storage / retention
- Capture devices
- Export formats

Rule: settings should be clean, not a junk drawer.

---

# 10. Design Language

## Style direction
- Apple-clean shell
- minimal enterprise hierarchy
- finance-grade trust
- subtle operator density
- polished typography
- restrained color usage

## Color behavior
- neutral base
- one calm accent color
- status colors only when meaningful

## Typography
- high legibility
- clear hierarchy
- no playful UI copy

## Motion
- subtle transitions
- progress states should reassure, not entertain

---

# 11. User Journey

## Autopilot flow
Calendar event detected → capture starts/armed → transcript generated → summary styled → email/calendar outputs drafted → searchable memory saved

## Operator flow
Open app → start capture manually → inspect transcript → switch style → edit routing → send outputs

---

# 12. What makes this better than generic AI meeting tools
- built around outputs, not transcript vanity
- hidden complexity
- dual-mode control model
- routing is native, not an afterthought
- local-first trust and privacy
- no visible AI reasoning sludge
- feels like an operator product, not a toy SaaS

---

# 13. Next Drafts Needed
1. low-fidelity wireframe blocks per screen
2. component inventory
3. interaction map
4. functional architecture
5. MVP scope cut
