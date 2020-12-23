/** @format */

import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const todoRoutes = Router();

// task, complete, id
let DATA = [
  {
    task: 'tarea UNO',
    complete: false,
    id: '22219757-fadd-4973-8bad-d9a32c77d491',
  },
  {
    task: 'tarea DOS',
    complete: false,
    id: '56cd0856-88e9-4c08-8408-750fc1ee3be3',
  },
  {
    task: 'tarea TRES',
    complete: false,
    id: '27bda6fb-3f3f-4753-ab6e-fa80b0baa200',
  },
  {
    task: 'tarea CUATRO',
    complete: false,
    id: '9267e279-0c95-4300-9bb2-c98bafbbe955',
  },
];

todoRoutes.get('/hi', (req, res) => {
  res.send({ hi: 'hola mundo' });
});

// TODO: CREAR TAREA
todoRoutes.post('/create', (req, res) => {
  const { body } = req;
  console.log('🚀 ~ file: routes.js ~ line 16 ~ todoRoutes.post ~ body', body);

  if (!body.task) return res.status(400).send({ error: 'Task is required' });

  const newData = {
    task: body.task,
    complete: false,
    id: uuidv4(),
  };
  DATA.push(newData);

  const responseData = {
    taks: DATA,
    task: newData,
  };

  res.status(200).send(responseData);
});

// TODO: OBTENER TAREA
todoRoutes.get('/list', (req, res) => {
  res.status(200).send(DATA);
});

// TODO: OBTENER TAREA by id
todoRoutes.get('/list/:id', (req, res) => {
  const { id } = req.params;

  const data = DATA.find((task) => task.id === id);
  res.status(200).send(data);
});

// TODO: ACTUALIZAR TAREA by id
todoRoutes.put('/update/:id', (req, res) => {
  const { body, params } = req;
  const { task, complete } = body;
  const { id } = params;

  const data = DATA.find((task) => task.id === id);

  const updateData = {
    ...data,
    task: task ? task : data.task,
    complete: complete ? complete : data.complete,
  };

  const restData = DATA.filter((item) => item.id !== id);

  const newData = [...restData, updateData];

  DATA = newData;
  const responseData = {
    taskUpdated: updateData,
    tasks: DATA,
  };

  res.status(200).send(responseData);
});

// TODO: DELETE TAREA by id
todoRoutes.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const resData = DATA.filter((item) => item.id !== id);

  DATA = resData;

  res.status(200).end();
});

export default todoRoutes;
