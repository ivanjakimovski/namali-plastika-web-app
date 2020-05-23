import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleCard from "./SimpleCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  center: {
    margin: "auto",
    flexGrow: 1,
    paddingLeft: "4rem",
    paddingRight: "4rem",
    allignItems: "center",

  },
}));


export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Зошто премногу пластика е проблем?" {...a11yProps(0)} />
          <Tab label="Како да намалиме со пластика?" {...a11yProps(1)} />
          <Tab label="Што ќе постигнеме?" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.center}>
            <p style={{fontSize: "20px"}}>Од мобилни телефони и компјутери до шлемови за велосипеди и болнички вреќи, пластиката го оформува општеството на повеќе начини кои го прават животот лесен и безбеден. Но, овој синтетички материјал оставил  штетни белези на животната средина, а и на човечкото здравје. Уште од почетокот на масовното производство, широкиот спектар на уникатни својства на пластиката, го направија овој материјал неопходен во општеството. Пластиката e продукт кој трае долго и може да се користи со декади. Сепак овој лесен и евтин материјал ние луѓето го користиме еднократно и тој завршува во канта за отпадоци (во рок од една година), каде ќе опстојува со векови. За производство на пластични ќеси се потребни 5 секунди, за користење 5 минути, а за нивно разградување од 500 до 1000 години. 
   </p>
            <strong>

              </strong>
          </div>
    
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

          <div style={{fontSize: "18px"}} className={classes.center}>
          <span style={{fontSize: "22px"}}>Начини како да ја замените пластиката:</span>
             <ol>
               <li>Купете си стаклено или иноксно шише за вода. Луѓето низ целиот свет постојано купуваат шишиња вода секоја минута, само во САД преку 60 милиони шишиња завршуваат на депонија секој ден.</li>
               <li>Користете платнени пелени, наместо пелени за еднократна употреба. Во САД се фрлаат преку 20 милијарди пластични пелени годишно.</li>
               <li>Носете си ваша шолја со капаче или термос во кафетеријата каде што купувате кафе за носење и побарајте да ви наполнат во нив наместо во пластична чаша.</li>
               <li>Престанете да користите пластични цевки. Доколку морате да користите, купете иноксно или стаклено цевче кое може да се мие.</li>
               <li>Користете платнени или пластични торби коишто може да се користат повеќе пати, кога одите во супермаркет и на пазар. Годишно во САД се фрлаат околу 102 милијарди пластични кеси, а за да се разгради една кеса потребни се 1000 години.</li>
               <li>Избегнувајте подготвените замрзнати оброци, бидејќи најчесто се запакувани во пластика.</li>
               <li>Принципиелно избегнувајте гума за џвакање, бидејќи таа е главно направена од пластика.</li>
               <li>Користете кибрит наместо пластични запалки или купете си метална запалка која може да се полни</li>
               <li>Избегнувајте да користите пластична фолија за да ја завиткате останатата храна од оброкот. Наместо тоа користете кујнска крпа или хартија за печење.</li>
               <li>Гответе со метални тави наместо со нелепливи. Тефлонот е најчестата облога којашто се користи за нелепливите тави, а тој е направен од флуорополимерна пластика.</li>
               <li>Направете си ваши домашни препарати за чистење. Тие се помалку токсични, а исто така ќе можете и повеќе пати да ги искористите шишињата со прскалчиња, наместо секој пат да купувате ново, а старото да го фрлате.</li>
               <li>Намалете го користењето на пластични виљушки и ножиња на излет и наместо нив користете виљушки и ножиња изработени од бамбус.</li>
               <li>Купувајте храна на големо и доколку можете пакувајте ја во стаклени тегли или садови коишто се мијат и користат повторно. Така ќе заштедите пари и ќе го намалите непотребното пакување храна.</li>
               <li>Носете си свои садови за овошје и зеленчук на пазар и побарајте да ви ги наполнат кога купувате</li>
               <li>Пакувајте го појадокот за работа во садови коишто се мијат и користат повторно. Избегнувајте храна спакувана во пластика за една употреба.</li>
               <li>Направете си домашни лосиони за тело и раце, наместо да купувате фабрички спакувани во пластични шишиња. Кокосовото масло е одлична база за ваквите домашни козметики.</li>
               <li>Заменете ги пластичните садови за пакување со стаклени контејнери.</li>
               <li>Компостирајте ја храната што ја фрлате за да ја намалите потребата од пластични ќеси потребни за пакување на вашето ѓубре од остатоците од храната.</li>

              </ol>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Чекор Три
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
