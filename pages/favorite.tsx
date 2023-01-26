import React from 'react'
import Head from 'next/head'

import { styled } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Select, FormControl, MenuItem } from '@mui/material';

import styles from '../styles/Home.module.css'
import FavoriteHeader from '../components/FavoriteHeader';

// FavoriteBorderIconのcss
const MyFavoriteBorderIcon = styled(FavoriteBorderIcon)({
  cursor: "pointer",
  padding: "7px",
  fontSize: "42px",
  borderRadius: "18px",
  position: "absolute",
  bottom: "20px",
  right: "20px",
  color:"white",
  zIndex:"10",
  "&:hover": {
    color:"red",
  }
})
const MyTeamSelect = styled(Select)({
  width: "200px",
  height: "40px",
  borderRadius: "40px",
})
const MyDaySelect = styled(Select)({
  width: "150px",
  height: "40px",
  borderRadius: "40px",
})
const MytournamentSelect = styled(Select)({
  width: "350px",
  height: "40px",
  borderRadius: "40px",
})

const favorite = () => {
  return (
    <>
      <Head>
        <title>V-Photo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/VPhotoIcon2.ico" />
      </Head>
      <FavoriteHeader />
      <div className={styles.sort_area}>
        <div className={styles.select_box}>
        <FormControl>
            <MyTeamSelect 
              defaultValue={'すべてのチーム'}
              id="team-select"
            >
              <MenuItem value={'すべてのチーム'}>すべてのチーム</MenuItem>
              <MenuItem value={'ZETA DIVISION'}>ZETA DIVISION</MenuItem>
              <MenuItem value={'Crazy Raccoon'}>Crazy Raccoon</MenuItem>
              <MenuItem value={'Northeption'}>Northeption</MenuItem>
            </MyTeamSelect>
          </FormControl>
        </div>
        <div className={styles.select_box}>
          <FormControl>
            <MyDaySelect defaultValue={'すべての日程'} id="day-select">
              <MenuItem value={'すべての日程'}>すべての日程</MenuItem>
              <MenuItem value={'DAY1'}>DAY1</MenuItem>
              <MenuItem value={'DAY2'}>DAY2</MenuItem>
              <MenuItem value={'DAY3'}>DAY3</MenuItem>
            </MyDaySelect>
          </FormControl>

        </div>
        <div className={styles.select_box}>
          <FormControl>
            <MytournamentSelect defaultValue={'すべての大会'} id="tournament-select">
              <MenuItem value={'すべての大会'}>すべての大会</MenuItem>
              <MenuItem value={'vct2021: Stage 2 Masters - Reykjavík'}>vct2021: Stage 2 Masters - Reykjavík</MenuItem>
              <MenuItem value={'vct2021: Stage 3 Masters - Berlin'}>vct2021: Stage 3 Masters - Berlin</MenuItem>
              <MenuItem value={'VALORANT Champions 2021'}>VALORANT Champions 2021</MenuItem>
              <MenuItem value={'vct2022: Stage 1 Masters - Reykjavík'}>vct2022: Stage 1 Masters - Reykjavík</MenuItem>
              <MenuItem value={'vct2022: Stage 2 Masters - Copenhagen'}>vct2022: Stage 2 Masters - Copenhagen</MenuItem>
              <MenuItem value={'VALORANT Champions 2022'}>VALORANT Champions 2022</MenuItem>
            </MytournamentSelect>

          </FormControl>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52013417313_52e9b5a229.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52021609622_24cc88d004.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52012675257_fdb265586c.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52333694255_5da8f3f17e.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52001611205_231ec5f3a1.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52021486217_94d629e0cf.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52327095496_babc0c0317.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52328011386_2e96355530.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52332801412_eb1450cee3.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52327056698_9892a1ef62.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52003656630_b1e6e85e39.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52000090692_bef6cff39c.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52023298640_17aab70e86.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52022563133_907468f995.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52003656430_b11563845b.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52014095708_0466bf8a03.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52012675232_c3eef3075f.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52023791002_55e7666b38.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52012891377_21c1386e34.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52003133091_972d7945db.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52014095683_b239ae06ff.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>
        <div className={styles.photos}>
          <img className={styles.img} src="https://live.staticflickr.com/65535/52014095388_ffb8e8b6f5.jpg" alt="#"/>
          <MyFavoriteBorderIcon />
        </div>


      </div>
    
    </>
  )
}

export default favorite