import {useState} from 'react';
import {List, ListItemButton, ListItemText,Collapse, Link} from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {margin: '25px 10px'},
  company: {margin: '5px 0', fontWeight: 500},
  date: {margin: '5px 0', fontWeight: 400, fontSize: 12},
  listButton: {padding: '10px 0'},
  listItem: {marginBottom: 5}
});


const WorkExperienceCard = ({work}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles()

  return(
    <section className={classes.section}>
      <p className={classes.company}><b>{work.company}</b>, {work.role}</p>
      <Link style={{textDecoration: 'none', fontWeight: 600}} href={work.companyUrl}>{work.companyUrl.replace(/^(https?:\/\/)/, "")}</Link>
      <p className={classes.date}>{work.date.toUpperCase()}</p>
    
      <ListItemButton className={classes.listButton} onClick={() => setOpen(!open)}>
        <ListItemText primary="🛠️ Tools:" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {work.skills.map(element => 
            <ListItemText className={classes.listItem}>✅ - {element}</ListItemText>
          )}
        </List>
      </Collapse>
    </section>
  )
}

export default WorkExperienceCard;