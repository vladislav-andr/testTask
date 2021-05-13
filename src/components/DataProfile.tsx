import React, { FC } from "react"
import { Container, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from "@material-ui/lab";
import { useHistory } from "react-router";
import { IUsers } from "../types/interface";

const useStyles = makeStyles(() =>
  createStyles({
    ContainerCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
    },
    IMG: { width: '150px', height: '150px', marginRight: '15px' },
    TextContainer: {
      width: '500px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      margin: '5px',
    },
  }),
);

const DataProfile: FC<{ data?: IUsers | null | undefined }> = ({ data }) => {
  const classes = useStyles()

  return (
    <Container className={classes.ContainerCard}>
      {data?.avatar_url ? <img src={data?.avatar_url} className={classes.IMG} /> : <Skeleton variant='rect' height={150} width={150} />}
      {data ?
        <Container className={classes.TextContainer}>
          <Typography><b>UserName:</b> {data?.name}</Typography>
          <Typography><b>Email:</b> {data?.email}</Typography>
          <Typography><b>Location:</b> {data?.location}</Typography>
          <Typography><b>Join Date:</b> {data?.created_at}</Typography>
          <Typography><b>{data?.followers}</b> Followers</Typography>
          <Typography><b>{data?.following}</b> Following</Typography>
        </Container>
        :
        <Container className={classes.TextContainer}>
          <Skeleton height={30} width={'50%'} />
          <Skeleton height={30} width={'75%'} />
          <Skeleton height={30} width={'60%'} />
          <Skeleton height={30} width={'40%'} />
          <Skeleton height={30} width={'20%'} />
          <Skeleton height={30} width={'20%'} />
        </Container>}
    </Container>
  )
}

export default DataProfile