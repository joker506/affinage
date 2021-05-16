const Direction = require('../models/directions.js');

module.exports = router => {
    /**
     * @swagger
     * tags:
     *   name: Directions
     *   description: Направления курсов
     */

    /**
     * @swagger
     * path:
     *  /directions:
     *    get:
     *      summary: Получаем все направления
     *      tags: [Directions]
     *      responses:
     *        '200':
     *          description: Массив направлений
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Directions'
     */
    router.get('/directions', (req, res, next) => {
        // const { alias, title } = req.body;
        const direction1 = new Direction({
            alias: 'manicure-profession',
            title: 'Профессия маникюра'
        });
        const direction2 = new Direction({
            alias: 'manicure-profession2',
            title: 'Профессия маникюра2'
        });
        res.json([direction1, direction2]);
    });

    // /**
    //  * @swagger
    //  * path:
    //  *  /users/{userId}:
    //  *    get:
    //  *      summary: Get a user by id
    //  *      tags: [Directions]
    //  *      parameters:
    //  *        - in: path
    //  *          name: userId
    //  *          schema:
    //  *            type: string
    //  *          required: true
    //  *          description: Id of the user
    //  *      responses:
    //  *        "200":
    //  *          description: An users object
    //  *          content:
    //  *            application/json:
    //  *              schema:
    //  *                $ref: '#/components/schemas/User'
    //  */
    // router.get("/users", (req, res, next) => {
    //     const userOne = new User("Alexander", "fake@gmail.com");
    //     const userTwo = new User("Ryan", "fakeagain@gmail.com");
    //     res.json({ userOne, userTwo });
    // });
};
