import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

 
  const provinces = [
    { value: "please1", label: "لطفا استان را انتخاب نمایید" },
    { value: "mashhad", label: "مشهد" },
    { value: "tehran", label: "تهران" },
    { value: "esfahan", label: "اصفهان" },
    { value: "shiraz", label: "شیراز" },
  ];

  const cities = {
    please1: [{ value: "please1", label: "لطفا استان را انتخاب نمایید" }],
    mashhad: [
      { value: "please1", label: "لطفا شهر را انتخاب نمایید" },

      { value: "central", label: "قوچان" },
      { value: "north", label: "فاروج " },
      { value: "south", label: "گلبهار" },
      { value: "east", label: "شیروان" },
      { value: "west", label: "چناران " },
    ],
    tehran: [
      { value: "please1", label: "لطفا شهر را انتخاب نمایید" },

      { value: "north", label: "دماوند" },
      { value: "south", label: "فیروزکوه" },
      { value: "east", label: "کرج" },
      { value: "west", label: "تجریش" },
    ],
    esfahan: [
      { value: "please1", label: "لطفا شهر را انتخاب نمایید" },

      { value: "central", label: "مبارکه" },
      { value: "north", label: "نجف آباد" },
      { value: "south", label: "گلدشت" },
      { value: "east", label: "گلپایگان" },
      { value: "west", label: "فولاد مبارکه" },
    ],
    shiraz: [
      { value: "please1", label: "لطفا شهر را انتخاب نمایید" },

      { value: "central", label: "آباده" },
      { value: "north", label: "اقلید" },
      { value: "south", label: "پاسارگارد" },
      { value: "east", label: "داراب" },
      { value: "west", label: "رستم" },
    ],
  };
  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      dateOfBirth,

      occupation,
      email,
      phoneNumber,
    });
  };

  const handleSubmitPass = (event) => {
    event.preventDefault();

    if (newPassword !== repeatNewPassword) {
      alert('رمز عبور جدید و تکرار آن باید یکسان باشند.');
      return;
    }

    // در اینجا می‌توانید کد مربوط به تغییر رمز عبور را بنویسید.
    console.log('رمز عبور با موفقیت تغییر یافت.');
  };

  return (
    <Box sx={{ "&.MuiBox-root": { background: "#f4f5fa", width: 1 } }}>
      <Box sx={{ transform: "translateY(110px)", mx: 4 }}>
        <Typography
          fontSize="16px"
          color="#464855"
          fontFamily="Vazir"
          sx={{ mb: "21px", fontWeight: 700 }}
        >
          ویرایش حساب کاربری
        </Typography>
      </Box>

      <Grid container sx={{ transform: "translateY(110px)", mx: 3 }}>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6} sx={{ px: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#fff",
              border: "none",
              boxShadow: "0 1px 15px 1px rgba(62,57,107,.07)",
              backgroundClip: "border-box",
              borderRadius: "5px",
            }}
          >
            <CardHeader
              title="اطلاعات کاربری"
              titleTypographyProps={{
                fontSize: "16px",
                color: "#464855",
                fontFamily: "Vazir",
                mb: "10px",
              }}
            ></CardHeader>
            <CardContent>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "10px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    },
                    mb: "16px",
                  }}
                  fullWidth
                  id="name"
                  placeholder="نام و نام خانوادگی"
                  variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "10px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    },
                    mb: "16px",
                  }}
                  fullWidth
                  id="dateOfBirth"
                  // placeholder="____/__/__"
                  variant="outlined"
                  type="date"
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  required
                />

                {/* <Select
      sx={{"& .MuiInputBase-input":{p:"10px 20px",fontFamily:"Vazir",color:"#4e5154",fontSize:"16px"},mb:"16px"}}
              
        fullWidth
        value={selectedProvince}
        onChange={handleProvinceChange}
        placeholder="استان"
        
        
      >
        {provinces.map((province) => (
          <MenuItem  sx={{p:"10px 20px",fontFamily:"Vazir",color:"#4e5154",fontSize:"16px"}} key={province.value} value={province.value}>
            {province.label}
          </MenuItem>
        ))}
      </Select> */}

                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "11px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    
                    },
                    // "& .MuiOutlinedInput-input":{p:0},
                    "& .MuiNativeSelect-icon": {
                      position: "absolute",
                      left: "0%",
                      cursor: "pointer",
                    },
                  
                    mb: "16px",
                    direction: "ltr",
                
                  }}
                  select
                  // defaultValue="واحد مربوطه"
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  // placeholder="استان"
                >
                  {provinces.map((province) => (
                    <option
                      style={{
                        direction: "rtl",
                        p: "10px 20px",
                        fontFamily: "Vazir",
                        color: "#4e5154",
                        fontSize: "16px",
                      }}
                      key={province.value}
                      value={province.value}
                    >
                      {province.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "11px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    },
                    "& .MuiNativeSelect-icon": {
                      position: "absolute",
                      left: "0%",
                      cursor: "pointer",
                    },
                    mb: "16px",
                    direction: "ltr",
                  }}
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  value={selectedCity}
                  onChange={handleCityChange}
                  // placeholder="شهرستان"
                  // disabled={!selectedProvince}
                >
                  {selectedProvince &&
                    cities[selectedProvince].map((city) => (
                      <option
                        style={{
                          direction: "rtl",
                          p: "10px 20px",
                          fontFamily: "Vazir",
                          color: "#4e5154",
                          fontSize: "16px",
                        }}
                        key={city.value}
                        value={city.value}
                      >
                        {city.label}
                      </option>
                    ))}
                </TextField>
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "10px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    },
                    mb: "16px",
                  }}
                  fullWidth
                  id="occupation"
                  placeholder="شغل"
                  variant="outlined"
                  value={occupation}
                  onChange={(event) => setOccupation(event.target.value)}
                  required
                />
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "10px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    },
                    mb: "16px",
                  }}
                  fullWidth
                  id="email"
                  placeholder="ایمیل"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      p: "10px 20px",
                      fontFamily: "Vazir",
                      color: "#4e5154",
                      fontSize: "16px",
                    },
                    mb: "16px",
                  }}
                  fullWidth
                  id="phoneNumber"
                  placeholder="تلفن همراه"
                  variant="outlined"
                  type="tel"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  required
                />

                <Divider sx={{ mb: "14px" }} />
                <Box
                  // sx={{"&.MuiBox-root":{textAlign:"-webkit-left"}}}
                  sx={{ textAlign: "end" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      color: "#FFF",
                      borderRadius: "4px",
                      fontFamily: "Vazir",
                      fontSize: "14px",
                      fontWeight: 900,
                      borderColor: "#6967ce",
                      backgroundColor: "#6967ce",
                      boxShadow: "none",
                      p: "9px 20px",
                      ":hover": {
                        borderColor: "#7473d2",
                        backgroundColor: "#7473d2",
                        boxShadow:
                          "0 1px 2px 0 rgba(105,103,206,.451),0 1px 3px 1px rgba(105,103,206,.302)",
                      },

                      // transform:"translateX(-20px)"

                      // left:"-420px"
                    }}
                  >
                    <FiCheckCircle style={{ marginLeft: "5px" }} />
                    ذخیره
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={6} xl={6} sx={{ px: "10px" }}>
          <Card
            sx={{
              backgroundColor: "#fff",
              border: "none",
              boxShadow: "0 1px 15px 1px rgba(62,57,107,.07)",
              backgroundClip: "border-box",
              borderRadius: "5px",
            }}
          >
            <CardHeader
              title="تغییر رمز عبور
