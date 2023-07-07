type Props = {
	children: React.ReactNode
}

export default function HText({ children }: Props) {
	return (
		<h1 className='font-bold text-3xl font-monteserrat basis-3/5 uppercase'>
			{children}
		</h1>
	)
}