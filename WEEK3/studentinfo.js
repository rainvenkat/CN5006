
// code for excercise 3 starts here

const dateofbirth =  "15/10/2024"
const getStudentName =  () =>
    {
        return (" write your name here ")
    }

    const getCampusName = () =>
        {
            return ("UEL Campus")
        }
        
        //exporting the variable and functions from outside the module
        exports.getName = getStudentName
        exports.Location = getCampusName
        exports.dob = dateofbirth
        
        // possible way to export function with parameters
        exports.Studentgrade = (marks) =>
        {
            if (marks > 40 && marks < 60) return ("B grade")
                else return ( "A grade")
        }
        
    