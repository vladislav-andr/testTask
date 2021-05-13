import { Grid } from "@material-ui/core"
import React, { FC, useEffect, useState } from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { UseTypedSelector } from "../../modules/hooks/useTypedSelector";
import Header from "../../components/Header";
import Input from "../../components/Input";
import CardProfile from "../../components/CardProfile";
import { useActions } from "../../modules/hooks/useActions";
import { IUsers } from "../../types/interface";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#f0f0f0',
      minHeight: '100vh'
    },
  }),
);

const Home: FC = () => {
  const classes = useStyles();
  const { setSearchNext, setSearchList }: any = useActions()
  const { loading, searchData, search, count } = UseTypedSelector(state => state.SESSION)
  const [page, setPage] = useState<number>(2)
  const [check, setCheck] = useState<boolean>(false)

  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setCheck(!check)
    }
  }

  useEffect(() => {
    if (!(document.documentElement.scrollHeight - window.innerHeight)) {
      setCheck(!check)
    }
  }, [searchData])

  useEffect(() => {
    setPage(2)
  }, [search])

  useEffect(() => {
    if (check) {
      setSearchNext(search, page)
        .then(() => setPage((prev: number) => prev + 1))
        .finally(() => setCheck(!check))
    }
  }, [check])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <div className={classes.root}>
      <Header />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchList(e?.target.value)}
        value={search}
        count={count}
      />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {!loading ? searchData?.map((obj: IUsers) => (<CardProfile data={obj} key={obj?.login} />)) : null}
      </Grid>
    </div>
  )
}

export default Home