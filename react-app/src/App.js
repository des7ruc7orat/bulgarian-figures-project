// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';

import * as figureService from './services/figureService';

import { BrowserRouter as Router, Routes, Route, useNavigate ,useParams} from 'react-router-dom'

import { AuthContext } from './contexts/AuthContext';
import { FigureContext } from './contexts/FigureContext';

import { Register } from './components/register/Register'
import { Login } from './components/login/Login'
import { Navigation } from './components/navigation/Navigation'
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';

import { getAll } from './services/figureService';
import { Create } from './components/create/Create';
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';




function App() {

	const [user, setUser] = useState({
		accessToken: "",
		email: "",
		username: "",
		_id: "",
		role:''
	});



	const login = (authData) => {

		setUser(authData);
	}


	const register =(authData)=>{
		setUser(authData)
	}

	const userLogout = ()=>{
		setUser('')
	}

	//	const [figureCreate, setFigureCreate] = useState([])

	// const [figures, setFigures] = useState([]);

	// const getFigureHandler = async(figureId)=>{
	// 	const response = await figureService.getFigure(figureId);

	// 	return response
	// }
  
	// useEffect(() => {
	// 	figureService.getAll()
	// 		.then(figures => setFigures(figures));

	// }, [])
	//ako ne raboti da mahna try catcha

	//console.log(figures);



	const figureCreateHandler = (figureData, creator) => {


		figureService.createFigure(figureData,creator)
			.then(figure => {
				//za6to trqbwa da napisha figur.result
				//kogato e bez result, mi dobawq nqkakuw rey result s turseneto value
				//setFigures(oldFigures => [...oldFigures, figure.result])
				//console.log(figure.result);
				return figure.result
				
			})
			.catch(err => {
				console.log('You need to fullfil all fields');

			})

		


		// const userRegisterHandler = (userData) =>{

		// }
	}

	// const figureUpdateHandler = (figureId,figureData)=>{
	// 	figureService.updateFigureById(figureId, figureData)
	// 	.then(figure =>{
	// 		console.log('log');
	// 		console.log(figure)
	// 		setFigures(oldFigures => [...oldFigures,figure
				
	// 		])
	// 		.catch(err => {
	// 			console.log('You need to fullfil all fields');

	// 		})
	// 	})
	// }

	return (

		<AuthContext.Provider value={{user,login,register, userLogout}}>
			<Router>

				<Navigation {...user}/>

				<Routes>
					<Route path='/' element={<Home  />} />
					<Route path='/register' element={<Register />} />
					{/* ne znam dali na figureCreateHandler se podawa funkciq */}
					<Route path='/create' element={<Create figureCreateHandler={figureCreateHandler} />} />
					<Route path='/login' element={<Login  />} />
					<Route path='/logout'  />
					<Route  path='/details/:figureId' element={<Details  {...user}/>} />
					<Route  path='/edit/:figureId' element={<Edit  />} />
					<Route  path='/delete/:figureId'  />
				</Routes>
				<Footer />
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
