import { Request, Response } from "express"
import * as EmployeeService from "../services/employee.service"

//create employee controller
export async function createEmployee(req: Request, res: Response) {
    try{
        const employee = await EmployeeService.createEmployee(req.body);
        return res.send(employee);
    }
    catch(e: any){
        return res.status(400).send(e.message)
    }
}

//get all employee controller
export async function getEmployees(req: Request, res: Response) {
    try{
        const employees = await EmployeeService.getEmployees(req.body.filterCreationDate);
        return res.send(employees);
    }
    catch(e: any){
        return res.status(400).send(e.message)
    }
}