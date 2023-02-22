import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './layout/Index';
import Home from './page/home/Index';

import './App.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/play' element={<div>HELLO</div>} />
					</Routes>
				</Layout>
				<ToastContainer />
			</BrowserRouter>
		</>
	)
}

export default App;
