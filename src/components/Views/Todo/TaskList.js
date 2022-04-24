import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskForm from "../Forms/AddTaskForm";
import { getTasks } from "../../../redux/actions/taskActions"
import Todo from "./Todo";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  return (
    <Box>
      <AddTaskForm />
      {tasks.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="dangerColor" align="center">
                  Görev Sorumlusu
                </TableCell>
                <TableCell className="dangerColor" align="center">
                  Görev Başlığı
                </TableCell>
                <TableCell className="dangerColor" align="center">
                  Görev Açıklaması
                </TableCell>
                <TableCell className="dangerColor" align="center">Durumu</TableCell>
                <TableCell className="dangerColor" align="center">Sil</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, i) => {
                return <Todo key={i} id={task.id} employeeName={task.employee} assignTo={task.assignTo} userId={task.userId} description={task.description} title={task.title} completed={task.completed} />
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

    </Box>

  );
};

export default TaskList; 