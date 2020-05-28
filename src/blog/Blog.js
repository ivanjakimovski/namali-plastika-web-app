import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextList from './TextList';


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
    paddingLeft: "1rem",
    paddingRight: "1rem",
    allignItems: "center",
  },
  root2: {
    width: "100%",
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
}));


const useStylesMain = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Зошто премногу пластика е проблем?', url: '#' },
  { title: 'Како да намалиме со пластиката?', url: '#' },
  { title: 'Што ќе постигнеме?', url: '#' }

];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'За нас',
  description:
    'Студентски проект со иницијатива да ја крене свеста за штетното влијание на премногу пластика.',
  social: [
    { name: 'Instagram', icon: InstagramIcon },
  ],
};

export default function Blog() {
  const classes = useStylesMain();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Намали со пластика" sections={sections} />
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
        <main>
        
         
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Неколку зборови за пластиката" postContent={`Од мобилни телефони и компјутери до шлемови за велосипеди и болнички вреќи, пластиката го оформува општеството на повеќе начини кои го прават животот лесен и безбеден.

Но, овој синтетички материјал оставa штетни белези на животната средина, а и на човечкото здравје. Уште од почетокот на масовното производство, широкиот спектар на уникатни својства на пластиката, го направија овој материјал неопходен во општеството. Пластиката e продукт кој трае долго и може да се користи со декади. Сепак овој лесен и евтин материјал ние луѓето го користиме еднократно и тој завршува во канта за отпадоци (во рок од една година), каде ќе опстојува со векови. За производство на пластични ќеси се потребни 5 секунди, за користење 5 минути, а за нивно разградување од 500 до 1000 години.`} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <main>
    
          <Grid container spacing={5} className={classes.mainGrid}>
            <TextList title="Начини како да ја замените пластиката:"></TextList>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <main>
         
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Нашата цел" postContent="Да го намалиме користењето на пластика и да ја заштитиме околината од штетното влијание на истата." 
            message="Многу ни е важно да го измериме влијанието од нашиот проект, затоа помогнете ни со пополнување на следнава анкета:"
            linkToForm="https://forms.gle/YDF2WSqnrKDJZd2S9 "
            showForm={true}
            />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        </TabPanel>
      </SwipeableViews>
    </div>
      
      </Container>
      <Footer title="Намали со пластика"  />
    </React.Fragment>
  );
}
