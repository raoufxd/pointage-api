import mongoose from "mongoose";
import config from "config";
import { number } from "yup";

export interface PointingDocument extends mongoose.Document{
    employeeId: string,
    checkIn: Date,
    checkOut: Date,
    comment: string,
    workingHours: number
}

const PointingSchema = new mongoose.Schema({
    employeeId: { 
        type: String,
        required: true,
    },
    checkIn: { 
        type: Date, 
    },
    checkOut: { 
        type: Date, 
    },
    comment: { 
        type: String,
    },
    workingHours: {
        type: Number
    }
});


const Pointing = mongoose.model<PointingDocument>("Pointing", PointingSchema);

export default Pointing;