import { object, string } from "yup";

//this schema check the fields validity in the body request
export const pointingCheckInSchema = object({
    body: object({
        employeeId: string()
            .required('Employee id is required'),
    }),
});

//this schema check the fields validity in the params request
export const pointingCheckOutSchema = object({
    params: object({
        employeeId: string()
            .required("Employee param is required"),
      }),
});

