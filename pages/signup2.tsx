import React, { useState } from 'react'
import Link from 'next/link'
import { styled } from '@mui/system';
import { Button,TextField, FormLabel, Divider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import styles from '../styles/signup.module.css'
import FormHeader from '../components/FormHeader'
import Head from 'next/head'
import dayjs, { Dayjs } from 'dayjs';



const MyFormLabel = styled(FormLabel)({
  display:"block",
  fontWeight:"bold",
  paddingBottom:"4px",
})
const MyTextField = styled(TextField)({
  borderRadius:"30px",
  width:"100%",
})
const MyButton = styled(Button)({
  marginBottom:"10px",
  color:"black",
  fontWeight:"bold",
  backgroundColor:"RGB(210, 210, 210)",
  "&:hover": {
    backgroundColor:"RGB(62, 140, 236)",
    color:"white",
  }
})
const MyDivider = styled(Divider)({
  marginBottom:"10px",
})



const signup2 = () => {
  const [value, setValue] = useState<Dayjs | null>();
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>ユーザー登録(2/2)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/VPhotoIcon2.ico" />
      </Head>
      <FormHeader />
      <div className={styles.signup}>
        <div className={styles.title_area}>
          <text className={styles.title}>
            ユーザー登録&nbsp;
          </text>
          <text className={styles.sub_title}>
            (2/2)
          </text>
        </div>
          <form>
          <div className={styles.user_name_area}>
            <MyFormLabel>ユーザー名</MyFormLabel>
            <MyTextField placeholder='ユーザー名' variant="outlined" size='small' />
          </div>
          <div className={styles.date_of_birth_area}>
            <MyFormLabel>生年月日</MyFormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DesktopDatePicker
                inputFormat="YYYY/MM/DD"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField size="small" {...params} />}
                className={styles.date_select}
              />
            </LocalizationProvider>
          </div>
          <div>
          <MyButton variant="contained" fullWidth={true} >
            登録
          </MyButton>
          </div>
        </form>
        
      </div>
    </>
  )
}

export default signup2