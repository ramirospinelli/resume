import { workExperienceList } from './assets/workExperience';
import ResumeHeader from './components/header/ResumeHeader';
import PersonalProfile from './components/personalProfile/PersonalProfile';
import WorkExperienceCard from './components/workExperience/WorkExperience';
import CustomCard from './shared/card/CustomCard';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="layout">
        <div className="header">
          <ResumeHeader />
        </div>
        <div className="leftSide">
          <PersonalProfile />
        </div>
        <div className="body">          
          {workExperienceList.map((work, index) =>  
            <CustomCard title={index === 0 ? 'work experience 👷🏼' : ''}>
              <WorkExperienceCard work={work}/>
            </CustomCard>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
