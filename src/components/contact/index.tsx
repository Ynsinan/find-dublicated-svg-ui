import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Button, LinksContainer, SocialMediaLink } from "./style";
import { FcContacts } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";

const SocialMediaButton: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const node = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (node.current?.contains(e.target as Node)) {
			// inside click
			return;
		}
		// outside click
		setIsExpanded(false);
	};

	useEffect(() => {
		if (isExpanded) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isExpanded]);

	const handleButtonClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div ref={node}>
			<Button
				onClick={handleButtonClick}
				isExpandedContainer={isExpanded}
				style={{ display: isExpanded ? "none" : "block" }}
			>
				<FcContacts size={50} />
			</Button>
			<LinksContainer isExpandedContainer={isExpanded} style={{ display: isExpanded ? "block" : "none" }}>
				<SocialMediaLink href="https://x.com/yns_ngga" target="_blank">
					<RiTwitterXFill size={30} />
				</SocialMediaLink>
				<SocialMediaLink href="https://github.com/Ynsinan" target="_blank">
					<VscGithub size={30} />
				</SocialMediaLink>
				<SocialMediaLink href="https://www.linkedin.com/in/yunusinan/" target="_blank">
					<FaLinkedin size={30} />
				</SocialMediaLink>
			</LinksContainer>
		</div>
	);
};

export default SocialMediaButton;
