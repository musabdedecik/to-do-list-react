import { Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../../redux/actions/taskActions";
import DeleteIcon from "@mui/icons-material/Delete";


const Todo = ({ index, title, description, completed, userId, id }) => {
    const dispatch = useDispatch()
    return (
        <TableRow
            style={{
                backgroundColor: completed ? "#C1F4C5" : "#f7f7f7",
            }}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">
                <Checkbox
                    onClick={(e) => {
                        dispatch(updateTask({ title: title, description:description, userId: userId, completed: e.target.checked, id: id }))
                    }}
                    checked={completed}
                    size="medium"
                />
            </TableCell>
            <TableCell align="center">
                <IconButton
                    onClick={() => {
                        dispatch(removeTask(id))
                    }}
                    color="error"
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