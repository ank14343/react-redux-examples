import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/actions/todoActions'
import { VISIBILITY_FILTERS } from '../constants'
import { RootState } from '../redux/store'

function VisibilityFilters() {

    const activeFilter = useSelector((state: RootState) => state.visibilityFilter)
    const dispatch = useDispatch()

    return (
        <div className="visibility-filters">
            {
                Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                    const currentFilter = VISIBILITY_FILTERS[filterKey]
                    return (
                        <span
                            key={`visibility-filter-${currentFilter}`}
                            className={currentFilter == activeFilter ? "filter filter--active" : "filter"}
                            onClick={() => dispatch(setFilter(currentFilter))}
                        >
                            {currentFilter + " "}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default VisibilityFilters
