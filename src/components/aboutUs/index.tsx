import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { cld } from "../../services/cloudinaryInstance";
import { Member } from "../../types";

export const AboutUs = () => {
	const { t } = useTranslation();
	const [members, setMembers] = useState<Member[]>([]);
	console.log(members);

	useEffect(() => {
		const fetchMembers = async () => {
			try {
				const response = await fetch("http://localhost:3000/members");
				const data = await response.json();
				setMembers(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchMembers();
	}, []);

	return (
		<section id="aboutUs">
			<div className=" bg-bj-blue-dark dark:bg-bj-blue-light w-20 m-auto mt-4" />

			<h1 className="text-bj-blue dark:text-bj-blue-light ml-4 text-2xl md:text-6xl h-min font-fredericka m-2">
				{t("sections.about")}
			</h1>

			<div className="pl-2 mx-4 md:mx-24 text-bj-blue-dark dark:text-bj-white">
				<p className="mt-8 text-md md:text-2xl">{t("about.paragraph1")}</p>
				<p className="mt-10 text-md md:text-2xl">{t("about.paragraph2")}</p>
				<p className="mt-10 text-md md:text-2xl">{t("about.paragraph3")}</p>
			</div>

			{/* member cards */}

			<div className="mx-8 mt-8 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
				<Fade
					cascade
					direction="up"
					damping={0.1}
					triggerOnce
				>
					{members
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((member, index) => {
							const portrait = cld.image(`bluesjab/${member.image}`);
							portrait.resize(fill());
							return (
								<div
									key={index}
									className="flex flex-col-reverse items-center w-full drop-shadow-xl"
								>
									<div className="flex flex-col justify-center bg-bj-blue-mid dark:bg-bj-blue text-center h-24 w-64 rounded-b-3xl opacity-75">
										<h2 className="text-bj-white dark:text-bj-blue-light h-min font-fredericka mx-2 text-4xl">
											{member.name}
										</h2>
										<p className="text-bj-white text-2xl mx-2">
											{t(`instruments.${member.name}`)}
										</p>
									</div>

									<div className="aspect-square h-64 object-cover">
										<AdvancedImage
											cldImg={portrait}
											className="object-cover w-full h-full rounded-t-3xl border-solid border-8 border-bj-blue-mid dark:border-bj-blue border-opacity-75"
										/>
									</div>
								</div>
							);
						})}
				</Fade>
			</div>
		</section>
	);
};
