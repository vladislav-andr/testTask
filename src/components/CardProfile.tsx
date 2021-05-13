import React, { FC } from "react"
import { Container, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from "@material-ui/lab";
import { useHistory } from "react-router";
import { IUsers } from "../types/interface";

const useStyles = makeStyles(() =>
  createStyles({
    Paper: {
      width: '300px',
      height: '100px',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    ContainerCard: {
      display: 'flex',
      alignItems: 'center',
      margin: 0,
    },
    IMG: { width: '75px', height: '75px' },
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

const CardProfile: FC<{ data: IUsers }> = ({ data }) => {
  const history = useHistory()
  const classes = useStyles()

  const handleClick = (url: string) => () => history.push(url?.replace('https://api.github.com', ''))

  return (
    <Paper className={classes.Paper} onClick={handleClick(data?.url)}>
      <Container className={classes.ContainerCard}>
        {data?.avatar_url ? <img src={data?.avatar_url} className={classes.IMG} /> : <Skeleton variant='rect' height={75} width={75} />}
        <Container className={classes.TextContainer}>
          {data?.login ? <Typography>{data?.login}</Typography> : <Skeleton height={30} width={120} />}
          {data?.public_repos ? <Typography>
            Repositoriy: <Typography component={'b'}>{data?.public_repos}</Typography>
          </Typography> :
            <Skeleton height={30} width={75} />}
        </Container>
      </Container>
    </Paper>
  )
}

export default CardProfile