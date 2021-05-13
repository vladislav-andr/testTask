import axios from "../../api/axios"
import React, { useEffect, useState, FC } from "react"
import { useParams } from "react-router"
import { Container, Grid, Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from "@material-ui/lab";
import { IRepoAPI, IUsers } from "../../types/interface";
import Header from "../../components/Header";
import Input from "../../components/Input";
import CardRepo from "../../components/CardRepo";
import DataProfile from "../../components/DataProfile";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#f0f0f0',
      minHeight: '100vh'
    },
    TextField: {
      width: '70%',
      margin: '15px'
    },
    Paper: {
      width: '90%',
      minHeight: '90vh',
      margin: '10px',
    },
  }),
);

const Profile: FC = () => {
  const [data, setData] = useState<IUsers | null>()
  const [search, setSearch] = useState<string>('')
  const [repo, setRepo] = useState<IRepoAPI[] | null>()
  const [rezSearch, setRezSearch] = useState<IRepoAPI[] | null>()
  const { id }: { id: string } = useParams()
  const classes = useStyles()

  useEffect(() => {
    axios.get(`/users/${id}`).then(res => {
      setData(res?.data)
      axios.get(res?.data?.repos_url).then(res => {
        setRepo(res?.data)
      })
    })
  }, [id])

  useEffect(() => {
    if (search.length) {
      const data = repo?.filter((obj: IRepoAPI) => obj?.name?.includes(search))
      setRezSearch(data)
    }
  }, [search])

  return (
    <>
      <Header />
      <Container>
        <Paper className={classes.Paper} key={data?.id}>
          <DataProfile data={data} />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e?.target.value)}
            value={search}
            count={0}
          />

          {/* // ! grid */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {search.length ? rezSearch?.map((obj: IRepoAPI) => (<CardRepo data={obj} />)) :
              repo ? repo?.map((obj: IRepoAPI) => (<CardRepo data={obj} />)) : <Typography>No data</Typography>}
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Profile