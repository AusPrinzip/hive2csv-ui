import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

const HOUR = 60 * 60 * 1000
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [operation, setOperation] = React.useState('');

  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date() - 24 * HOUR);
  const [selectedUntilDate, setSelectedUntilDate] = React.useState(new Date());

  const handleFromDateChange = (date) => {
    setSelectedFromDate(date);
    console.log(selectedFromDate)
  };
  const handleUntilDateChange = (date) => {
    setSelectedUntilDate(date);
    console.log(selectedUntilDate)
  };
  const handleChange = (event) => {
    setOperation(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="From"
              format="MM/dd/yyyy"
              value={selectedFromDate}
              onChange={handleFromDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Until"
              format="MM/dd/yyyy"
              value={selectedUntilDate}
              onChange={handleUntilDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Operation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={operation}
              onChange={handleChange}
            >
              <MenuItem value={'transfer'}>Transfer</MenuItem>
              <MenuItem value={'account_create'}>Account Create</MenuItem>
              <MenuItem value={'comment'}>Comment</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="account" label="Account" />
            </form>
          </Grid>
          <Grid item xs>
            <Button variant="contained">Request</Button>
          </Grid>
      </Grid>
    </div>
  );
}