"
              titleTypographyProps={{
                fontSize: "16px",
                color: "#464855",
                fontFamily: "Vazir",
                mb: "10px",
              }}
            ></CardHeader>
            <CardContent>

            <form onSubmit={handleSubmitPass} autoComplete="off">
      <TextField
        id="currentPassword"
        placeholder="رمز عبور فعلی"
        // label="رمز عبور فعلی"
        type="password"
        value={currentPassword}
        onChange={(event) => setCurrentPassword(event.target.value)}
        fullWidth
        margin="normal"
        sx={{
          "& .MuiInputBase-input": {
            p: "10px 20px",
            fontFamily: "Vazir",
            color: "#4e5154",
            fontSize: "16px",
          },
          "& .MuiFormLabel-root": { fontSize: "14px",fontFamily:"Vazir", },
          // "& .MuiInputLabel-root":{transformOrigin:"top",position:"absolute",right:0},
          // "& .MuiOutlinedInput-notchedOutline":{textAlign:"right"},
          m:0,
          mb: "16px",
        }}
      ></TextField>

      <TextField
        id="newPassword"
        placeholder="رمز عبور جدید"
        type="password"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
        fullWidth
        margin="normal"
        sx={{
          "& .MuiInputBase-input": {
            p: "10px 20px",
            fontFamily: "Vazir",
            color: "#4e5154",
            fontSize: "16px",
          },
          m:0,
          mb: "16px",
          
        }}
      />

      <TextField
        id="repeatNewPassword"
        placeholder="تکرار رمز عبور جدید"
        type="password"
        value={repeatNewPassword}
        onChange={(event) => setRepeatNewPassword(event.target.value)}
        fullWidth
        margin="normal"
        sx={{
          "& .MuiInputBase-input": {
            p: "10px 20px",
            fontFamily: "Vazir",
            color: "#4e5154",
            fontSize: "16px",
          },
          m:0,
          mb: "16px",
        }}
      />

      {/* <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        margin="normal"
      >
        ذخیره
      </Button> */}
      <Divider sx={{ mb: "14px" }} />
                <Box
                  // sx={{"&.MuiBox-root":{textAlign:"-webkit-left"}}}
                  sx={{ textAlign: "end" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      color: "#FFF",
                      borderRadius: "4px",
                      fontFamily: "Vazir",
                      fontSize: "14px",
                      fontWeight: 900,
                      borderColor: "#6967ce",
                      backgroundColor: "#6967ce",
                      boxShadow: "none",
                      p: "9px 20px",
                      ":hover": {
                        borderColor: "#7473d2",
                        backgroundColor: "#7473d2",
                        boxShadow:
                          "0 1px 2px 0 rgba(105,103,206,.451),0 1px 3px 1px rgba(105,103,206,.302)",
                      },

                      // transform:"translateX(-20px)"

                      // left:"-420px"
                    }}
                  >
                    <FiCheckCircle style={{ marginLeft: "5px" }} />
                    ذخیره
                  </Button>
                </Box>
    </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
