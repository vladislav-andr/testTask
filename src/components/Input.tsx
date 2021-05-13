import { TextField } from "@material-ui/core"
import React, { FC } from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    TextField: {
      width: '70%',
      margin: '15px'
    },
    Input: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextContainer: {
      width: '160px',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '5px',
    },
  }),
);

const Input: FC<{ onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string, count: number }> = ({ onChange, value, count }) => {
  const classes = useStyles()

  return (
    <div className={classes.Input}>
      <TextField
        value={value}
        onChange={onChange}
        className={classes.TextField}
        placeholder="Search..."
        helperText={value.length ? `Found ${count} matches` : null}
        margin="normal"
      />
    </div>
  )
}

export default Input