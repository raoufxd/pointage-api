import { Request, Response } from "express"
import * as PointingService from "../services/pointing.service"
import * as EmployeeService from "../services/employee.service"

import { get } from "lodash"

//the checkin controller
export async function checkIn(req: Request, res: Response) {
    try{
        const employeeId = req.body.employeeId;
        const employee = await EmployeeService.getOneEmployee(employeeId)
        if(!employee){
            //employee doesn't exist with this id = employeeId
            return res.sendStatus(400);
        }
        const pointing = await PointingService.checkIn(req.body);
        return res.send(pointing);
    }
    catch(e: any){
        return res.status(400).send(e.message)
    }
}



//the checkout controller
export async function checkOut(req: Request, res: Response) {
    try{
        const employeeId = get(req, "params.employeeId");
        const pointingUpdate =  req.body;
        const pointing = await PointingService.checkOut(employeeId, pointingUpdate);
        return res.send(pointing);
    }
    catch(e: any){
        return res.status(400).send(e.message)
    }
}
