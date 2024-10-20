import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Video } from "../../types";
import Carousel from "../carousel";

export const Gallery = () => {
	const { t } = useTranslation();
	const [videos, setVideos] = useState<Video[]>([]);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await fetch("http://localhost:3000/videos");
				const data = await response.json();
				setVideos(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchVideos();
	}, []);

	return (
		<section
			id="gallery"
			className="content-section"
		>
			<h1 className="text-bj-blue dark:text-bj-blue-light ml-4 text-2xl md:text-6xl font-fredericka m-2 pb-6">
				{t("sections.gallery")}
			</h1>

				<Carousel />
		
			<div className="mt-10 flex flex-col items-center">
				{videos.map((video, index) => (
					
						<iframe
							className="my-10 border-0"
							width="853"
							height="505"
							src={`https://www.youtube.com/embed/${video.urlRef}`}
							title={video.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            key={index}
						></iframe>
				))}
			</div>
		</section>
	);
};
