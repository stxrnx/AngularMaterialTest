
import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseByUrl} from "./get-courses.route";
import {searchLessons} from "./search-lessons.route";
import {saveCourse} from './save-course.route';
import {loginUser} from './login.route';
import {findLessonDetail} from "./get-lesson-detail.route";
import { getAllTransazioni } from './get-transazioni.route';
import { getAllClienti } from './get-clienti.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());




app.route('/api/clienti').get(getAllClienti);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseByUrl);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/login').post(loginUser);

app.route('/api/lesson-details').get(findLessonDetail);

app.route('/api/transazioni').get(getAllTransazioni);







const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



