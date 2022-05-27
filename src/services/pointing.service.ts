import { DocumentDefinition } from "mongoose";
import Pointing, { PointingDocument } from "../models/pointing.model";

//the checkin service
export async function checkIn(pointingData: DocumentDefinition<PointingDocument>){
    try{
        pointingData.checkIn = new Date();
        console.log(pointingData)
        return await Pointing.create(pointingData);
    }
    catch (error:any){
        throw new Error(error)
    }
}



//the checkout service
export async function checkOut(employeeId: String, pointingData: DocumentDefinition<PointingDocument>){
    try{
        //get the checkin date for only today
        const todayDate = new Date().toISOString().split('T')[0]
        console.log('today',todayDate)
        const pointing: any = await Pointing.findOne({employeeId, checkIn: {$gt: todayDate}});
        //set the checkout date to now
        const checkOut = new Date()
        //calculate the working hours checkin - checkout
        //convert the difference to hours and save it
        const workingHours =  Math.abs((checkOut.getTime() - pointing?.checkIn.getTime()) / (60*60*1000) )
        return await Pointing.updateMany({employeeId},
            {$set: {
                checkOut: checkOut,
                comment: pointingData.comment,
                workingHours: workingHours
            }});
    }
    catch (error:any){
        throw new Error(error)
    }
}

