import TextField from "@mui/material/TextField";

export default function StandartTextField({ ...children }) {
  return <TextField {...children}  variant="outlined" />;
}