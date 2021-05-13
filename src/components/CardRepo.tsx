import React, { FC } from "react"
import { Container, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from "@material-ui/lab";
import { useHistory } from "react-router";
import { IRepoAPI } from "../types/interface";

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
      width: '100px',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '5px',
    },
    Name: {
      width: '200px',
      padding: 0,
      margin: '5px',
    },
  }),
);

const CardRepo: FC<{ data?: IRepoAPI }> = ({ data }) => {
  const classes = useStyles()

  const handleClick = (url: string | undefined | null) => () => url ? window.open(url) : null

  return (
    <Paper className={classes.Paper} onClick={handleClick(data?.html_url)}>
      <Container className={classes.ContainerCard}>
        <Container className={classes.Name}>
          {data?.name ? <Typography><b>{data?.name}</b></Typography> : <Skeleton variant='rect' height={30} width={'100%'} />}
        </Container>
        <Container className={classes.TextContainer}>
          {data?.forks !== null ? <Typography><b>{data?.forks}</b> Forks</Typography> : <Skeleton height={30} width={'100%'} />}
          {data?.stargazers_count !== null ? <Typography><b>{data?.stargazers_count}</b> Stars</Typography> : <Skeleton height={30} width={'100%'} />}
        </Container>
      </Container>
    </Paper >
  )
}

export default CardRepo