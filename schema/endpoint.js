const swaggerUi = require("swagger-ui-express");
const config = require("./config");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const theme = new SwaggerTheme();
const inUrl = "Please input URL!";
const inQuery = "Please input Query!";

const options = {
  customSiteTitle: config.options.webName,
  customfavIcon: config.options.favicon,
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
  ],
  customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
  ],
  customCss: `${theme.getBuffer(SwaggerThemeNameEnum.DARK)}.topbar { display: none; }`,
  swaggerOptions: {
    displayRequestDuration: true,
  },
};

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: config.options.name,
    description: config.options.description,
    version: "1.0.0",
    "x-logo": {
      url: config.options.favicon,
      altText: config.options.name,
    },
  },
  servers: [
    {
      url: config.host.BASE_URL,
    },
  ],
  tags: [
    {
      name: "AI",
      description:
        "API endpoints for artificial intelligence content from various platforms.",
    },
    // {
    //   name: "Downloader",
    //   description:
    //     "API endpoints for downloading content from various platforms.",
    // },
    // {
    //   name: "Tools",
    //   description: "API endpoints for content tools from multiple platforms.",
    // },
  ],
  paths: {
    "/api/ai/chatgpt": {
      get: {
        tags: ["AI"],
        summary: "Chat with GPT AI",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Hello! How can I help you today?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/gptlogic": {
      get: {
        tags: ["AI"],
        summary: "Chat with GPT Logic",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
          {
            in: "query",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example:
                            "Hello! How can I help you with your prompt?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "x-request-time": new Date().toISOString(),
};

module.exports = { swaggerDocument, options };
