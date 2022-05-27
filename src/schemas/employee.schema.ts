import { object, string } from "yup";


//this schema check the fields validity in the body request
export const createEmployeeSchema = object({
    body: object({
        id: string()
            .required('id is required'),
        name: string()
            .required('name is required'),
        firstName: string()
            .required('firstName is required'),
        department: string()
            .required('depatment is required')
    }),
});




