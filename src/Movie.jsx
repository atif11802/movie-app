import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Pager from './Pager';

const Movie = () => {
	const [movie, setMovie] = useState();
	const [image, setImage] = useState();
	const [page,setPage]=useState();

	useEffect(() => {
		async function getdata() {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=a32bc9b159b59bd0fee1df4309538040&language=en-US&page=${page}`
			);
			console.log(res.data.results[0].poster_path);
			setMovie(res.data.results);
            setImage(res.data.results);
		}
		getdata();
	}, [page]);

	return (
		<>
		
        <div className="grid">
			{movie &&
				movie.map((val, key) => {
					return (
						<Card
							id={key}
							title={val.title}
                            img={val.poster_path}
							
						/>
					);
				})}
                </div>

				<Pager
				page={page}
				setPage={setPage}
				
				/>
		</>
	);
};

export default Movie;
