import { Tooltip } from '@mui/material';
import ProfilePicture from '../../assets/perfil.jpeg';
import './ResumenHeader.css'
import DownloadIcon from '@mui/icons-material/GetApp'
import Resume from '../../assets/resume.pdf'

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
          <h1>Ramiro Spinelli</h1>
          <Tooltip title='Download Resume'>
            <DownloadIcon onClick={handleDownload} style={{color: 'white', cursor: 'pointer', marginLeft: 10}}/>
          </Tooltip>
        </div>
        <h3>Software Developer</h3>
        <h3>Tucumán, Argentina 🇦🇷</h3>
      </div>
    </div>
  )
}

export default ResumeHeader;