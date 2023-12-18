export default function Info(props) {

	return (
		<div className="text-white ">
			<h3 className="text-3xl pb-2"> {props.count} </h3>
			<p className="text-sm font-light"> {props.name} </p>
		</div>
	)
}