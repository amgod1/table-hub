import React from 'react'

const TableLink = (props) => {
    let userTables = []
    if (!!props.clusters) {
        userTables = JSON.parse(JSON.stringify(props.clusters))
        userTables = userTables
            .filter(el => el[2].admin === props.login)
            .map(el => [el[0], el[1].title])
            .map(el => 
                <div className='mt-2' key={el}>
                    <a href={el[0]}>
                        {el[1]}
                        </a>
                </div>
            )
    }
    if (userTables.length >= 1) {
        return (
            <>
            <h4 className='mt-4'>
                {(!props.lang)
                    ? 'List of tables by this user: '
                    : 'Список таблиц, созданных данным пользователем: '
                }
            </h4>
            {userTables}
            </>
        )
    }
}

export default TableLink