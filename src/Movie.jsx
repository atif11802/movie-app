import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Movie = () => {
	const [movie, setMovie] = useState();
	const [image, setImage] = useState();

	useEffect(() => {
		async function getdata() {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=a32bc9b159b59bd0fee1df4309538040&language=en-US&page=2`
			);
			console.log(res.data.results[0].poster_path);
			setMovie(res.data.results);
            setImage(res.data.results);
		}
		getdata();
	}, []);

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
		</>
	);
};

export default Movie;
