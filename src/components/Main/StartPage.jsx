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
                    Welcome to the Table Hub!
                </h1>
                <p>
                    Table - a way of structuring data. It is the distribution of data on the same type of rows and columns.
                    <br />
                    Tables are widely used in various studies and data analysis. Tables are also found in the media, in handwritten materials, in computer programs, and in road signs.
                </p>
                <h3 className='mt-5'>
                    Last uploaded table:
                </h3>
                <a href={lastTable[0]}>
                    <h5>
                        {lastTable[1].title}
                    </h5>
                </a>
                <h3 className='mt-5'>
                    Top 5 biggest tables from out service:
                </h3>
                { renderTop5 }
            </Container>
        )
    }
}

export default StartPage