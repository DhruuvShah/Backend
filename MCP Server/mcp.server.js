import { MCPServer } from "@modelcontextprotocol/sdk/server/MCPServer.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new MCPServer({
  name: "demo-server",
  version: "1.0.0",
});

server.registerTool(
  "addTwoNumbers",
  {
    title: "Addition Tool",
    description: "Adds two numbers together",
    inputSchema: z.object({
      a: z.number().describe("The first number"),
      b: z.number().describe("The first number"),
    }),
  },

  async ({ a, b }) => {
    return {
      content: [{ type: "text", text: String(a + b) }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
