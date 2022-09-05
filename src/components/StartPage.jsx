import React from 'react'
import { Container } from 'react-bootstrap'

const StartPage = (props) => {
    if (!!props.clusters) {

        let lastTable = props.clusters[props.clusters.length - 1].slice(0, 2)
        let top5 = props.clusters.sort((x, y) => y.length - x.length).slice(0, 5)

        let renderTop5 = top5.map(el =>
            <a href={el[0]} key={el}>
                <h5>
                    {el[1].title}
                </h5>
            </a>
        )

        return (
            <Container>
                <h1 className='mt-5'>
                    {(!props.lang)
                        ? 'Welcome to the Table Hub!'
                        : 'Добро пожаловать в "Table Hub"!'
                    }
                </h1>
                <p>
                    {(!props.lang)
                        ? <>
                            Table - a way of structuring data. It is the distribution of data on the same type of rows and columns.
                            <br />
                            Tables are widely used in various studies and data analysis. Tables are also found in the media, in handwritten materials, in computer programs, and in road signs.
                        </>
                        : <>
                            Таблица - способ структурирования данных. Это распределение данных по однотипным строкам и столбцам.
                            <br />
                            Таблицы широко используются в различных исследованиях и анализе данных. Таблицы также встречаются в средствах массовой информации, в рукописных материалах, в компьютерных программах и на дорожных знаках.
                        </>
                    }
                </p>
                <h3 className='mt-5'>
                    {(!props.lang)
                        ? 'Last uploaded table:'
                        : 'Последняя загруженная таблица:'
                    }
                    
                </h3>
                <a href={lastTable[0]}>
                    <h5>
                        {lastTable[1].title}
                    </h5>
                </a>
                <h3 className='mt-5'>
                    {(!props.lang)
                        ? 'Top 5 biggest tables from out service:'
                        : 'Топ 5 самых больших таблиц с нашего сервиса:'
                    }
                </h3>
                { renderTop5 }
            </Container>
        )
    }
}

export default StartPage