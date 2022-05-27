import mongoose from "mongoose";
import config from "config";

export interface EmployeeDocument extends mongoose.Document{
    id: string,
    name: string,
    firstName: string,
    dateCreated: Date,
    department: string
}

const EmployeeSchema = new mongoose.Schema({
    id: { 
        type: String,
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    firstName: { 
        type: String, 
        required: true 
    },
    dateCreated: { 
        type: Date, 
        default: Date.now
    },
    department: { 
        type: String, 
        required: true 
    }
});


const Employee = mongoose.model<EmployeeDocument>("Employee", EmployeeSchema);

export default Employee;