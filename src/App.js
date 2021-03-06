import React from "react"
import "./App.css"
import { Link } from "react-router-dom"
import Header from "./components/header"
import beras from "./images/beras.jpg"

function App() {
	return (
		<div className='App bg-gray-100'>
			<Header />
			<div className='p-20 pb-10 pt-32'>
				<div id='recomendedItems' className='w-full'>
					<h3 id='sectionTitle' className='font-bold text-lg mb-4'>
						Rekomendasi <span className='font-normal'>Hari ini</span>
					</h3>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='p-20 pt-0'>
				<div id='recomendedItems' className='w-full'>
					<h3 id='sectionTitle' className='font-bold text-lg mb-4'>
						Paling <span className='font-normal'>Laku</span>
					</h3>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
							<div className='text-left'>
								<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
							</div>
							<img
								className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
								src={beras}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='p-20 pt-0'>
				<div id='recomendedToko' className='w-full'>
					<h3 id='sectionTitle' className='font-bold text-lg mb-4'>
						Rekomendasi <span className='font-normal'>Toko</span>
					</h3>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<Link to='/toko'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-regular mb-2'>Toko Bu Mitro</h2>
									<p className='text-xs font-bold'>
										Jl. baru 192, sidorejo lor, sidorejo, salatiga
									</p>
								</div>
							</div>
						</Link>
					</div>
					<div className='w-1/4 p-4 pl-0 inline-block'>
						<Link to='/toko'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-regular mb-2'>Toko pak min</h2>
									<p className='text-xs font-bold'>
										Jl. Kauman no 99, sidorejo lor, sidorejo, salatiga
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
