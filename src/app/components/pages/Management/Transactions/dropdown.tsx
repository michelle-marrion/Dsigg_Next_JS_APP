import React from 'react';
import {Menu, MenuItem, Checkbox} from '@mui/material';
import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded';
// Menu déroulant avec des cases à cocher
export default function CheckboxDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = React.useState([0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <button onClick={handleClick}>
      <ViewWeekRoundedIcon/>
      </button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
          <MenuItem key={option} onClick={handleClose}>
            <Checkbox
              edge="start"
              checked={checked.indexOf(index) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': `checkbox-list-label-${option}` }}
              onClick={handleToggle(index)}
            />
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
