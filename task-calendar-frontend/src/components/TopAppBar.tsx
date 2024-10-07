import { FC, useState } from "react";
import styles from "../styles/top-app-bar.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Drawer, FormControl, Stack, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { API_ENDPOINT } from "../App";
import axios from "axios";
import { getRandomHexColor } from "../utils/common";

interface Props {
  date: Date;
}

const TopAppBar: FC<Props> = ({ date }) => {
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(date);
  const [isDrawerOpen, setDrawerState] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function openNewTaskDrawer() {
    setDrawerState(!isDrawerOpen);
  }

  function createEvent() {
    axios
      .post(API_ENDPOINT + "/events/", {
        title: title,
        description: desc,
        startDate: startDate,
        endDate: endDate,
        color: getRandomHexColor(),
      })
      .then((response) => {
        console.log(response);
        setDrawerState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.top_app_bar}>
      <div className={styles.left}>Task Calendar</div>
      <div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => openNewTaskDrawer()}
        >
          Event
        </Button>
        <Drawer
          open={isDrawerOpen}
          anchor="right"
          onClose={() => setDrawerState(false)}
          PaperProps={{
            sx: {
              p: 2,
            },
          }}
        >
          <Stack spacing={2}>
            <TextField
              value={title}
              label="Title"
              variant="standard"
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              value={desc}
              label="Description (Optional)"
              variant="standard"
              onChange={(event) => setDesc(event.target.value)}
            />
            <FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                Start Date:
                <DateTimePicker
                  value={dayjs(date)}
                  onChange={(newValue) =>
                    setStartDate(newValue ? newValue.toDate() : startDate)
                  }
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                End Date:
                <DateTimePicker
                  value={dayjs(date)}
                  onChange={(newValue) =>
                    setEndDate(newValue ? newValue.toDate() : endDate)
                  }
                />
              </LocalizationProvider>
            </FormControl>
            <Button variant="contained" onClick={() => createEvent()}>
              Create
            </Button>
          </Stack>
        </Drawer>
      </div>
    </div>
  );
};

export default TopAppBar;
