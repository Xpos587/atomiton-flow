# Default recipe - show available commands
default:
    @just --list

claude:
  claude --dangerously-skip-permissions --strict-mcp-config --mcp-config "./.mcp.json"
