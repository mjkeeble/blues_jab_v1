import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AttentionSeeker, Zoom } from "react-awesome-reveal";

import { useTranslation } from "react-i18next";

export const Contact = () => {
	const { t } = useTranslation();
	return (
		<footer
			id="contact"
			className="content-section bg-bj-blue-dark opacity-75 pt-4 pl-4"
    >
      <Zoom triggerOnce duration={500} >
			<h1 className="text-bj-blue-light text-center text-2xl md:text-6xl font-fredericka m-2">
				{t("sections.contact")}
      </h1>
      </Zoom>

			<div className="w-full flex justify-center my-14">
				<a
					href="mailto:mjkeeble@yahoo.de"
					className="w-['100%'] text-bj-white text-md md:text-3xl underline font-normal"
				>
					{t("send_email")}
				</a>
			</div>
			<div className="w-full flex justify-center my-14">
				<a
					href="https://www.facebook.com/BluesJab"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						className="text-5xl"
						icon={faFacebookSquare}
					/>
				</a>
			</div>

			<hr className="border-t border-bj-white mt-8 mx-4" />
			<div className="flex justify-between align-bottom mx-4 pt-4 pb-3">
				<p className="grow-1">&copy; Blues Jab, {new Date().getFullYear()}</p>
				<div className="grow-0 flex justify-between align-bottom">
					<p>Web design by</p>
					<AttentionSeeker
						effect="shake"
						delay={1500}
						triggerOnce
					>
						<a href="https://www.keeble.de">
							<img
								src="/mjk_logo4 white.svg"
								className="w-8 ml-3"
							/>
						</a>
					</AttentionSeeker>
				</div>
			</div>
		</footer>
	);
};
