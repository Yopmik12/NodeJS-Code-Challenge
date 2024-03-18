/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for users
 */

/**
 * @swagger
 * /user/{userId}/settings:
 *   get:
 *     summary: Get user settings by user ID
 *     description: Retrieve the settings of a user based on their user ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to retrieve settings
 *         example: 1
 *     responses:
 *       '200':
 *         description: User settings retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 preferredTheme:
 *                   type: string
 *                   example: system
 *                 resultsPerPage:
 *                   type: integer
 *                   example: 20
 *                 sendEmail:
 *                   type: boolean
 *                   example: true
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 404
 *                   description: HTTP status code
 *                 response:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: User not found
 *                       description: Error message
 *   put:
 *     summary: Update user settings by user ID
 *     description: Update the settings of a user based on their user ID.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to update settings for
 *         example: 1
 *       - in: body
 *         name: Request body
 *         description: User settings object to update
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             preferredTheme:
 *               type: string
 *               example: dark
 *             resultsPerPage:
 *               type: integer
 *               example: 100
 *             sendEmail:
 *               type: boolean
 *               example: false
 *     responses:
 *       '200':
 *         description: User settings updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 200
 *                   description: HTTP status code
 *                 response:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: integer
 *                       description: ID of the user
 *                       example: 1
 *                     preferredTheme:
 *                       type: string
 *                       description: Preferred theme of the user
 *                       example: dark
 *                     resultsPerPage:
 *                       type: integer
 *                       description: Number of results per page
 *                       example: 100
 *                     sendEmail:
 *                       type: boolean
 *                       description: Indicates if the user prefers to receive emails
 *                       example: false
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 404
 *                   description: HTTP status code
 *                 response:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: User not found
 *                       description: Error message
 */
