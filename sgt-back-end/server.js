import pg from 'pg';
import express from 'express';
import errorMiddleware from './error-middleware.js';
import ClientError from './client-error.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const id = Number(req.params.gradeId);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 0) {
      throw new ClientError(
        404,
        'Invalid id. The id should be a positive integer.'
      );
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const params = [id];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      return res.status(200).json(grade);
    } else {
      throw new ClientError(404, `Cannot find grade with id ${id}.`);
    }
  } catch (error) {
    next(error);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.course || !req.body.score) {
      throw new ClientError(
        400,
        'Name, course and score are all required fields.'
      );
    }
    if (
      req.body.score > 100 ||
      req.body.score < 0 ||
      !Number.isInteger(Number(req.body.score))
    ) {
      throw new ClientError(
        400,
        'Score must be an integer between 0 and 100, please enter a new integer.'
      );
    }

    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const id = Number(req.params.gradeId);

    if (Number.isNaN(id) || !Number.isInteger(id) || id <= 0) {
      throw new ClientError(
        400,
        'Invalid id. The id should be a positive integer.'
      );
    }

    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
    `;

    const params = [Number(id)];
    const result = await db.query(sql, params);

    if (!result.rows[0]) {
      throw new ClientError(404, 'Grade not found.');
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const currentId = Number(req.params.gradeId);
    const { name, course, score } = req.body;

    if (!name || !course || !score) {
      throw new ClientError(
        400,
        'Name, course and score are all required fields.'
      );
    }
    if (
      Number(score) > 100 ||
      Number(score) < 0 ||
      !Number.isInteger(Number(score))
    ) {
      throw new ClientError(
        400,
        'Score must be an integer between 0 and 100, please enter a new integer.'
      );
    }
    if (
      Number.isNaN(currentId) ||
      !Number.isInteger(currentId) ||
      currentId < 0
    ) {
      throw new ClientError(
        404,
        'Invalid id. The id should be a positive integer.'
      );
    }

    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
    `;

    const params = [name, course, score, currentId];
    const result = await db.query(sql, params);

    if (!result.rows[0]) {
      throw new ClientError(404, 'Grade not found.');
    }
    res.status(204).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
