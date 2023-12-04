import {useState} from 'react';
import {List, ListItemButton, ListItemText,Collapse, Link} from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';


const WorkExperienceCard = ({work}) => {
  const [open, setOpen] = useState(false);

  return(
    <section style={{margin: '25px 10px'}}>
      <p style={{margin: '5px 0', fontWeight: 500}}><b>{work.company}</b>, {work.role}</p>
      <Link href={work.companyUrl} style={{fontWeight: 600, textDecoration: 'none'}}>{work.companyUrl}</Link>
      <p style={{margin: '5px 0', fontWeight: 400, fontSize: 12}}>{work.date.toUpperCase()}</p>
    
      <ListItemButton onClick={() => setOpen(!open)} style={{padding: '10px 0'}}>
        <ListItemText primary="🛠️ Tools:" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {work.skills.map(element => 
            <ListItemText style={{marginBottom: 5}}>✅ - {element}</ListItemText>
          )}
        </List>
      </Collapse>
    </section>
  )
}

export default WorkExperienceCard;