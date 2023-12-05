import ProfilePicture from '../../assets/perfil.png';
import Resume from '../../assets/resume.pdf'
import {Button} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  headerResume: {
    textAlign: 'center',
    color: 'white',
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    color: '#ffffff',
    textShadow: '1px 0px 1px rgba(0,0,0,0.43)',
    margin: 0,
    fontSize: '2.5em'
  },
  role: {
    margin: '10px 0',
    fontSize: '1.2em',
    color: '#ffffff',
    textShadow: '1px 0px 1px rgba(0,0,0,0.43)',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10%'
  },
  image: {
    borderRadius: '50%',
    width: 170,
    height: 170,
    objectFit: 'cover'
  }
})

const ResumeHeader = () => {
  const classes = useStyles()
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Ramiro Spinelli - Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  return(
    <div className={classes.center}>
      <img src={ProfilePicture} className={classes.image} alt={'profile'}/>
      <div className={classes.headerResume}>
        <h1 className={classes.name}>RAMIRO SPINELLI</h1>
        <div className={classes.center} style={{flexDirection: 'column'}}>
          <h3 className={classes.role}>Software Developer</h3>
          <Button onClick={handleDownload}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ResumeHeader;