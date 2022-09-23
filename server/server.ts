import * as express from 'express';
import {Application} from "express";
import {searchLessons} from "./search-lessons.route";
import {saveCourse} from './save-course.route';
import {loginUser} from './login.route';
import { getAllTransazioni } from './get-transazioni.route';
import { getAllClienti, getClienteByUrl } from './get-clienti.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());




app.route('/api/clienti/cerca').get(getAllClienti);

app.route('/api/clienti/cerca/:id').get(getClienteByUrl);


app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/login').post(loginUser);

app.route('/api/transazioni').get(getAllTransazioni);







const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



