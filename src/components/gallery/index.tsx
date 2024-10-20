import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
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
			<Fade
				cascade
				direction="up"
				triggerOnce
			>
				<Carousel />
			</Fade>
			<div className="mt-10 flex flex-col items-center">
				{videos.map((video, index) => (
					<Fade
						cascade
						direction="up"
						damping={0.1}
						triggerOnce
						key={index}
					>
						<iframe
							className="my-10 border-0"
							width="853"
							height="505"
							src={`https://www.youtube.com/embed/${video.urlRef}`}
							title={video.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</Fade>
				))}
			</div>
		</section>
	);
};
