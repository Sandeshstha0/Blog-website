import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { fetchArticles, fetchCategories } from "@/http";
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "@/types";
import Tabs from "@/components/Tabs";
import ArticleList from "@/components/ArticleList";
import qs from "qs";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { debounce } from "@/utils";
interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  const router = useRouter();

  const { page, pageCount } = articles.pagination;

  const handleSearch = (query: string) => {
    router.push(`/?search=${query}`);
  };

  return (
    <div>
      <Head>
        <title>Edxplore</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="images/x-icon"
          href="https://media.licdn.com/dms/image/C4D0BAQH1Klv91upjmQ/company-logo_200_200/0/1655450883123?e=1704326400&v=beta&t=D8icAFMyqePrlvDrxdnAUgDyorNqbdFl8AyfpBo-iH8"
        />
      </Head>

      <Tabs
        categories={categories.items}
        handleOnSearch={debounce(handleSearch, 500)}
      />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Articles
  const options: Partial<IQueryOptions> = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 4,
    },
  };

  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      },
    };
  }

  const queryString = qs.stringify(options);

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  // categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
export default Home;
