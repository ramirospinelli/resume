import CustomCard from "../../shared/card/CustomCard";
import {Link} from '@mui/material'

const PersonalProfile = () => {

  return(
    <section>
      <CustomCard title={'personal profile'}>
        <p>I’m a 30-year-old software developer who loves technology and outdoor sports. Over the past five years, I’ve been helping companies to achieve their goals developing web applications solutions using javascript tools like ReactJS, React Native, Angular. I’m all about learning new thing every day and building great relationships with my coworkers to continue growing professionally.</p>
      </CustomCard>
      <CustomCard title={'skills'}>
        <ul style={{paddingLeft: 25}}>
          <li>Agile and teamwork oriented</li>
          <li>Frontend developer</li>
          <li>Technologies: React, React Native, Angular, HTML, CSS</li>
          <li>Adaptable and willing to learn</li>
        </ul>
      </CustomCard>
      <CustomCard title={'education'}>
        <p>Information System Engineering - UTN</p>
      </CustomCard>
      <CustomCard title={'contact'}>
        <section>
          <p>ramirospinelli92@gmail.com</p>
          <Link href='https://www.linkedin.com/in/ramiro-spinelli/' style={{color: '#7c8587', fontWeight: 600, textDecoration: 'none'}}>linkedIn/ramiro-spinelli</Link>
        </section>
      </CustomCard>
    </section>
  )
}

export default PersonalProfile;