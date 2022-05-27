import { Express, Request, Response} from "express";
import { createEmployee, getEmployees } from "./controllers/employee.controller"
import { checkIn, checkOut } from "./controllers/pointing.controller"
import { createEmployeeSchema } from "./schemas/employee.schema"
import { pointingCheckInSchema, pointingCheckOutSchema } from "./schemas/pointing.schema"
import requestValidation from "./middleware/requestValidation"

export default function(app: Express) {
    
    //create an employee
    //POST /api/employees
    app.post('/api/employees', requestValidation(createEmployeeSchema), createEmployee)

    //get all employees (with date filtre)
    //GET /api/employees
    app.get('/api/employees', getEmployees)

    //check in
    //POST /api/checkin
    app.post('/api/checkin', requestValidation(pointingCheckInSchema), checkIn)

    //check out
    //PUT /api/checkout/:employeeId
    app.put('/api/checkout/:employeeId', requestValidation(pointingCheckOutSchema), checkOut)


}