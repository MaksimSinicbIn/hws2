import React from 'react'
import arrowUp from '../../../../assets/arrow-up.svg'
import arrowDown from '../../../../assets/arrow-down.svg'
import arrowUpDown from '../../../../assets/arrow-up-down.svg'

// добавить в проект иконки и импортировать
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrowUpDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
        if (sort === down) {
            return up
        } else if (sort === up) {
            return ''
        } else {
            return down
        }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt='sortIcon'
            />

            {/* {icon} а это убрать */}
        </span>
    )
}

export default SuperSort
