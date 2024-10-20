import { useEffect, useState } from "react";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import data from "../../../data/data.json";
import { Button } from "../../components";
import i18n from "../../i18n";
import { Gig } from "../../types";

type Comment = {
	[key: string]: string;
};

type EventStatus = "past" | "next" | "future";

type EventCardProps = {
	gig: Gig;
	status: EventStatus;
};

const dateDisplayOptions = {
	year: "numeric" as const,
	month: "short" as const,
	day: "numeric" as const,
};

const timeDisplayOptions = {
	hour: "numeric" as const,
	minute: "2-digit" as const,
};

export const Gigs = () => {
	const { t } = useTranslation();
	const [gigs, setGigs] = useState<Gig[]>([]);

	useEffect(() => {
		const fetchGigs = async () => {
			try {
				const response = await fetch("http://localhost:3000/gigs");
				const data = await response.json();
				const sortedData = data.sort(
					(a: Gig, b: Gig) =>
						new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
				);
				setGigs(sortedData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchGigs();
	}, []);

	const pastGigs = gigs.filter((gig) => new Date(gig.dateTime) < new Date());
	const futureGigs = gigs.filter((gig) => new Date(gig.dateTime) >= new Date());

	const [showPastGigs, setShowPastGigs] = useState(false);
	const handleClick = () => {
		setShowPastGigs(!showPastGigs);
	};

	if (data.gigs.length) {
		return (
			<section>
				<div
					id="gigs"
					className="content-section mr-2 flex flex-row justify-between items-center"
				>
					<h1 className="text-bj-blue dark:text-bj-blue-light ml-4 text-2xl md:text-6xl h-min font-fredericka">
						Gigs
					</h1>
					{pastGigs.length ? (
							<Button
								text={showPastGigs ? "hide_past_gigs" : "show_past_gigs"}
								onClick={handleClick}
							/>
						
					) : null}
				</div>
				<div className="mx-8 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 justify-items-center">
					{/* gig cards */}

					<Fade
						cascade
						direction={"up"}
						triggerOnce
						duration={700}
						damping={0.1}
					>
						{showPastGigs &&
							gigs
								.filter((gig) => new Date(gig.dateTime) < new Date())
								.map((gig, index) => {
									return (
										<EventCard
											gig={gig}
											status="past"
											key={index}
										/>
									);
								})}
						{gigs.filter((gig) => new Date(gig.dateTime) >= new Date())
							.length && (
							<EventCard
								gig={futureGigs[0]}
								status="next"
							/>
						)}

						{gigs.filter((gig) => new Date(gig.dateTime) >= new Date()).length >
							1 &&
							gigs
								.filter((gig) => new Date(gig.dateTime) >= new Date())
								.slice(1, futureGigs.length)
								.map((gig, index) => {
									return (
										<EventCard
											gig={gig}
											status="future"
											key={index}
										/>
									);
								})}
					</Fade>
				</div>
				{!futureGigs.length && (
					<div>
						<Fade
							direction={"up"}
							triggerOnce
							duration={700}
							damping={0.1}
						>
							<p className="mt-3 mx-24 text-md md:text-3xl text-bj-blue-dark dark:text-bj-white">
								{t("no_gigs")}
							</p>
						</Fade>
					</div>
				)}
			</section>
		);
	}
	return (
		<p className="text-bj-blue dark:text-bj-blue-light h-min font-fredericka m-2">
			No events available
		</p>
	);
};

const EventCard: React.FC<EventCardProps> = ({ gig, status }) => {
	const { t } = useTranslation();
	const dateTime = new Date(gig.dateTime);
	const bgColors = {
		past: "bg-bj-blue-light",
		next: "bg-bj-red-dark",
		future: "bg-bj-blue-mid",
	};

	const textColors = {
		past: "text-bj-blue",
		next: "text-bj-white",
		future: "text-bj-white",
	};

	const hasNoTime = (dateString: string): boolean => {
		const date = new Date(dateString);
		return (
			date.getHours() === 0 &&
			date.getMinutes() === 0 &&
			date.getSeconds() === 0
		);
	};

	return (
		<>
			<div
				className={`relative ${textColors[status]} rounded-3xl p-6 w-64 min-h-[300px] ${bgColors[status]} opacity-75 flex flex-col justify-between`}
			>
				<div className="drop-shadow-2xl">
					<div className="flex flex-row justify-between font-semibold">
						<p className="text-xl">
							{dateTime.toLocaleDateString(i18n.language, dateDisplayOptions)}
						</p>
						{hasNoTime(dateTime.toISOString()) || (
							<p className="text-xl">
								{dateTime.toLocaleTimeString(i18n.language, timeDisplayOptions)}
							</p>
						)}
					</div>
					<p className="mt-4 text-2xl font-fredericka">{`${gig.venue},`}</p>
					<p className="text-2xl font-fredericka">{gig.town}</p>
					{gig.mapUrl && (
						<a
							href={gig.mapUrl}
							target="_blank"
							rel="noopener"
						>
							<p
								className={`text-md ${
									["future", "next"].includes(status)
										? "text-bj-blue-light"
										: "text-bj-blue-dark"
								} underline underline-offset-2`}
							>
								{t("show_map")}
							</p>
						</a>
					)}
				</div>
				{gig.comment && (
					<p className="text-lg">
						{(gig.comment as Comment)[i18n.language.substring(0, 2)]}
					</p>
				)}
			</div>
			{status === "next" && (
				<JackInTheBox
					className=""
					delay={700}
					duration={500}
				>
					<p className="absolute -bottom-7 -right-3 mx-auto -rotate-6 p-2 bg-bj-blue-dark dark:bg-bj-blue-light dark:text-bj-blue-dark font-fredericka text-2xl">
						{t("next_gig")}
					</p>
				</JackInTheBox>
			)}
		</>
	);
};
