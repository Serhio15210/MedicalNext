import { useEffect, useState, useCallback, useRef } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import styles from './Table.module.sass'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import DragHandleIcon from '@material-ui/icons/DragHandle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import useTranslation from 'next-translate/useTranslation'


const Table = ({
    columns,
    data,
    white,
    handlePageChange,
    hide = [],
    handleDragChange,
    setPerPage,
    path='',
    router
}) => {

    const [records, setRecords] = useState(data?.arr)
    const {t}=useTranslation("common")

    const getRowId = row => {
      return row._id
    }
    const {
        getTableProps,
        headerGroups,
        getTableBodyProps,
        rows,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        pageCount
    } = useTable({
        columns,
        data: records,
        getRowId,
        initialState: { pageIndex: data?.currPage - 1, pageSize: 20, hiddenColumns: hide },
        manualPagination: true,
        pageCount: data?.totalPages,
        sortTypes: {
          alphanumeric: (row1, row2, columnName) => {
              const rowOneColumn = row1.values[columnName];
              const rowTwoColumn = row2.values[columnName];
              if (isNaN(rowOneColumn)) {
                  if(Array.isArray(rowOneColumn)) return rowOneColumn.find(item => item.language === router.locale).text.toUpperCase() >
                      rowTwoColumn?.find(item => item.language === router.locale).text.toUpperCase()
                      ? 1
                      : -1;
                  return rowOneColumn?.toUpperCase() >
                      rowTwoColumn?.toUpperCase()
                      ? 1
                      : -1;
              }
              return Number(rowOneColumn) > Number(rowTwoColumn) ? 1 : -1;
          }
      }
    }, useSortBy, usePagination)

    const moveRow = (dragIndex, hoverIndex) => {
        const dragRecord = records[dragIndex]
        setRecords(prev =>
            update(prev, {$splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragRecord],
            ]})
        )
        handleDragChange(update(records, {$splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRecord],
        ]}))
    }

    const [isPageLoading, setIsPageLoading] = useState(false)

    const pageChange = async page => {
      setIsPageLoading(true)
      await handlePageChange(page + 1)
      setIsPageLoading(false)
    }

    useEffect(() => {
      pageChange(pageIndex)
    }, [pageIndex])

    return(
        <DndProvider backend={HTML5Backend}>
        <div className={styles.tableWrapper}>
        <table {...getTableProps()} className={`${styles.table} ${white ? styles.white : ''}`}>
            <thead>
            {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                    <th key={index} {...column.getHeaderProps(column.getSortByToggleProps({ title: undefined }))} style={{fontWeight:'bold'}}>
                    {column.render('Header')}
                    <span>
                    {column.disableSortBy ? null :
                    column.isSorted
                    ? column.isSortedDesc
                        ? <><img className='rotate90' src='/sort-filled.svg' style={{color:'black'}}/><img className='rotate90' src='/sort-black-filled.svg' /></>
                        : <><img src='/sort-filled.svg' style={{color:'black'}} /><img src='/sort-black-filled.svg'style={{color:'black'}} /></>
                    : <img src='/sort.svg' />}
                    </span>
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(
            (row, index) =>
              prepareRow(row) || (
                <Row
                  index={index}
                  row={row}
                  moveRow={moveRow}
                  handleDragChange={handleDragChange}
                  path={path}
                  router={router}
                  {...row.getRowProps()}
                />
              )
            )}
            </tbody>
        </table>

        </div>{data.currPage ? <div className="pagination" style={{padding: '10px 0 10px'}}>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage || isPageLoading}>
            {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage || isPageLoading}>
            {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage || isPageLoading}>
            {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage || isPageLoading}>
            {'>>'}
            </button>{' '}
            <span>
            {t('page')}{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
            </span>
            <span>
            | {'gotopage'}:{' '}
            <input
                type="number"
                id='currPage'
                onChange={_.debounce(e => {
                  if(Number(e.target.value) > pageCount) e.target.value = pageCount
                  if(e.target.value === '0') e.target.value = 1
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }, 750)}
                defaultValue={pageIndex + 1}
                style={{ width: '100px' }}
            />
            </span>
            {setPerPage ?
            <select value={router.query.perPage || 20} onChange={e => setPerPage(e.target.value)}>
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
            </select>
            : ''}
        </div> : ''}
        </DndProvider>
    )
}


const DND_ITEM_TYPE = 'row'

const Row = ({ row, index, moveRow,path,router }) => {
  const dropRef = useRef(null)
  const dragRef = useRef(null)


  const [, drop] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      if (!dropRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = dropRef.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveRow(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: "CARD",
    item: { type: "CARD", index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  const cursor = isDragging ? 'grabbing' : 'grab'

  preview(drop(dropRef))
  drag(dragRef)


  return (

    <tr ref={dropRef} style={{ opacity }}>
      {row.cells.map(cell => {
        return(
            path.length!==0?
                <Link href={`${path}?name=${cell.render('Cell').props.row.original.Name}`} as={`${path}/${cell.render('Cell').props.row.original.Name}`}>
                    <td {...cell.getCellProps()} > <a>{cell.render('Cell')}</a></td></Link>
           :
                <td {...cell.getCellProps()} > {cell.render('Cell')}</td>
        )
      })}
    </tr>
  )
}



export default Table
