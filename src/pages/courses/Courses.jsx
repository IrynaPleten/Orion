import { Divider } from '@mui/material'
import './courses.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


export const Courses =() => {
	return (
		<div>
			<div className="nearestCourse">
				<div className="aboutCourse">
					<div className="information">
						<h2 className="author">Авторские курсы</h2>
						<h1 className="allCourses">ВСЕ НАШИ КУРСЫ</h1>
						<p className="corsesDescription">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. </p>
					</div>
					<div className="coursesTimeCost">
						<div className="timeOfCourse">
							<img src="images/icons/clock.svg" alt="clock" className='courseTimeIcon'/>
							<div className='courseTimeText'>
								<p className="courseTimeTitle">Время</p>
								<p className="courseTimeTable">Пн/Ср (18:00-21:00)</p>
							</div>
						</div>
						<div className="coursePayment">
							<img src="images/icons/money.svg" alt="money" className='coursePayment'/>
							<div className='coursePaymentText'>
								<p className="coursePaymentTitle">Оплата</p>
								<p className="coursePaymentOpportunities">Можно по частям</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="courseBox">
					<h2 className="courseBoxTitle">Ближайшей курсы</h2>
					<div className="nearestCoursesInformation">
						<div className="detailsOfNearestCourse">
							<div className="nearestCourseName">
								<p className="nearestCourseNameTitle">Название курса:</p>
								<h2 className="nearestCourseText">Design</h2>
							</div>
							<div className="nearestCoursesStatus">
								<p className="nearestCourseStatusTitle">Старт курса:</p>
								<h2 className="nearestCourseDateOfStart">1 декабря</h2>
							</div>
						</div>
						<Divider className='divider'/>
						<div className="numberOfFreePlaces">
							<PersonOutlineOutlinedIcon className='freePlacesIcon'/>
							<p className="freePlaces">Осталось 2 места</p>
						</div>
						<button className="moreDetails">Подробнее</button>
					</div>
					<button className="askQuestion">Задать нам вопрос</button>
				</div>
			</div>
		</div>
	)
}

