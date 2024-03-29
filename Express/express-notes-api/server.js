import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';

const app = express();
const port = 8080;

app.use(express.json());

async function generateNotes() {
  const journal = await readFile('data.json', 'utf8');
  return JSON.parse(journal);
}

async function updateNotes(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = generateNotes();

    const notesArray = [];
    for (const note in data.notes) {
      notesArray.push(data.notes[note]);
    }
    res.status(200).json(notesArray);
  } catch (error) {
    console.error(
      'An error occurred while trying to view the form, please try again.'
    );
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = generateNotes();

    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      return res
        .status(400)
        .json({ error: 'Invalid id. The id should be a positive integer.' });
    }

    const note = data.notes[id];

    if (note) {
      return res.status(200).json(note);
    } else {
      return res.status(404).json({ error: `Cannot find note with id ${id}.` });
    }
  } catch (error) {
    console.error(
      'An error occurred while trying to view the form, please try again.'
    );
    res.status(500).json({
      error:
        'An error occurred while trying to view the note, please try again.',
    });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    if (!req.body.content) {
      return res.status(400).json({ error: 'Content is a required field' });
    }
    const data = generateNotes();
    const newNoteId = data.nextId;

    const newNote = {
      id: newNoteId,
      content: req.body.content,
    };

    data.notes[newNoteId] = newNote;

    data.nextId++;

    await updateNotes(data);

    res.status(201).json(newNote);
  } catch (error) {
    console.error(
      'An error occurred while trying to create a new note:',
      error
    );
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = generateNotes();
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      return res
        .status(400)
        .json({ error: 'Invalid id. The id should be a positive integer.' });
    }

    if (!data.notes[id]) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    delete data.notes[id];

    await updateNotes(data);

    res.sendStatus(204);
  } catch (error) {
    console.error('An error occurred while trying to delete the note:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = generateNotes();
    const currentId = Number(req.params.id);

    if (
      Number.isNaN(currentId) ||
      !Number.isInteger(currentId) ||
      currentId < 1
    ) {
      return res
        .status(400)
        .json({ error: 'Invalid id. The id should be a positive integer.' });
    }

    if (!req.body.content) {
      return res.status(400).json({ error: 'Content is a required field' });
    }

    if (!data.notes[currentId]) {
      return res
        .status(404)
        .json({ error: `Cannot find note with id ${currentId}.` });
    }

    const updatedNote = {
      id: currentId,
      content: req.body.content,
    };

    data.notes[currentId] = updatedNote;

    await updateNotes(data);

    res.sendStatus(204);
  } catch (error) {
    console.error('An error occurred while trying to delete the note:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
