import React, { useMemo, useState } from 'react'
import Table from '../../components/Table';

export default function Todos() {
    const [data, setData] = useState([
        {
            "score": 17.592657,
            "show": {
                "id": 44813,
                "url": "http://www.tvmaze.com/shows/44813/the-snow-spider",
                "name": "The Snow Spider",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Fantasy"
                ],
                "status": "In Development",
                "runtime": 30,
                "premiered": null,
                "officialSite": null,
                "schedule": {
                    "time": "",
                    "days": [

                    ]
                }
            }
        }
    ])
    const columns = useMemo(
        () => [
            {
                // first group - TV Show
                Header: "TV Show",
                // First group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "show.name",
                    },
                    {
                        Header: "Type",
                        accessor: "show.type",
                    },
                ],
            },
            {
                // Second group - Details
                Header: "Details",
                // Second group columns
                columns: [
                    {
                        Header: "Language",
                        accessor: "show.language",
                    },
                    {
                        Header: "Genre(s)",
                        accessor: "show.genres",
                    },
                    {
                        Header: "Runtime",
                        accessor: "show.runtime",
                    },
                    {
                        Header: "Status",
                        accessor: "show.status",
                    },
                ],
            },
        ],
        []
    );
    return (
        <div className='mt-4 mb-5'>
            <Table columns={columns} data={data} />
        </div>
    )
}
