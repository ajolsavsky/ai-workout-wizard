import CustomTable from "@/components/CustomTable";

const ExerciseDay = ({ day }) => (
	<div
		className="w-full text-xl text-center py-2 font-medium border-b text-secondary-main">
		{day}
	</div>
)

export default function WeeklyPlan({ data }) {
	return (
		data.length > 0
			? <div>
				{
					data
				}
			</div>
			: undefined
	)
}