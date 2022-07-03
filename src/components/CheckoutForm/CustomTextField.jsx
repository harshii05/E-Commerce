import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid,InputLabel } from '@material-ui/core';
import { LabelImportantOutlined } from '@material-ui/icons';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      <Controller
      render={({field})=> <TextField{...field}/>}
      defaultValue=""
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
        variant="outlined"
      />
    </Grid>
  );
}

export default FormInput;