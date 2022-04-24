import { useEffect, useId } from "react";
import { Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../../../redux/actions/taskActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUserNameById } from "../../../redux/store/user";


const Todo = ({ assignTo,employeeName, title, description, completed, userId, id }) => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.currentUser.status);
    return (
        <TableRow
            style={{
                backgroundColor: completed ? "#C1F4C5" : "#f7f7f7",
            }}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
            <TableCell align="center">{employeeName}</TableCell>
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">
                <Checkbox
                    disabled={!status}
                    onClick={(e) => {
                        dispatch(updateTask({ title: title, description:description, userId: userId, assignTo: assignTo, completed: e.target.checked, id: id }))
                    }}
                    checked={completed ?? false}
                    name="completed"
                    size="medium"
                />
            </TableCell>
            <TableCell align="center">
                <IconButton
                    onClick={() => {
                        if(status){
                            dispatch(removeTask(id))
                        }
                    }}
                    color={status ? "error" : "default"}
                    aria-label="delete"
                    size="large"
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default Todo;