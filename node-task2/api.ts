import express from 'express';
import { getDB } from './database';
import { sql } from 'kysely';
const router = express.Router();

// הוספת מאמר חדש
router.post('/articles', async (req, res, next) => {
  try {
    const { title, author, content } = req.body;

    if (!title) throw new Error('no title');
    if (!author) throw new Error('no author');
    if (!content) throw new Error('no content');

    await getDB().insertInto('articles').values({ title, author, content }).execute();
    res.send('added');
  } catch (e) {
    next(e);
  }
});

// קבלת רשימה של כל המאמרים
router.get('/articles', async (req, res) => {
  const list = await getDB().selectFrom('articles').selectAll().execute();
  res.json(list);
});

// קבלת מידע על מאמר לפי מזהה
router.get('/articles/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error('invalid id')
    const article = await getDB().selectFrom('articles').selectAll().where('id', '=', id).executeTakeFirst();

    if (!article){
        res.status(404).send('Not found');
        return
    }
    res.json(article);
  } catch (e) {
    next(e);
  }
});


// מחיקת מאמר לפי מזהה
router.delete('/articles/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error('invalid id')
    const result = await getDB().deleteFrom('articles').where('id', '=', id).executeTakeFirst();
    res.send('deleted');
  } catch (e) {
    next(e);
  }
});

// קבלת רשימה של מאמרים לפי שם המחבר
router.get('/articles/by-author/:author', async (req, res, next) => {
  try {
    const { author } = req.params;
    const articles = await getDB().selectFrom('articles').selectAll().where('author', '=', author).execute();
    res.json(articles);
  } catch (e) {
    next(e);
  }
});

// קבלת רשימה של מאמרים שנוצרו לאחר תאריך מסוים
router.get('/articles/after/:date', async (req, res, next) => {
  try {
    const date = new Date(req.params.date);
    const articles = await getDB().selectFrom('articles').selectAll().where('created_at', '>', date).execute();
    res.json(articles);
  } catch (e) {
    next(e);
  }
});

// קבל רשימה של מאמרים ממוינים לפי תאריך יצירה
router.get('/articles/sorted/by-date', async (req, res, next) => {
  try {
    const articles = await getDB().selectFrom('articles').selectAll().orderBy('created_at', 'desc').execute();
    res.json(articles);
  } catch (e) {
    next(e);
  }
});

// קבלת מספר המאמרים במסד הנתונים
router.get('/count', async (req, res, next) => {
  try {
    const result = await getDB().selectFrom('articles').select(getDB().fn.countAll().as('count')).executeTakeFirst()
    res.json(result);
  } catch (e) {
    next(e);
  }
});

// חפש מאמרים לפי מילת מפתח בכותרת
router.get('/articles/search/:keyword', async (req, res, next) => {
  try {
    const keyword = req.params.keyword;
    const articles = await getDB()
      .selectFrom('articles')
      .selectAll()
      .where('title', 'like', `%${keyword}%`)
      .execute();
    res.json(articles);
  } catch (e) {
    next(e);
  }
});

// קבלת רשימת מחברים (ללא כפילויות)
router.get('/authors', async (req, res, next) => {
  try {
    const authors = await getDB().selectFrom('articles').select('author').distinct().execute();
    res.json(authors.map(a => a.author));
  } catch (e) {
    next(e);
  }
});

export default router;
