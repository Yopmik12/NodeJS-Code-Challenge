/**
 * @swagger
 * tags:
 *   name: Ping
 *   description: API endpoints for ping
 */

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Contains a timestamp
 *     description: Endpoint for health check
 *     tags: [Ping]
 *     responses:
 *       '200':
 *         description: Ping successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-03-18T15:33:03.475Z"
 *                   description: Current date and time
 */
