import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './layout/Index';
import Home from './page/home/Index';
import Play from './page/play/Index';

import './App.css';
import { Suspense } from 'react';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						{/* <Suspense fallback={<div>Loading...</div>}> */}
							<Route path='/' element={(
								<Suspense fallback={<div>Loading...</div>}>
									<Home />
								</Suspense>
							)} />
							<Route path='/play' element={(
								<Suspense fallback={<div>Loading...</div>}>
									<Play />
								</Suspense>
							)} />
						{/* </Suspense> */}
					</Routes>
				</Layout>
				<ToastContainer />
			</BrowserRouter>
		</>
	)
}

export default App;
