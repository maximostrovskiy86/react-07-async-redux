import {useDispatch} from "react-redux";
import {FilterWrapper} from "./Filter.styled";
import {changeFilter} from "redux/filterSlice";
import {useState} from "react";

const Filter = () => {
	const dispatch = useDispatch();
	const [filter, setFilter] = useState("");
	// console.log("filter", filter);
	const onChangeFilter = (event) => {
		const target = event.target.value;
		
		setFilter(target);
		dispatch(changeFilter(target));
	}
	
	return (
		<FilterWrapper>
			Find movies by name:
			<input type='text' name="filter" value={filter} onChange={onChangeFilter} />
		</FilterWrapper>
	)
}

export default Filter;