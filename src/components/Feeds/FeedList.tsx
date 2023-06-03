import React, { FC, Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Pagination, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeedItem from './FeedItem';
import style from './feedList.module.scss';
import { useAppSelector } from '../../hooks/redux';
import getFilteredTags from '../../redux/selectors/filterTagsSelector';
import ErrorPopUp from '../common/ErrorPopUp';
import { getArticles } from '../../services/api';
import SkeletonItem from './SkeletonItem';

const theme = createTheme({
    palette: {
        primary: {
            light: '#5cb85b',
            main: '#1cb11c;',
            dark: '#357935',
            contrastText: '#fff',
        },
    },
});

const FeedList: FC = () => {
    const [limit] = useState<number>(10);
    const [offset, setOffset] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(0);

    const handleChange = (
        _event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
        setOffset(value > 1 ? (value - 1) * 10 : 0);
    };

    const { tag } = useAppSelector(getFilteredTags);

    const { data, isError, isLoading, isFetching } = useQuery(
        ['articles', tag, offset],
        () => getArticles(limit, offset, tag),
        {
            useErrorBoundary: (error: any) => error.response?.status >= 400,
            keepPreviousData: true,
        }
    );

    useEffect(() => {
        setPage(1);
        setOffset(0);
    }, [tag]);

    useEffect(() => {
        if (data) {
            data?.data?.articlesCount
                ? setPageCount(Math.ceil(data?.data?.articlesCount / limit))
                : 0;
        }
    }, [data]);

    return (
        <div className={style.feedList}>
            {isError && <ErrorPopUp />}
            {isLoading || isFetching ? (
                <Box paddingTop="20px">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <SkeletonItem key={index} />
                    ))}
                </Box>
            ) : (
                data?.data?.articles?.map(
                    (
                        {
                            title,
                            author,
                            description,
                            createdAt,
                            tagList,
                            favoritesCount,
                            favorited,
                            slug,
                        },
                        index
                    ) => (
                        <Fragment key={index}>
                            <FeedItem
                                favorited={favorited}
                                favoritesCount={favoritesCount}
                                createdAt={createdAt}
                                author={author}
                                description={description}
                                title={title}
                                tagList={tagList}
                                slug={slug}
                            />
                        </Fragment>
                    )
                )
            )}
            <ThemeProvider theme={theme}>
                <Pagination
                    sx={{
                        margin: '20px auto',
                        '.MuiPagination-ul': {
                            justifyContent: 'center',
                        },
                    }}
                    count={pageCount}
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                    page={page}
                />
            </ThemeProvider>
        </div>
    );
};

export default FeedList;
