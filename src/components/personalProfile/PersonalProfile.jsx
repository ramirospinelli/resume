import CustomCard from "../../shared/card/CustomCard";
import {Link} from '@mui/material'

const PersonalProfile = () => {

  return(
    <section>
      <CustomCard title={'personal profile 👨🏼‍💻'}>
        <p>Passionate for technology and outdoor sports. More than 5 years helping companies to achieve their goals developing web applications solutions with the most modern Javascript frameworks and libraries.</p>
          <p>I like to keep learning every day and continue growing as a professional building good relationships with my colleagues.</p>
      </CustomCard>
      <CustomCard title={'skills 💡'}>
        <ul style={{paddingLeft: 25}}>
          <li>Agile and teamwork oriented</li>
          <li>Frontend developer</li>
          <li>Technologies: React, React Native, Angular, HTML, CSS</li>
          <li>Adaptable and willing to learn</li>
        </ul>
      </CustomCard>
      <CustomCard title={'education 📚'}>
        <p>Information System Engineering - UTN</p>
      </CustomCard>
      <CustomCard title={'contact 📩'}>
        <section>
          <p>ramirospinelli92@gmail.com</p>
          <Link href='https://www.linkedin.com/in/ramiro-spinelli/' style={{fontWeight: 600, textDecoration: 'none'}}>linkedIn/ramiro-spinelli</Link>
        </section>
      </CustomCard>
    </section>
  )
}

export default PersonalProfile;