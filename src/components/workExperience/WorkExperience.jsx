import {useState} from 'react';
import {Link} from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const WorkExperienceCard = ({work}) => {
  const [open, setOpen] = useState(false);

  return(
    <section style={{margin: '25px 10px'}}>
      <p style={{margin: '5px 0', fontWeight: 500}}><b>{work.company}</b>, {work.role}</p>
      <Link href={work.companyUrl} style={{fontWeight: 600, textDecoration: 'none'}}>{work.companyUrl}</Link>
      <p style={{margin: '5px 0', fontWeight: 400, fontSize: 12}}>{work.date.toUpperCase()}</p>
    
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary="Tech Stack" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {work.skills.map(element => 
            <ListItemText style={{marginBottom: 5}}>-{element}</ListItemText>
          )}
        </List>
      </Collapse>
    </section>
  )
}

export default WorkExperienceCard;