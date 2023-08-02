import React from 'react';
import Header from '../../EducatorComponent/Header/EducatorHeader';
import Header2 from '../../EducatorComponent/Header2/EducatorHeader2';
import GreetingImage from '../../EducatorAssets/Home-greetings.png';
import Attendance from '../../EducatorComponent/HomeComponents/Attendance/AttendanceCard';
import AttendanceFilter from '../../EducatorComponent/HomeComponents/Attendance/AttendanceFilter';
import ActivityCalendar from '../../EducatorComponent/HomeComponents/ActivityCalendar/ActivityCalendar';
import UpcomingActivity from '../../EducatorComponent/HomeComponents/ActivityCalendar/UpcomingActivity';
import StudentsStats from '../../EducatorComponent/HomeComponents/Attendance/StudentsStats';
import ClassProgress from '../../EducatorComponent/HomeComponents/Attendance/ClassProgress';

function Home() {
  const presentCount = 25;
  const totalCount = 50;
  return (
    <>
      <Header className="header" />
      <Header2 className="header-transparent" showSearchBar={true} />
      <div className="home">
        <div className="Greeting">
          <div className="greeting-text">
            <h2>Welcome back, Maha Dharshini</h2>
            <p style={{ color: 'white' }}>
              You have 27 new students added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.
            </p>
          </div>
          <div className="greeting-image-container">
            <img src={GreetingImage} alt="GreetingImage" className="greeting-image" />
          </div>
        </div>

        <div className="attendance-activity">

          <div className="attendance">
            <div className="attendance-top">
              <div className="attendance-card">
                <Attendance presentCount={presentCount} totalCount={totalCount} />
              </div>
              <div className="attendance-card">
                <Attendance presentCount={23} totalCount={55} />
              </div>
              <div className="attendance-card">
                <Attendance presentCount={88} totalCount={134} />
              </div>
            </div>
            <div className="attendance-bottom">
              <AttendanceFilter />
            </div>
            <div className="home-stats">
              <div className="stats two">
                <StudentsStats/>
              </div>
              <div className="stats one">
                <h2 className='ClassProgresstext'>Class Progress</h2>
                <ClassProgress/>
                <ClassProgress/>
              </div>
            </div>
          </div>
          <div className="activity">
            <ActivityCalendar />
            <UpcomingActivity/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
