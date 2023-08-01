import React, { useState } from 'react';
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { DatePicker } from '@mui/lab';




const AttendanceFilter = () => {
  const [subject, setSubject] = useState('');
  const [section, setSection] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  };

  const handleCloseCalendar = () => {
    setOpenCalendar(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpenCalendar(false);
  };

  const handleGenerateSheet = () => {
    // Implement your logic here to filter data based on the selected filters
  };

  const subjects = ['Math', 'Science', 'English', 'History', 'Geography', 'Art', 'Music', 'Physical Education', 'Computer Science', 'Biology'];
  const sections = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <Grid container spacing={2} className="attendance-filter-container">
      <Grid item xs={3} className="filter-dropdown">
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject-select"
            value={subject}
            onChange={handleSubjectChange}
            label="Subject"
          >
            {subjects.map((subjectItem) => (
              <MenuItem key={subjectItem} value={subjectItem}>
                {subjectItem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} className="filter-dropdown">
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="section-label">Section</InputLabel>
          <Select
            labelId="section-label"
            id="section-select"
            value={section}
            onChange={handleSectionChange}
            label="Section"
          >
            {sections.map((sectionItem) => (
              <MenuItem key={sectionItem} value={sectionItem}>
                {sectionItem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} className="filter-date-picker">
        <Button variant="outlined" onClick={handleOpenCalendar}>
          {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
        </Button>
        <Dialog open={openCalendar} onClose={handleCloseCalendar}>
          <DialogTitle>Select Date</DialogTitle>
          <DialogContent>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              disableToolbar
              variant="static"
              openTo="date"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCalendar} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseCalendar} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid item xs={3} className="filter-button">
        <Button variant="contained" color="primary" onClick={handleGenerateSheet}>
          Generate Sheet
        </Button>
      </Grid>
    </Grid>
  );
};

export default AttendanceFilter;
