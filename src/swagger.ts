import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Request,Response,Express } from 'express'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BMS',
      description: "A simple buissness management system",
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server"
      },
    ]
  },
  // looks for configuration in specified directories
  apis: ['./src/*/index.ts'],
  securityDefinitions: {
    BearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    }
}
}
const swaggerSpec = swaggerJsdoc(options)
function swaggerDocs(app:Express, port:number) {

  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  // Documentation in JSON format
  app.get('/docs.json', (req:Request, res:Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)

    console.log("Swagger suceessfully configured")
  })
}
export default swaggerDocs
