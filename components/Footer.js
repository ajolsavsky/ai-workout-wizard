import Link from "next/link";

export default function Footer() {
	return (
		<div className={'flex-shrink-0 text-center text-md p-4 border-t bg-white'}>
			Created by {' '}
			<Link
				className={'text-primary-main'}
				href={"https://studiopax.io/"}
				target={'_blank'}
				rel={'noopener noreferrer'}
			>
				Studio Pax
			</Link>
		</div>
	)
}