import type { PluginGuide } from "./plugin-guide";

export const MNEMOVERSE_PLUGIN_GUIDE: PluginGuide = {
  uses: [
    {
      title: "Check what you decided before",
      text: "The memory_read tool searches the memory with a plain question, such as what was decided about a project or how you like reports written. The memory_list_recent tool lists the newest entries first, with no query, which is the quick way to catch up after a break or on a shared room.",
    },
    {
      title: "Save what should outlast the chat",
      text: "The memory_write tool stores one short statement that makes sense on its own: a preference, a decision, a fact about a project or a lesson. Concepts attached to the statement group related memories, and a domain name keeps one project's memory apart from another's.",
    },
    {
      title: "Tell it what helped",
      text: "The memory_feedback tool rates memories that memory_read returned, from -1 (misleading) to 1 (helpful). Rating a recalled memory as helpful or misleading re-ranks what comes back next. Nothing is erased by a low rating.",
    },
    {
      title: "Share one memory with other people",
      text: "The memory_create_room tool makes a shared room, and memory_invite_to_room gives a code to send to someone. Their assistant joins with memory_join_room and then reads, and writes if allowed, the same room. The memory_list_rooms tool finds rooms again in a new session.",
    },
    {
      title: "See what is stored",
      text: "The memory_stats tool shows how many memories there are and in which domains. The memory_graph tool shows which concepts the memory has linked. The vault_list tool lists stored secrets by alias only; no tool returns a secret value.",
    },
  ],
  faq: [
    {
      question: "Does the Mnemoverse plugin need an API key?",
      answer:
        "No. Select Connect and sign in with your Mnemoverse account in the browser. To use a key, select Use an API key instead, and paste a key from console.mnemoverse.com. Keys start with mk_live_. OpenBot sends the key in the Authorization header and keeps it in encrypted storage.",
    },
    {
      question: "How is Mnemoverse different from the memory of an OpenBot agent?",
      answer:
        "Each OpenBot agent keeps its own memory on the computer that runs OpenBot. Mnemoverse is one memory in your account that ChatGPT, Claude, Cursor, VS Code and other tools you connect can also read and write. Only what an agent sends to Mnemoverse tools goes to Mnemoverse.",
    },
    {
      question: "Can a team use the same memory?",
      answer:
        "Yes, through shared rooms. The owner creates a room and sends an invite code; each person's assistant joins with that code. Joining a room does not open anyone's private memory.",
    },
    {
      question: "What does it cost?",
      answer:
        "There is a free plan with no credit card. Pro, Team and Enterprise plans are listed at mnemoverse.com/pricing.",
    },
  ],
  sources: [
    { label: "Mnemoverse", url: "https://mnemoverse.com/" },
    { label: "Mnemoverse: remote MCP server", url: "https://mnemoverse.com/docs/api/remote-mcp-server" },
    { label: "Mnemoverse MCP server on GitHub", url: "https://github.com/mnemoverse/mcp-memory-server" },
  ],
  checkedAt: "2026-11-20",
};
