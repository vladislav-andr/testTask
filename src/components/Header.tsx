import React, { FC } from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    AppBar: { background: '#000' },
    ToolBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar className={classes.ToolBar}>
        <Typography variant='h4' align='center'>
          GitHub Searcher
            </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header