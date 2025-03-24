import React, { useEffect, useState } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';
export default function Data({category}) {

    const [dataArr, setDataArr] = useState([]);
    const [totalArticles, setTotalArticles] = useState(null);

   
    const [page, setPage] = useState(1)

    const [progress, setProgress] = useState();

    const handleData = async () => {
        try {
            // let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category || ""}&apiKey=71dbc848d129491588b607a267851f82`);
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ff14cac61936450092dc61d1efb89ef2`);
            setProgress(20)
            let res = await response.json();
            setProgress(50)
            setDataArr(res.articles);
            setProgress(90)
            setTotalArticles(res.totalResults);
            setProgress(100)
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };


    const handlerNextData = async () => {
        try {
            // let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category || ""}&apiKey=71dbc848d129491588b607a267851f82&page=${page + 1}`);
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ff14cac61936450092dc61d1efb89ef2&page=${page+1}`);

            setPage(page + 1);
            let res = await response.json();
            setDataArr(dataArr.concat(res.articles));
            setTotalArticles(res.totalResults);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        handleData();
    }, [category]);

    return (
        <>

            <div className="p-4  sm:ml-64">
                <div className="p-4 mt-14">
                    <LoadingBar
                        height={4}
                        color='#f11946'
                        progress={progress}
                    />
                    <InfiniteScroll
                        dataLength={dataArr?.length}
                        next={handlerNextData}
                        hasMore={dataArr?.length !== totalArticles}
                    >
                        <div className='lg:text-4xl md:text-xl lg:mb-5 sm:mb-3 mb-2 font-bold underline-offset-4 underline whitespace-nowrap dark:text-white text-center'>Today's Top Headlines</div>
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
                            {dataArr?.map((item, index) => {
                                return (
                                    <Card key={index} pic={item?.urlToImage || "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=600"} heading={item?.author || "XYZ Source"} detail={item?.content} link={item?.url} source={item?.source?.name || "Cheat X-Code"} date={item?.publishedAt} title={item?.title} />
                                )
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>

        </>
    )
}
