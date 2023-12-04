import { Tooltip } from '@mui/material';
import ProfilePicture from '../../assets/perfil.png';
import './ResumenHeader.css'
import DownloadIcon from '@mui/icons-material/GetApp'
import Resume from '../../assets/resume.pdf'
import {Button} from '@mui/material'

const ResumeHeader = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Ramiro Spinelli - Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  return(
    <div className='center'>
      <img src={ProfilePicture} className='imagen-circular' alt={'profile'}/>
      <div className='header-resume'>
        <div className='center'>
          <h1 className='text-shadow'>RAMIRO SPINELLI</h1>
          <Tooltip title='Download Resume'>
            <Button>
              <DownloadIcon onClick={handleDownload} style={{color: 'white'}}/>
            </Button>
          </Tooltip>
        </div>
        <h3 style={{color: 'gray'}}>Software Developer</h3>
      </div>
    </div>
  )
}

export default ResumeHeader;