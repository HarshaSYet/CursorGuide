# CursorGuide
This repository serves as a guide to use cursor like a pro.

## 1. Interaction Modes & Everyday Productivity

### 1.1 Inline Work (Fast, Local Changes)

* **Inline Generation (Cmd + K)**
    * Generate new code
    * Refactor selected blocks
    * Ask quick questions about a snippet
    * Best for small, focused edits
* **AI Autocompletion**
    * Predicts multi-line edits
    * Smart rewrites for typos or partial logic
    * Anticipates cursor movement and next intent
    * Think of this as "autocomplete on steroids"

### 1.2 Chat-Based Work (Bigger Thinking)

* **Chat Interface (Cmd + L)**
    * Architecture discussions
    * Multi-file changes
    * Feature-level implementation
    * Inside this interface you can choose one of several modes depending on what you need:

| Mode | For | Capabilities | Tools |
|------|-----|-------------|-------|
| Agent | Complex features, refactoring | Autonomous exploration, multi-file edits | All tools enabled |
| Ask | Learning, planning, questions | Read-only exploration, no automatic changes | Search tools only |
| Plan | Complex features requiring planning | Creates detailed plans before execution, asks clarifying questions | All tools enabled |
| Debug | Tricky bugs, regressions | Hypothesis generation, log instrumentation, runtime analysis | All tools + debug server |

**Rule of thumb**
* Small change → Cmd + K
* Conceptual or multi-step task → Chat

## 2. Context Management

The quality of Cursor's output is directly proportional to the quality of context you provide.

### 2.1 Explicit Context Injection

* **@Files & Folders**
    * Direct the AI's attention precisely
    * Avoids hallucinations or generic answers
* **@Docs**
    * Attach custom documentation URLs
    * Great for internal tools or lesser-known libraries
* **Images & Screenshots**
    * Drag and drop images directly into chat
    * Useful for UI bugs, designs, error screens

### 2.2 Context Hygiene

* **.cursorignore**
    * Exclude node_modules, logs, build folders
    * Prevents wasted "brain power"
    * Open Cursor Settings (Cmd + Shift + J), go to Indexing & Docs and see View included files.
    * To create a .cursorignore file click on Edit, add Add directories or file patterns to ignore during indexing.
    * In Cursor Settings, click on Sync and see View included files to see updated indexed files.
* **Context Resetting**
    * Start a new chat when:
        * Responses degrade
        * AI forgets earlier decisions
    * Paste back only the critical constraints

## 3. Safety Nets & Stability Tools

* **Restore Checkpoints**
    * Save known-good states
    * Roll back when AI breaks things
    * Think of them as manual undo at project scale
    * To do this, find the relevant message in your chat history and click on ↩️
* **Git as a Companion**
    * Commit after every successful step
    * Treat commits as "safe checkpoints"

## 4. Customizing Cursor's Behavior

This is how you make Cursor feel like your engineer.

### 4.1 Rules & Expectations

* **Custom Rules (.cursor/rules)**
    * Define preferred coding practices and response style for Cursor.
    * Specify things like:
        * Use of type hints
        * Coding conventions and standards
        * Concise, to-the-point explanations
        * Avoiding filler or unnecessary verbosity
    * Acts as a persistent playbook that guides the AI's behavior across the project.
    * Project rules live in `.cursor/rules`. 
    

### 4.2 Model Strategy

* **Model Switching**
    * If stuck or looping:
        * Switch models (e.g. Claude → GPT-4o)
    * Different models = different reasoning styles

### 4.3 Commands

Commands let you direct the AI's behavior explicitly, without rewriting prompts every time.

* **Slash Commands (/)**
    * Used inside chat to signal intent clearly.
    * Reduce ambiguity and improve consistency of responses.
    * Project commands live in `.cursor/commands`. 
* **Summarization**
    * Summarization allows Cursor to compress large or complex context into a concise, high-signal summary.
    * Using the `/summarize` command
    * Useful for:
        * Understanding unfamiliar codebases
        * Reviewing long files or diffs
        * Catching up after context resets or new chats
        * Quickly recalling earlier decisions or architecture

## 5. Professional Project Workflow (Big Picture)

### 5.1 Plan Before Code

* Ask Cursor to:
    * Generate a step-by-step plan
    * Save it as scope.md
    * Use the plan mode for this
* Review and correct assumptions early

### 5.2 Incremental Execution

* Build one small feature at a time
* Test → commit → move on
* Avoid "build the whole app" prompts

### 5.3 Clarification Protocol (Very Powerful)

Explicitly instruct:
> "If you are not at least 90% confident, ask clarifying questions before proceeding."

* Prevents guessing
* Reduces low-quality output
* Works especially well with agent mode

## Run the project

Make sure the following are installed on your system:

- **Node.js**: `20.19.6`
- **Yarn**: `4.12.0`

Then install dependencies and run the project:

- `yarn install`
- `yarn dev`

## Cursor Submodule Setup and Reset

### 1️⃣ Add the submodule and set up symlinks

From the root of the parent repository:

```bash

# Add the cursor-kit repository as a submodule
git submodule add <SUBMODULE-URL> cursor-kit

# Create symlinks for Cursor configuration and ignore files
ln -s cursor-kit/.cursor .cursor
ln -s cursor-kit/.cursorignore .cursorignore

```

### 2️⃣ Pull the latest changes from the submodule

```bash

cd cursor-kit
git pull origin main
cd ..

```

### 3️⃣ Deleting and re-adding the submodule (if needed)

```bash

# Remove submodule metadata
rm -rf .git/modules/cursor-kit

# Remove the submodule folder
rm -rf cursor-kit

# Reset the parent repository index
git reset --hard

# Re-add the submodule (replace <SUBMODULE-URL> with your repo URL)
git submodule add <SUBMODULE-URL> cursor-kit

# Recreate the symlinks
ln -s cursor-kit/.cursor .cursor
ln -s cursor-kit/.cursorignore .cursorignore

```


