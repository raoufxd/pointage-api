import { DocumentDefinition } from "mongoose";
import Employee, { EmployeeDocument } from "../models/employee.model";

//create employee service
export async function createEmployee(employeeData: DocumentDefinition<EmployeeDocument>){
    try{
        return await Employee.create(employeeData);
    }
    catch (error:any){
        throw new Error(error)
    }
}

//get all employees service
export async function getEmployees(filterCreationDate: string) {
    try{
        //check if the creationDateFilter is not null, and its not an empty string
        if(filterCreationDate!= null && filterCreationDate.trim().length){
            //apply the creation date filter
            const date1 = new Date(filterCreationDate)
            const date2 = new Date(date1)
            date2.setDate(date2.getDate() + 1)
            //get all the employees created between date1 and date2
            //for example employees created in "2022-05-27" means all the employees between "2022-05-27" and "2022-05-28"
            return await Employee.find({dateCreated: {$gt: date1, $lt: date2} });
        }
        else{
            //get all the employees with no creation date filter !!
            return await Employee.find();
        }
    }
    catch (error:any){
        throw new Error(error)
    }
}


//get only one employee by id service
export async function getOneEmployee(employeeId: string) {
    try{
       return await Employee.findOne({id: employeeId});
    }
    catch (error:any){
        throw new Error(error)
    }
}
