"use client";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useFilter } from "../../context/filter";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function SelectField({ ...params }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [previousNames, setPreviousName] = React.useState<string[]>([]);
  const { names, title, label } = params;
  const { updateFilter } = useFilter();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    setPersonName(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };

  const handleClose = () => {
    if (JSON.stringify(personName) !== JSON.stringify(previousNames)) {
      updateFilter(title, personName);
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={`${title}`}>{label}</InputLabel>
        <Select
          labelId={`${title}`}
          id={`${title}`}
          multiple
          fullWidth
          value={personName}
          onOpen={() => setPreviousName(personName)}
          onChange={(e) => handleChange(e)}
          onClose={() => handleClose()}
          input={<OutlinedInput id={`select-${title}`} label={`${label}`} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name: string) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
