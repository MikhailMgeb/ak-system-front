import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { cnStatisticsKeyQueries } from './StatisticsKeyQueries.classname';
import { createData } from '../../utils/utils';

import './StatisticsKeyQueries.css';


const rows = [
    createData('лоферы мужские летние', 54, 20, 10, 'поиск', 525),
    createData('мужские лоферы кожаные', 336, 23, 0, 'авто', 0),
];

const StatisticsKeyQueries = () => {
    return (
        <div className={cnStatisticsKeyQueries()}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ключевой запрос</TableCell>
                            <TableCell align="right">Частотность</TableCell>
                            <TableCell align="right">Органика</TableCell>
                            <TableCell align="right">Промо</TableCell>
                            <TableCell align="right">Тип рекламы</TableCell>
                            <TableCell align="right">Ставка CPM</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.keyQuery}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.keyQuery}
                                </TableCell>
                                <TableCell align="right">{row.organicPosition}</TableCell>
                                <TableCell align="right">{row.promoPosition}</TableCell>
                                <TableCell align="right">{row.boost}</TableCell>
                                <TableCell align="right">{row.advertisingType}</TableCell>
                                <TableCell align="right">{row.rateCPM}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export { StatisticsKeyQueries };
