/**
 * @swagger
 *  components:
 *    schemas:
 *      Direction:
 *        type: object
 *        required:
 *          - alias
 *          - title
 *        properties:
 *          id:
 *            type: integer
 *          lang:
 *            type: string
 *          metaTitle:
 *            type: string
 *          metaDescription:
 *            type: string
 *          metaKeywords:
 *            type: string
 *          dateCreated:
 *            type: string
 *          isPublish:
 *            type: boolean
 *          order:
 *            type: integer
 *          alias:
 *            type: string
 *          title:
 *            type: string
 *          description:
 *            type: string
 *          iconPath:
 *            type: string
 *        example:
 *          id: 3453
 *          lang: ru
 *          metaTitle: Профессия маникюра
 *          metaDescription: Лучшая профессия маникюрщика
 *          metaKeywords: маникюр, педикюр
 *          dateCreated: 2020-06-02T20:11:01.577Z
 *          isPublish: true
 *          order: 0
 *          alias: manicure-profession
 *          title: Профессия маникюра
 *          description: Длинное описание из трех строк
 *          iconPath: /upload/2020/06/asdfasdf.jpg
 *      Directions:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/Direction'
 */
class Direction {
    constructor(obj) {
        Object.assign(this, obj);
        //
        // this.id = obj.id;
        // this.lang = obj.lang;
        // this.metaTitle = obj.metaTitle;
        // this.metaDescription = obj.metaDescription;
        // this.metaKeywords = obj.metaKeywords;
        // this.dateCreated = obj.dateCreated;
        // this.isPublish = obj.isPublish;
        // this.order = obj.order;
        // this.alias = obj.alias;
        // this.title = obj.title;
        // this.description = obj.description;
        // this.iconPath = obj.iconPath;
    }
}

module.exports = Direction;
