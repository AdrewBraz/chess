import React, { FC} from 'react';
import { Cell } from './models/Cell'

interface CellProps {
    cell: Cell
}

const CellComponent: FC< CellProps >    = () => {

    return (
        <div className='cell'>

        </div>
    )

}

export default CellComponent;