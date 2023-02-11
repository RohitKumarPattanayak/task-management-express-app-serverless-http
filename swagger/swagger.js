import swaggerJsdoc from "swagger-jsdoc";
import version from "../package.json" assert { type: "json" };
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "swagger for task mangement application",
      version: version.version,
    },
    securityDefinitions: {
      basicAuth: {
        type: "http",
        scheme: "basic",
      },
    },
    security: [{ basicAuth: [] }],
  },
  apis: ["./routes/v1/*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

function swaggerDocs(app, post) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
}

export default swaggerDocs;
