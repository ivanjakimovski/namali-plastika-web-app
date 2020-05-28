import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title, postContent, list, message, linkToForm, showForm } = props;

  if(showForm) {
    return (
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
    
       
        {postContent}
        <br/>
        {message}
        <Link display="block" target="_blank" variant="body1" href={linkToForm}>{linkToForm}</Link>
        {/* {posts.map((post) => (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        ))} */}
      </Grid>
    );
  } else {
    return (
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
    
       
        {postContent}
        <br/>
  
        {/* {posts.map((post) => (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        ))} */}
      </Grid>
    );
  }

  
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
